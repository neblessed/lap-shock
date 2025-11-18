import type { PropsWithChildren } from "react";
import "./MenuContainer.style.css";

function MenuContainer({ children }: PropsWithChildren) {
    return <div className="menu_container">{children}</div>;
}

export default MenuContainer;
