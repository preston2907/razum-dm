import React, { Component } from 'react';

export default class EventSwitcherItem extends Component {

    render() {
        let { label, onSelected, selected } = this.props
        let classes = 'tests-switcher-item';
        if (selected) {
            classes += ' active'
        }
        return (
            <div className={classes} onClick={onSelected}>
                <span className='d-block text-center'>{label}</span>
            </div>
        )
    }
}