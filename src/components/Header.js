import './Header.css';

const Header = () => {
    const header = document.createElement('div');
    header.classList.add('header');

    header.innerText = ' This is Header';

    return header;

}

export default Header
