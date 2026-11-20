/**
 * hreflang set for the home page (US English, the default) and its UK twin at /uk/. Both
 * pages pass this same list to BaseLayout, so the alternates are reciprocal, as Google
 * requires. The US home page is the default for every other visitor.
 */
export const HOME_ALTERNATES = [
  { hreflang: 'en-US', href: '/' },
  { hreflang: 'en-GB', href: '/uk/' },
  { hreflang: 'x-default', href: '/' },
];
