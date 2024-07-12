import React, { Children, ReactNode } from "react";
import { Button } from "./Button";

type IntermezzoProps = {
    title: string;
    onClick?: () => void;
}

function Intermezzo({ title, onClick }: IntermezzoProps) {
    return (
        <aside className="intermezzo">
            <div className="container-intermezzo" id="container-intermezzo">
                <div className="content-intermezzo">
                    <p>{title}</p>
                    <div>
                        <Button children="Join Now" />
                    </div>
                </div>
                <div className="close-icon">
                    <i className="fas fa-times"></i>
                </div>
            </div>
        </aside>
    )
}

export { Intermezzo };