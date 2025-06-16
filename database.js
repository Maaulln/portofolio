// =================================================================================
// DATABASE PROYEK ANDA
// Untuk menambah, mengubah, atau menghapus proyek, edit bagian di bawah ini.
// =================================================================================
const projectsData = [
  {
    category: 'uiux',
    imageUrl: 'img/uiux1.png',
    title: 'Desain Aplikasi',
    subtitle: 'Aplikasi E-Learning',
    description: 'Merancang antarmuka pengguna yang intuitif dan modern untuk platform pembelajaran online.',
    tags: ['Figma', 'Canva'],
    buttonType: 'secondary',
    buttonText: 'Lihat Desain',
    buttonLink: '#'
  },
  {
    category: 'video',
    imageUrl: 'img/uiux.png',
    title: 'Video Promosi',
    subtitle: 'Kampanye Media Sosial',
    description: 'Memproduksi serangkaian video iklan pendek untuk kampanye brand fashion di media sosial.',
    tags: ['Premiere Pro', 'CapCut'],
    buttonType: 'primary',
    buttonText: 'Tonton Video',
    buttonLink: '#'
  },
  {
    category: 'ml',
    imageGradient: 'from-orange-500 to-red-600',
    title: 'Sistem Rekomendasi',
    subtitle: 'Eksplorasi Rekomendasi Konten',
    description: 'Proyek eksplorasi untuk memahami dasar-dasar sistem rekomendasi konten.',
    tags: ['Python', 'TensorFlow'],
    buttonType: 'secondary',
    buttonText: 'Lihat Kode',
    buttonLink: '#'
  },
  {
    category: 'video',
    imageGradient: 'from-teal-500 to-cyan-600',
    title: 'Video Animasi',
    subtitle: 'Animasi Penjelas (Explainer)',
    description: 'Membuat video animasi 2D untuk menjelaskan cara kerja sebuah produk teknologi.',
    tags: ['After Effects', 'Canva'],
    buttonType: 'primary',
    buttonText: 'Tonton Video',
    buttonLink: '#'
  },
  {
    category: 'uiux',
    imageGradient: 'from-pink-500 to-rose-500',
    title: 'Desain Website',
    subtitle: 'Redesain Website Portofolio',
    description: 'Mendesain ulang sebuah website portofolio untuk meningkatkan pengalaman pengguna.',
    tags: ['Figma', 'User Research'],
    buttonType: 'secondary',
    buttonText: 'Lihat Desain',
    buttonLink: '#'
  },
  {
    category: 'ml',
    imageGradient: 'from-yellow-500 to-amber-600',
    title: 'Analisis Sentimen',
    subtitle: 'Alat Analisis Sentimen Teks',
    description: 'Proyek dasar untuk klasifikasi sentimen (positif/negatif) dari ulasan produk.',
    tags: ['Python', 'Scikit-learn'],
    buttonType: 'secondary',
    buttonText: 'Lihat Kode',
    buttonLink: '#'
  }

  // TEMPLATE UNTUK PROYEK BARU (copy-paste dan isi)
  ,{
    category: 'ml', // 'uiux', 'video', atau 'ml'
    imageGradient: 'from-blue-500 to-sky-500', // Ganti warna gradien
    title: 'Judul Proyek Baru',
    subtitle: 'Sub-judul Proyek Baru',
    description: 'Deskripsi singkat proyek baru Anda.',
    tags: ['Tag1', 'Tag2'],
    buttonType: 'primary', // 'primary' atau 'secondary'
    buttonText: 'Teks Tombol',
    buttonLink: '#' // Link ke proyek
  }
];