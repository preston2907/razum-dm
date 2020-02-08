import React from 'react';
import './footer-item.css';

const FooterItem = (props) => {

    let rootStyles = 'footer-item col-3 col-md-2';

    if (!props.mobile) {
        rootStyles += ' d-none d-sm-block'
    }
    function redirect() {
        window.open(props.url);
    }
    return (
        <div className={rootStyles}>
            <div className="footer-item-wrap" onClick={redirect} >
                <div className="image-wrap">
                    <img className='footer-img' src={props.img} alt={props.name}/>
                </div>
                <p className="footer-desc">{props.name}</p>
            </div>

        </div>

    )
}

export default FooterItem;