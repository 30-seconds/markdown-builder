/**
 * Misc
 * @flow
 */

import {
  HORIZONTAL_RULE,
  SECTION_LINE_BREAK,
  surround,
  LINE_BREAK
} from '../util';

const hr = () => surround(SECTION_LINE_BREAK, HORIZONTAL_RULE);

const collapsible = (summary: string, content: string) =>
  SECTION_LINE_BREAK +
  `
<details>
  <summary>${summary}</summary>
  ${content}
</details>
` +
  LINE_BREAK;

const anchor = (val: string) =>
  val
    .trim()
    .toLowerCase()
    .replace(/[^\w\- ]+/g, '')
    .replace(/\s/g, '-')
    .replace(/\-+$/, '');

const link = (title: string, url: string|null = null) => {
  if (url === null) {
    url = anchor(title);
  }
  return `[${title}](${url})`;
};

export {
  hr,
  collapsible,
  anchor,
  link
};