import React, { Component } from 'react'


import MobileMenu from './mobile-menu';
import SubtabsManagment from './tabs-learning/subtabs-managment';
import SubtabsProfessional from './tabs-learning/subtabs-professional';
import Courses from '../courses';
import Events from '../events';
import Tests from '../tests';
import Usefull from '../usefull'
import Footer from '../footer'


import DataRequest from '../../services/service.js';
import { rootState } from './root-state.js'
import JackHammer from '../JackHammer/jackhammer.js'

import './root.css';
import DesktopMenu from './desktop-menu/desktop-menu';

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
        if (this.state.tabs[tab].type === 'tab') {
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
                return <Events />;

            case 'courses':
                return <Courses />;

            case 'usefull':
                return <Usefull />;

            case 'tests':
                return <Tests />;

            default:
                return <JackHammer />

        }

    }

    render() {
      
            return (
                <div className="viewport">
                    <MobileMenu tabsArr={this.state.tabs} currentTab={this.state.currentTab} currentSubTab={this.state.currentSubTab} onSubTabClick={(subTab) => this.switchSubTab(subTab)} onLinkClick={(linkUrl) => this.openTabLink(linkUrl)} />
                    <DesktopMenu tabsArr={this.state.tabs} currentTab={this.state.currentTab} currentSubTab={this.state.currentSubTab} onSubTabClick={(subTab) => this.switchSubTab(subTab)} onTabClick={(tab) => this.switchTab(tab)} onLinkClick={(linkUrl) => this.openTabLink(linkUrl)} />
                    <div className="renderedTab">{this.renderContent()}</div>
                    <Footer />
                </div>
            )

        
    }
}