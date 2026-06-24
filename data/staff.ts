export type StaffMember = {
  id: string;
  name: string;
  role: string;
  department: string;
  phone: string;
  email: string;
  location: string;
  bio?: string;
};

export const staff: StaffMember[] = [
  {
    id: 'maya-thompson',
    name: 'Maya Thompson',
    role: 'Director of Student Success',
    department: 'Student Services',
    phone: '(540) 767-6012',
    email: 'maya.thompson@rhec.edu',
    location: 'Room 115, RHEC Campus',
    bio: "Maya leads RHEC's student success initiatives including advising, tutoring, and transition support for new and continuing students.",
  },
  {
    id: 'daniel-brooks',
    name: 'Daniel Brooks',
    role: 'Facilities & Events Manager',
    department: 'Operations',
    phone: '(540) 767-6023',
    email: 'daniel.brooks@rhec.edu',
    location: 'Room 102, RHEC Campus',
    bio: 'Daniel oversees facility reservations, event support, and building operations at RHEC.',
  },
  {
    id: 'elena-ruiz',
    name: 'Elena Ruiz',
    role: 'Testing Center Coordinator',
    department: 'Testing Center',
    phone: '(540) 767-6038',
    email: 'elena.ruiz@rhec.edu',
    location: 'Testing Center, Room 130',
    bio: 'Elena manages scheduling, proctoring, and candidate support for all testing services at RHEC.',
  },
  {
    id: 'james-holley',
    name: 'James Holley',
    role: 'Executive Director',
    department: 'Administration',
    phone: '(540) 767-6001',
    email: 'james.holley@rhec.edu',
    location: 'Suite 400, RHEC Campus',
    bio: 'James provides strategic leadership for RHEC, overseeing partnerships with member institutions, community engagement, and campus operations.',
  },
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    role: 'Workforce Programs Coordinator',
    department: 'Workforce Training',
    phone: '(540) 767-6044',
    email: 'priya.nair@rhec.edu',
    location: 'Room 220, RHEC Campus',
    bio: 'Priya coordinates non-credit workforce training programs, employer partnerships, and regional career pipeline initiatives.',
  },
  {
    id: 'marcus-bell',
    name: 'Marcus Bell',
    role: 'IT Support Specialist',
    department: 'Technology Services',
    phone: '(540) 767-6055',
    email: 'marcus.bell@rhec.edu',
    location: 'Computer Lab, Room 140',
    bio: 'Marcus provides technical support for students, staff, and facility users, including computer lab access and AV equipment.',
  },
  {
    id: 'lisa-chen',
    name: 'Lisa Chen',
    role: 'Foundation Director',
    department: 'RHEC Foundation',
    phone: '(540) 767-6070',
    email: 'lisa.chen@rhec.edu',
    location: 'Suite 410, RHEC Campus',
    bio: 'Lisa oversees the RHEC Foundation, managing scholarship programs, donor relationships, and community fundraising initiatives.',
  },
  {
    id: 'tony-okafor',
    name: 'Tony Okafor',
    role: 'Library Services Coordinator',
    department: 'RHEC Library',
    phone: '(540) 767-6080',
    email: 'tony.okafor@rhec.edu',
    location: 'Library, Room 160',
    bio: 'Tony manages RHEC Library resources, research assistance services, and interlibrary loan coordination for students.',
  },
  {
    id: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    role: 'Communications & Marketing Manager',
    department: 'Administration',
    phone: '(540) 767-6015',
    email: 'sarah.mitchell@rhec.edu',
    location: 'Suite 400, RHEC Campus',
    bio: 'Sarah leads communications, marketing, and public outreach for RHEC, including website content and community partnerships.',
  },
];
