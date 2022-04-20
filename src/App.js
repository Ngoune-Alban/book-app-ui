import './App.css';
import Header from './layouts/header/header';
import Sidebar from './layouts/sidebar/sidebar';
import { useSelector } from 'react-redux'
import {
  selectTheme
} from './store/slice/themeSlice'
import Books from './views/books/books';

function App() {
  const theme = useSelector(selectTheme)
  return (
    <div className={`app${theme ? '-' + theme : ''}`}>
      <Header />
      <div className='main-content'>
        <Sidebar />
        <Books />
      </div>

    </div>
  );
}

export default App;
