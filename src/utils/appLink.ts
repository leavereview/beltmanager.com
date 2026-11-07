/**
 * The one way to link from this site to the app (issue #28). Tags the link with UTMs so the
 * app can tie a sign-up to the page and call to action it came from. UTMs only ever go on
 * these outbound links, so no crawlable duplicate URLs appear on beltmanager.com.
 */
const APP_ORIGIN = 'https://app.beltmanager.com';

export interface AppLinkOptions {
  /** App path. Sign-up is the default; the same page creates an account and signs people in. */
  path?: string;
  /** Overrides utm_source (a landing page that wants its own source, such as `us-landing`). */
  source?: string;
  /** Overrides utm_medium (a tool rather than the site itself). */
  medium?: string;
  /** Overrides utm_campaign, which is otherwise the page slug (`belt-guide` for the belt hubs). */
  campaign?: string;
}

/** `/` is `home`, `/compare/kicksite/` is `compare-kicksite`. */
export function pageSlug(pathname: string): string {
  return pathname.replace(/^\/+|\/+$/g, '').replace(/\/+/g, '-') || 'home';
}

/**
 * @param pathname The page the link is on: `Astro.url.pathname` in a page or component.
 * @param cta Where the link sits on the page, such as `hero` or `nav-signup`.
 */
export function appLink(pathname: string, cta: string, options: AppLinkOptions = {}): string {
  const url = new URL(options.path ?? '/signin', APP_ORIGIN);
  // Every app link on the US landing page, nav and footer included, is attributed to it (#29).
  const defaultSource = pathname.startsWith('/us/') || pathname === '/us' ? 'us-landing' : 'beltmanager.com';
  url.searchParams.set('utm_source', options.source ?? defaultSource);
  url.searchParams.set('utm_medium', options.medium ?? 'site');
  url.searchParams.set('utm_campaign', options.campaign ?? pageSlug(pathname));
  url.searchParams.set('utm_content', cta);
  return url.href;
}
