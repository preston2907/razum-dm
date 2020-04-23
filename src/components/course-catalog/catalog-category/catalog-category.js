import React from 'react';
import './catalog-category.css';

const CatalogCategory = ({ elem, isActive, onSelect ,isMobile  }) => {
    let classes = "nav-link desktop";
    if( isMobile) {
        classes = 'dropdown-item';
    }
    if (isActive === true){
        classes+= ' active'
    }
    return (

        <>
            {/* eslint-disable-next-line */}
            <a className={classes} onClick={onSelect} id="pills-home-tab" role="tab" aria-controls="pills-home" aria-selected="true" >{elem.name}</a>
        </>

    )
}

export default CatalogCategory;