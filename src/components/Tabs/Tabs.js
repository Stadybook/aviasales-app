/* eslint-disable no-use-before-define */
/* eslint-disable react/destructuring-assignment */
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
    return (
        <div className={s.btns}>
            <button
                type='button'
                onClick={props.onChipestBtn}
                className={
                    props.btn === 'Самый дешевый'
                        ? `${s.btn} ${s.active}`
                        : `${s.btn}`
                }
            >
                <Text className={s.text}>Самый дешевый</Text>
            </button>
            <button
                type='button'
                onClick={props.onFasterBtn}
                className={
                    props.btn === 'Самый быстрый'
                        ? `${s.btn} ${s.active}`
                        : `${s.btn}`
                }
            >
                <Text className={s.text}>Самый быстрый</Text>
            </button>
            <button
                type='button'
                onClick={props.onOptimalBtn}
                className={
                    props.btn === 'Оптимальный'
                        ? `${s.btn} ${s.active}`
                        : `${s.btn}`
                }
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
