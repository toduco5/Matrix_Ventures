import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/useTranslation';

export default function RoleCards() {
  const { t } = useTranslation();

  const roles = [
    {
      id: 'investor',
      icon: 'account_balance_wallet',
      title: { vi: 'Nhà Đầu Tư', en: 'Investors' },
      desc: { vi: 'Tiếp cận dự án chất lượng cao, đã được thẩm định kỹ lưỡng', en: 'Access high-quality projects, thoroughly vetted' },
      benefits: { vi: ['Dự án thẩm định sẵn', 'Báo cáo minh bạch', 'Mạng lưới đồng đầu tư'], en: ['Pre-vetted projects', 'Transparent reports', 'Co-investor network'] }
    },
    {
      id: 'startup',
      icon: 'rocket_launch',
      title: { vi: 'Startup', en: 'Startups' },
      desc: { vi: 'Gọi vốn hiệu quả, kết nối với nhà đầu tư phù hợp', en: 'Raise capital efficiently, connect with suitable investors' },
      benefits: { vi: ['Quy trình chuẩn hóa', 'Mentor từ chuyên gia', 'Kết nối thị trường'], en: ['Standardized process', 'Expert mentors', 'Market connections'] }
    },
    {
      id: 'mentor',
      icon: 'school',
      title: { vi: 'Mentor', en: 'Mentors' },
      desc: { vi: 'Đồng hành, chia sẻ kinh nghiệm với thế hệ doanh nhân mới', en: 'Support and share experience with new entrepreneurs' },
      benefits: { vi: ['Tác động xã hội', 'Mở rộng mạng lưới', 'Thu nhập phụ'], en: ['Social impact', 'Network expansion', 'Additional income'] }
    },
    {
      id: 'partner',
      icon: 'handshake',
      title: { vi: 'Đối Tác', en: 'Partners' },
      desc: { vi: 'Mở rộng mạng lưới, tạo giá trị cùng cộng đồng', en: 'Expand network, create value with the community' },
      benefits: { vi: ['Cơ hội kinh doanh', 'Thương hiệu mạnh', 'Hệ sinh thái bền vững'], en: ['Business opportunities', 'Strong brand', 'Sustainable ecosystem'] }
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="w-full py-32 bg-surface">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span className="section-tag text-secondary block mb-4">{t('ecosystem.roles.title') || 'Dành cho mọi vai trò trong hệ sinh thái'}</span>
          <h2 className="headline text-on-surface text-5xl mb-6 font-semibold">{t('ecosystem.roles.subtitle') || 'Bạn là ai trong hệ sinh thái?'}</h2>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => (
            <motion.div
              key={role.id}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(10,25,47,0.12)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative bg-surface-container-lowest p-8 rounded-2xl shadow-lg border border-outline-variant/10 hover:border-secondary/30 transition-all duration-300 h-full flex flex-col"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-primary transition-colors duration-300">{role.icon}</span>
              </div>
              <h3 className="headline text-primary text-2xl font-bold mb-2 text-center">{t(`ecosystem.roles.${role.id}.title`) || role.title.vi}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6 flex-1 text-center">{t(`ecosystem.roles.${role.id}.desc`) || role.desc.vi}</p>
              <div className="border-t border-outline-variant/20 pt-6">
                <h4 className="font-semibold text-on-surface mb-3 text-center">{t('ecosystem.roles.benefits') || 'Lợi ích'}</h4>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  {(role.benefits?.vi || ['Lợi ích 1', 'Lợi ích 2', 'Lợi ích 3']).map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 justify-center">
                      <span className="material-symbols-outlined text-secondary text-[14px]">check_circle</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}