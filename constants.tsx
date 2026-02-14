import { ResearchArea, Publication, Member, BoardItem } from './types';

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: '1',
    title: '2D Materials',
    description: 'Exploring the fundamental properties and electronic applications of graphene, MoS₂, and other transition metal dichalcogenides.',
    icon: 'Layers'
  },
  {
    id: '2',
    title: 'High Performance Flexible Electronics',
    description: 'Developing next-generation flexible and stretchable circuits for wearable technology and foldable displays.',
    icon: 'Zap'
  },
  {
    id: '3',
    title: 'Neural Sensors and Brain-Computer Interfaces',
    description: 'Developing minimally invasive, high-resolution neural implants and interface systems using 2D materials for advanced brain-machine communication.',
    icon: 'Brain'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: 'Advanced 2D Materials for Sub-nm Logic Nodes',
    authors: 'Lee, S., Park, J., et al.',
    journal: 'Nature Electronics',
    year: 2024,
    doi: '10.1038/s41928-024-01',
    period: 'present-2021'
  },
  {
    id: 'p2',
    title: 'Flexible CMOS Circuits on Bio-degradable Substrates',
    authors: 'Choi, H., Kim, M., et al.',
    journal: 'Science Advances',
    year: 2022,
    doi: '10.1126/sciadv.2022.01',
    period: 'present-2021'
  },
  {
    id: 'p3',
    title: 'High-K Dielectrics for 2D Semiconductor Transistors',
    authors: 'Kim, Y., Lee, B.',
    journal: 'IEDM Tech. Dig.',
    year: 2018,
    doi: '10.1109/IEDM.2018.01',
    period: '2020-2011'
  }
];

export const MEMBERS: Member[] = [
  {
    id: 'prof1',
    name: 'Jong-Hyun Ahn',
    role: 'Professor',
    image: 'https://i.postimg.cc/kgdn8Sjh/an.png',
    category: 'Professor'
  },
  {
    id: 'rp1',
    name: 'Ajit Kumar Katiyar',
    role: 'Research Professor',
    email: 'katiyar.ajit2010@gmail.com',
    researchArea: 'Si Nanomembrane based optoelectronic devices',
    image: '/images/members/ajit.jfif',
    category: 'Research Professor'
  },
  {
    id: 'pd1',
    name: '김범진',
    nameEn: 'Beomjin Kim',
    role: 'Postdoctoral researcher',
    email: 'answjd9688@naver.com',
    researchArea: '2D material based optoelectronics, Mechanical Analysis',
    image: '/images/members/bj.png',
    category: 'Post doctors'
  },
  // Ph.D Students
  { id: 'phd1', name: '지승현', degree: 'Integrated M.S/Ph.D', email: 'qwas8802@yonsei.ac.kr', researchArea: '2D materials based electronics, Micro LED', image: '/images/members/sh.jfif', role: 'Ph.D Student', category: 'Ph.D students' },
  { id: 'phd2', name: '홍주영', degree: 'Integrated M.S. / Ph.D.', email: 'juyoung518@gmail.com', researchArea: 'Wireless bio-medical devices', image: '/images/members/jy.jpg', role: 'Ph.D Student', category: 'Ph.D students' },
  { id: 'phd3', name: 'Xu Duo', degree: 'Ph.D', email: 'duoxu97@outlook.com', researchArea: 'High-performance P-type 2D materials', image: '/images/members/duo.jfif', role: 'Ph.D Student', category: 'Ph.D students' },
  { id: 'phd4', name: '이재도', degree: 'Integrate M.S/Ph.D', email: 'jaedo89@yonsei.ac.kr', researchArea: '2D materials based electronics, Gate Dielectric', image: '/images/members/jd.jfif', role: 'Ph.D Student', category: 'Ph.D students' },
  { id: 'phd5', name: '김승수', degree: 'Integrate M.S/Ph.D', email: 'tyler971216@gmail.com', researchArea: '2D materials based electronics, Micro LED', image: '/images/members/ss.jfif', role: 'Ph.D Student', category: 'Ph.D students' },
  { id: 'phd6', name: '유지훈', degree: 'Integrate M.S/Ph.D', email: 'jhryu960@yonsei.ac.kr', researchArea: '2D materials based electronics, Micro LED', image: '/images/members/jh.jfif', role: 'Ph.D Student', category: 'Ph.D students' },
  { id: 'phd7', name: '윤석민', degree: 'Integrate M.S/Ph.D', email: 'ysm23@yonsei.ac.kr', researchArea: 'Foldable/Rollable display, Mechanical Analysis', image: '/images/members/sm.jfif', role: 'Ph.D Student', category: 'Ph.D students' },
  { id: 'phd8', name: '최종규', degree: 'Integrate M.S/Ph.D', email: 'gui828@yonsei.ac.kr', researchArea: '2D material synthesis', image: '/images/members/jk.jfif', role: 'Ph.D Student', category: 'Ph.D students' },
  { id: 'phd9', name: '김민규', degree: 'Integrate M.S/Ph.D', email: 'kmg9797@yonsei.ac.kr', researchArea: '2D materials based electronics, DRAM', image: '/images/members/mg_kim.jpg', role: 'Ph.D Student', category: 'Ph.D students' },
  { id: 'phd10', name: '김진의', degree: 'Integrate M.S/Ph.D', email: 'jin1202vs@yonsei.ac.kr', researchArea: 'Software Platform for Wearable Electronics', image: '/images/members/je.jfif', role: 'Ph.D Student', category: 'Ph.D students' },
  { id: 'phd11', name: '이재인', degree: 'Integrate M.S/Ph.D', email: 'jaeinlee1999@gmail.com', researchArea: '2D materials based high performance TFT', image: '/images/members/ji.jfif', role: 'Ph.D Student', category: 'Ph.D students' },
  { id: 'phd12', name: '김민준', degree: 'Integrate M.S/Ph.D', email: 'kmj12385@yonsei.ac.kr', researchArea: '', image: '/images/members/mj.png', role: 'Ph.D Student', category: 'Ph.D students' },
  { id: 'phd13', name: '김정근', degree: 'Integrate M.S/Ph.D', email: 'jeongkeun37@yonsei.ac.kr', researchArea: '', image: '/images/members/jk_kim.jfif', role: 'Ph.D Student', category: 'Ph.D students' },
  
  // M.S Students
  { id: 'ms1', name: '양승민', degree: 'M.S.', email: 'ysmsis44@yonsei.ac.kr', researchArea: '2D materials based electronics, DRAM', image: '/images/members/sm_yang.jpg', role: 'M.S Student', category: 'M.S students' },
  { id: 'ms2', name: '김하영', degree: 'M.S.', email: 'wonan0254@yonsei.ac.kr', researchArea: '2D materials based electronics, P-type', image: '/images/members/hy_kim.jpg', role: 'M.S Student', category: 'M.S students' },
  { id: 'ms3', name: '최민규', degree: 'M.S.', email: 'rb0401@yonsei.ac.kr', researchArea: '', image: '/images/members/mk_choi.jfif', role: 'M.S Student', category: 'M.S students' },
  { id: 'ms4', name: '전다연', degree: 'M.S.', email: '@yonsei.ac.kr', researchArea: '', image: '/images/members/dy_jeon.png', role: 'M.S Student', category: 'M.S students' },

  // Staff
  {
    id: 'staff1',
    name: '이승민',
    email: 'smin1129@yonsei.ac.kr',
    telephone: '02-2123-8286',
    role: 'Staff',
    image: '/images/members/user.png',
    category: 'Staff'
  },

  // Alumni
  { id: 'al1', name: '박경애 (Park, KyungYea)', degree: 'M.S', currentInstitution: 'Nuclear Materials Research Division, Korea Atomic Energy Research Institute', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al2', name: '노종현 (Rho, JongHyun)', degree: 'M.S', currentInstitution: 'LG Electronics Advanced Research Institute', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al3', name: '김지훈 (Kim, JeeHoon)', degree: 'M.S', currentInstitution: 'Samsung Display', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al4', name: '이정은 (Lee, JeongEun)', degree: 'M.S', currentInstitution: 'Sumitomo Chemical (Japan)', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al5', name: 'Yan, Chao', degree: 'Postdoctoral researcher', currentInstitution: 'Professor, Jiangsu University of Science and Technology', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al6', name: '최보윤 (Choi, BoYoon)', degree: 'M.S.', currentInstitution: 'Samsung Display', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al7', name: '권정규 (Kwon, JungGou)', degree: 'M.S.', currentInstitution: 'Swiss Federal Institute of Technology', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al8', name: 'Bhupendra.K. Sharma', degree: 'Postdoctoral Reseacher', currentInstitution: 'Karsruhe Institute of Technology (KIT), Germany', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al9', name: '배상훈 (Bae, SangHoon)', degree: 'M.S.', currentInstitution: 'Professor, Washington university', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al10', name: 'Jyoti Singh', degree: 'Postdoctoral Researcher', currentInstitution: 'Professor, College of Delhi University', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al11', name: '백승재 (Baek, SeoungJae)', degree: 'M.S.', currentInstitution: 'Uju electronics', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al12', name: '김금옥 (Kim, KeumOk)', degree: 'M.S.', currentInstitution: 'LG Household & Healthcare', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al13', name: '서병화 (Seo, ByungHwa)', degree: 'Postdoctoral Researcher', currentInstitution: 'Samsung Electronics', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al14', name: '이승기 (Lee, SeoungKi)', degree: 'Ph. D', currentInstitution: 'Professor, Pusan National University', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al15', name: 'Kuldeep Rana', degree: 'Postdoctoral Researcher', currentInstitution: 'Central Power Research Institute, India', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al16', name: '이영빈 (Lee, YoungBin)', degree: 'Ph. D', currentInstitution: 'Samsung Electronics', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al17', name: '추현우 (Chu, HyunWoo)', degree: 'M.S.', currentInstitution: 'LG Display', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al18', name: '장호욱 (Jang, Houk)', degree: 'Ph. D', currentInstitution: 'Harvard university', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al19', name: '이원호 (Lee, WonHo)', degree: 'Ph. D', currentInstitution: 'Samsung Display', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al20', name: 'Chen Xiang', degree: 'Postdoctoral researcher', currentInstitution: 'Professor, Nanjing University of Science and Technology', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al21', name: 'Ashwini Ann Davidson', degree: 'M.S.', currentInstitution: 'Vitrox Corporation', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al22', name: 'Krishna Dhakal', degree: 'Postdoctoral researcher', currentInstitution: 'Sungkyunkwan University', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al23', name: 'Tanmoy Das', degree: 'Postdoctoral researcher', currentInstitution: 'UNIST', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al24', name: '이선우 (Lee, Seonwoo)', degree: 'M.S.', currentInstitution: '로잔 연방공과대학 (EPF Lausanne, EPFL)', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al25', name: '복보규 (Bok, Bokyu)', degree: 'M.S.', currentInstitution: 'UST', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al26', name: 'Sachin Shinde', degree: 'Postdoctoral researcher', currentInstitution: 'University of Cambridge, UK', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al27', name: '박용주 (Park, Yongju)', degree: 'Ph. D', currentInstitution: 'Samsung Electronics', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al28', name: '최민우(Choi, Min-Woo)', degree: 'Ph.D.', currentInstitution: 'Samsung Advanced Institute of Technology (SAIT)', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al29', name: '박민훈 (Park, minhoon)', degree: 'Ph. D', currentInstitution: 'SK hynix', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al30', name: '최재용', degree: 'M.S.', currentInstitution: 'LG Display', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al31', name: '황보수민 (Hwangbo Sumin)', degree: 'M.S.', currentInstitution: 'Samsung Electronics', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al32', name: '이재복 (Lee, Jae-Bok)', degree: 'Ph.D', currentInstitution: 'SK Hynix', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al33', name: 'Ajit Katiyar', degree: 'Postdoctoral', currentInstitution: 'University of Cambridge, UK', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al34', name: '박형준', degree: 'M.S.', currentInstitution: 'Samsung Electronics', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al35', name: '한벼리(Han Beory)', degree: 'M.S.', currentInstitution: 'Samsung Electronics', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al36', name: '임승윤 (Lim Seungyun)', degree: 'M.S.', currentInstitution: 'Samsung Electronics', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al37', name: '임이랑 (Lim, Yirang)', degree: 'Ph.D', currentInstitution: 'Samsung Electronics', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al38', name: '김석현 (Kim, Seokhyun)', degree: 'M.S', currentInstitution: 'Washington University in St. louis', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al39', name: '정건우 (Thai Kean You)', degree: 'M.S', currentInstitution: 'Micron Technology', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al40', name: '최아름(Choi, Ahreum)', degree: 'M.S', currentInstitution: 'Samsung Electronics', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al41', name: '임정식(Lim, Jeongsik)', degree: 'M.S.', currentInstitution: 'Samsung Electronics', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al42', name: '김성대 (Kim, Seong Dae)', degree: 'Ph.D', currentInstitution: 'Samsung SDI', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al43', name: '강민표 (Kang, Minpyo)', degree: 'Ph.D', currentInstitution: 'Samsung Electronics', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al44', name: '이용준 (Yongjun Lee)', degree: 'Ph.D', currentInstitution: 'ETRI(Electro. & Telecom. Research Institute)', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al45', name: '김다인 (Dain Kim)', degree: 'M.S.', currentInstitution: 'Samsung Electronics', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al46', name: 'Larionette P. L. Mawlong', degree: 'Postdoctoral Researcher', currentInstitution: 'CSIRO, Sydney, Australia', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al47', name: 'Hu Lu Hing', degree: 'Ph.D', currentInstitution: 'Samsung Advanced Institute of Technology (SAIT)', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al48', name: 'Hoàng Tuấn', degree: 'Ph.D', currentInstitution: 'Stanford University', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al49', name: '김제중 (Kim, Jejung)', degree: 'Ph.D', currentInstitution: 'Samsung Electronics', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al50', name: '신희창', degree: 'Ph.D', currentInstitution: 'Samsung Electronics', category: 'Alumni', image: '', role: 'Alumni' },
  { id: 'al51', name: '이혜령', degree: 'M.S.', currentInstitution: 'Samsung Electronics', category: 'Alumni', image: '', role: 'Alumni' }
];

export const BOARD_ITEMS: BoardItem[] = [
  // Notice items provided
  { id: 'n48', title: '[Award] 김범진 학생 삼성디스플레이 산학협력논문대회 금상 수상', date: '2024-10-02', type: 'Notice', views: 2242 },
  { id: 'n47', title: '[Award] 박경태 학생 국제학회인 MRS에서 Best poster award 수상', date: '2023-12-14', type: 'Notice', views: 2796 },
  { id: 'n46', title: '[Published] 신희창 학생 논문 국제학술지 "Nature Materials" 게재', date: '2023-12-14', type: 'Notice', views: 3026 },
  { id: 'n45', title: '[Published] Dr.Arjit의 논문 국제학술지 "Chemical Reviews" 게재', date: '2023-12-14', type: 'Notice', views: 2472 },
  { id: 'n44', title: '[Published] Dr.Arjit의 논문 국제학술지 "Science Advances" 게재', date: '2023-12-14', type: 'Notice', views: 2099 },
  { id: 'n43', title: '[Published] 지승현 학생 논문 국제학술지 "Advanced Materials" 게재', date: '2023-11-19', type: 'Notice', views: 1496 },
  { id: 'n42', title: '[Award] 2023년 국가연구개발 우수성과 100선 최우수 선정', date: '2023-11-14', type: 'Notice', views: 796 },
  { id: 'n41', title: '[Published] Dr. Hoàng Tuấn 논문 국제학술지 "Nature Nanotechnology" 게재', date: '2023-08-18', type: 'Notice', views: 817 },
  { id: 'n40', title: '[Farewell Party] Dr. Hoàng Tuấn 송별기념행사', date: '2023-06-28', type: 'Notice', views: 815 },
  { id: 'n39', title: '[Award] Hu Lu Hing 학생 한국재료연구원에서 대학원 우수논문상 수상', date: '2023-02-07', type: 'Notice', views: 1117 },
  { id: 'n38', title: '[Birthday Party] 생일 축하 파티!', date: '2022-10-28', type: 'Notice', views: 1482 },
  { id: 'n37', title: '안종현 교수님 한국과학기술한림원 정회원 선출', date: '2021-11-25', type: 'Notice', views: 1621 },
  { id: 'n36', title: '[Video] 기초과학이 세상을 바꾼다 - 꿈의 물질을 찾아서 2', date: '2021-06-25', type: 'Notice', views: 1868 },
  { id: 'n35', title: '[Award] 루힝 학생 삼성휴먼테크논문대상에서 은상 수상', date: '2021-02-09', type: 'Notice', views: 2046 },
  { id: 'n34', title: '[Award] 안종현 교수님 3·1문화상 수상', date: '2021-02-01', type: 'Notice', views: 1702 },
  { id: 'n33', title: '안종현 교수님 "KBS [특별 다큐] 기초과학이 세상을 바꾸다"', date: '2020-10-09', type: 'Notice', views: 2010 },
  { id: 'n32', title: '[Award] 임정식 학생 국내학회인 그래핀 심포지엄에서 우수발표상', date: '2020-09-27', type: 'Notice', views: 1719 },
  { id: 'n31', title: '[Published] Dr.Arjit의 논문이 "Science Advances" 에 어셉', date: '2020-08-24', type: 'Notice', views: 1627 },
  { id: 'n30', title: '[Published] 최민우 박사 논문 국제학술지 "Science Advances" 게재', date: '2020-07-19', type: 'Notice', views: 1841 },
  { id: 'n29', title: '[Published] 임승윤 학생 논문 국제학술지 "Advanced Materials" 게재', date: '2020-07-19', type: 'Notice', views: 1786 },
  { id: 'n28', title: '[Award] 안종현 교수님 과학기술정통부 장관상 수상', date: '2020-07-05', type: 'Notice', views: 1599 },
  { id: 'n27', title: '[Appointment of professor] 우리 연구실 졸업생 배상훈 박사 교수 임용', date: '2020-04-07', type: 'Notice', views: 3016 },
  { id: 'n26', title: '[Award] 본 연구실 졸업생인 Dr.Choi, 삼성디스플레이 SDC Technology 우수', date: '2019-10-31', type: 'Notice', views: 3157 },
  { id: 'n25', title: '안종현 교수님께서 노벨과학상 수상자의 연구성과에 근접한 학자 선정', date: '2019-10-09', type: 'Notice', views: 2806 },
  { id: 'n24', title: '[Published] 이재복 학생 논문 국제학술지 "Advanced Materials" 게재', date: '2019-09-06', type: 'Notice', views: 2355 },
  { id: 'n23', title: '[Fellowship] 이용준 학생 BEST outstanding student Fellow 2019 선정', date: '2019-09-04', type: 'Notice', views: 2188 },
  { id: 'n22', title: '[Award] 최민우 학생, 중국에서 열린 국제 유연전자 학회 수상', date: '2019-07-19', type: 'Notice', views: 2182 },
  { id: 'n21', title: '[Published] 이용준 학생 논문 "Nano Energy"에 출판', date: '2019-05-22', type: 'Notice', views: 1970 },
  { id: 'n20', title: '[Published] 박용주 학생 논문 "Small"에 출판', date: '2019-05-07', type: 'Notice', views: 1837 },
  { id: 'n19', title: '[Published] 신희창 학생 논문 "ACS Applied Materials & Interfaces" 게재', date: '2019-04-10', type: 'Notice', views: 1949 },
  { id: 'n18', title: '[Published] 박용주 학생 논문 "ACS Nano"에 출판', date: '2019-02-13', type: 'Notice', views: 2440 },
  { id: 'n17', title: '[Fellowship] 최민우 학생 BEST outstanding student Fellow 2018 선정', date: '2018-10-02', type: 'Notice', views: 2544 },
  { id: 'n16', title: '[Award] 박용주 학생 국제학회인 IUMRS에서 우수 포스터상', date: '2018-09-25', type: 'Notice', views: 2132 },
  { id: 'n15', title: '[Fellowship] 박용주 학생 연구경쟁력 강화사업 학생으로 선정', date: '2018-09-25', type: 'Notice', views: 2256 },
  { id: 'n14', title: '[Published] Dr.Chen과 Dr.Shinde의 논문이 "NPG asia materials" 게재', date: '2018-08-27', type: 'Notice', views: 2908 },
  { id: 'n13', title: '[Award] 안종현 교수님, 대한민국학술원상 수상', date: '2018-07-26', type: 'Notice', views: 1998 },
  { id: 'n12', title: '[Published] 박민훈 학생 논문 "Micromachines"에 출간', date: '2018-07-04', type: 'Notice', views: 2050 },
  { id: 'n11', title: '[Published] 김성대 학생 논문 "Carbon"에 출간', date: '2018-06-20', type: 'Notice', views: 2349 },
  { id: 'n10', title: '[Published] 박성원 박사, 김제중 학생 논문 "Small" 게재', date: '2018-06-05', type: 'Notice', views: 2425 },
  { id: 'n9', title: '[Published] 이원호 박사, 이용준 학생 논문 “Nature Communications” 게재', date: '2018-03-15', type: 'Notice', views: 2818 },
  { id: 'n8', title: '[Published] Dr.Chen, 박용주 학생, 강민표 학생 논문 “Nature Communications” 게재', date: '2018-03-15', type: 'Notice', views: 2695 },
  { id: 'n7', title: '[Published] 최민우 학생, 박용주 학생 논문 "Science Advances" 게재', date: '2018-03-08', type: 'Notice', views: 3290 },
  { id: 'n6', title: '[Published] 이선우 학생 논문 "Nano Letters" 저널에 출판', date: '2017-11-21', type: 'Notice', views: 3638 },
  { id: 'n5', title: '[Published] 강민표 학생 논문 "ACS Nano" 저널에 출간', date: '2017-11-09', type: 'Notice', views: 2768 },
  { id: 'n4', title: '[Published] 최민우 학생 "Advanced Functional Materials"의 Back Cover 게재', date: '2017-03-08', type: 'Notice', views: 3644 },
  { id: 'n3', title: '안종현 교수님께서 CBS "세상을 바꾸는 시간, 15분" 출연', date: '2017-03-08', type: 'Notice', views: 3556 },
  { id: 'n2', title: 'Member Board 게시판 운용', date: '2017-02-15', type: 'Notice', views: 3192 },
  { id: 'n1', title: '新 홈페이지가 개설되었습니다. (17.02 ~)', date: '2017-02-15', type: 'Notice', views: 2744 },

//gallery 사진
  { 
    id: 'g1', 
    title: 'The 12th Korean Symposium on Graphene and 2D Materials', 
    date: '2025-07-09', 
    type: 'Gallery', 
    image: 'https://i.postimg.cc/fRNs2g3d/Kakao-Talk-20260203-175512545-25.jpg',
    images: [
      'https://i.postimg.cc/fRNs2g3d/Kakao-Talk-20260203-175512545-25.jpg',
      'https://i.postimg.cc/Pq7FcP3x/Kakao-Talk-20260203-175512545-29.jpg',
      'https://i.postimg.cc/nL91XT2X/Kakao-Talk-20260203-175512545-02.jpg',
      'https://i.postimg.cc/Tw951Wz5/Kakao-Talk-20260203-175512545-03.jpg',
      'https://i.postimg.cc/SxMX8PBv/Kakao-Talk-20260203-175512545-06.jpg',
      'https://i.postimg.cc/XYkrQ5vY/Kakao-Talk-20260203-175512545-10.jpg',
      'https://i.postimg.cc/vZt43nmL/Kakao-Talk-20260203-181934162-09.jpg'
    ]
  },
  { 
    id: 'g2', 
    title: '스승의 날(National Teacher Day)', 
    date: '2025-05-17', 
    type: 'Gallery', 
    image: 'https://i.postimg.cc/YShsVFpv/main.jpg',
    images: [
      'https://i.postimg.cc/YShsVFpv/main.jpg',
      'https://i.postimg.cc/jjLF9fsR/1.jpg',
      'https://i.postimg.cc/8Cj03v1j/2.jpg',
      'https://i.postimg.cc/8Cj03v15/dd.jpg'
    ]
  },
  { 
    id: 'g3', 
    title: 'Graduation congratulations', 
    date: '2024-01-26', 
    type: 'Gallery', 
    image: 'https://i.postimg.cc/ZYvCZYb6/1.jpg',
    images: [
      'https://i.postimg.cc/ZYvCZYb6/1.jpg',
      'https://i.postimg.cc/c1trZ1xT/1-1.jpg'
    ]
  },
  { 
    id: 'g4', 
    title: 'Workshop in Jeju', 
    date: '2023-08-29', 
    type: 'Gallery', 
    image: 'https://i.postimg.cc/DyD5CPvj/2.jpg',
    images: [
      'https://i.postimg.cc/DyD5CPvj/2.jpg',
      'https://i.postimg.cc/WbKS9wNH/2-1.jpg',
      'https://i.postimg.cc/RV8GPLS2/2-2.jpg',
      'https://i.postimg.cc/023Zt0kF/2-3.jpg',
      'https://i.postimg.cc/jd9v84xX/2-4.png',
      'https://i.postimg.cc/9FS1xYmk/2-5.jpg'
    ]
  },
  { 
    id: 'g5', 
    title: 'Nanomaterials for Optoelectronics and Electronics Workshop', 
    date: '2023-08-09', 
    type: 'Gallery', 
    image: 'https://i.postimg.cc/85Phk7kD/3.jpg',
    images: [
      'https://i.postimg.cc/85Phk7kD/3.jpg',
      'https://i.postimg.cc/xCTKjXjf/3-1.jpg'
    ]
  },
  { 
    id: 'g6', 
    title: 'The 10th Korean Symposium on Graphene and 2D Materials', 
    date: '2023-07-30', 
    type: 'Gallery', 
    image: 'https://i.postimg.cc/XJJCStxH/4.jpg'
  },
  { 
    id: 'g7', 
    title: '스승의 날(National Teacher Day)', 
    date: '2023-05-20', 
    type: 'Gallery', 
    image: 'https://i.postimg.cc/DZJ14tGM/5.jpg',
    images: [
      'https://i.postimg.cc/DZJ14tGM/5.jpg',
      'https://i.postimg.cc/cHgftV3P/5-1.jpg'
    ]
  },
  { 
    id: 'g8', 
    title: '스승의 날(National Teacher Day)', 
    date: '2020-05-16', 
    type: 'Gallery', 
    image: 'https://i.postimg.cc/6QTvFDMn/2020-05-16-seuseung-ui-nal(National-Teacher-Day).jpg'
  },
  { 
    id: 'g9', 
    title: '20년도 졸업생 송별회', 
    date: '2020-02-20', 
    type: 'Gallery', 
    image: 'https://i.postimg.cc/q7g3W91Q/2020-02-20-20nyeondo-jol-eobsaeng-songbyeolhoe.jpg'
  },
  { 
    id: 'g10', 
    title: 'Workshop in Jeju', 
    date: '2018-11-13', 
    type: 'Gallery', 
    image: 'https://i.postimg.cc/jjC7BGMH/2018-11-13-Workshop-in-Jeju.jpg'
  },
  { 
    id: 'g11', 
    title: 'FREE 학회', 
    date: '2018-11-02', 
    type: 'Gallery', 
    image: 'https://i.postimg.cc/zf3g49xj/2018-11-02-FREE-haghoe.jpg'
  },
  { 
    id: 'g12', 
    title: '대한민국학술원상 수상 축하연', 
    date: '2018-09-17', 
    type: 'Gallery', 
    image: 'https://i.postimg.cc/1z4qbLvr/2018-09-17-daehanmingughagsul-wonsang-susang-chughayeon.jpg'
  },
  { 
    id: 'g13', 
    title: 'Workshop in Jeju', 
    date: '2017-11-06', 
    type: 'Gallery', 
    image: 'https://i.postimg.cc/rpzr7vfQ/2017-11-06-Workshop-in-Jeju.jpg'
  },

  // News items provided
  { id: 'nw1', date: '23/01/2025', title: '안종현 연세대 교수팀, 고성능 디지털 X-ray 검출기 개발', source: '아시아투데이', type: 'News', link: 'https://www.asiatoday.co.kr/kn/view.php?key=20250123010012582' },
  { id: 'nw2', date: '13/08/2024', title: '연세대 안종현 교수팀 ‘뇌수술 위험 감소’ 주입형 뇌신경 임플란트 센서 개발', source: '중앙일보', type: 'News', link: 'https://www.joongang.co.kr/article/25270410' },
  { id: 'nw3', date: '24/08/2023', title: 'Two-dimensional materials cool down', source: 'Nature Electronics', type: 'News', link: 'https://www.nature.com/articles/s41928-023-01027-6' },
  { id: 'nw4', date: '10/08/2023', title: '유연 기판 위에서 2D 반도체 직접 만든다', source: '조선비즈', type: 'News', link: 'https://n.news.naver.com/article/366/0000923456'  },
  { id: 'nw5', date: '21/04/2023', title: '0.01초 찰나의 순간 감지하는 파리의 눈… 영상 센서로 구현했다', source: '조선비즈', type: 'News', link: 'https://n.news.naver.com/article/366/0000895479' },
  { id: 'nw6', date: '31/01/2023', title: 'MicroLEDs that can flex', source: 'Nature Electronics', type: 'News', link: 'https://www.nature.com/articles/s41928-023-00921-3' },
  { id: 'nw7', date: '25/02/2022', title: '연세대 연구팀, \'사람 눈처럼 명암 신속 식별\' 센서기술 개발', source: '연합뉴스', type: 'News', link: 'https://n.news.naver.com/article/001/0013012315?lfrom=kakao' },
  { id: 'nw8', date: '25/02/2022', title: '연세대 연구팀, \'사람 눈처럼 명암 신속 식별…', source: '한국경제', type: 'News', link: 'https://www.hankyung.com/society/article/202202259798Y' },
  { id: 'nw9', date: '25/02/2022', title: '[연구 프론티어] 안종현 교수팀, 인간의 망막을 모사한 스마트 이미지 센서 기술 개발', source: '연세소식', type: 'News', link: 'https://www.yonsei.ac.kr/ocx/news.jsp?mode=view&ar_seq=20220225101117622039&sr_volume=631&list_mode=list&sr_site=S&pager.offset=0&sr_cates=25' },
  { id: 'nw10', date: '08/02/2022', title: 'Retina-like sensors give machines better vision', source: 'Nature', type: 'News', link: 'https://www.nature.com/articles/d41586-022-00360-8' },
  { id: 'nw11', date: '03/11/2021', title: 'A decade of R2R graphene manufacturing', source: 'Nature Nanotechnology', type: 'News', link: 'https://www.nature.com/articles/s41565-021-00990-5' },
  { id: 'nw12', date: '22/02/2021', title: '대중화 가로막던 ‘자율주행자동차의 눈’ 실리콘 기반 라이다(Lidar) 센서 개발로 난제 극복', source: '사이언스21', type: 'News', link: 'http://s21.co.kr/news_view.jsp?ncd=3687%22' },
  { id: 'nw13', date: '01/02/2021', title: '이성규·이효철·윤후명·안종현, 제62회 3·1문화상 수상자 선정', source: '서울신문', type: 'News', link: 'https://www.seoul.co.kr/news/newsView.php?id=20210201026030&wlog_tag3=naver%22' },
  { id: 'nw14', date: '29/01/2021', title: '너무 비싼 센서 라이다, 자율주행 업계 ‘골머리', source: '정보통신신문', type: 'News', link: 'https://www.koit.co.kr/news/articleView.html?idxno=80662%22' },
  { id: 'nw15', date: '09/10/2020', title: '‘2020 노벨상’ 오늘부터 발표…한국인 수상자 나올까?', source: 'KBS NEWS', type: 'News', link: 'http://news.kbs.co.kr/news/view.do?ncd=5018086&ref=A%22' },
  { id: 'nw16', date: '30/07/2020', title: '\'차 한대 값’ 라이다 센서 제작비 10분의 1로 줄이는 韓 기술 나왔다', source: '조선비즈', type: 'News', link: 'https://n.news.naver.com/mnews/article/366/0000562635?sid=105' },
  { id: 'nw17', date: '05/07/2020', title: '[나노코리아]나노연구혁신상 부문 수상자', source: '전자신문', type: 'News', link: 'https://www.etnews.com/20200630000390' },
  { 
    id: 'nw18', 
    date: '21/11/2019', 
    title: '피인용 횟수 기준 세계에서 가장 영향력 있는 1% 연구자 선정', 
    source: '파이낸셜뉴스, Clarivate Analytics, HCR', 
    type: 'News',
    links: [
      { label: 'News Detail', url: 'https://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=105&oid=014&aid=0004330637' },
      { label: 'HCR Info', url: 'https://clarivate.co.kr/category/news-rooms/2019HCR' }
    ]
  },
  { id: 'nw19', date: '05/10/2019', title: '“노벨상 근접 국내 과학자 17人”…서울대·카이스트 등 연구진 포함', source: '동아일보', type: 'News', link: 'http://www.donga.com/news/article/all/20191005/97739303/1' },
  { id: 'nw20', date: '28/11/2018', title: '피인용 횟수 기준 세계에서 가장 영향력 있는 1% 연구자 선정', source: '연합뉴스, Clarivate Analytics, HCR', type: 'News', link: 'https://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=105&oid=001&aid=0010492712' },
  { id: 'nw21', date: '16/09/2018', title: '‘휘는 스마트폰 기술’ 안종현 교수 등 6명 대한민국학술원상', source: '서울신문', type: 'News', link: 'http://seoul.co.kr/news/newsView.php?id=20180917027003' },
  { id: 'nw22', date: '31/07/2018', title: '휘어지는 스마트폰, 엉뚱한 상상에서 시작됐죠', source: '조선일보 People & Story', type: 'News', link: 'https://drive.google.com/file/d/13M14dE4QGOv8cb1nwhvlM5oSuugCh4Dn/view?usp=sharing' },
  { id: 'nw23', date: '12/07/2018', title: '마이크로 LED 디스플레이, bLED+QD가 현실적 대안', source: 'KiPOST', type: 'News', link: 'https://www.kipost.net/bbs/board.php?bo_table=display_news&wr_id=803' },
  { id: 'nw24', date: '06/07/2018', title: 'Factors that make an impact', source: 'Nature Nanotechnology Editorial Paper', type: 'News', link: 'https://www.nature.com/articles/s41565-018-0215-y' },
  { id: 'nw25', date: '06/07/2018', title: 'From an idea to a technology', source: 'Nature Nanotechnology Q&A News', type: 'News', link: 'https://www.nature.com/articles/s41565-018-0206-z' },
  { id: 'nw26', date: '12/06/2018', title: '연세대 연구진, 체내 분해되는 뇌질환 진단 신기술 개발', source: '연합뉴스', type: 'News', link: 'http://www.yonhapnews.co.kr/bulletin/2018/06/12/0200000000AKR20180612131400004.HTML?input=1195m' },
  { id: 'nw27', date: '18/05/2018', title: '다큐S 프라임 68회 - 신비한 물질, 유리 편 인터뷰', source: 'YTN SCIENCE', type: 'News', link: 'https://youtu.be/m20df6cIcxs?t=9m35s_8?t=575' },
  { id: 'nw28', date: '09/05/2018', title: '피부에 붙일 수 있는 유연한 초박막 디스플레이 개발', source: '연합뉴스', type: 'News', link: 'http://www.yonhapnews.co.kr/bulletin/2018/05/09/0200000000AKR20180509069100063.HTML?input=1195m' },
  { id: 'nw29', date: '20/04/2018', title: 'Stick-on Displays: Bendy 2D Semiconductor is Fast Enough to Drive OLED Pixels', source: 'IEEE Spectrum', type: 'News', link: 'https://spectrum.ieee.org/nanoclast/semiconductors/nanotechnology/embargoed-stickon-displays-bendy-2d-semiconductor-made-fast-enough-to-drive-oled-pixels' },
  { id: 'nw30', date: '18/04/2018', title: '연세대, 2차원 물질 기반 광검출소자 개발', source: '천지일보', type: 'News', link: 'http://www.newscj.com/news/articleView.html?idxno=513264' },
  { id: 'nw31', date: '03/07/2017', title: '세상을 바꾸는 시간, 15분 강연', source: 'CBS', type: 'News', link: 'http://www.cbs.co.kr/tv/pgm/vod.asp?pname=view&num=312016&pgm=1701&mcd=_REVIEW_&pgm2=&pgm_key=cbs15min' },
  { id: 'nw32', date: '04/08/2016', title: '전자피부로 활용 가능한 초박막 투명-유연 촉각센서 개발', source: '연합뉴스', type: 'News', link: 'http://www.yonhapnews.co.kr/bulletin/2018/05/09/0200000000AKR20180509069100063.HTML?input=1195m' },
  { id: 'nw33', date: '21/10/2015', title: '논문의 질(피인용)이 높은 공학분야 연구자 3위 선정', source: '중앙일보', type: 'News', link: 'http://graphene.yonsei.ac.kr/publications/2016/joong.pdf' },
  { id: 'nw34', date: '30/03/2014', title: '그래핀 결함 효율적 분석 기술 개발', source: 'SBS뉴스, 전자신문, 연합뉴스 등', type: 'News', link: 'http://news.sbs.co.kr/news/endPage.do?news_id=N1002319496' },
  { id: 'nw35', date: '01/07/2014', title: 'Dual-function graphene-based electronic devices', source: 'SPIE', type: 'News', link: 'http://spie.org/newsroom/5193-dual-function-graphene-based-electronic-devices' },
  { id: 'nw36', date: '13/12/2012', title: 'Rigid Electronics Stretch to New Lengths', source: 'Materials360 Online', type: 'News', link: 'http://graphene.yonsei.ac.kr/upload_hi/pdf_hi/pdf%ED%8C%8C%EC%9D%BC%EB%AA%85' },
  { id: 'nw37', date: '30/11/2011', title: 'Stretchy graphene transistors', source: 'Nature article: Materials science', type: 'News', link: 'http://www.nature.com/nature/journal/v480/n7375/full/480009f.html' },
  { id: 'nw38', date: '26/10/2011', title: 'Stretchable graphene transistors overcome limitations of other materials', source: 'PHYSORG', type: 'News' },
  { id: 'nw39', date: '14/06/2011', title: '그래핀 고체윤활막 개발', source: '연합뉴스', type: 'News' },
  { id: 'nw40', date: '11/04/2011', title: 'Microactuators: Graphene on dragonfly wings', source: 'Nature asia-pacific', type: 'News', link: 'http://www.nature.com/am/journal/2011/201104/full/am201181a.html' },
  { id: 'nw41', date: '11/04/2011', title: '2011 한국을 이끄는 혁신리더 선정', source: 'NewsMaker', type: 'News' },
  { id: 'nw42', date: '26/01/2011', title: 'Interview', source: '주간조선', type: 'News', link: 'http://weekly.chosun.com/client/news/viw.asp?ctcd=C05&nNewsNumb=002145100025' },
  { id: 'nw43', date: '26/01/2011', title: 'Commercialization of graphene', source: '아이뉴스24', type: 'News', link: 'http://news.inews24.com/php/news_view.php?g_serial=546045&g_menu=020200' },
  { id: 'nw44', date: '26/04/2010', title: 'Mechanically flexible thin film transistors and logic gates on plastic substrates', source: 'Applied Physics Letters, 한겨레, 연합뉴스 등', type: 'News' },
  { id: 'nw45', date: '24/12/2010', title: '2010 SKKU 10 News', source: '성균관대학교', type: 'News', link: 'http://graphene.yonsei.ac.kr/upload_hi/pdf_hi/2010%20SKKU%2010%20News' },
  { id: 'nw46', date: '22/12/2010', title: 'Miracle material, Graphene', source: '아시아경제', type: 'News', link: 'http://www.asiae.co.kr/news/view.htm?idxno=2010122210234436377' },
  { id: 'nw47', date: '14/12/2010', title: '10 news of science & technology', source: '서울신문', type: 'News', link: 'http://www.seoul.co.kr/news/newsView.php?id=20101214023003' },
  { id: 'nw48', date: '08/10/2010', title: 'Next generation material, Graphene', source: '매일경제', type: 'News', link: 'http://news.mk.co.kr/newsReadPrint.php?year=2010&no=540003' },
  { id: 'nw49', date: '23/08/2010', title: 'People & People', source: '주간동아', type: 'News', link: 'http://weekly.donga.com/List/3/all/11/90580/1' },
  { id: 'nw50', date: '22/07/2010', title: '3-dimentional packaging', source: '중앙일보', type: 'News', link: 'http://news.joins.com/article/4329527' },
  { id: 'nw51', date: '21/06/2010', title: 'Roll-to-roll production of 30-inch graphene films', source: 'Nature Nanotechnology, BBC 등', type: 'News' },
  { id: 'nw52', date: '27/02/2009', title: '2008 SKKU-Young Fellow 수상', source: '성균관대학교', type: 'News', link: 'http://www.skku.edu/e-home-s/news/popup_notice.jsp?mode=read&physical_num=11528' },
  { id: 'nw53', date: '21/08/2008', title: 'Flexible and Stretchable and Transparent Integrated Circuits', source: '한겨레', type: 'News', link: 'http://www.hani.co.kr/popups/print.hani?ksn=305713' },
  { id: 'nw54', date: '03/04/2008', title: 'Bendy Electronics', source: 'Nature', type: 'News', link: 'http://graphene.yonsei.ac.kr/upload_hi/pdf_hi/Bendy%20Electronics' },
  { id: 'nw55', date: '28/03/2008', title: 'Stretchable and Foldable Integrated Circuits', source: '조선일보, 동아일보 등', type: 'News' },
  { id: 'nw56', date: '27/03/2008', title: 'Silicon chips stretch into shape', source: '영국 BBC', type: 'News', link: 'http://news.bbc.co.uk/2/hi/technology/7313203.stm' },
  { id: 'nw57', date: '01/03/2008', title: 'Printing CMOS on Plastic', source: 'IEEE Spectrum', type: 'News', link: 'http://graphene.yonsei.ac.kr/upload_hi/pdf_hi/Printing%20CMOS%20on%20Plastic' },
  { id: 'nw58', date: '01/05/2007', title: 'Bendable Integrated Circuits on Plastic Substrates', source: 'Applied Physics Letters', type: 'News' },
  { id: 'nw59', date: '30/12/2006', title: 'Top advances in Nanotechnology for 2006', source: 'MIT Technology Review', type: 'News', link: 'https://www.technologyreview.com/s/407049/the-year-in-nanotech/' },
  { id: 'nw60', date: '22/12/2006', title: 'Mix n Match Flexible Circuitry May Brighten Cell Phone', source: 'Scientific American', type: 'News', link: 'http://www.scientificamerican.com/article/mix-n-match-flexible-circ/' },
  { id: 'nw61', date: '18/12/2006', title: 'Stamping Electronics', source: 'Chemical & Engineering News', type: 'News', link: 'http://graphene.yonsei.ac.kr/upload_hi/pdf_hi/Stamping%20Electronics' },
  { id: 'nw62', date: '15/12/2006', title: 'New Semiconductor Technology Created', source: 'United Press International', type: 'News', link: 'http://graphene.yonsei.ac.kr/upload_hi/pdf_hi/New%20Semiconductor%20Technology%20Created' }
];