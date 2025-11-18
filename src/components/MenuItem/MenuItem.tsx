import "./MenuItem.style.css";
import type { MenuItemPropsType } from "./types/MenuItemPropsType";

function MenuItem(props: MenuItemPropsType) {
    return (
        <div className="item_containter">
            <div className="item_pic">
                <img src={props.photo} alt="menu-item" />
            </div>
            <div className="item_text">
                <span className="item_title">{props.title}</span>
                <span className="item_description">{props.description}</span>
            </div>
        </div>
    );
}

export default MenuItem;
