import './App.css';
import Header from './layouts/header/header';
import Sidebar from './layouts/sidebar/sidebar';
import { useSelector } from 'react-redux'
import {
  selectTheme
} from './store/slice/themeSlice'

function App() {
  const theme = useSelector(selectTheme)
  return (
    <div className={`app${theme ? '-' + theme : ''}`}>
      <Header />
      <div className='main-content'>
        <Sidebar />
        <div>Here is the content</div>
        {/* <Content /> */}
      </div>

    </div>
  );
}

export default App;
