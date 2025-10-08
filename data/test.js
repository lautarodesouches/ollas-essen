const fs = require('fs')
const path = require('path')

// === 1. Archivos de entrada/salida ===
const inputPath = './data/products.json'
const outputPath = './data/products_con_imagenes.json'

// === 2. Carpeta donde están las imágenes ===
const imagesDir = './public/images/products'

try {
    // === 3. Leer JSON original ===
    const data = fs.readFileSync(inputPath, 'utf-8')
    const productos = JSON.parse(data)

    // === 4. Procesar cada producto ===
    const productosConImagenes = productos.map(item => {
        const codigo = item.codigo.toString()
        const jpgPath = path.join(imagesDir, `${codigo}.jpg`)
        const pngPath = path.join(imagesDir, `${codigo}.png`)

        let imagenFinal = `${codigo}.jpg` // valor por defecto

        if (fs.existsSync(jpgPath)) {
            imagenFinal = `${codigo}.jpg`
        } else if (fs.existsSync(pngPath)) {
            imagenFinal = `${codigo}.png`
        } else {
            console.warn(`⚠️  No se encontró imagen para código ${codigo}`)
            imagenFinal = null // o puedes dejar []
        }

        return {
            ...item,
            imagenes: imagenFinal ? [imagenFinal] : [],
        }
    })

    // === 5. Guardar archivo nuevo ===
    fs.writeFileSync(
        outputPath,
        JSON.stringify(productosConImagenes, null, 2),
        'utf-8'
    )

    console.log('✅ Archivo generado correctamente:')
    console.log(`➡ ${outputPath}`)
} catch (error) {
    console.error('❌ Error al procesar el archivo:', error)
}
