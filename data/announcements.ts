export type Announcement = {
  slug: string;
  title: string;
  type: string;
  category: string;
  date: string;
  summary: string;
  body: string;
  featured?: boolean;
};

export const announcements: Announcement[] = [
  {
    slug: 'evening-support-hours',
    title: 'RHEC expands evening student support hours',
    type: 'Campus Update',
    category: 'Student Services',
    date: 'March 12, 2026',
    summary: 'More time, more help, and more flexibility for students balancing education with busy lives.',
    body: 'Starting April 1, the Student Success Center will be open until 8:00 p.m. Monday through Thursday to better serve students with daytime work and family commitments. Advising, tutoring, and computer lab access will all be available during extended hours.',
    featured: true,
  },
  {
    slug: 'scholarship-applications',
    title: 'Foundation scholarship applications are now open',
    type: 'Scholarships',
    category: 'Foundation',
    date: 'March 5, 2026',
    summary: 'Eligible students can now apply for support for the 2026–2027 academic year.',
    body: 'The RHEC Foundation is accepting scholarship applications through April 30, 2026. Awards range from $500 to $2,500 and are available to students enrolled in credit programs at any RHEC member institution. Visit the Foundation page or stop by the Student Success Center to learn more and apply.',
    featured: true,
  },
  {
    slug: 'manufacturing-lab',
    title: 'New advanced manufacturing lab opens at RHEC',
    type: 'Programs',
    category: 'Workforce',
    date: 'February 19, 2026',
    summary: 'The lab supports hands-on workforce training in high-growth regional careers.',
    body: 'RHEC is proud to announce the opening of its expanded Advanced Manufacturing Lab, featuring CNC machining, robotic arm systems, and quality control stations. The lab was funded in part by a regional workforce grant and supports programs through Virginia Western Community College and RHEC Workforce Training.',
    featured: false,
  },
  {
    slug: 'spring-transfer-fair',
    title: 'Spring Transfer & Career Fair set for March 22',
    type: 'Event',
    category: 'Events',
    date: 'February 10, 2026',
    summary: 'Connect with four-year universities and regional employers at this annual event.',
    body: 'The Spring Transfer & Career Fair will be held March 22 from 10:00 a.m. to 2:00 p.m. in the Main Atrium. Over 30 colleges and employers will be represented, including Radford University, Virginia Tech, and regional healthcare and technology companies. Bring your resume and questions!',
    featured: false,
  },
  {
    slug: 'testing-center-update',
    title: 'Testing Center implements new scheduling system',
    type: 'Campus Update',
    category: 'Testing Center',
    date: 'January 28, 2026',
    summary: 'Students can now reserve testing appointments online up to two weeks in advance.',
    body: 'The RHEC Testing Center has implemented a new online scheduling platform for proctored exams and placement testing. Students can reserve appointments up to two weeks in advance at any time of day. Walk-in appointments will still be available on a limited basis. Contact the Testing Center for assistance.',
    featured: false,
  },
  {
    slug: 'parking-update',
    title: 'Lot B parking updates effective April 1',
    type: 'Campus Update',
    category: 'Campus',
    date: 'January 15, 2026',
    summary: 'Parking lot B will have new signage, lighting, and reserved spaces for evening students.',
    body: "Beginning April 1, Lot B will feature improved lighting, clearly marked visitor and reserved spaces, and designated areas for evening program students. Expanded accessible parking will also be added near the main entrance. These changes are part of RHEC's ongoing campus improvement initiative.",
    featured: false,
  },
];
