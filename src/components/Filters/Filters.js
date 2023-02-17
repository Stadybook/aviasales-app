/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */

import { connect } from 'react-redux';

import { setAll, setZero, setOne, setTwo, setThree } from '../../redux/actions';

import s from './Filters.module.scss';

function Filters(props) {
    const onChangeCheckbox = (e) => {
        switch (e.target.name) {
            case 'all':
                props.choseZero(e.target.checked);
                props.choseOne(e.target.checked);
                props.choseTwo(e.target.checked);
                props.choseThree(e.target.checked);
                props.choseAllFilters(e.target.checked);
                break;
            case 'zero':
                if (!e.target.checked) {
                    props.choseAllFilters(e.target.checked);
                }
                props.choseZero(e.target.checked);
                break;
            case 'one':
                if (!e.target.checked) {
                    props.choseAllFilters(e.target.checked);
                }
                props.choseOne(e.target.checked);
                break;
            case 'two':
                if (!e.target.checked) {
                    props.choseAllFilters(e.target.checked);
                }
                props.choseTwo(e.target.checked);
                break;
            case 'three':
                if (!e.target.checked) {
                    props.choseAllFilters(e.target.checked);
                }
                props.choseThree(e.target.checked);
                break;
            default:
                props.choseZero(e.target.checked);
                props.choseOne(e.target.checked);
                props.choseTwo(e.target.checked);
                props.choseThree(e.target.checked);
                props.choseAllFilters(e.target.checked);
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
                        }}
                        className={s.toggle}
                        type='checkbox'
                        id='all'
                        name='all'
                        checked={props.allFilters}
                    />
                    <label htmlFor='all'>Все</label>
                </div>
                <div className={s.item}>
                    <input
                        onChange={(e) => {
                            onChangeCheckbox(e);
                        }}
                        className={s.toggle}
                        type='checkbox'
                        id='zero'
                        name='zero'
                        checked={props.filters.zero}
                    />
                    <label htmlFor='zero'>Без пересадок</label>
                </div>
                <div className={s.item}>
                    <input
                        onChange={(e) => {
                            onChangeCheckbox(e);
                        }}
                        className={s.toggle}
                        type='checkbox'
                        id='one'
                        name='one'
                        checked={props.filters.one}
                    />
                    <label htmlFor='one'>1 пересадка</label>
                </div>
                <div className={s.item}>
                    <input
                        onChange={(e) => {
                            onChangeCheckbox(e);
                        }}
                        className={s.toggle}
                        type='checkbox'
                        id='two'
                        name='two'
                        checked={props.filters.two}
                    />
                    <label htmlFor='two'>2 пересадки</label>
                </div>
                <div className={s.item}>
                    <input
                        onChange={(e) => {
                            onChangeCheckbox(e);
                        }}
                        className={s.toggle}
                        type='checkbox'
                        id='three'
                        name='three'
                        checked={props.filters.three}
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
        filters: filtersReducer.filters,
        allFilters: filtersReducer.allFilters,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        choseAllFilters: (val) => dispatch(setAll(val)),
        choseZero: (val) => dispatch(setZero(val)),
        choseOne: (val) => dispatch(setOne(val)),
        choseTwo: (val) => dispatch(setTwo(val)),
        choseThree: (val) => dispatch(setThree(val)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
