import './popup-window.css';

const popupwindow = document.createElement('div');
popupwindow.classList.add('popup-window');
const btnclose = document.createElement('button');
btnclose.classList.add('Popup-window-close');
btnclose.innerHTML = '&times;';
// const addcomment = document.createElement('div');
// addcomment.classList.add('newcomment');

const popup = () => {
  const popdata = document.createElement('div');
  popdata.classList.add('pop-content');
  popdata.innerHTML = `
  <div class="Popup-window-Movie-details">
  <img src="../images/maxresdefault.jpg" alt="Image.jpg" width="250px"></img>
  <h2>NAME OF MOVIE</h2>
  <h4>MOVIE TYPE</h4>
  <p>MOVIE ACTORS</p>
  <h4>MOVIE CATAGORY</h4>
  <p class='country'> MOVIE COUNTRY </p>
  </div>
  <div class="commentform">
  <input type="text" class="username" placeholder="Your name" required >
  <textarea class="msg" name="msg" id="" cols="30" rows="6" placeholder="Your insights" required ></textarea>
  <button class="btncomment" type="button">Comment</button>
  </div>
  `;
  popupwindow.appendChild(btnclose);
  popupwindow.appendChild(popdata);
  return popupwindow;
};

btnclose.addEventListener('click', () => {
  popupwindow.style.display = 'none';
});

export default popup;