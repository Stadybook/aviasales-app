/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Typography } from 'antd';

import {
    chooseChipest,
    chooseFastest,
    chooseOptimal,
} from '../../redux/actions';

import s from './Tabs.module.scss';

const { Text } = Typography;

function Tabs(props) {
    useEffect(() => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.classList.remove(s.active);
        });
        buttons.forEach((button) => {
            if (button.textContent === props.btn) {
                if (!button.classList.contains(s.active)) {
                    button.classList.add(s.active);
                }
            }
        });
    });

    return (
        <div className={s.tabs}>
            <button
                type='button'
                onClick={props.onChipestBtn}
                className={`${s.tab} ${s.active}`}
            >
                <Text className={s.text}>Самый дешевый</Text>
            </button>
            <button type='button' onClick={props.onFasterBtn} className={s.tab}>
                <Text className={s.text}>Самый быстрый</Text>
            </button>
            <button
                type='button'
                onClick={props.onOptimalBtn}
                className={s.tab}
            >
                <Text className={s.text}>Оптимальный</Text>
            </button>
        </div>
    );
}

function mapStateToProps(state) {
    const { tabsReducer } = state;
    return {
        btn: tabsReducer.btn,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChipestBtn: () => dispatch(chooseChipest()),

        onFasterBtn: () => dispatch(chooseFastest()),

        onOptimalBtn: () => dispatch(chooseOptimal()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
