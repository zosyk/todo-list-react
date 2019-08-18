import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = ({activeStatus = 'All', onItemStatusFilterClicked}) => {
    const buttonLabels = ['All', 'Active', 'Done'];

    const buttons = buttonLabels.map((label) => {
        let styles = 'btn';

        if (activeStatus === label) {
            styles += ' btn-info'
        } else {
            styles += ' btn-outline-secondary'
        }
        return <button type="button" className={styles}
                       onClick={() => onItemStatusFilterClicked(label)}>
            {label}
        </button>
    });

    return (
        <div className="btn-group ">
            {buttons}
        </div>
    );
};

export default ItemStatusFilter;