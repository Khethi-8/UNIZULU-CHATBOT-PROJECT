/**
 * Comprehensive Knowledge Base for University of Zululand (UNIZULU)
 * Grounded in official information from https://www.unizulu.ac.za
 */

export interface FacultyDegree {
  title: string;
  minAps: number;
  duration: string;
  keyRequirements: string;
  caoCode?: string;
  campus?: 'KwaDlangezwa' | 'Richards Bay' | 'Both';
  qualificationType?: 'Degree' | 'Diploma' | 'Postgraduate';
}


export interface CourseModule {
  code: string;
  title: string;
  department: string;
  semester: string;
  nqfLevel: number;
  credits: number;
  prerequisites?: string;
  coRequisites?: string;
}

export interface FacultyDetail {
  name: string;
  code: string;
  deanery: string;
  popularDegrees: FacultyDegree[];
  overview: string;
}

export const UNIZULU_FACULTIES: FacultyDetail[] = [
  {
    name: 'Faculty of Commerce, Administration and Law (CAL)',
    code: 'CAL',
    deanery: 'KwaDlangezwa & Richards Bay Campuses',
    overview: 'Prepares future attorneys, advocates, chartered accountants, economists, HR professionals, and public administrators.',
    popularDegrees: [
      {
        title: 'Bachelor of Laws (LLB)',
        minAps: 30,
        duration: '4 Years',
        keyRequirements: 'NSC Degree endorsement, English Home Language or FAL Level 5 (60%), Mathematical Literacy Level 4 or Maths Level 3.',
        caoCode: 'ZU-M-LLB',
        campus: 'KwaDlangezwa',
        qualificationType: 'Degree'
      },
      {
        title: 'Bachelor of Commerce in Accounting (SAICA Accredited)',
        minAps: 28,
        duration: '3 Years',
        keyRequirements: 'NSC Degree endorsement, Pure Mathematics Level 5 (60%), Accounting Level 4 (recommended), English Level 4.',
        caoCode: 'ZU-M-BCA',
        campus: 'KwaDlangezwa',
        qualificationType: 'Degree'
      },
      {
        title: 'Bachelor of Commerce in Business Management / Economics',
        minAps: 26,
        duration: '3 Years',
        keyRequirements: 'NSC Degree endorsement, Pure Mathematics Level 4 (50%) or Mathematical Literacy Level 6 (70%), English Level 4.',
        caoCode: 'ZU-M-BCE',
        campus: 'KwaDlangezwa',
        qualificationType: 'Degree'
      },
      {
        title: 'Bachelor of Administration (Public Administration)',
        minAps: 26,
        duration: '3 Years',
        keyRequirements: 'NSC Degree endorsement, English Level 4, any business or social science subject.',
        caoCode: 'ZU-M-BPA',
        campus: 'KwaDlangezwa',
        qualificationType: 'Degree'
      },
      {
        title: 'Diploma in Accounting (Richards Bay Campus)',
        minAps: 22,
        duration: '3 Years',
        keyRequirements: 'NSC Diploma endorsement, English Level 4 (50%), Mathematics Level 3 (40%) or Math Literacy Level 5 (60%), Accounting recommended.',
        caoCode: 'ZU-R-DAC',
        campus: 'Richards Bay',
        qualificationType: 'Diploma'
      },
      {
        title: 'Diploma in Transport & Logistics Management',
        minAps: 22,
        duration: '3 Years',
        keyRequirements: 'NSC Diploma endorsement, English Level 4, Mathematics Level 3 or Math Lit Level 4.',
        caoCode: 'ZU-R-DTM',
        campus: 'Richards Bay',
        qualificationType: 'Diploma'
      },
      {
        title: 'Diploma in Public Relations Management',
        minAps: 22,
        duration: '3 Years',
        keyRequirements: 'NSC Diploma endorsement, English Level 4 (50%), any three Level 3 subjects.',
        caoCode: 'ZU-R-DPR',
        campus: 'Richards Bay',
        qualificationType: 'Diploma'
      },
      {
        title: 'Diploma in Cooperative Management',
        minAps: 22,
        duration: '3 Years',
        keyRequirements: 'NSC Diploma endorsement, English Level 4 (50%), Mathematical Literacy Level 4 or Maths Level 3, Business/Accounting recommended.',
        caoCode: 'ZU-R-DCM',
        campus: 'Richards Bay',
        qualificationType: 'Diploma'
      },
      {
        title: 'Diploma in Management Information Systems',
        minAps: 22,
        duration: '3 Years',
        keyRequirements: 'NSC Diploma endorsement, English Level 4, Mathematics Level 3 or Math Lit Level 4, CAT/IT advantageous.',
        caoCode: 'ZU-R-MIS',
        campus: 'Richards Bay',
        qualificationType: 'Diploma'
      },
      {
        title: 'Higher Certificate in Accountancy',
        minAps: 20,
        duration: '1 Year',
        keyRequirements: 'NSC Higher Certificate endorsement, English Level 4, Mathematics Level 3 or Math Lit Level 4.',
        caoCode: 'ZU-R-HCA',
        campus: 'Richards Bay',
        qualificationType: 'Diploma'
      }
    ]
  },
  {
    name: 'Faculty of Science, Agriculture and Engineering (SAE)',
    code: 'SAE',
    deanery: 'KwaDlangezwa & Richards Bay Campuses',
    overview: 'Pioneering innovation in natural sciences, computing, agriculture, food security, environmental hydrology, and engineering technology.',
    popularDegrees: [
      {
            "title": "Bachelor of Science in Applied Mathematics and Computer Science (4BSC01)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). Pure Mathematics Level 5 (60%), English Level 4 (50%), Physical Science or Information Technology Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Applied Mathematics and Hydrology (4BSC02)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). Pure Mathematics Level 5 (60%), English Level 4 (50%), Physical Science Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Applied Mathematics and Mathematics (4BSC03)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). Pure Mathematics Level 5 (60%), English Level 4 (50%), Physical Science or IT or Life Sciences Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Applied Mathematics and Physics (4BSC04)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). Pure Mathematics Level 5 (60%), English Level 4 (50%), Physical Science Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Applied Mathematics and Statistics (4BSC05)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). Pure Mathematics Level 5 (60%), English Level 4 (50%), Physical Science or IT or Life Sciences Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Biochemistry and Botany (4BSC06)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). Pure Mathematics Level 4 (50%), English Level 4 (50%), Life Sciences Level 4 (50%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Biochemistry and Chemistry (4BSC07)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). Pure Mathematics Level 5 (60%), English Level 4 (50%), Physical Science Level 4 (50%), Life Sciences Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Biochemistry and Human Movement Science (4BSC08)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). English Level 4 (50%), Pure Mathematics Level 4 (50%), Physical Science Level 4 (50%), Life Sciences Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Biochemistry and Microbiology (4BSC09)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). Pure Mathematics Level 4 (50%), English Level 4 (50%), Life Sciences Level 4 (50%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Biochemistry and Zoology (4BSC10)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). English Level 4 (50%), Pure Mathematics Level 4 (50%), Life Sciences Level 4 (50%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Botany and Geography (4BSC11)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). Pure Mathematics Level 4 (50%), English Level 4 (50%), Life Sciences Level 4 (50%), Geography Level 4 (50%). Total Credits: 384.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Botany and Hydrology (4BSC12)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). English Level 4 (50%), Pure Mathematics Level 4 (50%), Physical Science Level 4 (50%), Life Sciences Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Botany and Microbiology (4BSC13)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). Pure Mathematics Level 4 (50%), English Level 4 (50%), Life Sciences Level 4 (50%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Botany and Zoology (4BSC14)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). Pure Mathematics Level 4 (50%), English Level 4 (50%), Life Sciences Level 4 (50%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Chemistry and Computer Science (4BSC15)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). Pure Mathematics Level 5 (60%), English Level 4 (50%), Physical Science Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Chemistry and Hydrology (4BSC16)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). English Level 4 (50%), Pure Mathematics Level 5 (60%), Physical Science Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Chemistry and Mathematics (4BSC17)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). Pure Mathematics Level 5 (60%), English Level 4 (50%), Physical Science Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Chemistry and Physics (4BSC18)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). Pure Mathematics Level 5 (60%), English Level 4 (50%), Physical Science Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Chemistry and Zoology (4BSC19)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). English Level 4 (50%), Pure Mathematics Level 5 (60%), Physical Science Level 4 (50%), Life Sciences Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Computer Science and Hydrology (4BSC20)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). English Level 4 (50%), Pure Mathematics Level 5 (60%), Physical Science Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Computer Science and Mathematics (4BSC21)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). Pure Mathematics Level 5 (60%), English Level 4 (50%), Physical Science or IT Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Computer Science and Physics (4BSC22)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). Pure Mathematics Level 5 (60%), English Level 4 (50%), Physical Science Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Computer Science and Statistics (4BSC23)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). Pure Mathematics Level 5 (60%), English Level 4 (50%), Physical Science or IT Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Geography and Hydrology (4BSC24)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). English Level 4 (50%), Geography Level 4 (50%), Physical Science Level 4 (50%), Pure Mathematics Level 5 (60% for Calculus) or Level 4 (50% other electives). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Geography and Physics (4BSC25)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). English Level 4 (50%), Geography Level 4 (50%), Pure Mathematics Level 5 (60%), Physical Science Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Geography and Statistics (4BSC26)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). English Level 4 (50%), Geography Level 4 (50%), Pure Mathematics Level 5 (60%), Physical Science Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Geography and Zoology (4BSC27)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). English Level 4 (50%), Pure Mathematics Level 4 (50%), Life Sciences Level 4 (50%), Geography Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Human Movement Science and Physics (4BSC28)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). English Level 4 (50%), Pure Mathematics Level 5 (60%), Physical Science Level 4 (50%), Life Sciences Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Human Movement Science and Zoology (4BSC29)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). English Level 4 (50%), Pure Mathematics Level 4 (50%), Physical Science Level 4 (50%), Life Sciences Level 4 (50%). (Note: Pipeline offering). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Hydrology and Microbiology (4BSC30)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). English Level 4 (50%), Pure Mathematics Level 4 (50%), Physical Science Level 4 (50%), Life Sciences Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Hydrology and Physics (4BSC31)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). English Level 4 (50%), Pure Mathematics Level 5 (60%), Physical Science Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Hydrology and Statistics (4BSC32)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). English Level 4 (50%), Pure Mathematics Level 5 (60%), Physical Science Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Hydrology and Zoology (4BSC33)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). English Level 4 (50%), Pure Mathematics Level 4 (50%), Physical Science Level 4 (50%), Life Sciences Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Mathematics and Physics (4BSC34)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). Pure Mathematics Level 5 (60%), English Level 4 (50%), Physical Science Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Mathematics and Statistics (4BSC35)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). Pure Mathematics Level 5 (60%), English Level 4 (50%), Physical Science or IT or Life Sciences Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Microbiology and Zoology (4BSC36)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). English Level 4 (50%), Pure Mathematics Level 4 (50%), Life Sciences Level 4 (50%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Microbiology and Human Movement Science (4BSC37)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points (excl. Life Orientation). English Level 4 (50%), Pure Mathematics Level 4 (50%), Physical Science Level 4 (50%), Life Sciences Level 4 (50%). Total Credits: 416.",
            "caoCode": "ZU-M-BSC",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Consumer Science in Hospitality and Tourism (4BSC56)",
            "minAps": 28,
            "duration": "3 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 4 (50%), Life Orientation Level 4 (50%). Focuses on food service, hospitality operations, culinary studies, tourism management. Exit NQF Level 7. Total Credits: 387.",
            "caoCode": "ZU-M-CSH",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Agriculture in Animal Science (4BSC50)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 4 (50%), Pure Mathematics Level 4 (50%), Agricultural Science or Life Science Level 4 (50%), Physical Science Level 3 (40%). Focuses on ruminant/monogastric nutrition, genetics, breeding, physiology. Exit NQF Level 8. Total Credits: 544.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Agriculture in Agribusiness & Management (4BSC51)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 4 (50%), Pure Mathematics Level 4 (50%), Agricultural Science or Life Science Level 4 (50%), Physical Science Level 3 (40%). Focuses on agricultural economics, farm planning, trade, marketing. Exit NQF Level 8. Total Credits: 544.",
            "caoCode": "ZU-M-BSM",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Science in Agriculture in Agronomy (4BSC52)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 4 (50%), Pure Mathematics Level 4 (50%), Agricultural Science or Life Science Level 4 (50%), Physical Science Level 3 (40%). Focuses on crop production, soil science, plant breeding, crop protection. Exit NQF Level 8. Total Credits: 544.",
            "caoCode": "ZU-M-BAG",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Consumer Science in Extension and Rural Development (4BSC55)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 4 (50%), Life Orientation Level 4 (50%), Life Sciences or Agricultural Sciences Level 4 (50%). Focuses on community nutrition, food security, household resource management. Exit NQF Level 7. Total Credits: 507.",
            "caoCode": "ZU-M-CSR",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Engineering in Electrical Engineering (5EEDG1)",
            "minAps": 30,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 30 NSC points. Pure Mathematics Level 5 (65%), Physical Sciences Level 5 (60%), English Home Language or FAL Level 4 (50%). Fully accredited under the Washington Accord & ECSA. Exit NQF Level 8. Total Credits: 576.",
            "caoCode": "ZU-R-EEE",
            "campus": "Richards Bay",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Engineering in Electrical Engineering and Computer Engineering (5EEDG2)",
            "minAps": 30,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 30 NSC points. Pure Mathematics Level 5 (65%), Physical Sciences Level 5 (60%), English Home Language or FAL Level 4 (50%). Washington Accord & ECSA accredited. Exit NQF Level 8. Total Credits: 576.",
            "caoCode": "ZU-R-EEC",
            "campus": "Richards Bay",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Engineering in Mechanical Engineering (5MEDG1)",
            "minAps": 30,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 30 NSC points. Pure Mathematics Level 5 (65%), Physical Sciences Level 5 (60%), English Home Language or FAL Level 4 (50%). Washington Accord & ECSA accredited. Exit NQF Level 8. Total Credits: 576.",
            "caoCode": "ZU-R-EME",
            "campus": "Richards Bay",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Engineering in Mechatronic Engineering (5MEDG2)",
            "minAps": 30,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 30 NSC points. Pure Mathematics Level 5 (65%), Physical Sciences Level 5 (60%), English Home Language or FAL Level 4 (50%). Washington Accord & ECSA accredited. Exit NQF Level 8. Total Credits: 576.",
            "caoCode": "ZU-R-EMC",
            "campus": "Richards Bay",
            "qualificationType": "Degree"
      },
      {
            "title": "Bachelor of Nursing (B.N.) [General Nursing and Midwifery] (4BSC60)",
            "minAps": 30,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 30 NSC points. English Home Language or FAL Level 4 (50%), Life Sciences Level 4 (50%), Mathematics Level 4 (50%) or Mathematical Literacy Level 6 (70%). Includes 4,000 hours SANC clinical experiential learning (R425). Exit NQF Level 8. Total Credits: 544.",
            "caoCode": "ZU-M-BNU",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "Diploma in Sport and Exercise Technology (4NDP01)",
            "minAps": 26,
            "duration": "3 Years",
            "keyRequirements": "NSC Diploma endorsement with at least 26 NSC points. 40% (Level 3) in four recognized NSC 20-credit subjects, English FAL Level 3 (40%) or English HL Level 4 (50%). Exit NQF Level 6. Total Credits: 360.",
            "caoCode": "ZU-M-DSE",
            "campus": "KwaDlangezwa",
            "qualificationType": "Diploma"
      },
      {
            "title": "Diploma in Hospitality Management (4SDIP02 / 4DIP02)",
            "minAps": 26,
            "duration": "3 Years",
            "keyRequirements": "NSC Diploma endorsement with at least 26 NSC points. 40% (Level 3) in four recognized NSC 20-credit subjects, English Level 4 (50%), Life Orientation Level 4 (50%). Includes 6 months Work Integrated Learning (WIL). Exit NQF Level 6. Total Credits: 360.",
            "caoCode": "ZU-R-DHM",
            "campus": "Richards Bay",
            "qualificationType": "Diploma"
      },
      {
            "title": "B.Sc. Applied Mathematics and Computer Science (Augmented) (4FBS01)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Physical Science Level 3 (40%). Extended first year curriculum over two years with double contact tuition. Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Applied Mathematics and Hydrology (Augmented) (4FBS02)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 3 (40%), Mathematics Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Applied Mathematics and Mathematics (Augmented) (4FBS03)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Applied Mathematics and Physics (Augmented) (4FBS04)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Biochemistry and Botany (Augmented) (4FBS06)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Physical Science Level 3 (40%), Life Sciences Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Biochemistry and Chemistry (Augmented) (4FBS07)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Physical Science Level 3 (40%), Life Sciences Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Biochemistry and Human Movement Science (Augmented) (4FBS08)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 3 (40%), Mathematics Level 3 (40%), Physical Science Level 3 (40%), Life Sciences Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Biochemistry and Microbiology (Augmented) (4FBS09)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. Mathematics Level 3 (40%), Life Sciences Level 3 (40%), Physical Science Level 3 (40%), English Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Biochemistry and Zoology (Augmented) (4FBS10)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 3 (40%), Mathematics Level 3 (40%), Life Sciences Level 3 (40%), Physical Sciences Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Botany and Geography (Augmented) (4FBS11)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Life Sciences Level 3 (40%), Physical Sciences Level 3 (40%), Geography Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Botany and Hydrology (Augmented) (4FBS12)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 3 (40%), Mathematics Level 3 (40%), Physical Science Level 3 (40%), Life Sciences Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Botany and Microbiology (Augmented) (4FBS13)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Life Sciences Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Botany and Zoology (Augmented) (4FBS14)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Life Sciences Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Chemistry and Computer Science (Augmented) (4FBS15)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Chemistry and Hydrology (Augmented) (4FBS16)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 3 (40%), Mathematics Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Chemistry and Mathematics (Augmented) (4FBS17)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Chemistry and Physics (Augmented) (4FBS18)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Chemistry and Zoology (Augmented) (4FBS19)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 3 (40%), Mathematics Level 3 (40%), Physical Science Level 3 (40%), Life Sciences Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Computer Science and Hydrology (Augmented) (4FBS20)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 3 (40%), Mathematics Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Computer Science and Mathematics (Augmented) (4FBS21)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Physical Science or IT Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Computer Science and Physics (Augmented) (4FBS22)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Computer Science and Statistics (Augmented) (4FBS23)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Geography and Hydrology (Augmented) (4FBS24)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 3 (40%), Geography Level 3 (40%), Mathematics Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Geography and Physics (Augmented) (4FBS25)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 3 (40%), Geography Level 3 (40%), Mathematics Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Geography and Statistics (Augmented) (4FBS26)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 3 (40%), Geography Level 3 (40%), Mathematics Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Geography and Zoology (Augmented) (4FBS27)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 3 (40%), Mathematics Level 3 (40%), Life Sciences Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Human Movement Science and Physics (Augmented) (4FBS28)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 3 (40%), Mathematics Level 3 (40%), Physical Science Level 3 (40%), Life Sciences Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Hydrology and Microbiology (Augmented) (4FBS30)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 3 (40%), Mathematics Level 3 (40%), Physical Science Level 3 (40%), Life Sciences Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Hydrology and Physics (Augmented) (4FBS31)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 3 (40%), Mathematics Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Hydrology and Statistics (Augmented) (4FBS32)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 3 (40%), Mathematics Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Hydrology and Zoology (Augmented) (4FBS33)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 3 (40%), Mathematics Level 3 (40%), Physical Science Level 3 (40%), Life Sciences Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Mathematics and Physics (Augmented) (4FBS34)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Mathematics and Statistics (Augmented) (4FBS35)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Microbiology and Zoology (Augmented) (4FBS36)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 3 (40%), Mathematics Level 3 (40%), Life Sciences Level 3 (40%), Physical Science Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Microbiology and Human Movement Science (Augmented) (4FBS37)",
            "minAps": 28,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 28 NSC points. English Level 3 (40%), Mathematics Level 3 (40%), Physical Science Level 3 (40%), Life Sciences Level 3 (40%). Total Credits: 416.",
            "caoCode": "ZU-M-BSA",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Applied Mathematics and Mathematics (Foundation) (4FSC03)",
            "minAps": 26,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 26 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Life Sciences Level 3 (40%), Physical Sciences Level 2 (30%). Foundational year with 4ACL110, 4FBL119, 4FCH119, 4FMH119, 4FPH119. Total Credits: 416.",
            "caoCode": "ZU-M-BSF",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Applied Mathematics and Physics (Foundation) (4FSC04)",
            "minAps": 26,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 26 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Life Sciences Level 3 (40%), Physical Sciences Level 2 (30%). Total Credits: 416.",
            "caoCode": "ZU-M-BSF",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Biochemistry and Botany (Foundation) (4FSC06)",
            "minAps": 26,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 26 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Life Sciences Level 3 (40%), Physical Sciences Level 2 (30%). Total Credits: 416.",
            "caoCode": "ZU-M-BSF",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Biochemistry and Chemistry (Foundation) (4FSC07)",
            "minAps": 26,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 26 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Life Sciences Level 3 (40%), Physical Sciences Level 2 (30%). Total Credits: 416.",
            "caoCode": "ZU-M-BSF",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Biochemistry and Microbiology (Foundation) (4FSC09)",
            "minAps": 26,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 26 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Life Sciences Level 3 (40%), Physical Sciences Level 2 (30%). Total Credits: 416.",
            "caoCode": "ZU-M-BSF",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Biochemistry and Zoology (Foundation) (4FSC10)",
            "minAps": 26,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 26 NSC points. English Level 3 (40%), Mathematics Level 3 (40%), Life Sciences Level 3 (40%), Physical Sciences Level 2 (30%). Total Credits: 416.",
            "caoCode": "ZU-M-BSF",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Botany and Microbiology (Foundation) (4FSC13)",
            "minAps": 26,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 26 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Life Sciences Level 3 (40%), Physical Sciences Level 2 (30%). Total Credits: 416.",
            "caoCode": "ZU-M-BSF",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Botany and Zoology (Foundation) (4FSC14)",
            "minAps": 26,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 26 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Life Sciences Level 3 (40%), Physical Sciences Level 2 (30%). Total Credits: 416.",
            "caoCode": "ZU-M-BSF",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Chemistry and Mathematics (Foundation) (4FSC17)",
            "minAps": 26,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 26 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Life Sciences Level 3 (40%), Physical Sciences Level 2 (30%). Total Credits: 416.",
            "caoCode": "ZU-M-BSF",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Chemistry and Physics (Foundation) (4FSC18)",
            "minAps": 26,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 26 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Life Sciences Level 3 (40%), Physical Sciences Level 2 (30%). Total Credits: 416.",
            "caoCode": "ZU-M-BSF",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Chemistry and Zoology (Foundation) (4FSC19)",
            "minAps": 26,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 26 NSC points. English Level 3 (40%), Mathematics Level 3 (40%), Life Sciences Level 3 (40%), Physical Sciences Level 2 (30%). Total Credits: 416.",
            "caoCode": "ZU-M-BSF",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Mathematics and Physics (Foundation) (4FSC34)",
            "minAps": 26,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 26 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Life Sciences Level 3 (40%), Physical Sciences Level 2 (30%). Total Credits: 416.",
            "caoCode": "ZU-M-BSF",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      },
      {
            "title": "B.Sc. Microbiology and Zoology (Foundation) (4FSC36)",
            "minAps": 26,
            "duration": "4 Years",
            "keyRequirements": "NSC Degree endorsement with at least 26 NSC points. Mathematics Level 3 (40%), English Level 3 (40%), Life Sciences Level 3 (40%), Physical Sciences Level 2 (30%). Total Credits: 416.",
            "caoCode": "ZU-M-BSF",
            "campus": "KwaDlangezwa",
            "qualificationType": "Degree"
      }
]
  },
  {
    name: 'Faculty of Education',
    code: 'EDU',
    deanery: 'KwaDlangezwa Campus',
    overview: 'One of the largest faculties, training high-caliber teachers and educational leaders across primary, secondary, and tertiary education.',
    popularDegrees: [
      {
        title: 'Bachelor of Education (B.Ed) Foundation Phase (Grades R-3)',
        minAps: 26,
        duration: '4 Years',
        keyRequirements: 'NSC Degree endorsement, English Level 4, isiZulu Level 4 (or approved indigenous language), Maths/Math Lit Level 3.',
        caoCode: 'ZU-M-EDF',
        campus: 'KwaDlangezwa',
        qualificationType: 'Degree'
      },
      {
        title: 'Bachelor of Education (B.Ed) Intermediate Phase (Grades 4-7)',
        minAps: 26,
        duration: '4 Years',
        keyRequirements: 'NSC Degree endorsement, English Level 4, two primary teaching subjects at Level 4.',
        caoCode: 'ZU-M-EDI',
        campus: 'KwaDlangezwa',
        qualificationType: 'Degree'
      },
      {
        title: 'Bachelor of Education (B.Ed) Senior Phase & FET (Grades 8-12)',
        minAps: 26,
        duration: '4 Years',
        keyRequirements: 'NSC Degree endorsement, English Level 4, two FET teaching major subjects (e.g. History, Physical Science, Accounting, Maths) at Level 4 or 5.',
        caoCode: 'ZU-M-EDS',
        campus: 'KwaDlangezwa',
        qualificationType: 'Degree'
      },
      {
        title: 'Postgraduate Certificate in Education (PGCE)',
        minAps: 0,
        duration: '1 Year',
        keyRequirements: 'An approved Bachelor’s degree with two recognized school teaching majors.',
        caoCode: 'ZU-M-PGC',
        campus: 'KwaDlangezwa',
        qualificationType: 'Postgraduate'
      }
    ]
  },
  {
    name: 'Faculty of Humanities and Social Sciences',
    code: 'HSS',
    deanery: 'KwaDlangezwa Campus',
    overview: 'Offers dynamic programmes in languages, social work, media studies, psychology, criminology, and sociology dedicated to human and community advancement.',
    popularDegrees: [
      {
        title: 'Bachelor of Social Work (BSW)',
        minAps: 28,
        duration: '4 Years',
        keyRequirements: 'NSC Degree endorsement, English Level 4 (50%), selection screening may apply.',
        caoCode: 'ZU-M-BSW',
        campus: 'KwaDlangezwa',
        qualificationType: 'Degree'
      },
      {
        title: 'Bachelor of Arts in Psychology',
        minAps: 26,
        duration: '3 Years',
        keyRequirements: 'NSC Degree endorsement, English Level 4 (50%).',
        caoCode: 'ZU-M-BAP',
        campus: 'KwaDlangezwa',
        qualificationType: 'Degree'
      },
      {
        title: 'Bachelor of Arts in Communication Science',
        minAps: 26,
        duration: '3 Years',
        keyRequirements: 'NSC Degree endorsement, English Level 4 (50%), Life Orientation Level 4.',
        caoCode: 'ZU-M-BAC',
        campus: 'KwaDlangezwa',
        qualificationType: 'Degree'
      },
      {
        title: 'Bachelor of Arts in Development Studies',
        minAps: 26,
        duration: '3 Years',
        keyRequirements: 'NSC Degree endorsement, English Level 4, any two social science subjects.',
        caoCode: 'ZU-M-BAD',
        campus: 'KwaDlangezwa',
        qualificationType: 'Degree'
      },
      {
        title: 'Bachelor of Arts in Correctional Studies / Criminology',
        minAps: 26,
        duration: '3 Years',
        keyRequirements: 'NSC Degree endorsement, English Level 4.',
        caoCode: 'ZU-M-BCS',
        campus: 'KwaDlangezwa',
        qualificationType: 'Degree'
      },
      {
        title: 'Diploma in Media Studies & Public Communication',
        minAps: 22,
        duration: '3 Years',
        keyRequirements: 'NSC Diploma endorsement, English Home Language or FAL Level 4 (50%), any three Level 3 subjects.',
        caoCode: 'ZU-R-DMS',
        campus: 'Richards Bay',
        qualificationType: 'Diploma'
      },
      {
        title: 'Diploma in Youth and Community Development',
        minAps: 22,
        duration: '3 Years',
        keyRequirements: 'NSC Diploma endorsement, English Level 4 (50%), Social Sciences or History Level 3.',
        caoCode: 'ZU-R-DYD',
        campus: 'Richards Bay',
        qualificationType: 'Diploma'
      }
    ]
  }
];

export const UNIZULU_CONTACTS = {
  website: 'https://www.unizulu.ac.za',
  admissionsEmail: 'admissions@unizulu.ac.za',
  generalEmail: 'info@unizulu.ac.za',
  switchboard: '+27 (0)35 902 6000',
  admissionsOfficePhone: '+27 (0)35 902 6030 / 6718',
  caoWebsite: 'https://www.cao.ac.za',
  caoPhone: '+27 (0)31 268 4444',
  nsfasWebsite: 'https://www.nsfas.org.za',
  kwaDlangezwaAddress: '1 Main Road, KwaDlangezwa, 3886, KwaZulu-Natal, South Africa',
  richardsBayAddress: 'Corner of Guldengracht & EShared Street, Arboretum, Richards Bay, 3900'
};

export const DOCUMENT_SUBMISSION_STEPS = [
  {
    step: 1,
    title: 'Certified Copy of Identity Document (ID)',
    description: 'A clear copy of your South African ID card/book (or valid Passport with study permit for international students). Must be certified by SAPS, Post Office, or a Commissioner of Oaths within the last 3 months.',
    tip: 'Ensure the certification date stamp and signature are clearly visible.'
  },
  {
    step: 2,
    title: 'Grade 11 Final Report or Matric / NSC Certificate',
    description: 'If you are currently in Grade 12, provide your official final Grade 11 end-of-year report. If you have completed Matric, provide your certified National Senior Certificate (NSC) or Statement of Results.',
    tip: 'Make sure your examination number and all subject achievement percentages are legible.'
  },
  {
    step: 3,
    title: 'CAO Application Fee Proof of Payment',
    description: 'UNIZULU undergraduate applications are submitted via CAO (Central Applications Office). Standard fee is R250 for on-time South African applicants, R470 for late applications, or R300 for international applicants.',
    tip: 'Pay via EasyPay at Shoprite/Checkers/Pick n Pay, or directly via credit card on www.cao.ac.za.'
  },
  {
    step: 4,
    title: 'Academic Records & Certificate of Conduct (Transfer Students)',
    description: 'If you studied previously at another university, TVET college, or higher education institution, submit an official stamped academic record and certificate of good conduct.',
    tip: 'Must be issued on official institutional letterhead.'
  },
  {
    step: 5,
    title: 'Proof of Residential Address (For Housing)',
    description: 'Utility bill, stamped letter from tribal authority / local ward councillor, or municipal account showing your home address if applying for student residences at KwaDlangezwa or Richards Bay.',
    tip: 'Needed for on-campus student housing allocation preference.'
  }
];

export const CAO_APPLICATION_GUIDE = [
  {
    phase: 'Step 1: Check Minimum Requirements',
    detail: 'Calculate your Admission Point Score (APS) and verify program-specific subject requirements (e.g. Pure Maths for BSc/BCom vs Math Lit for Humanities).'
  },
  {
    phase: 'Step 2: Visit CAO Portal',
    detail: 'Navigate to www.cao.ac.za and click "Apply Now". Create your profile or enter your existing CAO number if you previously registered.'
  },
  {
    phase: 'Step 3: Select UNIZULU Choices',
    detail: 'Search for UNIZULU programmes using the code prefix "ZU-" (e.g., ZU-M-LLB for LLB, ZU-M-BSC for Science). You can select multiple choices in order of preference.'
  },
  {
    phase: 'Step 4: Upload Required Documents',
    detail: 'Scan your certified ID, Grade 11/12 results, and submit them through the CAO upload portal in PDF or JPEG format (under 2MB per document).'
  },
  {
    phase: 'Step 5: Pay Fee and Track Status',
    detail: 'Use your CAO number as reference to pay the application fee. Track your admission decision online using the CAO tracking portal.'
  }
];

export const INITIAL_EVOLVED_QUERIES = [
  {
    id: 'eq-1',
    topic: 'Admission Requirements',
    question: 'What APS score do I need for Law (LLB) at UNIZULU?',
    frequency: 412,
    lastUpdated: 'Recently updated',
    category: 'Admissions' as const
  },
  {
    id: 'eq-2',
    topic: 'Document Submissions',
    question: 'How do I submit certified documents if I only have a smartphone scan?',
    frequency: 389,
    lastUpdated: 'Recently updated',
    category: 'Documents' as const
  },
  {
    id: 'eq-3',
    topic: 'CAO Process',
    question: 'How do I apply to UNIZULU through CAO with code ZU-?',
    frequency: 345,
    lastUpdated: 'Recently updated',
    category: 'CAO' as const
  },
  {
    id: 'eq-4',
    topic: 'Financial Aid',
    question: 'How does NSFAS link with my UNIZULU registration?',
    frequency: 298,
    lastUpdated: 'Recently updated',
    category: 'Financial Aid' as const
  },
  {
    id: 'eq-5',
    topic: 'Accommodation',
    question: 'When does UNIZULU residence application open for first years?',
    frequency: 264,
    lastUpdated: 'Recently updated',
    category: 'Housing' as const
  }
];


/**
 * Complete list of academic modules offered in the Faculty of Science, Agriculture and Engineering (SAE)
 * Sourced directly from the official UNIZULU Science Undergraduate Prospectus
 */
export const FSAE_MODULE_COURSES: CourseModule[] = [
  {
    "code": "4AMT111",
    "title": "Discrete Mathematics",
    "department": "Applied Mathematics",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 16,
    "coRequisites": "4MTH111"
  },
  {
    "code": "4BOT111",
    "title": "Introduction to Plant Cytology, Genetics and Physiology",
    "department": "Botany",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "4CHM111",
    "title": "General Chemistry 111",
    "department": "Chemistry",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "4CHM121",
    "title": "Basic Chemistry 121",
    "department": "Chemistry",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "4CHT111",
    "title": "Introduction to Hospitality Management",
    "department": "Consumer Sciences",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 15
  },
  {
    "code": "4CNS111",
    "title": "Household and Consumer Studies",
    "department": "Consumer Sciences",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 15
  },
  {
    "code": "4CPS111",
    "title": "Introductory Computing",
    "department": "Computer Science",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "4CPS121",
    "title": "Computer Literacy I",
    "department": "Computer Science",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "4GES111",
    "title": "Introduction to Physical and Environmental Geography",
    "department": "Geography and Environmental Studies",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "4HMS111",
    "title": "Human Movement Science 1A",
    "department": "Human Movement Science",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "4MTH111",
    "title": "Calculus I",
    "department": "Mathematics",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "4PHY111",
    "title": "Classical Mechanics and Properties of Matter",
    "department": "Physics",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 16,
    "coRequisites": "4MTH111"
  },
  {
    "code": "4PHY121",
    "title": "Classical Mechanics and Properties of Matter for Biological Sciences",
    "department": "Physics",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "4PHY131",
    "title": "Physics for Consumer Sciences",
    "department": "Physics",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 8
  },
  {
    "code": "4STT111",
    "title": "Elementary Statistics for Science Students",
    "department": "Statistics",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "4STT121",
    "title": "Mathematics and Statistics for Commerce Students",
    "department": "Statistics",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "4ZOL111",
    "title": "Introduction to Zoology I",
    "department": "Zoology",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "4ZOL121",
    "title": "Human Anatomy and Physiology I",
    "department": "Zoology",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "4AMT122",
    "title": "Further Discrete Mathematics",
    "department": "Applied Mathematics",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16
  },
  {
    "code": "4BOT112",
    "title": "Plant Morphology, Taxonomy and an Introduction to Mycology",
    "department": "Botany",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4BOT111"
  },
  {
    "code": "4CHM112",
    "title": "General Chemistry 112",
    "department": "Chemistry",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4CHM111"
  },
  {
    "code": "4CHM122",
    "title": "Basic Chemistry 122",
    "department": "Chemistry",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4CHM121"
  },
  {
    "code": "4CHM132",
    "title": "Chemistry for Consumer Sciences",
    "department": "Chemistry",
    "semester": "2",
    "nqfLevel": 5,
    "credits": 8
  },
  {
    "code": "4CFD112",
    "title": "Basic Food Preparation / Culinary Studies",
    "department": "Consumer Sciences",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 15,
    "coRequisites": "4CFH112"
  },
  {
    "code": "4CFH112",
    "title": "Food Hygiene and Safety",
    "department": "Consumer Sciences",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 15
  },
  {
    "code": "4CFS112",
    "title": "Introduction to Food Science",
    "department": "Consumer Sciences",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 15,
    "coRequisites": "4CFH112"
  },
  {
    "code": "4CNU112",
    "title": "Introduction to Human Nutrition",
    "department": "Consumer Sciences",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 15
  },
  {
    "code": "4CPS112",
    "title": "Introductory Systems Programming",
    "department": "Computer Science",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4CPS111"
  },
  {
    "code": "4CPS122",
    "title": "Computer Literacy II",
    "department": "Computer Science",
    "semester": "2",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "4GES112",
    "title": "Introduction to Human Geography",
    "department": "Geography and Environmental Studies",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16
  },
  {
    "code": "4HMS112",
    "title": "Human Movement Science 1B",
    "department": "Human Movement Science",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16
  },
  {
    "code": "4HYD112",
    "title": "Introduction to Geology",
    "department": "Hydrology",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16
  },
  {
    "code": "4MTH112",
    "title": "Calculus II",
    "department": "Mathematics",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4MTH111"
  },
  {
    "code": "4MTH122",
    "title": "Mathematics and Statistics for Earth and Life Sciences",
    "department": "Mathematics",
    "semester": "2",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "4PHY112",
    "title": "Nuclear Physics, Electromagnetism, Modern Physics",
    "department": "Physics",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16
  },
  {
    "code": "4PHY122",
    "title": "Nuclear Physics, Electromagnetism, Modern Physics for Biological Sciences",
    "department": "Physics",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16
  },
  {
    "code": "4STT112",
    "title": "Statistics for Science Students",
    "department": "Statistics",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4MTH112, 4STT111"
  },
  {
    "code": "4STT122",
    "title": "Elementary Statistics for Commerce Students",
    "department": "Statistics",
    "semester": "2",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "4ZOL112",
    "title": "Introduction to Zoology II",
    "department": "Zoology",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16
  },
  {
    "code": "4ZOL122",
    "title": "Human Anatomy and Physiology II",
    "department": "Zoology",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16
  },
  {
    "code": "4AAE211",
    "title": "Introduction to Extension and Rural Development",
    "department": "Agriculture",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16
  },
  {
    "code": "4AAG211",
    "title": "Introduction to Soil Science",
    "department": "Agriculture",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16
  },
  {
    "code": "4AAS211",
    "title": "Introduction to Animal Science",
    "department": "Agriculture",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "coRequisites": "4ZOL111"
  },
  {
    "code": "4AMT211",
    "title": "Dynamical Systems and Mathematical Modelling",
    "department": "Applied Mathematics",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4AMT122, 4MTH112",
    "coRequisites": "4MTH221"
  },
  {
    "code": "4BCH211",
    "title": "Biomolecules and Enzymology",
    "department": "Biochemistry & Microbiology",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4CHM121, 4CHM122"
  },
  {
    "code": "4BOT211",
    "title": "Plant Growth and Development, Floral Propagation",
    "department": "Botany",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4BOT111, 4BOT112"
  },
  {
    "code": "4CHM211",
    "title": "Analytical and Inorganic Chemistry 2",
    "department": "Chemistry",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4CHM111, 4CHM112, 4MTH111"
  },
  {
    "code": "4CFD211",
    "title": "Meal Planning and Management",
    "department": "Consumer Sciences",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 15,
    "prerequisites": "4CFS112/4CFD112, 4CFH112"
  },
  {
    "code": "4CFS211",
    "title": "Food Processing Technologies",
    "department": "Consumer Sciences",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 15,
    "prerequisites": "4CFH112, 4CFS112"
  },
  {
    "code": "4CNS211",
    "title": "Household Resource Management",
    "department": "Consumer Sciences",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 15,
    "prerequisites": "4CNS111"
  },
  {
    "code": "4CNU211",
    "title": "Nutrition in the Lifecycle",
    "department": "Consumer Sciences",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 15,
    "prerequisites": "4CNU112"
  },
  {
    "code": "4CPS211",
    "title": "Data Structures and Algorithms",
    "department": "Computer Science",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4CPS111, 4CPS112"
  },
  {
    "code": "4CPS221",
    "title": "Computer Architecture and Assemblers",
    "department": "Computer Science",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4CPS111"
  },
  {
    "code": "4CPS231",
    "title": "Computer Communications and Networks",
    "department": "Computer Science",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4CPS111"
  },
  {
    "code": "4GES211",
    "title": "Global Landforms and Cartography",
    "department": "Geography and Environmental Studies",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4GES111"
  },
  {
    "code": "4HMS211",
    "title": "Human Movement Science II A",
    "department": "Human Movement Science",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4HMS111, 4HMS112"
  },
  {
    "code": "4HYD211",
    "title": "Introduction to Surface Water Hydrology",
    "department": "Hydrology",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4GES111"
  },
  {
    "code": "4MTH221",
    "title": "Advanced Calculus",
    "department": "Mathematics",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4MTH111, 4MTH112"
  },
  {
    "code": "4MCB211",
    "title": "Prokaryotes Classification and Microbial Techniques",
    "department": "Biochemistry & Microbiology",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4CHM121, 4CHM122"
  },
  {
    "code": "4MCB221",
    "title": "Prokaryotes Structure and Environmental Microbiology",
    "department": "Biochemistry & Microbiology",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4CHM112/4CHM122"
  },
  {
    "code": "4PHY211",
    "title": "Mechanics, Special Relativity and Properties of Matter",
    "department": "Physics",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4PHY111, 4PHY112, 4MTH111, 4MTH112"
  },
  {
    "code": "4STT211",
    "title": "Distribution Theory",
    "department": "Statistics",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4STT112, 4MTH112",
    "coRequisites": "4MTH221"
  },
  {
    "code": "4ZOL211",
    "title": "Animal Anatomy and Physiology",
    "department": "Zoology",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4ZOL112"
  },
  {
    "code": "4AAE212",
    "title": "Introduction to Agricultural Economics & Farm Management",
    "department": "Agriculture",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16
  },
  {
    "code": "4AAE222",
    "title": "Extension Methods",
    "department": "Agriculture",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16
  },
  {
    "code": "4AAG212",
    "title": "Introduction to Crop Production",
    "department": "Agriculture",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4BOT111, 4BOT112"
  },
  {
    "code": "4AAS212",
    "title": "Principles of Animal Production",
    "department": "Agriculture",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "coRequisites": "4ZOL112"
  },
  {
    "code": "4AMT212",
    "title": "Introduction to Operations Research",
    "department": "Applied Mathematics",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4AMT122, 4MTH112",
    "coRequisites": "4MTH222"
  },
  {
    "code": "4BCH212",
    "title": "Metabolism",
    "department": "Biochemistry & Microbiology",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4CHM121, 4CHM122"
  },
  {
    "code": "4BCH222",
    "title": "Biochemistry: Principles and Techniques",
    "department": "Biochemistry & Microbiology",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4CHM121, 4CHM122"
  },
  {
    "code": "4BOT212",
    "title": "Plant Anatomy, Taxonomy and Biodiversity",
    "department": "Botany",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4BOT111, 4BOT112"
  },
  {
    "code": "4CHM212",
    "title": "Organic and Physical Chemistry 2",
    "department": "Chemistry",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4CHM111, 4CHM112, 4MTH111"
  },
  {
    "code": "4CFD212",
    "title": "Quantity Food Production",
    "department": "Consumer Sciences",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 15,
    "prerequisites": "4CFD112/4CFS112",
    "coRequisites": "4CFD211"
  },
  {
    "code": "4CFD222",
    "title": "Operation and Management of Food Services",
    "department": "Consumer Sciences",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 15,
    "prerequisites": "4CFD112"
  },
  {
    "code": "4CFS212",
    "title": "Food Product Development",
    "department": "Consumer Sciences",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 15
  },
  {
    "code": "4CHC212",
    "title": "Principles of Design and Interiors",
    "department": "Consumer Sciences",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 15
  },
  {
    "code": "4CNS212",
    "title": "Consumer and the Market",
    "department": "Consumer Sciences",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 15
  },
  {
    "code": "4CTC212",
    "title": "Clothing and Textiles I",
    "department": "Consumer Sciences",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 15
  },
  {
    "code": "4CPS212",
    "title": "Introductory Software Engineering",
    "department": "Computer Science",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4CPS112",
    "coRequisites": "4CPS211"
  },
  {
    "code": "4CPS232",
    "title": "Database and Information Management I",
    "department": "Computer Science",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4CPS111"
  },
  {
    "code": "4CPS242",
    "title": "Visual Application Development",
    "department": "Computer Science",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4CPS111"
  },
  {
    "code": "4GES212",
    "title": "Demographics, Health and Sustainable Development",
    "department": "Geography and Environmental Studies",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4GES112"
  },
  {
    "code": "4GES222",
    "title": "Hydrometeorology",
    "department": "Geography and Environmental Studies",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4GES111"
  },
  {
    "code": "4HMS212",
    "title": "Human Movement Science II (Biokinetics)",
    "department": "Human Movement Science",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4HMS111, 4HMS112"
  },
  {
    "code": "4HYD212",
    "title": "Introduction to Subsurface Hydrology",
    "department": "Hydrology",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4HYD112"
  },
  {
    "code": "4HYD222",
    "title": "Geographical Information Systems",
    "department": "Hydrology",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "coRequisites": "4GES211"
  },
  {
    "code": "4MTH222",
    "title": "Linear Algebra and Differential Equations",
    "department": "Mathematics",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4MTH111, 4MTH112"
  },
  {
    "code": "4MCB212",
    "title": "Microbial Growth and Medical Microbiology",
    "department": "Biochemistry & Microbiology",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4CHM121, 4CHM122",
    "coRequisites": "4MCB211"
  },
  {
    "code": "4PHY212",
    "title": "Modern Physics Photonics and Waves",
    "department": "Physics",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4PHY111, 4PHY112, 4MTH111, 4MTH112"
  },
  {
    "code": "4PHY222",
    "title": "Electromagnetism",
    "department": "Physics",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4PHY111, 4PHY112, 4MTH111, 4MTH112"
  },
  {
    "code": "4STT212",
    "title": "Statistical Inference",
    "department": "Statistics",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4STT112, 4MTH112",
    "coRequisites": "4STT211, 4MTH222"
  },
  {
    "code": "4ZOL212",
    "title": "Animal Diversity",
    "department": "Zoology",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4ZOL111"
  },
  {
    "code": "4AAE311",
    "title": "Farm Management and Record Keeping Systems",
    "department": "Agriculture",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4AAE212"
  },
  {
    "code": "4AAG311",
    "title": "Plant Propagation",
    "department": "Agriculture",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4AAG212, 4BOT211, 4BOT212"
  },
  {
    "code": "4AAS311",
    "title": "Farm Animal and Physiology",
    "department": "Agriculture",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16
  },
  {
    "code": "4AAS321",
    "title": "Animal Breeding",
    "department": "Agriculture",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4AAS211, 4AAS212"
  },
  {
    "code": "4AAS331",
    "title": "Animal Nutrition",
    "department": "Agriculture",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4AAS211, 4AAS212"
  },
  {
    "code": "4AMT321",
    "title": "Applied Mathematical Methods",
    "department": "Applied Mathematics",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16
  },
  {
    "code": "4AMT331",
    "title": "Tensor Analysis",
    "department": "Applied Mathematics",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16
  },
  {
    "code": "4BCH311",
    "title": "Gene Expression and Replication",
    "department": "Biochemistry & Microbiology",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4BCH212"
  },
  {
    "code": "4BCH321",
    "title": "Metabolic Regulation",
    "department": "Biochemistry & Microbiology",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4BCH212"
  },
  {
    "code": "4BOT311",
    "title": "Cytology, Genetics, and Plant Biochemistry",
    "department": "Botany",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4BOT211, 4BOT212"
  },
  {
    "code": "4BOT331",
    "title": "Plant Ecophysiology",
    "department": "Botany",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4BOT211, 4BOT212"
  },
  {
    "code": "4CHM311",
    "title": "Organic Chemistry 3",
    "department": "Chemistry",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4CHM212, 4MTH112"
  },
  {
    "code": "4CHM321",
    "title": "Physical Chemistry 3",
    "department": "Chemistry",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4CHM212, 4MTH112"
  },
  {
    "code": "4CFD311",
    "title": "Food and Beverage Management",
    "department": "Consumer Sciences",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 15,
    "prerequisites": "4CFD212"
  },
  {
    "code": "4CFD321",
    "title": "Food Marketing",
    "department": "Consumer Sciences",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 15
  },
  {
    "code": "4CFS311",
    "title": "Food Product Development",
    "department": "Consumer Sciences",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 15,
    "prerequisites": "4CFS112, 4CFS211"
  },
  {
    "code": "4CHC311",
    "title": "Housing Education and Environment",
    "department": "Consumer Sciences",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 15,
    "prerequisites": "4CNS211"
  },
  {
    "code": "4CHT319",
    "title": "Experiential Learning in Hospitality (Year-Length Course)",
    "department": "Consumer Sciences",
    "semester": "1 & 2",
    "nqfLevel": 7,
    "credits": 15,
    "prerequisites": "4CFD212"
  },
  {
    "code": "4CNU311",
    "title": "Community Nutrition and Food Security",
    "department": "Consumer Sciences",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 15,
    "prerequisites": "4CNU112"
  },
  {
    "code": "4CNU321",
    "title": "Therapeutic Nutrition",
    "department": "Consumer Sciences",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 15
  },
  {
    "code": "4CNU331",
    "title": "Nutrition Education and Training",
    "department": "Consumer Sciences",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 15,
    "prerequisites": "4CNU211"
  },
  {
    "code": "4CRM311",
    "title": "Research Methods",
    "department": "Consumer Sciences",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 15
  },
  {
    "code": "4CPS311",
    "title": "Advanced Programming Techniques",
    "department": "Computer Science",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4CPS211, 4CPS212"
  },
  {
    "code": "4CPS321",
    "title": "Systems Programming (OS and Compilers)",
    "department": "Computer Science",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4CPS211, 4CPS212"
  },
  {
    "code": "4CPS331",
    "title": "Database and Information Management II",
    "department": "Computer Science",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4CPS231"
  },
  {
    "code": "4GES311",
    "title": "Urban Environment and Recreation Planning",
    "department": "Geography and Environmental Studies",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4GES212"
  },
  {
    "code": "4GES321",
    "title": "Atmospheric Processes and Pollution",
    "department": "Geography and Environmental Studies",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4GES222"
  },
  {
    "code": "4GES331",
    "title": "Land Use and Natural Resources Management",
    "department": "Geography and Environmental Studies",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4GES211"
  },
  {
    "code": "4GES341",
    "title": "Climate Dynamics and Weather Variability and Prediction",
    "department": "Geography and Environmental Studies",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4GES222"
  },
  {
    "code": "4HMS311",
    "title": "Human Movement Science III A",
    "department": "Human Movement Science",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4HMS211, 4HMS212"
  },
  {
    "code": "4HMS321",
    "title": "Human Movement Science III C",
    "department": "Human Movement Science",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4HMS211, 4HMS212"
  },
  {
    "code": "4HYD311",
    "title": "Surface Water Hydrology",
    "department": "Hydrology",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4HYD211, 4STT122"
  },
  {
    "code": "4HYD321",
    "title": "Groundwater Hydrology",
    "department": "Hydrology",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4HYD212"
  },
  {
    "code": "4MTH311",
    "title": "Abstract Algebra",
    "department": "Mathematics",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16
  },
  {
    "code": "4MTH321",
    "title": "Real Analysis",
    "department": "Mathematics",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16
  },
  {
    "code": "4MCB311",
    "title": "Food Microbiology and Food Analysis",
    "department": "Biochemistry & Microbiology",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4MCB212"
  },
  {
    "code": "4MCB321",
    "title": "Immunology and Serology",
    "department": "Biochemistry & Microbiology",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4MCB212"
  },
  {
    "code": "4PHY311",
    "title": "Quantum and Statistical Physics",
    "department": "Physics",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4PHY211, 4PHY212"
  },
  {
    "code": "4PHY321",
    "title": "Electronic Circuits and Devices",
    "department": "Physics",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4PHY222"
  },
  {
    "code": "4STT311",
    "title": "Random Processes",
    "department": "Statistics",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4STT211, 4STT212"
  },
  {
    "code": "4STT321",
    "title": "Experimental Design",
    "department": "Statistics",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4STT211, 4STT212"
  },
  {
    "code": "4ZOL311",
    "title": "Animal Ecology I",
    "department": "Zoology",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4ZOL212"
  },
  {
    "code": "4ZOL321",
    "title": "Animal Ecology II / Ecophysiology",
    "department": "Zoology",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4ZOL212"
  },
  {
    "code": "4AAE312",
    "title": "Entrepreneurship, Co-Ops and Other Forms of Business Ownership",
    "department": "Agriculture",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16
  },
  {
    "code": "4AAE322",
    "title": "Principles of Production Economics",
    "department": "Agriculture",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4AAE212, 4AAG212"
  },
  {
    "code": "4AAG312",
    "title": "Plant Breeding",
    "department": "Agriculture",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4BOT211, 4BOT212"
  },
  {
    "code": "4AAG352",
    "title": "Crop Protection 3B",
    "department": "Agriculture",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "coRequisites": "4AAG321"
  },
  {
    "code": "4AAS312",
    "title": "Digestive Physiology",
    "department": "Agriculture",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16
  },
  {
    "code": "4AAS322",
    "title": "Animal Health",
    "department": "Agriculture",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4AAS211, 4AAS212"
  },
  {
    "code": "4AAS332",
    "title": "Pig and Poultry Production",
    "department": "Agriculture",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16
  },
  {
    "code": "4AMT312",
    "title": "Advanced Classical Mechanics",
    "department": "Applied Mathematics",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16
  },
  {
    "code": "4AMT322",
    "title": "Numerical Methods",
    "department": "Applied Mathematics",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16
  },
  {
    "code": "4BCH312",
    "title": "Recombinant DNA Technology",
    "department": "Biochemistry & Microbiology",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4BCH211"
  },
  {
    "code": "4BCH322",
    "title": "Biochemistry of Nutrition",
    "department": "Biochemistry & Microbiology",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4BCH211, 4BCH212"
  },
  {
    "code": "4BOT312",
    "title": "People and Plants",
    "department": "Botany",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4BOT211, 4BOT212"
  },
  {
    "code": "4BOT322",
    "title": "Plant Conservation and Management & Terrestrial Ecology",
    "department": "Botany",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4BOT211, 4BOT212"
  },
  {
    "code": "4CHM312",
    "title": "Inorganic Chemistry 3",
    "department": "Chemistry",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4CHM211, 4MTH112"
  },
  {
    "code": "4CHM322",
    "title": "Analytical Chemistry 3",
    "department": "Chemistry",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4CHM211, 4MTH112"
  },
  {
    "code": "4CFD312",
    "title": "Food Marketing",
    "department": "Consumer Sciences",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 15,
    "prerequisites": "4CFS112, 4CNU112, 4CNS212"
  },
  {
    "code": "4CHC312",
    "title": "Housing Education and Environment",
    "department": "Consumer Sciences",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 15,
    "prerequisites": "4CNS211"
  },
  {
    "code": "4CHT322",
    "title": "Hospitality Service Operations",
    "department": "Consumer Sciences",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 15,
    "prerequisites": "4CHT111"
  },
  {
    "code": "4CNS312",
    "title": "Gender, Development and Technology",
    "department": "Consumer Sciences",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 15,
    "prerequisites": "4CNS211"
  },
  {
    "code": "4CNU312",
    "title": "Nutrition Education and Training",
    "department": "Consumer Sciences",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 15,
    "prerequisites": "4CNU211"
  },
  {
    "code": "4CTC312",
    "title": "Clothing and Textiles II",
    "department": "Consumer Sciences",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 15,
    "prerequisites": "4CTC212"
  },
  {
    "code": "4CPS312",
    "title": "Distributed Systems Development",
    "department": "Computer Science",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4CPS211, 4CPS212"
  },
  {
    "code": "4CPS322",
    "title": "Final Year Project",
    "department": "Computer Science",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4CPS212, 4CPS242"
  },
  {
    "code": "4CPS332",
    "title": "Client / Server Computing",
    "department": "Computer Science",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4CPS112/4CPS242"
  },
  {
    "code": "4GES312",
    "title": "Environmental Management",
    "department": "Geography and Environmental Studies",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4GES212/4GES222"
  },
  {
    "code": "4GES322",
    "title": "Environmental Fieldwork and Research",
    "department": "Geography and Environmental Studies",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4GES211, 4GES212/4GES222"
  },
  {
    "code": "4HMS312",
    "title": "Human Movement Science III B",
    "department": "Human Movement Science",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4HMS211, 4HMS212"
  },
  {
    "code": "4HMS322",
    "title": "Human Movement Science III D",
    "department": "Human Movement Science",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4HMS211, 4HMS212"
  },
  {
    "code": "4HYD332",
    "title": "Hydrological Modelling",
    "department": "Hydrology",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4HYD211, 4HYD212"
  },
  {
    "code": "4HYD342",
    "title": "Water Resources Management",
    "department": "Hydrology",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4HYD211"
  },
  {
    "code": "4MTH312",
    "title": "Graph Theory",
    "department": "Mathematics",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16
  },
  {
    "code": "4MTH322",
    "title": "Complex Analysis",
    "department": "Mathematics",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16
  },
  {
    "code": "4MCB312",
    "title": "Environmental Influences on Micro-Organisms and Industrial Microbiology",
    "department": "Biochemistry & Microbiology",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4MCB212"
  },
  {
    "code": "4MCB322",
    "title": "Biotechnology",
    "department": "Biochemistry & Microbiology",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4MCB212"
  },
  {
    "code": "4PHY312",
    "title": "Nuclear Physics and Applications",
    "department": "Physics",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4PHY212"
  },
  {
    "code": "4PHY322",
    "title": "Solid State Physics and Materials Science",
    "department": "Physics",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4PHY211, 4PHY212"
  },
  {
    "code": "4STT312",
    "title": "Linear Models",
    "department": "Statistics",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4STT211, 4STT212"
  },
  {
    "code": "4STT322",
    "title": "Time Series",
    "department": "Statistics",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4STT211, 4STT212"
  },
  {
    "code": "4ZOL312",
    "title": "Animal Ecology II",
    "department": "Zoology",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4ZOL211"
  },
  {
    "code": "4ZOL322",
    "title": "Research Design & Application",
    "department": "Zoology",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4ZOL211"
  },
  {
    "code": "4MTH171",
    "title": "Calculus I for Engineers",
    "department": "Mathematical Sciences",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "4PHY171",
    "title": "General Physics A for Engineers",
    "department": "Physics",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "4MTH181",
    "title": "Engineering Mechanics",
    "department": "Mathematical Sciences",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 16,
    "prerequisites": "4MTH171(DP)"
  },
  {
    "code": "4CPS171",
    "title": "Introductory Computing for Engineers",
    "department": "Computer Science",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "5MEC111",
    "title": "Engineering Drawing",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 8
  },
  {
    "code": "4MTH172",
    "title": "Calculus II for Engineers",
    "department": "Mathematical Sciences",
    "semester": "2",
    "nqfLevel": 5,
    "credits": 16,
    "prerequisites": "4MTH171"
  },
  {
    "code": "4PHY172",
    "title": "General Physics B for Engineers",
    "department": "Physics",
    "semester": "2",
    "nqfLevel": 5,
    "credits": 16,
    "prerequisites": "4PHY171"
  },
  {
    "code": "5EEE112",
    "title": "Introduction to Engineering",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 5,
    "credits": 16,
    "prerequisites": "4MTH171"
  },
  {
    "code": "4CHM172",
    "title": "General Chemistry for Engineers",
    "department": "Chemistry",
    "semester": "2",
    "nqfLevel": 5,
    "credits": 16
  },
  {
    "code": "5MEC112",
    "title": "Introduction to Engineering Design",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 5,
    "credits": 8,
    "prerequisites": "5MEC111"
  },
  {
    "code": "4MTH271",
    "title": "Advanced Calculus for Engineers",
    "department": "Mathematical Sciences",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4MTH172"
  },
  {
    "code": "4CPS181",
    "title": "Introduction to Programming for Engineers",
    "department": "Computer Science",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4CPS171"
  },
  {
    "code": "5EEE211",
    "title": "Signals and Systems I",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "5EEE112"
  },
  {
    "code": "5EEE221",
    "title": "Analogue Electronic Design",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "5EEE112"
  },
  {
    "code": "5MEC231",
    "title": "Project Management",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 8
  },
  {
    "code": "4MTH272",
    "title": "Linear Algebra and Differential Equations for Engineers",
    "department": "Mathematical Sciences",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4MTH172"
  },
  {
    "code": "4PHY272",
    "title": "Electromagnetism for Engineers",
    "department": "Physics",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4PHY171, 4PHY172"
  },
  {
    "code": "5EEE212",
    "title": "Introduction to Power Engineering",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "5EEE112"
  },
  {
    "code": "5EEE222",
    "title": "Embedded Systems I",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "5EEE112"
  },
  {
    "code": "5EEE232",
    "title": "Professional Communications",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 8
  },
  {
    "code": "5MEC211",
    "title": "Mechanics of Solids I",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 12,
    "prerequisites": "4MTH172, 4MTH182"
  },
  {
    "code": "5MEC221",
    "title": "Materials Science in Engineering",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 6,
    "credits": 12,
    "prerequisites": "4MTH172, 4MTH182"
  },
  {
    "code": "5MEC212",
    "title": "Thermofluids I",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 12,
    "prerequisites": "4MTH172, 4MTH182"
  },
  {
    "code": "5MEC222",
    "title": "Dynamics I",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 16,
    "prerequisites": "4MTH172, 4MTH182"
  },
  {
    "code": "5MEC232",
    "title": "Mechanical Engineering Machine Element Design I",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 6,
    "credits": 12,
    "prerequisites": "5MEC112, 5MEC122, 4MTH181"
  },
  {
    "code": "5EEE311",
    "title": "Electromagnetic Engineering",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 12,
    "prerequisites": "4PHY272, 4MTH271"
  },
  {
    "code": "5EEE321",
    "title": "Electronic Devices and Circuits",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "5EEE221/5EEE231"
  },
  {
    "code": "5EEE331",
    "title": "Energy Conversion",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "5EEE212"
  },
  {
    "code": "5EEE341",
    "title": "Signals and Systems II",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "5EEE211/5EEE221"
  },
  {
    "code": "4STT171",
    "title": "Statistics for Engineers",
    "department": "Mathematical Sciences",
    "semester": "1",
    "nqfLevel": 5,
    "credits": 12,
    "prerequisites": "4MTH171, 4MTH172"
  },
  {
    "code": "5EEE312",
    "title": "Control Engineering",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "4MTH272, 5EEE221/5EEE231"
  },
  {
    "code": "5EEE322",
    "title": "Power Systems",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "5EEE212"
  },
  {
    "code": "5EEE332",
    "title": "Communications and Networks",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "5EEE221/5EEE231"
  },
  {
    "code": "5EEE342",
    "title": "Electrical Engineering Design",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 8,
    "prerequisites": "5EEE321, 5EEE331, 5EEE341"
  },
  {
    "code": "5EEE351",
    "title": "Embedded Systems II",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 12,
    "prerequisites": "5EEE222"
  },
  {
    "code": "5EEE352",
    "title": "Electrical Engineering and Computer Engineering Design",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 8,
    "prerequisites": "5EEE321, 5EEE341, 5EEE351"
  },
  {
    "code": "5MEC311",
    "title": "Mechanics of Solids II",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 12,
    "prerequisites": "5MEC211, 4MTH181"
  },
  {
    "code": "5MEC321",
    "title": "Thermofluids II",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 20,
    "prerequisites": "5MEC212"
  },
  {
    "code": "5MEC331",
    "title": "Machine Element Design II",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 8,
    "prerequisites": "5MEC232"
  },
  {
    "code": "5MEC341",
    "title": "Experimental Methods",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 7,
    "credits": 12
  },
  {
    "code": "5MEC312",
    "title": "Machine Element Design III",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 12,
    "prerequisites": "5MEC331(DP)"
  },
  {
    "code": "5MEC322",
    "title": "Dynamics II",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 16,
    "prerequisites": "5MEC222"
  },
  {
    "code": "5MEC332",
    "title": "Thermofluids III",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 12,
    "prerequisites": "5MEC321(DP)"
  },
  {
    "code": "5MEC342",
    "title": "Materials Under Stress",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 7,
    "credits": 8,
    "prerequisites": "5MEC221"
  },
  {
    "code": "5EEE411",
    "title": "Process Control and Instrumentation",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 8,
    "credits": 16,
    "prerequisites": "5EEE312"
  },
  {
    "code": "5EEE421",
    "title": "Engineering Systems Design",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 8,
    "credits": 16,
    "prerequisites": "5EEE342"
  },
  {
    "code": "5EEE441",
    "title": "Power Systems Engineering",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 8,
    "credits": 16,
    "prerequisites": "5EEE322"
  },
  {
    "code": "5EEE451",
    "title": "Telecommunications",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 8,
    "credits": 16,
    "prerequisites": "5EEE332"
  },
  {
    "code": "5EEE412",
    "title": "Professional Communication Studies",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 8,
    "credits": 12,
    "prerequisites": "5EEE241"
  },
  {
    "code": "5EEE422",
    "title": "New Venture Planning and Management",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 8,
    "credits": 12
  },
  {
    "code": "5EEE442",
    "title": "Industrial Ecology",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 8,
    "credits": 8
  },
  {
    "code": "5EEE452",
    "title": "Engineering Professionalism",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 8,
    "credits": 8,
    "prerequisites": "5EEE312, 5EEE322, 5EEE332"
  },
  {
    "code": "5EEE410",
    "title": "Electrical: Final Year Project",
    "department": "Engineering",
    "semester": "Year Module",
    "nqfLevel": 8,
    "credits": 40
  },
  {
    "code": "5MEC421",
    "title": "Product Design",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 8,
    "credits": 12,
    "prerequisites": "5MEC312"
  },
  {
    "code": "5MEC431",
    "title": "Systems Design",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 8,
    "credits": 12,
    "prerequisites": "5MEC311"
  },
  {
    "code": "5MEC441",
    "title": "Fundamentals of Control Systems",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 8,
    "credits": 12
  },
  {
    "code": "5MEC401",
    "title": "Asset Integrity Management",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 8,
    "credits": 12,
    "prerequisites": "5MEC322"
  },
  {
    "code": "5MEC481",
    "title": "Condition Monitoring",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 8,
    "credits": 12
  },
  {
    "code": "5MEC412",
    "title": "Professional Communication Studies",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 8,
    "credits": 12,
    "prerequisites": "5EEE232"
  },
  {
    "code": "5MEC422",
    "title": "New Venture Planning and Management",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 8,
    "credits": 12
  },
  {
    "code": "5MEC442",
    "title": "Industrial Ecology",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 8,
    "credits": 8
  },
  {
    "code": "5MEC452",
    "title": "Engineering Professionalism",
    "department": "Engineering",
    "semester": "2",
    "nqfLevel": 8,
    "credits": 12
  },
  {
    "code": "5MEC410",
    "title": "Mechanical: Final Year Project",
    "department": "Engineering",
    "semester": "Year Module",
    "nqfLevel": 8,
    "credits": 40
  },
  {
    "code": "5EEE431",
    "title": "Power Electronics and Machines",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 8,
    "credits": 16,
    "prerequisites": "5EEE331"
  },
  {
    "code": "5MEC471",
    "title": "Mechatronic Control and Instrumentation",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 8,
    "credits": 12
  },
  {
    "code": "5EEE471",
    "title": "Mechatronics Design",
    "department": "Engineering",
    "semester": "1",
    "nqfLevel": 8,
    "credits": 12
  }
];
