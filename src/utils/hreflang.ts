/**
 * hreflang set for the home page and its US-English twin (#29). Both pages pass this same
 * list to BaseLayout, so the alternates are reciprocal, as Google requires. The UK home
 * page stays the default for every other English-speaking visitor.
 */
export const HOME_ALTERNATES = [
  { hreflang: 'en-GB', href: '/' },
  { hreflang: 'en-US', href: '/us/' },
  { hreflang: 'x-default', href: '/' },
];
