import { useState } from "react";
import HeaderBook from "../../components/headerBook/headerBook";
import "./books.css";


function Books() {
    const [mode, setMode] = useState('card');
    const changeView = (mode) => {
        setMode(mode);
    }
    return <div className="books">
        <HeaderBook changeView={changeView} />
        Here is the display in {mode} mode;
    </div>
}

export default Books;