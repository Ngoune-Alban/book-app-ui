import './App.css';
import Header from './layouts/header/header';
import Sidebar from './layouts/sidebar/sidebar';
function App() {
  return (
    <div className="app theme-light">
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
