export type Alert = {
  id: string;
  title: string;
  message: string;
  severity: "info" | "warning" | "urgent";
  active: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  startDate?: string;
  endDate?: string;
};

export const alerts: Alert[] = [
  // {
  //   id: 'testing-center-hours',
  //   title: 'Campus update',
  //   message: 'The Testing Center will open at 10:00 a.m. on Friday, March 21.',
  //   severity: 'info',
  //   active: true,
  //   ctaLabel: 'View details',
  //   ctaHref: '/testing-center',
  //   startDate: '2026-03-19',
  //   endDate: '2026-03-21',
  // },
  {
    id: "severe-weather",
    title: "Weather notice",
    message:
      "Campus is operating on a 2-hour delay Thursday, March 26 due to anticipated ice.",
    severity: "warning",
    active: false,
    ctaLabel: "Learn more",
    ctaHref: "/announcements",
  },
  {
    id: "emergency-drill",
    title: "Emergency drill",
    message:
      "A scheduled campus-wide emergency drill will take place Tuesday at 2:00 p.m.",
    severity: "info",
    active: false,
    ctaHref: "/announcements",
    ctaLabel: "View details",
  },
];

export function getActiveAlert(): Alert | null {
  return alerts.find((a) => a.active) ?? null;
}
