export type CalendarEvent = {
  id: string;
  title: string;
  date: string;
  day: string;
  month: string;
  year: string;
  time: string;
  location: string;
  type: string;
  summary: string;
  ctaLabel?: string;
};

export const events: CalendarEvent[] = [
  {
    id: 'transfer-fair-mar',
    title: 'Transfer & Career Fair',
    date: '2026-03-22',
    day: '22',
    month: 'Mar',
    year: '2026',
    time: '10:00 a.m. – 2:00 p.m.',
    location: 'Main Atrium',
    type: 'Career',
    summary: 'Meet representatives from four-year universities and regional employers. Bring your resume and questions.',
    ctaLabel: 'Learn more',
  },
  {
    id: 'open-house-mar',
    title: 'Campus Open House',
    date: '2026-03-27',
    day: '27',
    month: 'Mar',
    year: '2026',
    time: '5:30 p.m. – 7:30 p.m.',
    location: 'RHEC Campus',
    type: 'Campus',
    summary: 'Explore the campus, meet staff, and learn about programs available through our member institutions.',
  },
  {
    id: 'financial-aid-apr',
    title: 'Financial Aid Workshop',
    date: '2026-04-04',
    day: '04',
    month: 'Apr',
    year: '2026',
    time: '6:00 p.m.',
    location: 'Student Success Center',
    type: 'Student Support',
    summary: 'Get help understanding FAFSA, scholarships, and financial aid options for the upcoming academic year.',
  },
  {
    id: 'nursing-info',
    title: 'Nursing Program Info Session',
    date: '2026-04-08',
    day: '08',
    month: 'Apr',
    year: '2026',
    time: '5:00 p.m. – 6:30 p.m.',
    location: 'Room 210, RHEC Campus',
    type: 'Program Info',
    summary: 'Learn about the ASN program, application requirements, and pathway to RN licensure from program faculty.',
  },
  {
    id: 'foundation-gala',
    title: 'RHEC Foundation Annual Celebration',
    date: '2026-04-17',
    day: '17',
    month: 'Apr',
    year: '2026',
    time: '6:00 p.m. – 9:00 p.m.',
    location: 'Conference Center A',
    type: 'Foundation',
    summary: 'Join us to celebrate scholarship recipients and supporters who make education access possible in our region.',
  },
  {
    id: 'cyber-workshop',
    title: 'Cybersecurity Career Workshop',
    date: '2026-04-22',
    day: '22',
    month: 'Apr',
    year: '2026',
    time: '4:00 p.m. – 6:00 p.m.',
    location: 'Computer Lab 1',
    type: 'Workforce',
    summary: 'Explore career paths in cybersecurity with industry professionals. Hands-on activities included.',
  },
  {
    id: 'spring-commencement',
    title: 'Spring Commencement Ceremony',
    date: '2026-05-15',
    day: '15',
    month: 'May',
    year: '2026',
    time: '2:00 p.m.',
    location: 'RHEC Main Hall',
    type: 'Campus',
    summary: 'Celebrate the achievements of graduating students from all RHEC partner institutions.',
  },
  {
    id: 'summer-registration',
    title: 'Summer Registration Opens',
    date: '2026-05-01',
    day: '01',
    month: 'May',
    year: '2026',
    time: 'All day',
    location: 'Online / RHEC Campus',
    type: 'Enrollment',
    summary: 'Summer registration is now open for credit and workforce training programs. Seats fill quickly.',
  },
];
