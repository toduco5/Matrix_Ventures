export const mechanisms = [
  {
    id: 'quadratic-funding',
    slug: 'quadratic-funding',
    title: { vi: 'Quadratic Funding', en: 'Quadratic Funding' },
    description: {
      vi: 'Mô hình phân bổ vốn dân chủ, nơi đóng góp nhỏ từ nhiều người có ảnh hưởng lớn hơn đóng góp lớn từ ít người.',
      en: 'Democratic capital allocation model where small contributions from many people have more influence than large contributions from few.'
    },
    category: 'public-goods',
    categoryLabel: { vi: 'Hàng Công Cộng', en: 'Public Goods' },
    difficulty: 'intermediate',
    difficultyLabel: { vi: 'Trung cấp', en: 'Intermediate' },
    icon: 'insights',
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    howItWorks: {
      vi: [
        'Người đóng góp đăng ký và xác thực danh tính',
        'Người đóng góp chọn dự án muốn hỗ trợ',
        'Hệ thống tính toán matching pool dựa trên công thức bình phương',
        'Số tiền matching tỷ lệ thuận với căn bậc hai tổng đóng góp',
        'Dự án nhận được tổng vốn từ cộng đồng + matching pool'
      ],
      en: [
        'Contributors register and verify identity',
        'Contributors choose projects to support',
        'System calculates matching pool using quadratic formula',
        'Matching amount proportional to square root of total contributions',
        'Projects receive total capital from community + matching pool'
      ]
    },
    pros: {
      vi: ['Dân chủ hóa quá trình phân bổ vốn', 'Khuyến khích đóng góp nhỏ', 'Giảm thiểu bias từ cá nhân giàu'],
      en: ['Democratizes capital allocation', 'Encourages small contributions', 'Reduces bias from wealthy individuals']
    },
    cons: {
      vi: ['Dễ bị Sybil attack nếu không có xác thực tốt', 'Phức tạp để giải thích cho người mới', 'Cần matching pool lớn'],
      en: ['Vulnerable to Sybil attacks without proper identity verification', 'Complex to explain to newcomers', 'Requires large matching pool']
    },
    formula: 'M = (Σ √C_i)² - Σ C_i',
    examples: ['Gitcoin Grants', 'Ethereum CLR', 'Downtown Stimulus']
  },
  {
    id: 'direct-grants',
    slug: 'direct-grants',
    title: { vi: 'Direct Grants', en: 'Direct Grants' },
    description: {
      vi: 'Cấp vốn trực tiếp từ quỹ hoặc tổ chức cho các dự án được chọn qua quy trình thẩm định.',
      en: 'Direct funding from funds or organizations to selected projects through due diligence process.'
    },
    category: 'traditional',
    categoryLabel: { vi: 'Truyền Thống', en: 'Traditional' },
    difficulty: 'beginner',
    difficultyLabel: { vi: 'Cơ bản', en: 'Beginner' },
    icon: 'account_balance',
    featuredImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop',
    howItWorks: {
      vi: [
        'Tổ chức công bố chương trình cấp vốn',
        'Dự án nộp proposal theo format chuẩn',
        'Hội đồng thẩm định đánh giá và phỏng vấn',
        'Dự án được chọn nhận vốn theo milestones',
        'Báo cáo định kỳ và đánh giá kết quả'
      ],
      en: [
        'Organization announces grant program',
        'Projects submit proposals in standard format',
        'Review board evaluates and interviews',
        'Selected projects receive funds based on milestones',
        'Regular reporting and outcome evaluation'
      ]
    },
    pros: {
      vi: ['Quy trình rõ ràng, dễ hiểu', 'Kiểm soát được việc phân bổ vốn', 'Phù hợp với dự án cần vốn lớn'],
      en: ['Clear, easy to understand process', 'Control over capital allocation', 'Suitable for projects needing large capital']
    },
    cons: {
      vi: ['Tập trung quyền lực vào hội đồng', 'Chậm và tốn kém quy trình', 'Có thể bỏ sót dự án tiềm năng'],
      en: ['Centralizes power in review board', 'Slow and expensive process', 'May miss potential projects']
    },
    formula: null,
    examples: ['Ethereum Foundation Grants', 'UNICEF Innovation Fund', 'Gates Foundation']
  },
  {
    id: 'retroactive-funding',
    slug: 'retroactive-funding',
    title: { vi: 'Retroactive Funding', en: 'Retroactive Funding' },
    description: {
      vi: 'Cấp vốn cho các dự án đã chứng minh được impact, thay vì dự đoán tiềm năng trong tương lai.',
      en: 'Funding projects that have already proven impact, rather than predicting future potential.'
    },
    category: 'public-goods',
    categoryLabel: { vi: 'Hàng Công Cộng', en: 'Public Goods' },
    difficulty: 'advanced',
    difficultyLabel: { vi: 'Nâng cao', en: 'Advanced' },
    icon: 'history',
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    howItWorks: {
      vi: [
        'Dự án hoạt động và tạo impact thực tế',
        'Đo lường và chứng minh impact bằng metrics',
        'Cộng đồng hoặc hội đồng đánh giá impact',
        'Phân bổ vốn dựa trên impact đã đạt được',
        'Khuyến khích dự án tập trung vào kết quả thực'
      ],
      en: [
        'Projects operate and create real impact',
        'Measure and prove impact with metrics',
        'Community or board evaluates impact',
        'Allocate funds based on achieved impact',
        'Encourages projects to focus on real outcomes'
      ]
    },
    pros: {
      vi: ['Tránh rủi ro dự đoán sai', 'Khuyến khích tập trung vào impact thực', 'Công bằng với dự án đã thành công'],
      en: ['Avoids risk of wrong predictions', 'Encourages focus on real impact', 'Fair to already successful projects']
    },
    cons: {
      vi: ['Khó đo lường impact chính xác', 'Dự án mới gặp khó khăn vì chưa có track record', 'Cần hệ thống metric phức tạp'],
      en: ['Hard to measure impact accurately', 'New projects struggle without track record', 'Requires complex metric system']
    },
    formula: 'Reward = f(Impact Metrics, Time, Stakeholder votes)',
    examples: ['Optimism RetroPGF', 'Gitcoin Citizens Retro', 'Filecoin RetroPGF']
  },
  {
    id: 'milestone-based',
    slug: 'milestone-based',
    title: { vi: 'Milestone-Based Funding', en: 'Milestone-Based Funding' },
    description: {
      vi: 'Giải phóng vốn theo từng cột mốc đạt được, đảm bảo trách nhiệm và tiến độ dự án.',
      en: 'Release funds based on achieved milestones, ensuring project accountability and progress.'
    },
    category: 'hybrid',
    categoryLabel: { vi: 'Kết Hợp', en: 'Hybrid' },
    difficulty: 'beginner',
    difficultyLabel: { vi: 'Cơ bản', en: 'Beginner' },
    icon: 'flag',
    featuredImage: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop',
    howItWorks: {
      vi: [
        'Định nghĩa milestones rõ ràng với timeline',
        'Thiết lập số vốn cho mỗi milestone',
        'Dự án báo cáo khi hoàn thành milestone',
        'Hội đồng hoặc cộng đồng verify kết quả',
        'Giải phóng vốn khi milestone được approve'
      ],
      en: [
        'Define clear milestones with timeline',
        'Set funding amount for each milestone',
        'Project reports when milestone completed',
        'Board or community verifies results',
        'Release funds when milestone approved'
      ]
    },
    pros: {
      vi: ['Kiểm soát rủi ro tốt', 'Đảm bảo tiến độ dự án', 'Minh bạch trong việc phân bổ vốn'],
      en: ['Good risk control', 'Ensures project progress', 'Transparent fund allocation']
    },
    cons: {
      vi: ['Có thể làm chậm tiến độ dự án', 'Tốn công verify milestones', 'Không linh hoạt với thay đổi'],
      en: ['May slow down project progress', 'Requires effort to verify milestones', 'Not flexible with changes']
    },
    formula: null,
    examples: ['Gitcoin Grants Stack', 'Karma GAP', 'Prop House']
  },
  {
    id: 'conviction-voting',
    slug: 'conviction-voting',
    title: { vi: 'Conviction Voting', en: 'Conviction Voting' },
    description: {
      vi: 'Hệ thống bỏ phiếu dựa trên thời gian giữ phiếu, khuyến khích cam kết dài hạn.',
      en: 'Voting system based on how long votes are held, encouraging long-term commitment.'
    },
    category: 'governance',
    categoryLabel: { vi: 'Quản Trị', en: 'Governance' },
    difficulty: 'advanced',
    difficultyLabel: { vi: 'Nâng cao', en: 'Advanced' },
    icon: 'how_to_vote',
    featuredImage: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&auto=format&fit=crop',
    howItWorks: {
      vi: [
        'Thành viên nắm token để có quyền bỏ phiếu',
        'Bỏ phiếu cho dự án và giữ phiếu tích lũy conviction',
        'Conviction tăng dần theo thời gian giữ phiếu',
        'Dự án đạt ngưỡng conviction nhận được vốn',
        'Có thể rút phiếu bất cứ lúc nào, conviction giảm'
      ],
      en: [
        'Members hold tokens to get voting rights',
        'Vote for projects and hold votes to accumulate conviction',
        'Conviction grows over time as votes are held',
        'Projects reaching conviction threshold receive funds',
        'Can withdraw votes anytime, conviction decreases'
      ]
    },
    pros: {
      vi: ['Khuyến khích cam kết dài hạn', 'Chống spam và manipulation', 'Phân bổ vốn liên tục không cần rounds'],
      en: ['Encourages long-term commitment', 'Prevents spam and manipulation', 'Continuous fund allocation without rounds']
    },
    cons: {
      vi: ['Phức tạp để hiểu và tham gia', 'Yêu cầu token holder phải active', 'Có thể bị large holders chi phối'],
      en: ['Complex to understand and participate', 'Requires active token holders', 'Can be dominated by large holders']
    },
    formula: 'Conviction = Tokens × Time^2 × α',
    examples: ['1Hive Gardens', 'Commons Stack', 'TEC Commons']
  }
];
