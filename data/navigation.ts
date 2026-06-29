export type NavItem = { label: string; href: string };
export type NavGroup = { label: string; href: string; children?: NavItem[] };

export const primaryNav: NavGroup[] = [
  {
    label: 'About RHEC',
    href: '/about',
    children: [
      { label: 'Overview', href: '/about' },
      { label: 'Mission, Vision & Impact', href: '/about#mission' },
      { label: 'Member Institutions', href: '/about#members' },
      { label: 'Leadership', href: '/about#leadership' },
      { label: 'Building & Facilities', href: '/about#facilities' },
      { label: 'Directions & Parking', href: '/about#directions' },
      { label: 'Staff Directory', href: '/staff-directory' },
      { label: 'Announcements', href: '/announcements' },
    ],
  },
  {
    label: 'Degrees & Programs',
    href: '/degrees-programs',
    children: [
      { label: 'Program Finder', href: '/degrees-programs' },
      { label: 'Member Institutions', href: '/degrees-programs/member-institutions' },
      { label: 'Health Sciences', href: '/degrees-programs?subject=Health+Sciences' },
      { label: 'Technology', href: '/degrees-programs?subject=Technology' },
      { label: 'Business', href: '/degrees-programs?subject=Business' },
      { label: 'Education', href: '/degrees-programs?subject=Education' },
      { label: 'Social Sciences', href: '/degrees-programs?subject=Social+Sciences' },
      { label: 'Workforce Training', href: '/degrees-programs?subject=Workforce' },
    ],
  },
  {
    label: 'Student Services',
    href: '/student-services',
    children: [
      { label: 'Overview', href: '/student-services' },
      { label: 'Career & Workforce Training Center', href: '/student-services#workforce' },
      { label: 'Computer Lab', href: '/student-services#computer-lab' },
      { label: 'RHEC Library', href: '/student-services#library' },
      { label: 'Student Parking', href: '/student-services#parking' },
      { label: 'Student Success Center', href: '/student-services#success-center' },
      { label: 'Getting Started Guide', href: '/student-services#getting-started' },
    ],
  },
  {
    label: 'Testing Center',
    href: '/testing-center',
  },
  {
    label: 'Rent a Space',
    href: '/rent-a-space',
    children: [
      { label: 'Overview', href: '/rent-a-space' },
      { label: 'Classrooms', href: '/rent-a-space#classrooms' },
      { label: 'Computer Labs', href: '/rent-a-space#computer-labs' },
      { label: 'Conference Rooms', href: '/rent-a-space#conference-rooms' },
      { label: 'Equipment & Services', href: '/rent-a-space#equipment' },
      { label: 'Event Parking Validation', href: '/rent-a-space#parking' },
    ],
  },
  {
    label: 'RHEC Foundation',
    href: '/foundation',
    children: [
      { label: 'Foundation Overview', href: '/foundation' },
      { label: 'Scholarships', href: '/foundation#scholarships' },
      { label: 'Give Now', href: '#give-now-external' },
    ],
  },
];

export const utilityNav: NavItem[] = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'Staff Directory', href: '/staff-directory' },
  { label: 'Careers', href: '/contact#careers' },
  { label: 'Emergency Alerts', href: '/announcements' },
  { label: 'Privacy Policy', href: '/accessibility#privacy' },
];

export const footerNav = {
  explore: [
    { label: 'Degrees & Programs', href: '/degrees-programs' },
    { label: 'Student Services', href: '/student-services' },
    { label: 'Testing Center', href: '/testing-center' },
    { label: 'Rent a Space', href: '/rent-a-space' },
    { label: 'RHEC Foundation', href: '/foundation' },
  ],
  about: [
    { label: 'About RHEC', href: '/about' },
    { label: 'Announcements', href: '/announcements' },
    { label: 'Events Calendar', href: '/events' },
    { label: 'Staff Directory', href: '/staff-directory' },
    { label: 'Document Library', href: '/documents' },
  ],
  resources: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Accessibility Statement', href: '/accessibility' },
    { label: 'Emergency Alerts', href: '/announcements' },
    { label: 'Privacy Policy', href: '/accessibility#privacy' },
  ],
};
