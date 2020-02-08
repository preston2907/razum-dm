import React from 'react'
import './usefull-item.css'

const UsefullItem = ({ elem }) => {

    return (
       

            <div className="card catalog-card" >
                {/* eslint-disable-next-line */}
                <img className="card-img-top" src={elem.img} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-title">{elem.name}</p>
                    <p className="card-text">{elem.desc}</p>
                    {/* eslint-disable-next-line */}
                    <a href={elem.target} target='_blank' className="btn btn-warning">Перейти</a>
                </div>
            </div>
        
    )
}

export default UsefullItem;