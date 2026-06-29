export type Institution = {
  slug: string;
  name: string;
  abbr: string;
  type: string;
  typeVariant: 'academic' | 'workforce';
  logo: string;
  description: string;
  detail: string;
  programs: string[];
  highlights?: string[];
  contact: { name?: string; email?: string; phone?: string };
  officialHref: string;
};

export const institutions: Institution[] = [
  {
    slug: 'appalachian-college-of-pharmacy',
    name: 'Appalachian College of Pharmacy',
    abbr: 'ACP',
    type: 'Graduate School',
    typeVariant: 'academic',
    logo: 'https://www.education.edu/wp-content/uploads/external/83f5c9a5a2c005145052b57b2e5ea677-2400x0-c-default.png',
    description:
      "Virginia's only three-year Doctor of Pharmacy program. In 2024 ACP expanded its offerings at RHEC to include an online Doctor of Public Health degree.",
    detail:
      'Appalachian College of Pharmacy (ACP) is Virginia\'s only three-year Doctor of Pharmacy Program. The college emphasizes preparing healthcare professionals to serve rural and underserved communities, particularly in Central Appalachia. At the Roanoke location, ACP delivers the second-year classroom instruction for its Doctor of Pharmacy degree. In 2024 ACP expanded to include online offerings in public health, giving the region access to advanced graduate health education without leaving the Roanoke Valley.',
    programs: ['Doctor of Pharmacy (Pharm.D.)', 'Doctor of Public Health (online)'],
    highlights: [
      "Virginia's only three-year Pharm.D. program",
      'Focus on rural and underserved community healthcare',
      'Expanded public health offerings added in 2024',
      'Students have full access to RHEC campus services',
    ],
    contact: { name: 'Dr. Andy Bowman', email: 'abowman@acp.edu', phone: '910-890-3340' },
    officialHref: 'https://www.acp.edu',
  },
  {
    slug: 'james-madison-university',
    name: 'James Madison University',
    abbr: 'JMU',
    type: 'Public University',
    typeVariant: 'academic',
    logo: 'https://www.education.edu/wp-content/uploads/external/ac8e52658b88df9dff80bb65fddbaa91-2400x0-c-default.png',
    description:
      'A public research university founded in 1908 in Harrisonburg, Virginia. JMU offers university-level programs at RHEC for students who want to stay close to the Roanoke region.',
    detail:
      'James Madison University is a public coeducational research university located in Harrisonburg, Virginia. At the Roanoke Higher Education Center, JMU provides both credit and non-credit programs delivered face-to-face and online, making university-level education accessible to students throughout the Roanoke Valley who prefer to study closer to home.',
    programs: ['Undergraduate credit programs', 'Graduate programs', 'Non-credit and continuing education'],
    highlights: [
      'Credit and non-credit options available',
      'Face-to-face and online delivery formats',
      'Full access to JMU student support resources',
      'Flexible scheduling for working adults',
    ],
    contact: { name: 'Sarah MacDonald', email: 'macdonsk@jmu.edu', phone: '540-568-4253' },
    officialHref: 'https://www.jmu.edu',
  },
  {
    slug: 'radford-university',
    name: 'Radford University',
    abbr: 'RU',
    type: 'Public University',
    typeVariant: 'academic',
    logo: 'https://www.education.edu/wp-content/uploads/external/5cef9c33266b9b1fd71b42eaf7a9a606-2400x0-c-default.png',
    description:
      'A charter RHEC member and one of the primary teaching institutions at the Center. Radford delivers approximately 75 credit courses at junior, senior, and graduate levels each semester.',
    detail:
      'Radford University is a charter member of the Roanoke Higher Education Center and one of its most active teaching partners. Each semester, Radford delivers approximately 75 credit courses at junior, senior, and graduate levels through a variety of delivery methods including live instruction, videoconference connections, online learning, and hybrid models. RU faculty hold doctorates or terminal degrees at a rate of 82%, ensuring rigorous academic standards. Students gain access to the McConnell Library, Center for Accessibility Services, Military Resource Center, Financial Aid Office, and a dedicated 25-station computer lab on-site at RHEC.',
    programs: [
      'Junior and senior-level baccalaureate courses',
      'Master of Social Work (MSW)',
      "Master's degrees and Educational Specialist programs",
      'Doctor of Education (Ed.D.)',
      'Bachelor of Science in Nursing',
      'Elementary Teacher Licensure',
      'Interdisciplinary Studies',
    ],
    highlights: [
      'Charter RHEC member since the Center opened',
      '~75 credit courses offered each semester',
      '82% of faculty hold terminal degrees',
      'Accredited by SACSCOC',
      'Recognized by Princeton Review and U.S. News & World Report',
    ],
    contact: { email: 'ruroanoke@radford.edu', phone: '540-767-6190' },
    officialHref: 'https://www.radford.edu',
  },
  {
    slug: 'region-5-adult-education',
    name: 'Region 5 Adult Education',
    abbr: 'Region 5',
    type: 'Adult Education',
    typeVariant: 'workforce',
    logo: 'https://www.education.edu/wp-content/uploads/external/adbb5c1e68b966cddcd00ad1f52a4ed2-2400x0-c-default.png',
    description:
      'Collaborates with local school divisions across Alleghany, Botetourt, and the Roanoke Valley to provide GED preparation and foundational academic skills instruction for adult learners.',
    detail:
      'Region 5 Adult Education operates across the Roanoke Valley–Alleghany region, partnering with local school divisions to deliver GED® preparation and Basic Academic Skills classes in seven counties and cities. English Language Acquisition courses operate at multiple sites throughout Roanoke City and County. The Roanoke Higher Education Center serves as the primary hub for GED® and ELA instruction and enrollment, and functions as the region\'s sole GED® testing facility for all Region 5 students. Region 5 also offers the National External Diploma Program, enabling adults to earn a high school diploma through portfolio submission.',
    programs: [
      'GED® Preparation',
      'Basic Academic Skills instruction',
      'HiSET preparation',
      'English Language Acquisition (ELA)',
      'National External Diploma Program',
    ],
    highlights: [
      'Primary GED testing site for the entire Region 5 service area',
      'Classes offered in seven counties and cities',
      'English Language Acquisition at multiple Roanoke sites',
      'Portfolio-based high school diploma pathway available',
    ],
    contact: { email: 'Region5AdultEd@rcps.info', phone: '1-888-622-7256' },
    officialHref: 'https://www.rcps.info',
  },
  {
    slug: 'roanoke-higher-education-center',
    name: 'Roanoke Higher Education Center',
    abbr: 'RHEC',
    type: 'Training Host',
    typeVariant: 'workforce',
    logo: 'https://www.education.edu/wp-content/uploads/external/a200175a706c59d344988c54316b8bbd-2400x0-c-default.png',
    description:
      'In addition to its role as the shared campus, RHEC hosts occupational safety training courses through partnerships with Mid Atlantic OTI and the Chesapeake Region Safety Council.',
    detail:
      'The Roanoke Higher Education Center is itself a Host Training Organization for the Mid Atlantic OTI Education Center and the Chesapeake Region Safety Council. Through these partnerships, RHEC delivers OSHA occupational safety and health training courses for workers and employers across the region. RHEC also hosts Certified Fiber Optic Technician training through New College Institute. These workforce safety programs complement the academic offerings of member institutions and directly serve the region\'s business and industry community.',
    programs: [
      'OSHA 10-Hour Construction Industry Outreach',
      'OSHA 30-Hour Construction Industry Outreach',
      'OSHA General Industry courses',
      'Certified Fiber Optic Technician (CFOT)',
      'Workplace safety certifications',
    ],
    highlights: [
      'Host Training Organization for Mid Atlantic OTI Education Center',
      'Partner with Chesapeake Region Safety Council',
      'Serves workers and employers across the region',
      'Complements academic programs with workforce safety training',
    ],
    contact: { name: 'Carla James', email: 'carla.james@education.edu', phone: '540-767-6010' },
    officialHref: 'https://www.education.edu',
  },
  {
    slug: 'sovah-school-of-health-professions',
    name: 'Sovah School of Health Professions',
    abbr: 'SOVAH',
    type: 'Health Professions',
    typeVariant: 'academic',
    logo: 'https://www.education.edu/wp-content/uploads/external/a182c84208ef1c77ef051d972afeceee-2400x0-c-default.jpg',
    description:
      'A private health professions school offering specialized programs that prepare students for careers in diagnostic imaging and cardiovascular technology.',
    detail:
      'Sovah School of Health Professions is a small private higher education institution offering three distinct Associate of Applied Science degree programs: Radiologic Technology, General Sonography, and Cardiovascular Sonography. All programs are full-time, two-year programs accredited through ABHES and SCHEV. The General Sonography program — covering abdominal-extended, obstetrics and gynecology, and vascular specializations — holds additional accreditation from the Commission on Accreditation of Allied Health Education Programs (CAAHEP). Admission is competitive and enrollment is limited, ensuring close faculty-student interaction throughout the program.',
    programs: [
      'Radiologic Technology (A.A.S.)',
      'General Sonography (A.A.S.) — abdominal, OB/GYN, and vascular',
      'Cardiovascular Sonography (A.A.S.)',
    ],
    highlights: [
      'ABHES-accredited programs',
      'General Sonography holds CAAHEP accreditation',
      'Full-time, two-year Associate of Applied Science degrees',
      'Competitive, limited-enrollment programs with close faculty contact',
    ],
    contact: { name: 'Holly Reese', email: 'holly.reese@lpnt.net', phone: '434-799-4548' },
    officialHref: 'https://www.sovahschoolofhealthprofessions.com',
  },
  {
    slug: 'total-action-for-progress',
    name: 'Total Action for Progress',
    abbr: 'TAP',
    type: 'Community Partner',
    typeVariant: 'workforce',
    logo: 'https://www.education.edu/wp-content/uploads/external/d2a11ee805443b5b37ef5f6e9351b36b-2400x0-c-default.jpg',
    description:
      'An anti-poverty community action agency providing integrated pathways to education, employment, affordable housing, and health services to support economic independence across Southwest Virginia.',
    detail:
      "Total Action for Progress (TAP) is an anti-poverty community action agency established in 1965, serving as the area's designated Community Action Agency. TAP maintains twelve education and career development programs through its This Valley Works (TVW) component, housed at the Roanoke Higher Education Center. Programs include test preparation and certification classes, coaching and advisory services, and job placement partnerships with local employers. TAP graduates approximately 500 students annually through its RHEC-based offerings.",
    programs: [
      'GED and career readiness preparation',
      'Job placement and employer partnerships',
      'Coaching and advisory services',
      'Certification and credential programs',
      'Workforce education and training',
    ],
    highlights: [
      'Established 1965 — the region\'s designated Community Action Agency',
      '12 education and career programs housed at RHEC',
      '~500 graduates per year through RHEC-based programs',
      'Connects education to employment, housing, and support services',
    ],
    contact: { name: 'Nicole Ross', email: 'nicole.ross@tapintohope.org', phone: '540-767-6220' },
    officialHref: 'https://www.tapintohope.org',
  },
  {
    slug: 'virginia-commonwealth-university',
    name: 'Virginia Commonwealth University',
    abbr: 'VCU',
    type: 'Research University',
    typeVariant: 'academic',
    logo: 'https://www.education.edu/wp-content/uploads/external/d4c617124f30d55d57a79c92c770eeb7-2400x0-c-default.jpg',
    description:
      "VCU extended its Department of Nurse Anesthesia graduate program to Roanoke in 2009, giving the region's healthcare professionals access to advanced clinical training close to home.",
    detail:
      "VCU's Department of Nurse Anesthesia extended its graduate offerings to Roanoke in 2009. The Doctor of Nurse Anesthesia Practice (DNAP) program delivers all didactic instruction via two-way synchronous telecommunications, allowing Roanoke students to participate alongside peers in Richmond, Abingdon, and Northern Virginia. Richmond-based faculty routinely travel to Roanoke to deliver lectures, meet with students, and visit clinical affiliates. Since the program's launch, the Roanoke site has graduated more than 20 practitioners who continue serving the region's healthcare needs.",
    programs: [
      'Doctor of Nurse Anesthesia Practice (DNAP)',
      'Graduate-level nursing anesthesia coursework',
    ],
    highlights: [
      'Roanoke site established 2009',
      'Delivered via two-way synchronous telecommunications',
      'Faculty travel to Roanoke for in-person instruction',
      '20+ graduates from the Roanoke site serving the region',
    ],
    contact: { name: 'Amanda Alley, M.S.', email: 'ahalley@vcu.edu', phone: '804-828-9808' },
    officialHref: 'https://www.vcu.edu',
  },
  {
    slug: 'virginia-tech',
    name: 'Virginia Tech',
    abbr: 'VT',
    type: 'Research University',
    typeVariant: 'academic',
    logo: 'https://www.education.edu/wp-content/uploads/external/3a672a17bae145c5ab7a666600007b5e-2400x0-c-default.png',
    description:
      "Offers academic degree programs and professional development opportunities through the Virginia Tech Roanoke Center and the Catawba Sustainability Center, extending the university's reach into Southwest Virginia.",
    detail:
      "Virginia Tech operates a Roanoke Center that serves as a gateway to the opportunities provided by one of Virginia's most prominent research institutions. The center awards approximately 70 degrees annually across master's, doctorate, and certificate programs. Fields of study include school administration, local government, engineering, and business. The Catawba Sustainability Center, a related initiative, provides agricultural outreach featuring sustainable farming techniques and a farmers market. VT also offers computer lab access, exam proctoring, video conferencing, and continuing education for regional professionals.",
    programs: [
      "Master's degree programs",
      'Doctoral programs',
      'Certificate programs',
      'Professional development and continuing education',
      'Catawba Sustainability Center programs',
    ],
    highlights: [
      '~70 degrees awarded annually from the Roanoke Center',
      'Programs in engineering, business, education, and local government',
      'Catawba Sustainability Center agricultural outreach',
      'Video conferencing and exam proctoring available on-site',
    ],
    contact: { name: 'Scott Weimer', email: 'weimers@vt.edu', phone: '540-767-6103' },
    officialHref: 'https://vtrc.vt.edu',
  },
  {
    slug: 'virginia-western-community-college',
    name: 'Virginia Western Community College',
    abbr: 'VWCC',
    type: 'Community College',
    typeVariant: 'academic',
    logo: 'https://www.education.edu/wp-content/uploads/external/744a3ab1ac84a24f82d84028324913a7-2400x0-c-default.png',
    description:
      'A two-year public institution in the Virginia Community College System offering affordable pathways to associate degrees, transfer preparation, and workforce credentials for learners in the Roanoke Valley.',
    detail:
      "Virginia Western Community College is a two-year public institution operating under the Virginia Community College System. With over 50 years of service to the Roanoke region, VWCC operates its Al Pollard Culinary Arts Program within the Claude Moore Education Complex at RHEC — a state-of-the-art facility that underwent substantial renovation and expansion in 2018. Beyond culinary arts, VWCC offers associate degrees, workforce credentials, and transfer pathways that provide affordable entry points into higher education for students across the Roanoke Valley.",
    programs: [
      'Al Pollard Culinary Arts Program (A.A.S.)',
      'Associate of Arts & Sciences (transfer pathway)',
      'Associate of Applied Science degrees',
      'Workforce certificates and credentials',
    ],
    highlights: [
      '50+ years serving the Roanoke region',
      'Al Pollard Culinary Arts facility renovated and expanded in 2018',
      'Claude Moore Education Complex at RHEC',
      'Affordable transfer and career pathways',
    ],
    contact: { name: 'Chef James Zeisler', email: 'jzeisler@virginiawestern.edu', phone: '540-857-6331' },
    officialHref: 'https://www.virginiawestern.edu',
  },
];
