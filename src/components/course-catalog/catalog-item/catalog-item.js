import React from 'react'
import './catalog-item.css'

const CatalogItem = ({ elem }) => {

    return (
        <div className="wraps col-6 col-md-3">
        <div className="card catalog-card"  >
            {/* eslint-disable-next-line */}
            
            <img className="card-img-top" src={elem.img} alt="Card cap"  />
            <div className="card-body">
                <p className="card-title">{elem.name}</p>
            {/* eslint-disable-next-line */}
                <a href={elem.url} target='_blank' className="btn btn-warning">Перейти</a>
            </div>
        </div>
        </div>
    )
}

export default CatalogItem;