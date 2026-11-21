#!/usr/bin/env node
/**
 * Post-build guard: finds UK-only wording in built HTML.
 * Pages in UK_PAGES are never scanned. Pages in PENDING_PAGES are not yet
 * converted to US English; later tasks delete entries as they convert.
 * Reads dist/ relative to process.cwd().
 */

import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

export const UK_PAGES = ['/uk/', '/switch/bmaba-club-manager/', '/terms/', '/privacy-policy/'];

export const PENDING_PAGES = [
  '/blog/adult-karate-classes-guide/',
  '/blog/best-martial-arts-self-defense/',
  '/blog/best-martial-arts-software/',
  '/blog/bjj-belts-order-complete-guide/',
  '/blog/bjj-blue-belt-guide/',
  '/blog/cost-to-open-gym/',
  '/blog/gym-crm-software-guide/',
  '/blog/gym-management-software-comparison/',
  '/blog/gym-owner-salary-guide/',
  '/blog/jiu-jitsu-belt-ranks/',
  '/blog/karate-belt-order-complete-guide/',
  '/blog/lead-generation-mma-gyms/',
  '/blog/martial-arts-belt-order-complete-guide/',
  '/blog/martial-arts-marketing-tips/',
  '/blog/member-retention-strategies/',
  '/blog/taekwondo-belts/',
  '/blog/types-of-martial-arts/',
];

const UK_PATTERNS = [
  [/£/i, '£'],
  [/\bgradings?\b/i, 'grading'],
  [/\bregisters?\b/i, 'register'],
  [/\btimetabl\w*/i, 'timetable'],
  [/\bcolour\w*/i, 'colour'],
  [/\borganis\w*/i, 'organise'],
  [/\bcentres?\b/i, 'centre'],
  [/\benrol(?!l)\w*/i, 'enrol'],
  [/\bprogrammes?\b/i, 'programme'],
];

function stripDataUk(html) {
  // Simple non-nested match on the same tag name; data-uk is only used on leaf elements.
  return html.replace(
    /<([a-z][a-z0-9]*)\b[^>]*\bdata-uk\b[^>]*>[\s\S]*?<\/\1>/gi,
    ''
  );
}

export function findUkTerms(html) {
  let text = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '');
  text = stripDataUk(text);
  // Keep meta content values visible to the scan.
  text = text.replace(/<meta\b[^>]*>/gi, (tag) => {
    const m = tag.match(/\bcontent=(?:"([^"]*)"|'([^']*)')/i);
    return m ? ' ' + (m[1] ?? m[2]) + ' ' : ' ';
  });
  text = text.replace(/<[^>]*>/g, ' ');
  return UK_PATTERNS.filter(([re]) => re.test(text)).map(([, term]) => term);
}

function walkHtml(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkHtml(full));
    } else if (entry.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

function filePathToPagePath(distDir, filePath) {
  const rel = path.relative(distDir, filePath).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'/index.html'.length) + '/';
  return '/' + rel.slice(0, -'.html'.length) + '/';
}

function main() {
  const distDir = path.join(process.cwd(), 'dist');
  if (!fs.existsSync(distDir)) {
    console.error('ERROR: dist/ directory not found. Run npm run build first.');
    process.exit(1);
  }

  const skip = new Set([...UK_PAGES, ...PENDING_PAGES]);
  let failures = 0;
  let checked = 0;

  for (const file of walkHtml(distDir)) {
    if (file.endsWith('404.html')) continue;
    const pagePath = filePathToPagePath(distDir, file);
    if (skip.has(pagePath) || pagePath.startsWith('/blog/tag/')) continue;
    checked++;
    const terms = findUkTerms(fs.readFileSync(file, 'utf8'));
    if (terms.length > 0) {
      console.error(`${pagePath}: ${terms.join(', ')}`);
      failures++;
    }
  }

  if (failures > 0) {
    console.error(`\nUS COPY CHECK FAILED — ${failures} page(s) contain UK wording`);
    process.exit(1);
  }
  console.log(`US copy check passed — ${checked} pages checked`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) main();
