import React, { Children, ReactNode } from "react";

type MenuListProps = {
    title: string;
    link: string;
    isIcon: boolean;
}

function MenuList({ title, link, isIcon }: MenuListProps) {
    return (
        <li>
            <a href={link}>
                {
                    isIcon == false ? title : <i className={title}></i>
                }
            </a>
        </li>
    )
}

export type {MenuListProps};
export { MenuList };