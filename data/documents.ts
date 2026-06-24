export type Document = {
  id: string;
  title: string;
  category: string;
  audience: string;
  type: string;
  date: string;
  description: string;
  fileUrl: string;
};

export const documents: Document[] = [
  {
    id: 'student-parking-guide',
    title: 'Student Parking Guide',
    category: 'Campus Services',
    audience: 'Students',
    type: 'PDF',
    date: 'January 2026',
    description: 'Lot locations, parking pass procedures, accessible spaces, and evening student parking information.',
    fileUrl: '#demo-file',
  },
  {
    id: 'facility-rental-guide',
    title: 'Facility Rental Guide',
    category: 'Facilities',
    audience: 'Community',
    type: 'PDF',
    date: 'February 2026',
    description: 'Room capacities, available equipment, rental rates, and inquiry process for classrooms, labs, and conference rooms.',
    fileUrl: '#demo-file',
  },
  {
    id: 'testing-center-handbook',
    title: 'Testing Center Candidate Handbook',
    category: 'Testing',
    audience: 'Students',
    type: 'PDF',
    date: 'March 2026',
    description: 'Testing policies, accepted identification, scheduling procedures, and what to expect on test day.',
    fileUrl: '#demo-file',
  },
  {
    id: 'student-success-checklist',
    title: 'Student Success Checklist',
    category: 'Student Services',
    audience: 'Students',
    type: 'PDF',
    date: 'January 2026',
    description: 'Step-by-step guide for new students: enrollment, advising, financial aid, and campus orientation.',
    fileUrl: '#demo-file',
  },
  {
    id: 'scholarship-application',
    title: 'RHEC Foundation Scholarship Application',
    category: 'Foundation',
    audience: 'Students',
    type: 'PDF',
    date: 'February 2026',
    description: 'Application form and eligibility criteria for RHEC Foundation scholarships for the 2026–2027 academic year.',
    fileUrl: '#demo-file',
  },
  {
    id: 'campus-map',
    title: 'RHEC Campus Map & Directions',
    category: 'Campus Services',
    audience: 'All',
    type: 'PDF',
    date: 'January 2026',
    description: 'Floor-by-floor campus map, parking lot guide, accessible entrances, and driving directions.',
    fileUrl: '#demo-file',
  },
  {
    id: 'library-services-guide',
    title: 'RHEC Library Services Guide',
    category: 'Student Services',
    audience: 'Students',
    type: 'PDF',
    date: 'January 2026',
    description: 'Library hours, available databases, interlibrary loan process, and research assistance services.',
    fileUrl: '#demo-file',
  },
  {
    id: 'workforce-training-catalog',
    title: 'Workforce Training Program Catalog',
    category: 'Workforce',
    audience: 'Community',
    type: 'PDF',
    date: 'March 2026',
    description: 'Full catalog of non-credit workforce training courses, schedules, costs, and registration information.',
    fileUrl: '#demo-file',
  },
  {
    id: 'accessibility-plan',
    title: 'Campus Accessibility Plan',
    category: 'Accessibility',
    audience: 'All',
    type: 'PDF',
    date: 'October 2025',
    description: "RHEC's current plan for physical accessibility, digital access, and accommodations for students and visitors.",
    fileUrl: '#demo-file',
  },
  {
    id: 'emergency-procedures',
    title: 'Emergency Procedures & Campus Safety',
    category: 'Campus Services',
    audience: 'All',
    type: 'PDF',
    date: 'August 2025',
    description: 'Emergency notification procedures, evacuation routes, shelter-in-place guidance, and campus safety contacts.',
    fileUrl: '#demo-file',
  },
];
