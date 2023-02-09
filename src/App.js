import Header from './components/Header.js';
import Footer from './components/Footer.js';
// import { popup, CommentForm } from './components/popup-window.js';
import popup from './components/popup-window.js';

const App = () => {
  document.body.appendChild(popup());
  // document.body.appendChild(CommentForm());
  document.body.appendChild(Header());
  document.body.appendChild(Footer());
};

export default App;