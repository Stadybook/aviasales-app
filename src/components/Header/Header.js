import React from 'react';

import photo from './Logo.svg';
import s from './Header.module.scss';

function Header() {
    return (
        <div className={s.logo}>
            <img src={photo} alt='logo' />
        </div>
    );
}

export default Header;
