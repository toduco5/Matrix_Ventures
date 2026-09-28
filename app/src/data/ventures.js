export const ventures = [
  {
    id: 'smart-home-iot',
    slug: 'smart-home-iot',
    name: {
      vi: 'Smart Home IoT Platform',
      en: 'Smart Home IoT Platform'
    },
    tagline: {
      vi: 'Giải pháp nhà thông minh toàn diện cho bất động sản cao cấp',
      en: 'Comprehensive smart home solution for premium real estate'
    },
    logo: '/ventures/smart-home-iot/logo.svg',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop',
    sector: 'realestate',
    sectorLabel: { vi: 'Bất Động Sản', en: 'Real Estate' },
    stage: 'seed',
    stageLabel: { vi: 'Seed', en: 'Seed' },
    fundingGoal: 2000000000,
    fundingGoalFormatted: { vi: '2.000 tỷ VND', en: '$85M USD' },
    fundingRaised: 1200000000,
    fundingRaisedFormatted: { vi: '1.200 tỷ VND', en: '$51M USD' },
    progress: 60,
    investors: 15,
    milestones: [
      {
        id: 1,
        title: { vi: 'Hoàn thiện MVP', en: 'MVP Completed' },
        description: { vi: 'Phát triển phiên bản thử nghiệm hoàn chỉnh với 50 thiết bị IoT tích hợp', en: 'Developed complete prototype with 50 integrated IoT devices' },
        date: '2025-06-15',
        status: 'completed',
        statusLabel: { vi: 'Hoàn thành', en: 'Completed' }
      },
      {
        id: 2,
        title: { vi: 'Chốt với 5 khách hàng đầu tiên', en: '5 Pilot Customers' },
        description: { vi: 'Ký hợp đồng với 5 dự án BĐS cao cấp tại TPHCM và Hà Nội', en: 'Signed contracts with 5 premium real estate projects in HCMC and Hanoi' },
        date: '2025-09-30',
        status: 'in-progress',
        statusLabel: { vi: 'Đang thực hiện', en: 'In Progress' }
      }
    ],
    team: [
      {
        name: 'Trần Văn An',
        role: { vi: 'CEO & Founder', en: 'CEO & Founder' },
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop',
        linkedin: '#'
      },
      {
        name: 'Lê Thị Mai',
        role: { vi: 'CTO', en: 'CTO' },
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop',
        linkedin: '#'
      }
    ],
    pitchDeck: '/ventures/smart-home-iot/pitch-deck.pdf',
    website: 'https://smart-home-iot.vn',
    description: {
      vi: 'Nền tảng nhà thông minh cho bất động sản phục vụ cao cấp, tích hợp AI để tối ưu năng lượng và nâng cao trải nghiệm sống.',
      en: 'Smart home platform for premium real estate, integrated with AI to optimize energy and enhance living experience.'
    },
    featured: true,
    dateAdded: '2026-01-01'
  },
  {
    id: 'offshore-wind-binh-thuan',
    slug: 'offshore-wind-binh-thuan',
    name: {
      vi: 'Offshore Wind Binh Thuan',
      en: 'Offshore Wind Binh Thuan'
    },
    tagline: {
      vi: 'Nhà máy điện gió ngoài khơi công suất 800MW',
      en: '800MW offshore wind power plant'
    },
    logo: '/ventures/offshore-wind/logo.svg',
    coverImage: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1200&auto=format&fit=crop',
    sector: 'energy',
    sectorLabel: { vi: 'Năng Lượng Xanh', en: 'Green Energy' },
    stage: 'series-a',
    stageLabel: { vi: 'Series A', en: 'Series A' },
    fundingGoal: 4500000000,
    fundingGoalFormatted: { vi: '4.500 tỷ VND', en: '$192M USD' },
    fundingRaised: 2700000000,
    fundingRaisedFormatted: { vi: '2.700 tỷ VND', en: '$115M USD' },
    progress: 60,
    investors: 23,
    milestones: [
      {
        id: 1,
        title: { vi: 'Phê duyệt môi trường', en: 'Environmental Approval' },
        description: { vi: 'Nhận phê duyệt đánh giá tác động môi trường từ Bộ TN&MT', en: 'Received environmental impact assessment approval from Ministry' },
        date: '2025-03-20',
        status: 'completed',
        statusLabel: { vi: 'Hoàn thành', en: 'Completed' }
      },
      {
        id: 2,
        title: { vi: 'Hợp đồng Vestas', en: 'Vestas Contract' },
        description: { vi: 'Ký hợp đồng cung cấp tuabin gió với Vestas', en: 'Signed wind turbine supply contract with Vestas' },
        date: '2025-08-15',
        status: 'completed',
        statusLabel: { vi: 'Hoàn thành', en: 'Completed' }
      }
    ],
    team: [
      {
        name: 'Nguyễn Hoàng Long',
        role: { vi: 'CEO', en: 'CEO' },
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop',
        linkedin: '#'
      }
    ],
    website: 'https://offshore-wind-binhthuan.vn',
    description: {
      vi: 'Dự án điện gió ngoài khơi tại Bình Thuận với công suất 800MW, góp phần đạt mục tiêu Net Zero 2050 của Việt Nam.',
      en: 'Offshore wind project in Binh Thuan with 800MW capacity, contributing to Vietnam Net Zero 2050 goal.'
    },
    featured: true,
    dateAdded: '2026-01-05'
  },
  {
    id: 'fintech-blockchain-vietnam',
    slug: 'fintech-blockchain-vietnam',
    name: {
      vi: 'VietChain - Blockchain Platform',
      en: 'VietChain - Blockchain Platform'
    },
    tagline: {
      vi: 'Hạ tầng blockchain cho tài chính số và chứng khoán tokenized',
      en: 'Blockchain infrastructure for digital finance and tokenized securities'
    },
    logo: '/ventures/vietchain/logo.svg',
    coverImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format&fit=crop',
    sector: 'finance',
    sectorLabel: { vi: 'Tài Chính & Quỹ', en: 'Finance & Funds' },
    stage: 'seed',
    stageLabel: { vi: 'Seed', en: 'Seed' },
    fundingGoal: 1500000000,
    fundingGoalFormatted: { vi: '1.500 tỷ VND', en: '$64M USD' },
    fundingRaised: 600000000,
    fundingRaisedFormatted: { vi: '600 tỷ VND', en: '$26M USD' },
    progress: 40,
    investors: 12,
    team: [
      {
        name: 'Phạm Minh Tuấn',
        role: { vi: 'Founder & CEO', en: 'Founder & CEO' },
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop',
        linkedin: '#'
      }
    ],
    description: {
      vi: 'Nền tảng blockchain cung cấp giải pháp tokenized securities, thanh toán xuyên biên giới và hạ tầng DeFi cho thị trường Việt Nam.',
      en: 'Blockchain platform providing tokenized securities, cross-border payments and DeFi infrastructure for Vietnam market.'
    },
    featured: false,
    dateAdded: '2026-01-10'
  },
  {
    id: 'deep-port-cai-mep',
    slug: 'deep-port-cai-mep',
    name: {
      vi: 'Matrix Deep Port Cai Mep',
      en: 'Matrix Deep Port Cai Mep'
    },
    tagline: {
      vi: 'Cảng nước sâu quốc tế tiếp nhận tàu siêu trọng tải',
      en: 'International deep-water port for ultra-large vessels'
    },
    logo: '/ventures/deep-port/logo.svg',
    coverImage: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&auto=format&fit=crop',
    sector: 'logistics',
    sectorLabel: { vi: 'Logistics & Cảng Biển', en: 'Logistics & Ports' },
    stage: 'growth',
    stageLabel: { vi: 'Growth', en: 'Growth' },
    fundingGoal: 6000000000,
    fundingGoalFormatted: { vi: '6.000 tỷ VND', en: '$256M USD' },
    fundingRaised: 5400000000,
    fundingRaisedFormatted: { vi: '5.400 tỷ VND', en: '$230M USD' },
    progress: 90,
    investors: 31,
    team: [
      {
        name: 'Vũ Văn Thành',
        role: { vi: 'Giám đốc Dự án', en: 'Project Director' },
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop',
        linkedin: '#'
      }
    ],
    description: {
      vi: 'Cảng nước sâu tại Cái Mép có khả năng tiếp nhận tàu 200.000 DWT, kết nối trực tiếp với các cảng lớn châu Á và châu Âu.',
      en: 'Deep-water port at Cai Mep capable of receiving 200,000 DWT vessels, direct connection to major Asian and European ports.'
    },
    featured: true,
    dateAdded: '2025-12-01'
  },
  {
    id: 'eco-city-hanoi',
    slug: 'eco-city-hanoi',
    name: {
      vi: 'Eco City Hanoi',
      en: 'Eco City Hanoi'
    },
    tagline: {
      vi: 'Đô thị sinh thái chuẩn LEED Platinum tại Hà Nội',
      en: 'LEED Platinum eco-urban development in Hanoi'
    },
    logo: '/ventures/eco-city/logo.svg',
    coverImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&auto=format&fit=crop',
    sector: 'realestate',
    sectorLabel: { vi: 'Bất Động Sản', en: 'Real Estate' },
    stage: 'series-a',
    stageLabel: { vi: 'Series A', en: 'Series A' },
    fundingGoal: 5000000000,
    fundingGoalFormatted: { vi: '5.000 tỷ VND', en: '$213M USD' },
    fundingRaised: 3500000000,
    fundingRaisedFormatted: { vi: '3.500 tỷ VND', en: '$149M USD' },
    progress: 70,
    investors: 28,
    team: [
      {
        name: 'Đặng Thị Lan',
        role: { vi: 'CEO', en: 'CEO' },
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop',
        linkedin: '#'
      }
    ],
    description: {
      vi: 'Dự án đô thị sinh thái 200ha tại ngoại thành Hà Nội, tích hợp năng lượng mặt trời, thu gom nước mưa và không gian xanh 60%.',
      en: '200ha eco-urban project in Hanoi outskirts, integrated with solar energy, rainwater harvesting and 60% green space.'
    },
    featured: true,
    dateAdded: '2026-01-15'
  },
  {
    id: 'solar-park-ninh-thuan',
    slug: 'solar-park-ninh-thuan',
    name: {
      vi: 'Solar Park Ninh Thuan',
      en: 'Solar Park Ninh Thuan'
    },
    tagline: {
      vi: 'Công viên điện mặt trời 500MW kết hợp nông nghiệp',
      en: '500MW agrivoltaic solar park'
    },
    logo: '/ventures/solar-park/logo.svg',
    coverImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&auto=format&fit=crop',
    sector: 'energy',
    sectorLabel: { vi: 'Năng Lượng Xanh', en: 'Green Energy' },
    stage: 'series-b',
    stageLabel: { vi: 'Series B', en: 'Series B' },
    fundingGoal: 3000000000,
    fundingGoalFormatted: { vi: '3.000 tỷ VND', en: '$128M USD' },
    fundingRaised: 2400000000,
    fundingRaisedFormatted: { vi: '2.400 tỷ VND', en: '$102M USD' },
    progress: 80,
    investors: 19,
    team: [
      {
        name: 'Hoàng Văn Đức',
        role: { vi: 'CEO', en: 'CEO' },
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop',
        linkedin: '#'
      }
    ],
    description: {
      vi: 'Công viên điện mặt trời kết hợp nông nghiệp (agrivoltaic), tận dụng đất hiệu quả và tăng thu nhập cho nông dân.',
      en: 'Agrivoltaic solar park combining solar energy with agriculture, efficient land use and increased farmer income.'
    },
    featured: false,
    dateAdded: '2025-11-20'
  },
  {
    id: 'ai-supply-chain',
    slug: 'ai-supply-chain',
    name: {
      vi: 'AI Supply Chain Solutions',
      en: 'AI Supply Chain Solutions'
    },
    tagline: {
      vi: 'Tối ưu chuỗi cung ứng bằng trí tuệ nhân tạo',
      en: 'AI-powered supply chain optimization'
    },
    logo: '/ventures/ai-supply/logo.svg',
    coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop',
    sector: 'logistics',
    sectorLabel: { vi: 'Logistics & Cảng Biển', en: 'Logistics & Ports' },
    stage: 'seed',
    stageLabel: { vi: 'Seed', en: 'Seed' },
    fundingGoal: 800000000,
    fundingGoalFormatted: { vi: '800 tỷ VND', en: '$34M USD' },
    fundingRaised: 320000000,
    fundingRaisedFormatted: { vi: '320 tỷ VND', en: '$14M USD' },
    progress: 40,
    investors: 8,
    team: [
      {
        name: 'Nguyễn Thị Phương',
        role: { vi: 'CEO', en: 'CEO' },
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop',
        linkedin: '#'
      }
    ],
    description: {
      vi: 'Platform AI tối ưu hóa chuỗi cung ứng cho các doanh nghiệp logistics, giảm chi phí vận hành 25%.',
      en: 'AI platform optimizing supply chain for logistics companies, reducing operational costs by 25%.'
    },
    featured: false,
    dateAdded: '2026-01-20'
  }
];
