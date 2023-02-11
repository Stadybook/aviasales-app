/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import s from './Filters.module.scss';

function Filters() {
    return (
        <aside className={s.filters}>
            <h6>Количество пересадок</h6>
            <div className={s.checkbox}>
                <div className={s.item}>
                    <input className={s.toggle} type='checkbox' id='all' />
                    <label htmlFor='all'>Все</label>
                </div>
                <div className={s.item}>
                    <input className={s.toggle} type='checkbox' id='2' />
                    <label htmlFor='2'>Без пересадок</label>
                </div>
                <div className={s.item}>
                    <input className={s.toggle} type='checkbox' id='3' />
                    <label htmlFor='3'>1 пересадка</label>
                </div>
                <div className={s.item}>
                    <input className={s.toggle} type='checkbox' id='4' />
                    <label htmlFor='4'>2 пересадки</label>
                </div>
                <div className={s.item}>
                    <input className={s.toggle} type='checkbox' id='5' />
                    <label htmlFor='5'>3 пересадки</label>
                </div>
            </div>
        </aside>
    );
}
export default Filters;
