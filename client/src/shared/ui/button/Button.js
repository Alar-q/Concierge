import React, { useEffect, useState } from 'react';

import styles from './button.module.css' 

export default function Button({children, type='', variant='main', size='', onClick=f=>f}){

    const [btnVariant, setBtnVariant] = useState('main')

    useEffect(()=> {
        switch(variant){
            case('second'):
                setBtnVariant('second');
                break;
            case('control'):
                setBtnVariant('control');
                break;
            case('outline'):
                setBtnVariant('outline');
                break;
            default:
                setBtnVariant('main');
                break;
        }

    }, [variant])

    return (
        <button 
            className={`
                ${styles.btn} ${
                    // variant === 'main' ? styles['btn-main'] : 
                    styles['btn-'+btnVariant]}
                ${styles['btn-'+ size] }
            `} 
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
}

