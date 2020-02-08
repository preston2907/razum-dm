import React from 'react';
import './footer.css';
import Contacts from './footer-img/employees.png';
import Space from './footer-img/rocket-ship.png';
import Suz from './footer-img/mortarboard.png';
import MyBeeStore from './footer-img/shopping-cart.png';
import SelfService from './footer-img/video-call.png';
import Bu from './footer-img/bu.png';

import FooterItem from './footer-item'


const footerItemsArr = [
    {
        id: 1,
        name: 'Контакты',
        img: Contacts,
        url: 'https://space.beeline.ru/Pages/Orgstructure.aspx',
        mobile: true,
    },
    {
        id: 2,
        name: 'Space',
        img: Space,
        url: 'https://space.beeline.ru/',
        mobile: true,
    },
    {
        id: 3,
        name: 'СУЗ',
        img: Suz,
        url: 'http://nkbs.vimpelcom.ru/faces/site/content/agent/index.xhtml?region=2&region=3&region=4&region=5&region=6&region=7&region=8&region=9',
        mobile: false,
    },
    {
        id: 4,
        name: 'MyBeeStore',
        img: MyBeeStore,
        url: 'https://internal.beeline.ru/mybeestore/static/app/b2c/',
        mobile: true,
    },
    {
        id: 5,
        name: 'SelfService',
        img: SelfService,
        url: 'https://erpap.vimpelcom.ru:4443/OA_HTML/OA.jsp?OAFunc=OAHOMEPAGE',
        mobile: false,
    },
    {
        id: 6,
        name: 'BU-Online',
        img: Bu,
        url: 'https://bu-online.beeline.ru/view_doc.html?mode=doc&doc_id=6229473605134533521',
        mobile: true,
    }
]
const Footer = () => {
 let elems = footerItemsArr.map((elem) => {
    return (
        <FooterItem 
        key = {elem.id}
        name = {elem.name}
        img = {elem.img}
        url = {elem.url}
        mobile = {elem.mobile}
        />
    )
 })
 return (
     <div className='footer-body'>
         <div className='row'>
             {elems}
         </div>
     </div>
 )
}

export default Footer;