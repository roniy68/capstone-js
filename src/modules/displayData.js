import {
  getData, getLike, getMovie, pushLike, pushComment,
} from './util.js';
import updateComment from './displayComment.js';
import movieCount from './movieCounter.js';

const displayData = async () => {
  const home = document.querySelector('#home');
  // fetching the likes from the API
  const allLikes = await getLike();
  // fetching the movie data from the API
  const dataArray = await getData();

  // looping through the array
  dataArray.forEach((data, index) => {
    // filtering the like for the movie id
    const likes = allLikes.filter((like) => like.item_id === data.id);
    // creating a new div element
    const dataCard = document.createElement('div');
    dataCard.classList.add('container');
    dataCard.innerHTML = `<img src="${data.image.medium}" alt="${data.name}">
    <div class="caption">
    <span class="title">${data.name}</span>
    <i class="fa-regular fa-heart"></i>
    </div>
    <p id="like">${likes.length > 0 ? likes[0].likes : 0} Likes</p>
    <button id="film${index}">Comments</button>
    <button>Reservations</button>`;
    home.appendChild(dataCard);

    // updating likes on the home page
    const likeBtn = dataCard.querySelector('.fa-heart');
    likeBtn.onclick = () => {
      likeBtn.style.color = 'red';
      likeBtn.classList.remove('fa-regular');
      likeBtn.classList.add('fa-solid');
      pushLike(data.id);
      const like = dataCard.querySelector('#like');
      if (likes.length > 0) {
        like.innerHTML = `${likes[0].likes + 1} Likes`;
      } else {
        like.innerHTML = '1 Likes';
      }
    };

    // counting movies
    const countMovie1 = document.querySelector('#movie');
    const countMovie2 = document.querySelector('#counter');
    countMovie1.innerHTML = `Movies (${movieCount()})`;
    countMovie2.innerHTML = `Number of Movies and Series: ${movieCount()}`;

    // opening comment popup page
    const movieBtn = document.getElementById(`film${index}`);
    movieBtn.addEventListener('click', async () => {
      const comment = document.querySelector('.comment');
      comment.classList.remove('hide');
      const movie = await getMovie(data.id);

      comment.innerHTML = `
      <div class="comment-container">
        <div class="image">
            <img src="${movie.image.original}" id="picture" alt="${movie.name}">
            <span class="material-symbols-outlined close" id="closeBtn${index}">
                close
                </span>
        </div>
        <h2>${movie.name}</h2>
        <div class="properties">
            <div><b>Language:</b> ${movie.language}</div>
            <div><b>Average Rating:</b> ${movie.rating.average}</div>
            <div><b>Type:</b> ${movie.type}</div>
            <div><b>Date produced:</b> ${movie.premiered}</div>
            <div><b>Genres:</b> ${movie.genres[0]}, ${movie.genres[1]}</div>
            <div><b>Summary:</b> ${movie.summary}</div>
        </div>
        <section class="add_comment">
        <h3></h3>
        <div class="comments"></div>
        <h4>Add a comment</h4>
        <form action="">
            <div><input type="text" id="name" placeholder="Your name"></div>
            <div><textarea type="text" id="comments" placeholder="Your insights" maxlength="500"></textarea></div>
            <button type="submit" class="Btn" id="submitComment">Comment</button>
        </form>
        </section>
      </div>`;

      updateComment(movie.id);

      const inputName = document.getElementById('name');
      const inputComment = document.getElementById('comments');
      const submit = document.getElementById('submitComment');

      submit.addEventListener('click', async (event) => {
        event.preventDefault();
        // add new comment
        if (inputName.value !== '' && inputComment.value !== '') {
          await pushComment(movie.id, inputName.value, inputComment.value);

          inputName.value = '';
          inputComment.value = '';
        }

        updateComment(movie.id);
      });

      const closeMovie = document.querySelector(`#closeBtn${index}`);
      closeMovie.addEventListener('click', () => comment.classList.add('hide'));
    });
  });
};

export default displayData;