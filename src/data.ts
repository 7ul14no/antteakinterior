import { Product, Testimonial, RoomStyle } from './types';

export const BRAND_NAME = "Antteak Interior";
export const BRAND_TAGLINE = "Presisi Alam, Sentuhan Artisan";

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Alor Teak Lounge Chair",
    category: "living",
    price: "Rp 8.900.000",
    dimensions: "W 78cm x D 82cm x H 75cm",
    description: "Kursi santai premium buatan tangan berpengalaman dengan rangka kayu Jati Tua Grade-A yang kokoh. Dilengkapi bantal linen berkualitas tinggi dengan elastisitas prima untuk kenyamanan bersantai maksimal Anda.",
    image: "/src/assets/images/teak_lounge_chair_1779242862400.png",
    features: [
      "100% Solid Jati Tua Grade-A kualitas tinggi",
      "Busa memori tebal dengan balutan kain linen premium",
      "Sambungan presisi tradisional mortise dan tenon",
      "Finishing natural aman bersertifikat matte"
    ],
    isFeatured: true
  },
  {
    id: "prod-2",
    name: "Banda Grand Dining Table",
    category: "dining",
    price: "Rp 24.500.000",
    dimensions: "W 220cm x D 100cm x H 76cm",
    description: "Meja makan megah dari potongan papan kayu jati utuh yang diseleksi secara ketat. Menampilkan pola serat kayu yang menawan serta kekuatan struktural luar biasa, ideal sebagai pusat berkumpul keluarga Anda.",
    image: "/src/assets/images/teak_dining_table_1779242846299.png",
    features: [
      "Kayu jati solid tanpa sambungan tipis",
      "Serat natural eksotis diekspos sempurna",
      "Kapasitas luas hingga 8-10 orang duduk nyaman",
      "Ketahanan cuaca dan cairan optimal"
    ],
    isFeatured: true
  },
  {
    id: "prod-3",
    name: "Nusa Teak Credenza Sideboard",
    category: "living",
    price: "Rp 16.800.000",
    dimensions: "W 180cm x D 45cm x H 70cm",
    description: "Kabinet hiburan minimalis berdesain modern-klasik. Menyediakan ruang penyimpanan luas dengan pintu geser kisi-kisi jati halus yang memberi sirkulasi udara optimal bagi perangkat audio visual Anda.",
    image: "/src/assets/images/teak_living_room_1779242829579.png",
    features: [
      "Pintu kisi-kisi geser jati buatan tangan presisi",
      "Rak interior yang dapat diatur ketinggiannya",
      "Kaki kayu mengerucut retro nan elegan",
      "Lubang manajemen kabel terintegrasi rapi"
    ],
    isFeatured: true
  },
  {
    id: "prod-4",
    name: "Sumba Cushioned Dining Chair",
    category: "dining",
    price: "Rp 3.200.000",
    dimensions: "W 48cm x D 52cm x H 85cm",
    description: "Kursi makan dengan lekukan ergonomis yang menyangga punggung dengan sempurna. Desain ramping namun kokoh, dirancang untuk melengkapi Banda Dining Table dengan harmoni estetik yang serasi.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&auto=format&fit=crop&q=80",
    features: [
      "Lekukan sandaran ergonomis mendukung fungsional",
      "Klip karet halus anti-gores pada alas kaki",
      "Rangka ramping minimalis dengan kekuatan tinggi",
      "Alternatif warna jok kulit sintetis premium"
    ]
  },
  {
    id: "prod-5",
    name: "Flores Platform Bed Frame",
    category: "bedroom",
    price: "Rp 18.200.000",
    dimensions: "W 180cm x D 200cm x H 110cm",
    description: "Tempat tidur bergaya minimalis Jepang (Japandi) dengan tinggi platform rendah yang memberi kesan kamar lebih luas. Menampilkan sandaran kepala jati polos yang memukau dengan alur kayu yang mengalir alami.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&auto=format&fit=crop&q=80",
    features: [
      "Tinggi tempat tidur rendah bergaya resor eksklusif",
      "Sistem ambalan slat jati bebas gesekan berlebih",
      "Tanpa sekrup luar yang merusak tampilan halus",
      "Mampu menahan beban matras berat dengan stabil"
    ]
  },
  {
    id: "prod-6",
    name: "Arun Minimalist Teak Desk",
    category: "workspace",
    price: "Rp 9.500.000",
    dimensions: "W 140cm x D 65cm x H 75cm",
    description: "Meja kerja bersih berorientasi fokus. Menghadirkan dua laci tersembunyi dengan jalur rel kayu tradisional yang meluncur mulus tanpa logam kasar, mengembalikan kemurnian pengerjaan kayu klasik.",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&auto=format&fit=crop&q=80",
    features: [
      "Sisi tumpul aman tumpul radius pengerjaan halus",
      "Laci ganda penyimpanan dokumen internal tersembunyi",
      "Lapisan anti-coretan tumpahan tinta/kopi ringan",
      "Desain kolong luas bebas bergerak"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Aris Pramudya",
    role: "Arsitek & Desainer Interior, Jakarta",
    text: "Sebagai profesional, saya sangat selektif memilih furniture kayu. Antteak benar-benar memenuhi ekspektasi. Sambungan kayu (wood joinery) mereka sangat rapi, meniru micro-presisi semut yang kokoh namun terlihat anggun.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Dian Sastrowardoyo",
    role: "Kolektor Seni & Pengusaha, Bandung",
    text: "Membeli Banda Dining Table terasa seperti berinvestasi pada sebuah karya seni. Kayu jatinya sangat berat dan berserat indah. Setiap tamu yang datang ke rumah selalu mengagumi kualitas hasil serutan halusnya.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Hendra Wijaya",
    role: "Pemilik Resor Butik, Bali",
    text: "Kami menggunakan Alor Lounge Chair di area lounge utama resor kami. Sentuhan jatinya tahan banting walau dipasang di semi-outdoor, dan linennya sangat mudah dibersihkan. Highly recommended untuk estetika berkelas.",
    rating: 5
  }
];

export const ROOM_STYLES: RoomStyle[] = [
  {
    id: "style-1",
    name: "Japandi Warmth",
    description: "Perpaduan estetika rukun Jepang dan fungsionalitas Skandinavia dengan palet warna kayu madu terang, dinding krem berpasir, dan linen alami.",
    coverImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80",
    activeProducts: ["Alor Teak Lounge Chair", "Nusa Teak Credenza Sideboard"]
  },
  {
    id: "style-2",
    name: "Modern Atelier",
    description: "Kombinasi modern berani dengan dinding gelap industrial dramatis yang menyorot serat kayu jati tua Antteak berkilau keemasan.",
    coverImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=80",
    activeProducts: ["Banda Grand Dining Table", "Sumba Cushioned Dining Chair"]
  },
  {
    id: "style-3",
    name: "Minimalist Sanctuary",
    description: "Fokus mendalam pada ketenangan mutlak (pure serenity). Minim barang, garis lurus bersih, tanaman hijau segar, dan furniture berkualitas abadi.",
    coverImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80",
    activeProducts: ["Flores Platform Bed Frame", "Arun Minimalist Teak Desk"]
  }
];

export const BRAND_PHILOSOPHY = {
  title: "Filosofi Ant & Teak",
  text1: "Nama 'Antteak' merupakan gabungan harmonis antara 'Ant' (Semut) dan 'Teak' (Kayu Jati). Dua elemen alam ini menjadi fondasi utama fungsionalitas dan ketangguhan karya kami.",
  text2: "Semut dikenal di alam semesta sebagai pembangun mikro dengan presisi mengagumkan, kerja sama tim yang solid, serta kemampuan membawa beban berkali-kali lipat dari tubuhnya. Filosofi semut ini kami terapkan ke dalam pengerjaan kayu jati (Teak)—pohon legendaris berdensitas tinggi yang kokoh, berumur panjang, dan kaya akan keindahan minyak alami.",
  points: [
    {
      title: "Presisi Konstruksi Mikro",
      desc: "Menghitung setiap milimeter sambungan pasak tradisional jati agar presisi dan tidak bergoyang."
    },
    {
      title: "Daya Tahan Tak Tertandingi",
      desc: "Memastikan jati tua matang dengan kadar minyak alami tinggi sehingga antijamur dan antirayap seumur hidup."
    },
    {
      title: "Etos Kerja Artisan",
      desc: "Para artisan kami bekerja penuh konsentrasi detail demi mewujudkan warisan jati pusaka keluarga Anda."
    }
  ]
};
