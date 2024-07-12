import React, { Children, ReactNode } from "react";
import { Logo } from "./Logo";
import { Menu } from "./Menu/Menu";

const menu = [
    { title: "fab fa-facebook", link: "", isIcon: true },
    { title: "fab fa-instagram", link: "", isIcon: true },
];

const menuIcon = [
    { title: "fab fa-facebook", link: "", isIcon: true },
    { title: "fab fa-instagram", link: "", isIcon: true },
];

function Footer() {
    return (
        <footer>
            <div className="logo">
                <Logo image="/images/logo.png" width={120} height={45} />
            </div>
            <div className="menu">
                <Menu menu={menu} />
            </div>
            <div className="social-icons">
                <Menu menu={menuIcon} />
            </div>
        </footer>
    )
}

export { Footer };