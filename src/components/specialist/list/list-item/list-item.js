import React from 'react'
import WidgetPanelItem from '../../../widget-panel-item';
import './list-item.css';

const ListItem = ({ colObject, onPersonClick }) => {

    return (
        <>
            <div className="collab-string row no-gutters">
                <div className="col-12 col-md-4">
                    <div className="c_fullname">
                        <span onClick={()=>onPersonClick(colObject.id, colObject.fullname)}>{colObject.fullname}</span>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-6 col-md-4">
                            <WidgetPanelItem 
                            label = "Курсы"
                             max_count = {colObject.max_course}
                             count = {colObject.cur_course}
                             type = "2dig"
                             inversion = ""
                             text_string = ""
                             />
                            
                        </div>
                        <div className="col-6 col-md-4">
                        <WidgetPanelItem 
                            label = "Тренинги"
                             max_count = {colObject.max_training}
                             count = {colObject.cur_training}
                             type = "2dig"
                             inversion = ""
                             text_string = ""
                             />
                        </div>
                        <div className="col-6 col-md-4">
                        <WidgetPanelItem 
                            label = "Ежемесячный тест"
                             max_count = {colObject.evm_max_count}
                             count = {colObject.evm_count}
                             type = "string"
                             inversion = ""
                             text_string = {colObject.evm_status}
                             />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )



}

export default ListItem