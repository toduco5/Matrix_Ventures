import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FlowProcess() {
  const steps = [
    { num: '01', title: 'Đăng Ký & Xác Thực', desc: 'Tạo hồ sơ, hoàn tất KYC và xác thực danh tính qua hệ thống bảo mật.', icon: 'person_add', progress: 100, time: '1-2 ngày', label: 'Bắt đầu' },
    { num: '02', title: 'Vào Cộng Đồng', desc: 'Tham gia nhóm phù hợp với vai trò: Nhà đầu tư, Startup, Mentor hoặc Đối tác.', icon: 'groups', progress: 75, time: '2-3 ngày', label: 'Tham gia' },
    { num: '03', title: 'Ghép Nối Thông Minh', desc: 'AI phân tích hồ sơ và ghép nối dựa trên nhu cầu, khả năng và mục tiêu.', icon: 'smart_toy', progress: 50, time: '3-5 ngày', label: 'Ghép nối' },
    { num: '04', title: 'Thẩm Định Cộng Đồng', desc: 'Chuyên gia và thành viên đánh giá dự án cùng nhau, minh bạch 100%.', icon: 'verified', progress: 25, time: '5-7 ngày', label: 'Đánh giá' },
    { num: '05', title: 'Đồng Hành Phát Triển', desc: 'Hỗ trợ tài chính, chiến lược, kết nối thị trường và tăng trưởng bền vững.', icon: 'trending_up', progress: 100, time: 'Theo dự án', label: 'Hoàn thành' }
  ];

  return (
    <div className="w-full py-32 bg-gradient-to-b from-primary via-primary-container to-primary text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary opacity-10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary opacity-5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag text-secondary-fixed block mb-3">Quy Trình</span>
          <h1 className="headline text-white text-5xl font-semibold">5 Bước Kết Nối Đầu Tư</h1>
          <p className="text-on-primary-container text-xl mt-4 max-w-2xl mx-auto">Từ người lạ đến đối tác chiến lược — từng bước minh bạch, chuyên nghiệp</p>
        </div>

        {/* Timeline Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7, ease: "easeOut" }}
              className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-secondary/40 transition-all duration-300 group"
            >
              {/* Progress indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 rounded-t-2xl overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-secondary to-secondary-fixed rounded-t-2xl"
                  initial={{ width: 0 }}
                  animate={{ width: `${step.progress}%` }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.2, ease: "easeOut" }}
                />
              </div>
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-secondary-fixed flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <span className="material-symbols-outlined text-on-secondary text-2xl">{step.icon}</span>
                </div>
                <div>
                  <span className="text-4xl font-bold text-secondary/40 headline block leading-none">{step.num}</span>
                  <span className="text-xs text-secondary-fixed font-semibold tracking-widest">{step.label}</span>
                </div>
              </div>

              <h3 className="headline text-white text-xl font-bold mb-3 group-hover:text-secondary-fixed transition-colors">{step.title}</h3>
              <p className="text-on-primary-container text-sm leading-relaxed mb-6">{step.desc}</p>

              <div className="flex items-center gap-4 text-xs text-secondary-fixed mb-4">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> {step.time}</span>
                <span className="w-1 h-1 bg-gray-500 rounded-full" />
                <span className="font-semibold">{step.progress}%</span>
              </div>

              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-secondary to-secondary-fixed rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${step.progress}%` }}
                  transition={{ duration: 1.2, delay: 0.5 + i * 0.2, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center"
        >
          <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-secondary-fixed text-on-secondary-fixed nav-link rounded-lg shadow-xl hover:bg-secondary-container transition-all hover:scale-105 duration-300">
            <span>Bắt Đầu Cộng Đồng Của Bạn</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}