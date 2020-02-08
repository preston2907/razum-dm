import React, { Component } from 'react'
import Spinner from '../Spinner';
import Logo from './ars_logo.png';

import SubtabsManagment from './tabs-learning/subtabs-managment';
import SubtabsProfessional from './tabs-learning/subtabs-professional';
import Courses from '../courses';
import Events from '../events';
import Tests from '../tests';
import Usefull from '../usefull'


import DataRequest from '../../services/service.js';
import { rootState } from './root-state.js'
import JackHammer from '../JackHammer/jackhammer.js'

import './root.css';

export default class Root extends Component {

    dataRequest = new DataRequest();

    componentDidMount() {
        this.dataRequest.getData('getusername', '6790188742141942336').then((resp) => {
            this.setState({
                username: resp.data,
                loading: false
            })

        })
    }

    state = rootState;

    switchTab = (tab) => {
        let defSubTab = this.state.tabs[tab].subtabs.find(item => {
            return item.isActive 
        }).code;
        if ( this.state.tabs[tab].type === 'tab' ) {
            this.setState({
                currentSubTab: defSubTab,
                currentTab: tab,
                
            })
        }
    }

    switchSubTab = (subTab) => {

        const subTabsArray = this.state.tabs[this.state.currentTab].subtabs.map(elem => {

            if (elem.code !== subTab) {
                elem.isActive = false
            } else {
                elem.isActive = true
            }
            return elem

        })

        this.setState((prevState) => {

            prevState.tabs[this.state.currentTab].subtabs = subTabsArray

            return {
                currentSubTab: subTab,
            }

        });

    }

    openTabLink = (url) => {
        window.open(url);
    }

    renderContent = () => {

        switch (this.state.currentSubTab) {
            case 'managment':
                return <SubtabsManagment />;
                
                case 'professional':
                    return <SubtabsProfessional />;

            case 'events':
                return <Events/>;

            case 'courses':
                return <Courses />;

            case 'usefull':
                return <Usefull/>;

            case 'tests':
                return <Tests/>;

            case 'events':
                return <Events/>;


            default:
                return <JackHammer/>
                break;
        }
        return null
    }

    render() {
        if (this.state.loading) {
            return (
                <Spinner />
            )
        } else {
            let renderedTabs = Object.values(this.state.tabs).map(elem => {
                let isActive = (this.state.currentTab === elem.code) ? `active` : ``;

                let eventClick;
                if (elem.type === 'tab') {
                    eventClick = () => {
                        this.switchTab(elem.code)
                    } 
                } else {
                    eventClick = () => {
                        this.openTabLink(elem.link);
                    }
                }
                return (
                    <li className="nav-item" onClick={() => eventClick()}>
                        <span className={`nav-link ${isActive}`}>{elem.name}</span>
                    </li>
                )
            })

            let reneredSubTabs = this.state.tabs[this.state.currentTab].subtabs.map(elem => {
                let isActive = elem.isActive ? `active` : ``;
                return (
                    <li className="nav-item" onClick={() => this.switchSubTab(elem.code)}>
                        <span className={`nav-link ${isActive} bottom`}>{elem.name}</span>
                    </li>
                )
            })
            return (
                <>
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
                                <img src={Logo} alt="" srcset="" />
                            </div>
                            <div className="col-md-8 bottom-menu">
                                <div className="nav" style={{ justifyContent: 'space-around' }}>
                                    {reneredSubTabs}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="renderedTab">
                        {this.renderContent()}
                    </div>
                </>
            )

        }
    }
}