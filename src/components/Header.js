import './Header.css';

const Header = () => {
  const header = document.createElement('div');
  header.classList.add('header');

  header.innerHTML = ` 
        <div class="container">
            <header>
            
                <nav class="nav-bar">
                
                    <ul class="nav-item">
                    <li class="logo-design"><p>GitFlix</p></li>
                        <li>Movies</li>
                        <li>Tv Shows</li>
                        <li>Dramas</li>
                    </ul>
                </nav>
            </header>
        </div>`;

  return header;
};

export default Header;
