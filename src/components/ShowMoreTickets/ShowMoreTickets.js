/* eslint-disable react/destructuring-assignment */
import { Typography } from 'antd';
import { connect } from 'react-redux';

import { addFiveTickets } from '../../redux/actions';

import s from './ShowMoreTickets.module.scss';

const { Text } = Typography;

function ShowMoreTickets(props) {
    return (
        <button type='button' onClick={props.showMore} className={s.btn}>
            <Text className={s.text}>Показать еще 5 билетов!</Text>
        </button>
    );
}

function mapStateToProps(state) {
    const { ShowTicketsReducer } = state;
    return {
        show: ShowTicketsReducer.show,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        showMore: () => dispatch(addFiveTickets()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreTickets);
