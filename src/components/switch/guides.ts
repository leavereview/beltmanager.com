/** The export guides (#30). One list, used by the hub, the related-guides block and the pricing page. */
export interface SwitchGuide {
  href: string;
  tool: string;
  title: string;
  blurb: string;
}

export const SWITCH_GUIDES: SwitchGuide[] = [
  {
    href: '/switch/martialytics/',
    tool: 'Martialytics',
    title: 'Export your students from Martialytics',
    blurb: 'A self-serve CSV from the Student List: active and inactive students separately.',
  },
  {
    href: '/switch/kicksite/',
    tool: 'Kicksite',
    title: 'Export your students from Kicksite',
    blurb: 'The Export button on Profiles → Students, plus a students-by-rank export.',
  },
  {
    href: '/switch/zen-planner/',
    tool: 'Zen Planner',
    title: 'Export your members from Zen Planner',
    blurb: 'A people report saved as CSV, and what to ask Zen Planner about payment data.',
  },
  {
    href: '/switch/bmaba-club-manager/',
    tool: 'BMABA Club Manager',
    title: 'Get your club data out of BMABA Club Manager',
    blurb: 'No published export steps, so: what to ask BMABA, and the manual route.',
  },
];
