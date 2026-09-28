import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/useTranslation';

export default function FlowProcess() {
  const { t } = useTranslation();

  const steps = [
    {
      id: 1,
      number: '01',
      icon: 'person_add',
      title: { vi: 'Đăng ký & Xác thực', en: 'Register & Verify' },
      desc: { vi: 'Tạo hồ sơ, xác thực danh tính và KYC', en: 'Create profile, verify identity and KYC' }
    },
    {
      id: 2,
      number: '02',
      icon: 'groups',
      title: { vi: 'Vào cộng đồng', en: 'Join Community' },
      desc: { vi: 'Tham gia nhóm tương ứng với vai trò', en: 'Join groups matching your role' }
    },
    {
      id: 3,
      number: '03',
      icon: 'smart_toy',
      title: { vi: 'Ghép nối thông minh', en: 'Smart Matching' },
      desc: { vi: 'AI ghép nối dựa trên hồ sơ và sở thích', en: 'AI matches based on profile and preferences' }
    },
    {
      id: 4,
      number: '04',
      icon: 'verified',
      title: { vi: 'Thẩm định & Đánh giá', en: 'Due Diligence' },
      desc: { vi: 'Chuyên gia thẩm định kỹ lưỡng dự án', en: 'Experts conduct thorough due diligence' }
    },
    {
      id: 5,
      number: '05',
      icon: 'trending_up',
      title: { vi: 'Đồng hành phát triển', en: 'Growth Support' },
      desc: { vi: 'Hỗ trợ tài chính, chiến lược, mở rộng thị trường', en: 'Financial, strategic, market expansion support' }
    }
  ];

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="w-full py-32 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span className="section-tag text-secondary block mb-4">{t('ecosystem.flow.title') || 'Quy trình vận hành 5 bước'}</span>
          <h2 className="headline text-on-surface text-5xl mb-6 font-semibold">{t('ecosystem.flow.subtitle') || 'Từ đăng ký đến đồng hành thành công'}</h2>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-5 right-5 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent -z-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step) => (
              <motion.div key={step.id} variants={stepVariants} className="relative flex flex-col items-center text-center">
                {/* Step number and icon */}
                <div className="relative z-10 flex flex-col items-center">
                  <span className="section-tag text-secondary mb-3">{step.number}</span>
                  <div className="w-32 h-32 mx-auto bg-surface-container-lowest rounded-2xl flex items-center justify-center shadow-lg border border-outline-variant/10 mb-6">
                    <span className="material-symbols-outlined text-5xl text-primary">{step.icon}</span>
                  </div>
                  <h3 className="headline text-primary text-xl font-bold mb-2">{t(`ecosystem.flow.step${step.id}.title`) || step.title.vi}</h3>
                  <p className="text-on-surface-variant leading-relaxed text-center max-w-xs">{t(`ecosystem.flow.step${step.id}.desc`) || step.desc.vi}</p>
                </div>

                {/* Mobile connecting line */}
                <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-secondary/30 to-transparent -z-10" style={{ top: '220px' }} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}