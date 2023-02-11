/** @jest-environment jsdom */
import movieCount from '../modules/movieCounter.js';

describe('count movies on the home page', () => {
  document.body.innerHTML = `
  <div id="home">
    <div class="container"></div>
    <div class="container"></div>
    <div class="container"></div>
  </div>`;

  test('number of movies should be 4', () => {
    expect(movieCount()).toEqual(3);
  });
});