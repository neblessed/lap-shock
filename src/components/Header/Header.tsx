import "./Header.style.css";

function Header() {
    return (
        <header className="header">
            <div className="header_logo">
                <img src="./logo.svg"></img>
                <p>Lap-shock</p>
            </div>
            <div className="controls">
                <ul className="controls__periods">
                    <li>Завтрак</li>
                    <li>Обед</li>
                    <li>Ужин</li>
                </ul>
                <div className="controls__cart">
                    <img src="./cart.svg"></img>
                </div>
            </div>
        </header>
    );
}

export default Header;
