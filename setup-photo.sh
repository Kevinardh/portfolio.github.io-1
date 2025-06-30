#!/bin/bash

# Script untuk membantu setup foto profil
# Jalankan dengan: bash setup-photo.sh

echo "🖼️  Setup Foto Profil - Portfolio Website"
echo "========================================"
echo ""

# Create images directory if not exists
mkdir -p src/assets/images/

echo "📁 Folder src/assets/images/ sudah siap"
echo ""

echo "📋 Langkah selanjutnya:"
echo "1. Copy foto Anda ke folder src/assets/images/"
echo "   Contoh: src/assets/images/my-photo.jpg"
echo ""
echo "2. Edit file src/App.jsx:"
echo "   - Ganti import: import profilePhoto from './assets/images/my-photo.jpg'"
echo "   - Update profileImage: profileImage: profilePhoto"
echo ""
echo "3. Sesuaikan data personal Anda di object portfolioData"
echo ""

echo "💡 Tips:"
echo "- Gunakan foto rasio 1:1 (persegi)"
echo "- Resolusi minimal 400x400px"
echo "- Format: JPG, PNG, atau WEBP"
echo "- Ukuran file maksimal 2MB"
echo ""

echo "📖 Baca panduan lengkap di file: CARA-GANTI-FOTO.md"
echo ""
echo "✅ Setup selesai! Silakan lanjutkan dengan menambahkan foto Anda."
