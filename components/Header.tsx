import React, { Children, ReactNode } from "react";
import { Logo } from "./Logo";
import { Search } from "./Search/Search";
import { ButtonOutline } from "./Button/ButtonOutline";
import { Button } from "./Button";
import { MenuList } from "./Menu/MenuList";
import { Menu } from "./Menu/Menu";

const menu = [
    { title: "Buy a Course", link: "", isIcon: false },
    { title: "Success", link: "", isIcon: false },
    { title: "Categories", link: "", isIcon: false },
    { title: "Pricing", link: "", isIcon: false }
];

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div>
                    <nav>
                        <Menu menu={menu} />
                    </nav>
                </div>
                <div>
                    <Logo image="/images/logo.png" width={180} height={60} />
                </div>
                <div>
                    <div className="search-container">
                        <Search />
                    </div>
                    <ButtonOutline title="Log In" />
                    <Button children="Sign Up" />


                </div>
            </nav>
        </header>
    )
}

export { Header };