/** @jest-environment jsdom */
import countComments from '../modules/commentCounter.js';

describe('count comment of a particular movie', () => {
  document.body.innerHTML = `
  <div class="comments">
    <div class="comment-text"></div>
    <div class="comment-text"></div>
    <div class="comment-text"></div>
    <div class="comment-text"></div>
  </div>`;

  test('number of comments should be 3', async () => {
    expect(countComments()).toEqual(4);
  });
});