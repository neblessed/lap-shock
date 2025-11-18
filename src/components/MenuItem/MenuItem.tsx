import "./MenuItem.style.css";

function MenuItem() {
    return (
        <div className="item_containter selected">
            <div className="item_pic">
                <img src="./food1.png" alt="menu-item" />
            </div>
            <div className="item_text selected">
                <span className="item_title">Caviar express</span>
                <span className="item_description">
                    Norem ipsum dolor sit amet, consectetur
                </span>
            </div>
        </div>
    );
}

export default MenuItem;
