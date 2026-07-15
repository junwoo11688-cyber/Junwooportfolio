export type ProjectFilter =
  | 'ALL'
  | 'INTERVIEW'
  | 'PUBLIC'
  | 'BRAND'
  | 'MOTION'
  | 'YOUTUBE'
  | 'AI CONTENT';

export type ProjectCategory = Exclude<ProjectFilter, 'ALL'>;

export type ProjectVisualTone =
  | 'interview'
  | 'medical'
  | 'brand'
  | 'city'
  | 'youtube'
  | 'motion';

export interface Project {
  id: number;
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  categories: ProjectCategory[];
  role: string;
  summary: string;
  format: string;
  deliverable: string;
  contribution: string;
  outcome: string;
  technologies: string[];
  thumbnail: string;
  visualTone: ProjectVisualTone;
  videoUrl?: string;
  overview: string;
  purpose: string;
  direction: string;
  tasks: string[];
  images: string[];
}

export const projectFilters: ProjectFilter[] = [
  'ALL',
  'INTERVIEW',
  'PUBLIC',
  'BRAND',
  'MOTION',
  'YOUTUBE',
  'AI CONTENT',
];

export const projects: Project[] = [
  {
    id: 1,
    slug: 'ai-company-explorers',
    title: 'AI 기업 탐험대',
    client: '정보통신산업진흥원',
    year: '2026',
    category: '기업 인터뷰 / 현장 콘텐츠',
    categories: ['INTERVIEW', 'YOUTUBE', 'AI CONTENT'],
    role: '기획, 인터뷰 구성, 촬영 디렉팅, 편집 총괄',
    summary: 'AI 기업의 기술과 현장을 쉽게 풀어낸 인터뷰 콘텐츠',
    format: 'YouTube series / Interview content',
    deliverable: '본편 영상, 인터뷰 컷다운, 썸네일 톤 제안',
    contribution: '기술 설명을 사람 중심 질문과 현장 컷으로 재구성했습니다.',
    outcome: '복잡한 AI 기술을 이해하기 쉬운 현장 콘텐츠로 정리했습니다.',
    technologies: ['기획', '촬영', '인터뷰', '편집', '모션그래픽'],
    thumbnail: '',
    visualTone: 'interview',
    overview: 'AI 기업의 현장과 구성원 이야기를 담은 인터뷰 콘텐츠입니다.',
    purpose:
      '전문 기술을 대중적인 언어로 풀어내고, 기관 사업의 성과와 참여 기업의 현장성을 함께 보여주는 것을 목표로 했습니다.',
    direction:
      '질문 설계 단계에서 기술 소개와 사람의 이야기가 균형을 이루도록 구성하고, 현장 B-roll과 그래픽을 활용해 이해도를 높였습니다.',
    tasks: [
      '기업별 핵심 메시지 도출 및 인터뷰 질문 구성',
      '촬영 동선, 현장 컷, 인서트 장면 디렉팅',
      '본편 편집 흐름 설계 및 자막, 모션그래픽 정리',
      '유튜브 시청 환경에 맞는 도입부와 썸네일 톤 제안',
    ],
    images: [],
  },
  {
    id: 2,
    slug: 'medical-ai-education-impact',
    title: '의료 AI 교육 성과 확산 영상',
    client: '한국보건복지인재원',
    year: '2026',
    category: '공공기관 홍보영상',
    categories: ['PUBLIC', 'INTERVIEW', 'AI CONTENT'],
    role: '영상 구성, 인터뷰 기획, 현장 촬영, 편집',
    summary: '의료 AI 교육의 현장 변화를 보여주는 성과 영상',
    format: 'Public campaign film / Interview + B-roll',
    deliverable: '성과 확산 본편, 인터뷰 시퀀스, 인포그래픽 컷',
    contribution: '교육 성과를 의료진 경험과 현장 장면 중심으로 정리했습니다.',
    outcome: '정책 성과를 장면과 증언으로 전달하는 톤을 만들었습니다.',
    technologies: ['인터뷰', 'B-roll', '인포그래픽', '사운드 디자인'],
    thumbnail: '',
    visualTone: 'medical',
    overview: '교육 참여자의 경험으로 의료 AI 교육 성과를 설명한 영상입니다.',
    purpose:
      '교육 사업의 성과를 단순 수치가 아닌 현장 변화의 이야기로 전달해 공공 콘텐츠의 신뢰도와 이해도를 높였습니다.',
    direction:
      '의료진 인터뷰를 중심축으로 두고 교육 장면, 병원 현장, 정보 그래픽을 연결해 정책적 의미와 실제 효용을 함께 보여줬습니다.',
    tasks: [
      '교육 성과 메시지 정리 및 인터뷰 흐름 설계',
      '의료 현장 분위기를 살리는 촬영 컷 구성',
      '내용 이해를 돕는 인포그래픽과 자막 디자인',
      '기관 홍보영상에 적합한 톤의 색보정과 사운드 정리',
    ],
    images: [],
  },
  {
    id: 3,
    slug: 'bridging-the-standard',
    title: 'Bridging the Standard',
    client: '한글과컴퓨터',
    year: '2026',
    category: '브랜드 필름 / 모션그래픽',
    categories: ['BRAND', 'MOTION', 'AI CONTENT'],
    role: '콘셉트 기획, 화면 구성, 편집, 모션그래픽',
    summary: '문서 AI와 글로벌 표준의 연결을 시각화한 브랜드 영상',
    format: 'Sponsor film / Typography motion',
    deliverable: '행사 송출용 브랜드 영상, 타이틀 모션, 최종 납품본',
    contribution: '브랜드 키워드를 타이포그래피와 레이어 모션으로 전환했습니다.',
    outcome: '연결과 표준의 이미지를 짧고 선명하게 각인시켰습니다.',
    technologies: ['After Effects', '모션그래픽', '타이포그래피', 'AI 영상'],
    thumbnail: '',
    visualTone: 'brand',
    overview: '브랜드 메시지를 타이포그래피와 추상 그래픽으로 구성한 영상입니다.',
    purpose:
      '제품 기능을 직접 설명하기보다 브랜드가 지향하는 표준, 연결, 확장의 이미지를 짧고 인상적인 영상 언어로 압축했습니다.',
    direction:
      '키워드 중심의 장면 전환, 문서 구조를 닮은 레이어, 절제된 모션을 활용해 기술 브랜드의 신뢰감을 유지했습니다.',
    tasks: [
      '브랜드 메시지 키워드 추출 및 콘셉트 보드 구성',
      '타이포그래피 중심의 화면 전개 설계',
      'After Effects 기반 모션그래픽 제작',
      '행사 송출 환경을 고려한 최종 영상 포맷 정리',
    ],
    images: [],
  },
  {
    id: 4,
    slug: 'gwangju-proof-road',
    title: '실증로드: 광주의 4년',
    client: '광주광역시 관련 실증사업',
    year: '2026',
    category: '성과 홍보영상',
    categories: ['PUBLIC', 'INTERVIEW'],
    role: '콘텐츠 기획, 스토리 구성, 촬영 및 편집 디렉팅',
    summary: '실증사업의 성과를 도시 이야기로 구성한 홍보영상',
    format: 'Outcome film / City storytelling',
    deliverable: '성과 홍보 본편, 인터뷰 구성안, 데이터 그래픽 컷',
    contribution: '4년의 사업 기록을 시민 체감 장면 중심으로 재배열했습니다.',
    outcome: '행정 성과를 도시와 현장이 연결된 이야기로 전달했습니다.',
    technologies: ['기획', '인터뷰', '촬영', '편집', '데이터 그래픽'],
    thumbnail: '',
    visualTone: 'city',
    overview: '도시 실증사업의 시간을 시민, 현장, 데이터로 엮은 영상입니다.',
    purpose:
      '사업의 결과를 행정 중심의 설명에서 벗어나 시민이 체감할 수 있는 변화의 장면으로 전환하는 데 집중했습니다.',
    direction:
      '광주의 공간감과 실제 사례를 연결하고, 데이터 그래픽은 필요한 순간에만 절제해 사용해 이야기의 흐름을 해치지 않도록 했습니다.',
    tasks: [
      '4년간 사업 흐름을 하나의 영상 구조로 재정리',
      '시민 체감형 사례 중심의 스토리라인 구성',
      '도시 공간과 실증 현장을 연결하는 촬영 디렉팅',
      '성과 수치를 설명하는 데이터 그래픽 제작 방향 정리',
    ],
    images: [],
  },
  {
    id: 5,
    slug: 'nipa-view',
    title: 'NIPA VIEW',
    client: '정보통신산업진흥원',
    year: '2026',
    category: '유튜브 콘텐츠',
    categories: ['YOUTUBE', 'PUBLIC', 'MOTION'],
    role: '시리즈 리뉴얼, 포맷 기획, 편집 총괄',
    summary: '기관 사업을 게임 퀘스트 형식으로 소개한 유튜브 시리즈',
    format: 'YouTube series / Format renewal',
    deliverable: '시리즈 포맷, 본편 영상, 숏폼 재가공 구간',
    contribution: '사업 소개를 미션형 내러티브와 시리즈 구조로 바꿨습니다.',
    outcome: '정보형 콘텐츠를 유튜브에 맞는 에피소드형 포맷으로 전환했습니다.',
    technologies: ['콘텐츠 기획', '스토리텔링', '모션그래픽', '숏폼 재가공'],
    thumbnail: '',
    visualTone: 'youtube',
    overview: '기관 사업을 더 쉽게 전달하기 위해 포맷을 리뉴얼한 시리즈입니다.',
    purpose:
      '정보 전달 중심의 기관 콘텐츠를 게임 퀘스트 형식으로 풀어내 시청 지속률과 콘텐츠 접근성을 높이는 것을 목표로 했습니다.',
    direction:
      '각 회차별 미션 구조, 리듬감 있는 편집, 숏폼 재가공을 고려한 장면 구성을 통해 시리즈 확장성을 확보했습니다.',
    tasks: [
      '유튜브 시리즈 포맷 리뉴얼 및 회차 구성',
      '게임 퀘스트형 내러티브와 화면 장치 설계',
      '본편 편집 및 모션그래픽 톤 정리',
      '숏폼 클립으로 재가공 가능한 핵심 구간 설계',
    ],
    images: [],
  },
  {
    id: 6,
    slug: 'connect-the-dots',
    title: 'CONNECT THE DOTS',
    client: '의료 AI 교육 성과 교류 행사',
    year: '2026',
    category: '행사 영상 / 오프닝 영상',
    categories: ['MOTION', 'PUBLIC', 'AI CONTENT'],
    role: '콘셉트 기획, 타이틀 디자인, 편집',
    summary: '의료 AI 교육 성과를 점과 선의 모션으로 표현한 오프닝',
    format: 'Opening title / Event motion',
    deliverable: '행사 오프닝 영상, 타이틀 모션, 송출용 최종 파일',
    contribution: '교육 성과와 지역 확산의 의미를 점과 선으로 연결했습니다.',
    outcome: '행사 주제를 빠르게 환기하는 오프닝 모션을 완성했습니다.',
    technologies: ['타이포그래피', '모션그래픽', '사운드 디자인'],
    thumbnail: '',
    visualTone: 'motion',
    overview: '의료 AI 교육 성과와 지역 확산의 의미를 담은 오프닝 영상입니다.',
    purpose:
      '행사 주제인 연결과 확산을 짧은 시간 안에 직관적으로 전달하고, 현장 분위기를 집중시키는 역할을 했습니다.',
    direction:
      '점과 선, 지역 네트워크, 교육 성과 키워드를 타이틀 모션으로 엮어 행사의 메시지가 자연스럽게 드러나도록 구성했습니다.',
    tasks: [
      '행사 키비주얼과 주제어 기반 콘셉트 기획',
      '오프닝 타이틀 구조와 타이포그래피 모션 디자인',
      '현장 송출을 고려한 음악, 효과음, 전환 리듬 편집',
      '행사 운영 파일 규격에 맞춘 최종 납품본 제작',
    ],
    images: [],
  },
];
