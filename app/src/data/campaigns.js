export const campaigns = [
  {
    id: 'smart-realestate-q1-2026',
    slug: 'smart-realestate-q1-2026',
    title: {
      vi: 'Bất Động Sản Thông Minh Q1 2026',
      en: 'Smart Real Estate Q1 2026'
    },
    sector: 'realestate',
    sectorLabel: { vi: 'Bất Động Sản', en: 'Real Estate' },
    status: 'active',
    statusLabel: { 
      vi: { active: 'Đang mở', upcoming: 'Sắp mở', closed: 'Đã đóng' },
      en: { active: 'Active', upcoming: 'Upcoming', closed: 'Closed' }
    },
    startDate: '2026-01-15',
    endDate: '2026-03-31',
    matchingPool: 5000000000,
    matchingPoolFormatted: { vi: '5.000 tỷ VND', en: '$213M USD' },
    projectCount: 12,
    raisedAmount: 3200000000,
    raisedAmountFormatted: { vi: '3.200 tỷ VND', en: '$136M USD' },
    progress: 64,
    description: {
      vi: 'Vòng gọi vốn tập trung vào các dự án bất động sản thông minh, đô thị tích hợp và khu phức hợp văn phòng Grade A. Ưu tiên các dự án đạt chuẩn ESG và LEED.',
      en: 'Funding round focused on smart real estate projects, integrated urban developments and Grade A office complexes. Priority given to ESG and LEED certified projects.'
    },
    featured: true,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
    highlights: {
      vi: ['Hỗ trợ vay vốn ưu đãi', 'Cam kết ESG', 'Kết nối hạ tầng đô thị'],
      en: ['Preferential loan support', 'ESG commitment', 'Urban infrastructure connection']
    },
    projects: ['smart-home-iot', 'eco-city-hanoi']
  },
  {
    id: 'green-energy-series-a',
    slug: 'green-energy-series-a',
    title: {
      vi: 'Năng Lượng Xanh Series A 2026',
      en: 'Green Energy Series A 2026'
    },
    sector: 'energy',
    sectorLabel: { vi: 'Năng Lượng Xanh', en: 'Green Energy' },
    status: 'active',
    statusLabel: { 
      vi: { active: 'Đang mở', upcoming: 'Sắp mở', closed: 'Đã đóng' },
      en: { active: 'Active', upcoming: 'Upcoming', closed: 'Closed' }
    },
    startDate: '2026-02-01',
    endDate: '2026-05-30',
    matchingPool: 8000000000,
    matchingPoolFormatted: { vi: '8.000 tỷ VND', en: '$341M USD' },
    projectCount: 8,
    raisedAmount: 5600000000,
    raisedAmountFormatted: { vi: '5.600 tỷ VND', en: '$238M USD' },
    progress: 70,
    description: {
      vi: 'Hỗ trợ các dự án điện gió ngoài khơi, điện mặt trời phân tán và hạ tầng sạc xe điện. Đối tác chiến lược với Vestas và Siemens Gamesa.',
      en: 'Supporting offshore wind, distributed solar and EV charging infrastructure projects. Strategic partnership with Vestas and Siemens Gamesa.'
    },
    featured: true,
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&auto=format&fit=crop',
    highlights: {
      vi: ['Công nghệ tiên tiến', 'Net Zero 2050', 'Hỗ trợ kỹ thuật quốc tế'],
      en: ['Advanced technology', 'Net Zero 2050', 'International technical support']
    },
    projects: ['offshore-wind-binh-thuan', 'solar-park-ninh-thuan']
  },
  {
    id: 'fintech-innovation-2026',
    slug: 'fintech-innovation-2026',
    title: {
      vi: 'Fintech Innovation Fund 2026',
      en: 'Fintech Innovation Fund 2026'
    },
    sector: 'finance',
    sectorLabel: { vi: 'Tài Chính & Quỹ', en: 'Finance & Funds' },
    status: 'upcoming',
    statusLabel: { 
      vi: { active: 'Đang mở', upcoming: 'Sắp mở', closed: 'Đã đóng' },
      en: { active: 'Active', upcoming: 'Upcoming', closed: 'Closed' }
    },
    startDate: '2026-04-01',
    endDate: '2026-07-31',
    matchingPool: 3000000000,
    matchingPoolFormatted: { vi: '3.000 tỷ VND', en: '$128M USD' },
    projectCount: 15,
    raisedAmount: 0,
    raisedAmountFormatted: { vi: '0 tỷ VND', en: '$0 USD' },
    progress: 0,
    description: {
      vi: 'Quỹ đầu tư vào các startup fintech, blockchain và tài chính số. Hợp tác với Ngân hàng Nhà nước và các định chế tài chính quốc tế.',
      en: 'Investment fund for fintech, blockchain and digital finance startups. Partnership with State Bank and international financial institutions.'
    },
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    highlights: {
      vi: ['Quy định pháp lý rõ ràng', 'Mentor từ ngân hàng lớn', 'Kết nối API ngân hàng'],
      en: ['Clear regulatory framework', 'Mentors from major banks', 'Bank API integration']
    },
    projects: []
  },
  {
    id: 'smart-logistics-hub',
    slug: 'smart-logistics-hub',
    title: {
      vi: 'Smart Logistics Hub 2025',
      en: 'Smart Logistics Hub 2025'
    },
    sector: 'logistics',
    sectorLabel: { vi: 'Logistics & Cảng Biển', en: 'Logistics & Ports' },
    status: 'closed',
    statusLabel: { 
      vi: { active: 'Đang mở', upcoming: 'Sắp mở', closed: 'Đã đóng' },
      en: { active: 'Active', upcoming: 'Upcoming', closed: 'Closed' }
    },
    startDate: '2025-06-01',
    endDate: '2025-12-31',
    matchingPool: 6500000000,
    matchingPoolFormatted: { vi: '6.500 tỷ VND', en: '$277M USD' },
    projectCount: 6,
    raisedAmount: 6500000000,
    raisedAmountFormatted: { vi: '6.500 tỷ VND', en: '$277M USD' },
    progress: 100,
    description: {
      vi: 'Phát triển cảng nước sâu, kho bãi tự động hóa 4.0 và hệ thống logistics thông minh. Kết nối chuỗi cung ứng toàn cầu.',
      en: 'Developing deep-water ports, automated 4.0 warehouses and smart logistics systems. Global supply chain integration.'
    },
    featured: false,
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&auto=format&fit=crop',
    highlights: {
      vi: ['Tự động hóa 4.0', 'Cảng nước sâu', 'Kết nối đường sắt'],
      en: ['Industry 4.0 automation', 'Deep-water port', 'Rail connection']
    },
    projects: ['deep-port-cai-mep', 'smart-mega-hub']
  },
  {
    id: 'sustainable-city-q2-2026',
    slug: 'sustainable-city-q2-2026',
    title: {
      vi: 'Thành Phố Bền Vững Q2 2026',
      en: 'Sustainable City Q2 2026'
    },
    sector: 'realestate',
    sectorLabel: { vi: 'Bất Động Sản', en: 'Real Estate' },
    status: 'upcoming',
    statusLabel: { 
      vi: { active: 'Đang mở', upcoming: 'Sắp mở', closed: 'Đã đóng' },
      en: { active: 'Active', upcoming: 'Upcoming', closed: 'Closed' }
    },
    startDate: '2026-04-15',
    endDate: '2026-08-31',
    matchingPool: 7500000000,
    matchingPoolFormatted: { vi: '7.500 tỷ VND', en: '$319M USD' },
    projectCount: 10,
    raisedAmount: 0,
    raisedAmountFormatted: { vi: '0 tỷ VND', en: '$0 USD' },
    progress: 0,
    description: {
      vi: 'Đầu tư vào đô thị sinh thái, khu công nghiệp xanh và hạ tầng đô thị thông minh. Cam kết đạt chuẩn LEED Platinum và WELL Building.',
      en: 'Investing in eco-urban developments, green industrial zones and smart urban infrastructure. LEED Platinum and WELL Building commitment.'
    },
    featured: false,
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&auto=format&fit=crop',
    highlights: {
      vi: ['LEED Platinum', 'Đô thị sinh thái', 'Net Zero carbon'],
      en: ['LEED Platinum', 'Eco-urban', 'Net Zero carbon']
    },
    projects: []
  }
];
