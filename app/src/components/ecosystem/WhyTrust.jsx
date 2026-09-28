import React from 'react';
import { motion } from 'framer-motion';

export default function WhyTrust() {
  return (
    <section className="w-full py-24 bg-surface">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag text-secondary block mb-3">Tại Sao Tin Tưởng?</span>
          <h2 className="headline text-on-surface text-4xl font-semibold">3 Dấu Hiệu Tin Cậy</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: 'verified_user', title: 'Xác Thực Danh Tính', desc: 'Mọi thành viên phải hoàn tất KYC và xác thực danh tính trước khi tham gia.' },
            { icon: 'shield', title: 'Bảo Mật Thông Tin', desc: 'Dữ liệu cá nhân được mã hóa và bảo vệ theo tiêu chuẩn ISO 27001.' },
            { icon: 'group', title: 'Người Thật', desc: 'Chỉ kết nối với nhà đầu tư, startup và mentor có hồ sơ thực tế.' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-surface-container-lowest p-8 rounded-2xl shadow-lg border border-outline-variant/10 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl text-secondary">{item.icon}</span>
              </div>
              <h3 className="headline text-on-surface text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}