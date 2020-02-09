import React, { Component } from 'react'
import DataRequest from '../../../services/service.js';
import Spinner from '../../Spinner';
import Logo from '../ars_logo.png';

import './desktop-menu.css';

export default class DesktopMenu extends Component {

    dataRequest = new DataRequest();

    componentDidMount() {
        this.dataRequest.getData('getusername', '6790188742141942336').then((resp) => {
            this.setState({
                username: resp.data,
                loading: false
            })

        })
    }

    state = {
        loading: true
    }

    render() {
        if (this.state.loading) {
            return (
                <Spinner />
            )
        } else {

            let { tabsArr, onSubTabClick, onTabClick,  currentTab, onLinkClick } = this.props;

            let renderedTabs = Object.values(tabsArr).map((elem, i) => {
                let isActive = (currentTab === elem.code) ? `active` : ``;

                let eventClick;
                if (elem.type === 'tab') {
                    eventClick = () => {
                        onTabClick(elem.code)
                    }
                } else {
                    eventClick = () => {
                        onLinkClick(elem.link);
                    }
                }
                return (
                    <li key={i} className="nav-item" onClick={() => eventClick()}>
                        <span className={`nav-link ${isActive}`}>{elem.name}</span>
                    </li>
                )
            })

            let reneredSubTabs = tabsArr[currentTab].subtabs.map((elem, i) => {
                let isActive = elem.isActive ? `active` : ``;
                return (
                    <li key={i} className="nav-item" onClick={() => onSubTabClick(elem.code)}>
                        <span className={`nav-link ${isActive} bottom`}>{elem.name}</span>
                    </li>
                )
            })
            return (

                    <div className="pc-header-container ">
                        <div className="header-panel-top  row m-0">
                            <ul className="nav col-md-10">
                                {renderedTabs}
                            </ul>
                            <div className="col-md-2 personal-cabinet">
                                <span>{this.state.username}</span>
                            </div>
                        </div>
                        <div className="header-panel-bottom row m-0">
                            <div className="logo-container col-md-2">
                                <img src={Logo} alt="" srcSet="" />
                            </div>
                            <div className="col-md-8 bottom-menu">
                                <div className="nav" style={{ justifyContent: 'space-around' }}>
                                    {reneredSubTabs}
                                </div>
                            </div>
                        </div>
                    </div>

            )

        }
    }

}


