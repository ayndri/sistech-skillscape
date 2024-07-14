import React, {Children, ReactNode} from 'react';

type ButtonProps = {
    children: string;
    onClick?: () => void;
};

function Button ({children, onClick}: ButtonProps) {
    return <button className='btn-full' onClick={onClick}>{children}</button>
}

export { Button };