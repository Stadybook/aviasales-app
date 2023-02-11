/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { setAll, setZero, setOne, setTwo, setThree } from '../../redux/actions';

import s from './Filters.module.scss';

function Filters(props) {
    const [choseAll, setAllFilters] = useState(false);
    const [choseZero, setZeroTransfer] = useState(true);
    const [choseOne, setOneTransfer] = useState(false);
    const [choseTwo, setTwoTransfers] = useState(false);
    const [choseThree, setThreeTransfers] = useState(false);

    useEffect(() => {
        if (choseZero && choseOne && choseTwo && choseThree) {
            setAllFilters(true);
        } else {
            setAllFilters(false);
        }
    }, [choseZero, choseOne, choseTwo, choseThree]);

    const onChangeCheckbox = (e) => {
        switch (e.target.name) {
            case 'all':
                setAllFilters(e.target.checked);
                setZeroTransfer(e.target.checked);
                setOneTransfer(e.target.checked);
                setTwoTransfers(e.target.checked);
                setThreeTransfers(e.target.checked);
                break;
            case 'zero':
                setZeroTransfer(e.target.checked);
                break;
            case 'one':
                setOneTransfer(e.target.checked);
                break;
            case 'two':
                setTwoTransfers(e.target.checked);
                break;
            case 'three':
                setThreeTransfers(e.target.checked);
                break;
            default:
                setZeroTransfer(e.target.checked);
        }
    };

    return (
        <aside className={s.filters}>
            <h6>Количество пересадок</h6>
            <div className={s.checkbox}>
                <div className={s.item}>
                    <input
                        onChange={(e) => {
                            onChangeCheckbox(e);
                            props.choseAllFilters();
                        }}
                        className={s.toggle}
                        type='checkbox'
                        id='all'
                        name='all'
                        checked={choseAll}
                    />
                    <label htmlFor='all'>Все</label>
                </div>
                <div className={s.item}>
                    <input
                        onChange={(e) => {
                            onChangeCheckbox(e);
                            props.choseZero();
                        }}
                        className={s.toggle}
                        type='checkbox'
                        id='zero'
                        name='zero'
                        checked={choseZero}
                    />
                    <label htmlFor='zero'>Без пересадок</label>
                </div>
                <div className={s.item}>
                    <input
                        onChange={(e) => {
                            onChangeCheckbox(e);
                            props.choseOne();
                        }}
                        className={s.toggle}
                        type='checkbox'
                        id='one'
                        name='one'
                        checked={choseOne}
                    />
                    <label htmlFor='one'>1 пересадка</label>
                </div>
                <div className={s.item}>
                    <input
                        onChange={(e) => {
                            onChangeCheckbox(e);
                            props.choseTwo();
                        }}
                        className={s.toggle}
                        type='checkbox'
                        id='two'
                        name='two'
                        checked={choseTwo}
                    />
                    <label htmlFor='two'>2 пересадки</label>
                </div>
                <div className={s.item}>
                    <input
                        onChange={(e) => {
                            onChangeCheckbox(e);
                            props.choseThree();
                        }}
                        className={s.toggle}
                        type='checkbox'
                        id='three'
                        name='three'
                        checked={choseThree}
                    />
                    <label htmlFor='three'>3 пересадки</label>
                </div>
            </div>
        </aside>
    );
}
function mapStateToProps(state) {
    const { filtersReducer } = state;
    return {
        filter: filtersReducer.filter,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        choseAllFilters: () => dispatch(setAll()),
        choseZero: () => dispatch(setZero()),
        choseOne: () => dispatch(setOne()),
        choseTwo: () => dispatch(setTwo()),
        choseThree: () => dispatch(setThree()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
