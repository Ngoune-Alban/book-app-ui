import './header.css';
import dark from '../../assets/svg/dark.svg';
import { useSelector, useDispatch } from 'react-redux'
import {
    changeTheme,
    selectTheme
} from '../../store/slice/themeSlice'

function Header() {
    const theme = useSelector(selectTheme)
    const dispatch = useDispatch()
    return (<div className={`header ${theme}`}>
        <div className='icon center right'><img src={dark} alt="dark mode icon" onClick={() => dispatch(changeTheme())} /></div>
    </div>)
}
export default Header;