import './sidebar.css'
import dark from '../../assets/svg/dark.svg';
import toggleLight from '../../assets/svg/toggleLight.svg';
import addBook from '../../assets/svg/addBook.svg';
import myBook from '../../assets/svg/myBook.svg';
import { useSelector, useDispatch } from 'react-redux'
import {
    changeTheme,
    selectTheme
} from '../../store/slice/themeSlice'

function Sidebar() {
    const theme = useSelector(selectTheme)
    const dispatch = useDispatch()
    return (<div className="sidebar">
        <div className='group'>
            <div className={`title group-title ${theme}`}>Library</div>
            <div className='sidebarItem'>
                <div className='center'><img src={myBook} alt="list all books icon" /></div>
                <div className='label'>My books</div>
                <div className={`right selected-icon ${theme} small`}>15</div>
            </div>
            <div className='sidebarItem'>
                <div className='center'><img src={addBook} alt="add books icon" /></div>
                <div className='label'>Add New Books</div>
            </div>

        </div>
        <div className='group'>
            <div className={`title group-title ${theme}`}>Settings</div>
            <div className='sidebarItem'>
                <div className='center'><img src={dark} alt="dark mode icon" /></div>
                <div className='label'>Dark Mode</div>
                <div className='center right'><img src={toggleLight} alt="toogle dark mode icon" onClick={() => dispatch(changeTheme())} /></div>
            </div>
        </div>
    </div>)
}

export default Sidebar;