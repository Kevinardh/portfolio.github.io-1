# 📸 Cara Mengganti Foto Profil

Ikuti langkah-langkah berikut untuk mengganti foto placeholder dengan foto Anda sendiri:

## 🔄 Langkah 1: Siapkan Foto Anda

1. **Format yang didukung**: JPG, PNG, WEBP
2. **Resolusi yang disarankan**: 
   - Minimal: 400x400 pixels
   - Optimal: 800x800 pixels atau 1000x1000 pixels
3. **Rasio aspek**: 1:1 (persegi) untuk hasil terbaik
4. **Ukuran file**: Maksimal 2MB untuk performa optimal

## 📁 Langkah 2: Upload Foto

1. **Buat folder baru** (opsional):
   ```
   src/assets/images/profile/
   ```

2. **Copy foto Anda** ke folder:
   ```
   src/assets/images/profile-photo.jpg
   ```
   atau
   ```
   src/assets/images/profile/my-photo.jpg
   ```

## ⚡ Langkah 3: Update Kode

Edit file `src/App.jsx`, ganti baris import:

```javascript
// Ganti baris ini:
import profilePlaceholder from './assets/images/profile-placeholder.svg'

// Dengan:
import profilePhoto from './assets/images/profile-photo.jpg'
// atau
import profilePhoto from './assets/images/profile/my-photo.jpg'
```

Kemudian update object portfolioData:

```javascript
const portfolioData = {
  personal: {
    name: "Nama Anda",
    title: "Mahasiswa Sistem Informasi",
    email: "email-anda@example.com",
    // ... data lainnya
    profileImage: profilePhoto // Ganti dengan variabel foto Anda
  },
  // ... data lainnya
}
```

## 🎨 Langkah 4: Optimasi Foto (Opsional)

Untuk performa terbaik, Anda bisa:

1. **Compress foto** menggunakan tools online seperti:
   - TinyPNG.com
   - Compressor.io
   - ImageOptim (Mac)

2. **Convert ke WebP** untuk ukuran file lebih kecil:
   - Squoosh.app (online)
   - CloudConvert.com

3. **Crop foto** menjadi rasio 1:1 (persegi)

## 🔍 Langkah 5: Test & Verifikasi

1. **Jalankan development server**:
   ```bash
   npm run dev
   ```

2. **Buka browser** dan periksa:
   - Hero section (foto besar)
   - About section (foto kecil)
   - Responsive di mobile

3. **Check console** untuk error loading image

## 🛠️ Troubleshooting

### Foto tidak muncul?
- Pastikan path file benar
- Check nama file (case-sensitive)
- Pastikan file ada di folder yang tepat

### Foto terlihat terdistorsi?
- Gunakan foto dengan rasio 1:1
- Resize foto ke ukuran yang sama (width = height)

### Loading lambat?
- Compress foto untuk mengurangi ukuran file
- Gunakan format WebP jika memungkinkan

### Error saat build?
- Pastikan import statement benar
- Check ekstensi file (.jpg, .png, .webp)

## 📱 Multiple Sizes (Advanced)

Untuk performa optimal, Anda bisa menyediakan multiple ukuran:

```javascript
// Multiple sizes untuk responsive
import profileLarge from './assets/images/profile-800x800.jpg'
import profileMedium from './assets/images/profile-400x400.jpg'
import profileSmall from './assets/images/profile-200x200.jpg'

// Gunakan conditional loading atau srcSet
```

## ✅ Checklist

- [ ] Foto sudah disiapkan dengan format yang tepat
- [ ] File foto sudah di-copy ke folder assets
- [ ] Import statement sudah diupdate
- [ ] Object portfolioData sudah diupdate
- [ ] Test di browser - Hero section
- [ ] Test di browser - About section
- [ ] Test responsive di mobile
- [ ] Tidak ada error di console
- [ ] Performa loading cepat

---

💡 **Tips**: Gunakan foto dengan background yang kontras dengan tema dark, atau foto dengan background blur/solid agar terlihat profesional.
