import './Footer.css';

const Footer = () => {
  const footer = document.createElement('div');
  footer.classList.add('footer');

  footer.innerHTML = ` 
  <footer>
  <div class="footer-content">
  Created by Microverse under CCI license
  </div>
  </footer>
  `;

  return footer;
};

export default Footer;