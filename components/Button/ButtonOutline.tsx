import React, {Children, ReactNode} from 'react';

type ButtonProps = {
    title: string;
    onClick?: () => void;
};

function ButtonOutline ({title, onClick}: ButtonProps) {
    return <button className='btn-outline' onClick={onClick}>{title}</button>
}

export { ButtonOutline };