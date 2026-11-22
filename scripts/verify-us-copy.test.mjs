import test from 'node:test';
import assert from 'node:assert/strict';
import { findUkTerms } from './verify-us-copy.js';

test('flags UK wording in visible text and meta tags', () => {
  assert.deepEqual(findUkTerms('<p>Take the register, then run a grading. From £29.</p>').sort(), ['grading', 'register', '£']);
  assert.deepEqual(findUkTerms('<meta name="description" content="Class timetable and colour belts">').sort(), ['colour', 'timetable']);
  assert.deepEqual(findUkTerms('<p>Enrol in our programme at the centre. We organise it.</p>').sort(), ['centre', 'enrol', 'organise', 'programme']);
});
test('accepts US wording and near-misses', () => {
  assert.deepEqual(findUkTerms('<p>Schools enroll students, take attendance and schedule belt testing. $29.</p>'), []);
});
test('ignores script blocks and anything inside a data-uk element', () => {
  assert.deepEqual(findUkTerms('<script type="application/ld+json">{"a":"£29 grading"}</script>'), []);
  assert.deepEqual(findUkTerms('<p data-uk>UK schools pay £29 a month.</p><p>US schools pay $29.</p>'), []);
});
test('flags registration and registered as well as register', () => {
  assert.deepEqual(findUkTerms('<p>Online registration is open.</p>'), ['register']);
  assert.deepEqual(findUkTerms('<p>Registered students only.</p>'), ['register']);
  assert.deepEqual(findUkTerms('<p>Registering takes a minute.</p>'), ['register']);
});
test('accepts the allowed company-law phrases', () => {
  assert.deepEqual(findUkTerms('<p>Your LLC needs a registered agent. We are a UK-registered company and not VAT-registered. Registered Office: London. Published in the Federal Register.</p>'), []);
});
