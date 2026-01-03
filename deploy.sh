#!/bin/bash

# Detener el script si hay algun error
set -e

# Archivo temporal para guardar logs
LOG_FILE=$(mktemp)

# --- CONFIGURACION ---
# Nombre del servicio en systemd
SERVICE_NAME="RecetasConEssen" 
# Directorio del proyecto (asegurate que sea correcto)
PROJECT_DIR="/home/user/next/recetasconessen"

# --- CARGAR NVM Y PNPM ---
# Esto es CRUCIAL para que el script encuentre la version correcta de Node
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Funcion de animacion (La tuya, que estaba muy bien)
execute_task() {
    local message="$1"
    local command="$2"
    
    echo -n "$message "

    eval "$command" > "$LOG_FILE" 2>&1 &
    local pid=$!
    local delay=0.1
    local spinstr='|/-\'

    while kill -0 $pid 2>/dev/null; do
        local temp=${spinstr#?}
        printf " [%c]  " "$spinstr"
        local spinstr=$temp${spinstr%"$temp"}
        sleep $delay
        printf "\b\b\b\b\b\b"
    done

    wait $pid
    local exit_code=$?
    printf "       \b\b\b\b\b\b\b"

    if [ $exit_code -eq 0 ]; then
        echo "[OK]"
    else
        echo "[ERROR]"
        echo ""
        echo "--- DETALLES DEL ERROR ---"
        cat "$LOG_FILE"
        echo "--------------------------"
        rm "$LOG_FILE"
        exit 1
    fi
}

echo "========================================"
echo "   DESPLEGANDO: $SERVICE_NAME           "
echo "========================================"

cd "$PROJECT_DIR"

# 1. Descargar codigo (Sin detener el servidor aun)
execute_task "1. Descargando cambios (Git)..." "git pull origin main"

# 2. Instalar dependencias con PNPM
# --frozen-lockfile asegura que instale EXACTAMENTE lo que probaste en tu PC
execute_task "2. Instalando dependencias..." "pnpm install --frozen-lockfile"

# 3. Compilar (El paso mas largo, pero el sitio sigue online)
execute_task "3. Compilando Next.js..." "pnpm build"

# NOTA: No hacemos 'prune' agresivo en Next.js moderno porque puede romper el cache.
# pnpm ya es muy eficiente con el espacio.

# 4. Reiniciar servicio (Solo aqui hay un micro-corte de 1 segundo)
execute_task "4. Reiniciando servidor..." "sudo systemctl restart $SERVICE_NAME"

# Limpieza
rm "$LOG_FILE"

echo "========================================"
echo "      DESPLIEGUE COMPLETADO             "
echo "========================================"