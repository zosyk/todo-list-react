import React, {Component} from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    buttonLabels = ['All', 'Active', 'Done'];

    render() {
        const {activeStatus = 'All', onItemStatusFilterClicked}= this.props;
        const buttons = this.buttonLabels.map((label) => {
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
    }
}