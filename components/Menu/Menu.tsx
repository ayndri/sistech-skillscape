import React, { Children, ReactNode } from "react";
import { MenuList } from "./MenuList";
import type { MenuListProps } from "./MenuList";

type MenuProps = {
    menu: MenuListProps[]
}

function Menu({menu}: MenuProps) {
    return (
        <ul>
            {menu.map((item, index) => (
                <MenuList title={item.title} link={item.link} key={index} isIcon={item.isIcon} />
            ))}

        </ul>
    )
}

export { Menu };