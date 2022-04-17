import './sidebar.css'
import { AiOutlinePlusCircle, AiOutlinePlayCircle } from 'react-icons/ai';
import { BsToggleOn } from 'react-icons/bs';

function Sidebar() {
    return (<div className="sidebar">
        <div className='group'>
            <div className='title group-title-light'>Library</div>
            <div className='sidebarItem'>
                <div className='icon center'><AiOutlinePlayCircle /></div>
                <div className='label'>My books</div>
                <div className='right selected-icon'>15</div>
            </div>
            <div className='sidebarItem'>
                <div className='icon center'><AiOutlinePlusCircle /></div>
                <div className='label'>Add New Books</div>
            </div>

        </div>
        <div className='group'>
            <div className='title group-title-light'>Settings</div>
            <div className='sidebarItem'>
                <div className='icon center'><AiOutlinePlayCircle /></div>
                <div className='label'>Dark Mode</div>
                <div className='icon center right'><BsToggleOn /></div>
            </div>
        </div>
    </div>)
}

export default Sidebar;