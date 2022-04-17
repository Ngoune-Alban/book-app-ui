import './header.css';
import dark from '../../assets/svg/dark.svg';

function Header() {
    return (<div className='header'>
        <div className='icon center right'><img src={dark} /></div>
    </div>)
}
export default Header;