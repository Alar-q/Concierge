import React from 'react';

import styles from './chip.module.css' 

export default function Chip({text='', variant=''}){
    return (
        <div 
            className={`${styles.chip} ${variant !== '' ? styles['chip-'+variant] : styles['chip-blue'] }`} 
        >
            {text}
        </div>
    );
}

