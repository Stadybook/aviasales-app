import React, { useState } from 'react';
import './Filters.scss';
import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;
const plainOptions = [
    'Без пересадок',
    '1 пересадка',
    '2 пересадки',
    '3 пересадки',
];
const defaultCheckedList = ['Без пересадок'];

function Filters() {
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    const onChange = (list) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };
    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };
    return (
        <aside className='filters'>
            <Checkbox
                className='checkbox'
                indeterminate={indeterminate}
                onChange={onCheckAllChange}
                checked={checkAll}
            >
                Все
            </Checkbox>
            <CheckboxGroup
                className='checkbox-group'
                options={plainOptions}
                value={checkedList}
                onChange={onChange}
            />
        </aside>
    );
}

export default Filters;
