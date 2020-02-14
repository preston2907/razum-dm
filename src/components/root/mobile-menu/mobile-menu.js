/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Logo from '../ars_logo.png';
import './mobile-menu.css';


export default class MobileMenu extends Component {


  state = {
    showmenu: false,
    isprocessing: false
  }

  ShowMenu = (e) => {
    e.preventDefault();
    this.setState({
      showmenu: !this.state.showmenu
    })
  }

  HideMenu = () => {
    this.setState({
      showmenu: false
    })

  }


  menuItemCickHandler = (type, code) => {
    if (type === "subTab") {
      this.props.onSubTabClick(code)
    }
    else {
      this.props.onLinkClick(code)
    }

    this.HideMenu()
  }

  render() {

    let { tabsArr, currentSubTab } = this.props;

    let menuItemsArr = Object.values(tabsArr).filter((elem) => {
      return elem.type === "tab"
    })

    let menuLinksArr = Object.values(tabsArr).filter((elem) => {
      return elem.type === "link"
    })

    let renderedMobileMenuLinks = menuLinksArr.map(linkItem => {
      return (
        <div className='col-6 nav__item' onClick={() => { this.menuItemCickHandler('link', linkItem.link); }} ><span className="menu__item">{linkItem.name}</span></div>
      )
    })

    let renderedMobileMenuItems = menuItemsArr.map((menuitem) => {

      let renderedMobileMenuSubItems = menuitem.subtabs.map((menuSubItem) => {
        let subItemClassList = menuSubItem.code === currentSubTab ? ' menu__item active' : 'menu__item';

        return (
          <div className='col-6 nav__item' onClick={() => { this.menuItemCickHandler('subTab', menuSubItem.code); }} ><span className={subItemClassList}>{menuSubItem.name}</span></div>
        )

      })




      return (
        <div className="menu-item">

          <div className="menu-item-header">
            <span>{menuitem.name}</span>
          </div>
          <div className="menu-subitems">
            <div className='row'>
              {renderedMobileMenuSubItems}
            </div>
          </div>
        </div>
      )
    })


    let menuClassList = this.state.showmenu ? 'nav-root nav--open' : 'nav-root';

    return (

      <div className="mobile-menu" role="banner">

        <img className="ars-logo" alt="logo.png" srcSet={Logo}></img>
        <div id="nav" className={menuClassList} role="navigation">

          <div className="nav__menu" id="menu" aria-label="main navigation" >
            <div className="row links__menu">
              {renderedMobileMenuLinks}
            </div>

            {renderedMobileMenuItems}

          </div>

          {/* <!-- MENU TOGGLE BUTTON --> */}
          <a href="#nav" className="nav__toggle" role="button" aria-expanded={this.state.showmenu} aria-controls="menu" onClick={(e) => { this.ShowMenu(e) }}>
            <svg className="menuicon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
              <title>Toggle Menu</title>
              <g>
                <line className="menuicon__bar" x1="13" y1="16.5" x2="37" y2="16.5" />
                <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5" />
                <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5" />
                <line className="menuicon__bar" x1="13" y1="32.5" x2="37" y2="32.5" />

              </g>
            </svg>
          </a>

          {/* <!-- ANIMATED BACKGROUND ELEMENT --> */}
          <div className="splash"></div>

        </div>


      </div>

    )
  }
}

