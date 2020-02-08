import React, { Component } from 'react';

export default class CoursesSwitcherItem extends Component {

    render() {
        let { label, onSelected, selected } = this.props
        let classes = 'courses-switcher-item';
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