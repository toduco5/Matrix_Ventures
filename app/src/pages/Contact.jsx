import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="w-full bg-surface-container-low py-16 px-8 lg:px-16 border-b border-outline-variant/20 pt-24">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="section-tag text-secondary block mb-3">Liên Hệ & Hợp Tác</span>
            <h1 className="headline text-on-surface text-4xl lg:text-5xl font-semibold">Liên Hệ Với Chúng Tôi</h1>
          </motion.div>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ với chúng tôi để thảo luận về cơ hội hợp tác.
          </p>
        </div>
      </section>

      <section className="w-full py-16 px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10"
              >
                <h3 className="headline text-on-surface text-2xl font-semibold mb-6">Thông tin liên hệ</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-secondary">location_on</span>
                    </div>
                    <div>
                      <p className="text-sm text-on-surface-variant mb-1">Địa chỉ</p>
                      <p className="font-semibold text-on-surface">107 Nguyễn Như, KonTum, Thanh Xuân, Hà Nội</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-secondary">phone</span>
                    </div>
                    <div>
                      <p className="text-sm text-on-surface-variant mb-1">Điện thoại</p>
                      <p className="font-semibold text-on-surface">(+84) 332318460</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-secondary">mail</span>
                    </div>
                    <div>
                      <p className="text-sm text-on-surface-variant mb-1">Email</p>
                      <p className="font-semibold text-on-surface">tminhduc1304@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-secondary">schedule</span>
                    </div>
                    <div>
                      <p className="text-sm text-on-surface-variant mb-1">Giờ làm việc</p>
                      <p className="font-semibold text-on-surface">8:00-18:00 (Thứ 2 - Thứ 6)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-outline-variant/20">
                  <h4 className="font-semibold text-on-surface mb-4">Theo dõi chúng tôi</h4>
                  <div className="flex gap-4">
                    {['facebook', 'linkedin', 'twitter'].map((social) => (
                      <a key={social} href="#" className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-colors">
                        <span className="material-symbols-outlined">{social}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10"
              >
                <h3 className="headline text-on-surface text-2xl font-semibold mb-6">
                  {formStatus === 'success' ? 'Gửi yêu cầu thành công!' : 'Gửi yêu cầu hợp tác'}
                </h3>

                {formStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-status-active rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="material-symbols-outlined text-white text-4xl">check</span>
                    </div>
                    <p className="text-on-surface-variant">
                      Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 24 giờ.
                    </p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="mt-6 px-6 py-2 bg-secondary text-on-secondary rounded-lg hover:bg-secondary-container transition-colors"
                    >
                      Gửi thêm yêu cầu
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-on-surface mb-2">Họ và tên <span className="text-secondary">*</span></label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-on-surface mb-2">Email <span className="text-secondary">*</span></label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                        placeholder="email@domain.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-on-surface mb-2">Số điện thoại</label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                        placeholder="(+84) 9x xxx xxx"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-on-surface mb-2">Công ty / Tổ chức</label>
                      <input
                        type="text"
                        name="company"
                        className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                        placeholder="Tên công ty"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-on-surface mb-2">Loại hình hợp tác <span className="text-secondary">*</span></label>
                      <select
                        name="type"
                        required
                        className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      >
                        <option value="">Chọn loại hình hợp tác</option>
                        <option value="investment">Đầu tư</option>
                        <option value="partnership">Đối tác chiến lược</option>
                        <option value="mentorship">Mentor / Chuyên gia</option>
                        <option value="media">Truyền thông / Báo chí</option>
                        <option value="other">Khác</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-on-surface mb-2">Nội dung yêu cầu <span className="text-secondary">*</span></label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                        placeholder="Vui lòng mô tả yêu cầu hợp tác của bạn..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full py-4 bg-secondary text-on-secondary font-semibold rounded-xl hover:bg-secondary-container hover:text-on-secondary-container transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <span className="material-symbols-outlined animate-spin">sync</span>
                          Đang gửi...
                        </>
                      ) : (
                        <>
                          Gửi yêu cầu
                          <span className="material-symbols-outlined">send</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}