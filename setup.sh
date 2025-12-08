#!/bin/bash

echo "🚀 Configurando Landing Page de Desarrollo Web"
echo "==============================================="

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js 18+ desde https://nodejs.org/"
    exit 1
fi

# Verificar versión de Node.js
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Se requiere Node.js 18 o superior. Versión actual: $(node --version)"
    exit 1
fi

echo "✅ Node.js $(node --version) detectado"

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencias instaladas correctamente"
else
    echo "❌ Error al instalar dependencias"
    exit 1
fi

echo ""
echo "🎉 ¡Configuración completada!"
echo ""
echo "Para ejecutar la aplicación:"
echo "  npm start"
echo ""
echo "Para construir para producción:"
echo "  npm run build"
echo ""
echo "La aplicación estará disponible en http://localhost:4200"