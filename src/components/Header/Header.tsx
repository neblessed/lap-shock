import "./Header.style.css";

function Header() {
    return (
        <header className="header">
            <div className="header_logo">
                <img src="./logo.svg"></img>
                <p>Lap-shock</p>
            </div>
            <div className="menu_periods">
                <ul>
                    <li>Завтрак</li>
                    <li>Обед</li>
                    <li>Ужин</li>
                </ul>
                <img src="./cart.svg"></img>
            </div>
        </header>
    );
}

export default Header;
