import './App.css';
import Header from './layouts/header/header';
import Sidebar from './layouts/sidebar/sidebar';

function App() {
  return (
    <div className="app theme-light">
      <Header />
      <Sidebar />
      {/* <Content /> */}
    </div>
  );
}

export default App;
