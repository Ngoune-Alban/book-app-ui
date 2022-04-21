import "./headerBook.css";
import bookIcon from '../../assets/svg/bookIcon.svg';
import bookSearchIcon from '../../assets/svg/bookSearchIcon.svg';
import bookListIcon from '../../assets/svg/bookListIcon.svg';
import bookCardIcon from '../../assets/svg/bookCardIcon.svg';

function HeaderBook(props) {
    return <div className="headerBook">
        <div>
            <h1>Book Library</h1>
            <div><img src={bookIcon} alt="book icon" /></div>
        </div>
        <div className="right">
            <img src={bookCardIcon} onClick={() => props.changeView('card')} alt="book card icon" />
            <img src={bookListIcon} onClick={() => props.changeView('list')} alt="book list icon" />
            <img src={bookSearchIcon} alt="book search icon" />
        </div>
    </div>
}

export default HeaderBook;