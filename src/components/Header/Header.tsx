import "./Header.style.css";

function Header() {
    return (
        <header className="header">
            <div className="header_logo">
                <img src="./logo.svg"></img>
                <p>Lapshok</p>
            </div>
            <div className="controls">
                <ul className="controls__periods">
                    <li className="period">Завтрак</li>
                    <li className="period selected">Обед</li>
                    <li className="period">Ужин</li>
                </ul>
                <div className="controls__cart">
                    <img src="./cart.svg"></img>
                </div>
            </div>
        </header>
    );
}

export default Header;
