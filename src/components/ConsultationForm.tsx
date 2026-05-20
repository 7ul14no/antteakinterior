import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { Calendar, PhoneCall, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface ConsultationFormProps {
  initialProductName?: string;
  onSuccessSubmit?: () => void;
}

export default function ConsultationForm({ initialProductName = "", onSuccessSubmit }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomFocus: 'living',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    if (initialProductName) {
      setFormData(prev => ({
        ...prev,
        message: `Halo Antteak Interior, saya tertarik untuk melakukan konsultasi desain khusus mengenai produk "${initialProductName}". Saya ingin menanyakan penyesuaian ukuran...`
      }));
    }
  }, [initialProductName]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Harap lengkapi semua baris bertanda bintang (*)");
      return;
    }

    setIsLoading(true);

    // Simulate luxury API response lag
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      // Generate a dynamic luxury ticket ID
      const newTicket = "AT-" + Math.floor(1000 + Math.random() * 9000);
      setTicketId(newTicket);
      if (onSuccessSubmit) onSuccessSubmit();
    }, 1500);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div id="consultation-form-section" className="bg-champagne rounded-3xl border border-sand/50 overflow-hidden shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Side Visual Banner */}
        <div className="lg:col-span-4 bg-warm-beige p-8 md:p-12 text-wood-dark flex flex-col justify-between relative min-h-[300px] border-r border-sand/35">
          <div className="absolute inset-0 opacity-10 overflow-hidden">
            {/* Elegant wood texture backdrop simulation through style */}
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80')" }}></div>
          </div>
          
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-widest text-wood-gold font-bold">
              Konsultasi Privat
            </span>
            <h3 className="font-serif text-3xl font-bold tracking-wide mt-3 text-wood-dark">
              Mulai Project Jati Anda
            </h3>
            <p className="text-xs font-light text-wood-medium/95 mt-4 leading-relaxed">
              Diskusikan kebutuhan tata letak, ukuran khusus, ketebalan kayu, hingga pilihan finishing natural dengan desainer berpengalaman Antteak secara gratis.
            </p>
          </div>

          <div className="relative z-10 border-t border-sand/30 pt-6 mt-6">
            <div className="flex gap-4 items-center">
              <div className="p-3 bg-wood-gold/15 rounded-xl border border-wood-gold/25">
                <Clock className="w-4 h-4 text-wood-gold" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-wood-dark uppercase tracking-wider">
                  Respons Cepat
                </h4>
                <p className="text-[11px] text-wood-medium/80 mt-0.5">
                  Artisan kami akan menghubungi Anda dalam waktu 1-2 Jam via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Actual Form */}
        <div className="lg:col-span-8 p-8 md:p-12 bg-champagne flex flex-col justify-center">
          {isSuccess ? (
            <motion.div
              id="form-success-panel"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 px-4"
            >
              <div className="w-16 h-16 bg-wood-gold/15 text-wood-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-wood-dark tracking-wide">
                Permintaan Berhasil Dikirim
              </h4>
              <p className="text-sm font-light text-wood-medium/80 mt-3 max-w-md mx-auto leading-relaxed">
                Terima kasih, <strong className="text-wood-dark">{formData.name}</strong>. Tim desain & kurator kami telah menerima jadwal konsultasi rancangan furnitur Anda.
              </p>
              
              <div className="my-8 py-4 px-6 bg-champagne/50 rounded-2xl border border-sand/30 inline-flex flex-col gap-1 text-center md:min-w-[280px]">
                <span className="text-[10px] uppercase tracking-widest text-wood-medium/60 font-medium">
                  Kode Registrasi Project Anda
                </span>
                <span className="text-xl font-mono font-bold text-wood-dark text-wood-gold tracking-wider">
                  {ticketId}
                </span>
              </div>

              <div className="text-xs text-wood-medium/70 flex items-center justify-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-wood-gold animate-bounce" />
                <span>Rapat WhatsApp Virtual dijadwalkan ke nomor <strong>{formData.phone}</strong>.</span>
              </div>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({ name: '', email: '', phone: '', roomFocus: 'living', message: '' });
                }}
                className="mt-8 text-xs font-semibold uppercase tracking-wider text-wood-gold hover:text-wood-dark transition-colors"
              >
                Buat Konsultasi Baru Lainnya →
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-wood-dark uppercase tracking-wider">
                    Nama Lengkap *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Contoh: Christian Juliano"
                    className="w-full px-4 py-3 rounded-xl border border-sand/65 bg-warm-beige/20 focus:bg-warm-beige focus:ring-1 focus:ring-wood-gold text-sm text-wood-dark placeholder-wood-medium/40 transition-all outline-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-wood-dark uppercase tracking-wider">
                    Alamat Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-sand/65 bg-warm-beige/20 focus:bg-warm-beige focus:ring-1 focus:ring-wood-gold text-sm text-wood-dark placeholder-wood-medium/40 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Phone WhatsApp */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-semibold text-wood-dark uppercase tracking-wider">
                    Nomor WhatsApp / Telp *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-4 py-3 rounded-xl border border-sand/65 bg-warm-beige/20 focus:bg-warm-beige focus:ring-1 focus:ring-wood-gold text-sm text-wood-dark placeholder-wood-medium/40 transition-all outline-none"
                  />
                </div>

                {/* Room Focus Area dropdown */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="roomFocus" className="text-xs font-semibold text-wood-dark uppercase tracking-wider">
                    Fokus Area Ruangan
                  </label>
                  <select
                    id="roomFocus"
                    name="roomFocus"
                    value={formData.roomFocus}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sand/65 bg-warm-beige/20 focus:bg-warm-beige focus:ring-1 focus:ring-wood-gold text-sm text-wood-dark transition-all outline-none [&>option]:bg-champagne [&>option]:text-wood-dark"
                  >
                    <option value="living">Ruang Tamu (Living Room)</option>
                    <option value="dining">Ruang Makan (Dining Room)</option>
                    <option value="bedroom">Kamar Tidur (Bedroom)</option>
                    <option value="workspace">Ruang Kerja (Workspace)</option>
                    <option value="fullhouse">Seluruh Rumah / Villa</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-wood-dark uppercase tracking-wider">
                  Catatan Proyek & Preferensi Kustomisasi
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ceritakan tentang ukuran ideal, kendala ruangan, atau warna fiting kayu jati yang Anda inginkan..."
                  className="w-full px-4 py-3 rounded-xl border border-sand/65 bg-warm-beige/20 focus:bg-warm-beige focus:ring-1 focus:ring-wood-gold text-sm text-wood-dark placeholder-wood-medium/40 transition-all outline-none resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                id="submit-consultation-btn"
                type="submit"
                disabled={isLoading}
                className="mt-2 w-full flex items-center justify-center gap-2 bg-wood-gold hover:bg-wood-gold/90 text-warm-beige py-4 rounded-xl font-semibold uppercase tracking-wider text-xs transition-all duration-300 disabled:bg-sand/50 disabled:text-wood-medium/50 select-none cursor-pointer"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-warm-beige/45 border-t-warm-beige rounded-full animate-spin"></span>
                    Menghubungkan Ke Artisan...
                  </span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    Jadwalkan Konsultasi Gratis Sekarang
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
