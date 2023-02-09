import Header from './components/Header.js';
import Footer from './components/Footer.js';

const App = () => {
  document.body.appendChild(Header());
  document.body.appendChild(Footer());
};

export default App;