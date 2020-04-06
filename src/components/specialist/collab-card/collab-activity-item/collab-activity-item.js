import React from 'react'
import './collab-activity-item.css'

const CollabActivityItem = ({ renderObj }) => {
    if( renderObj.type !== 'training') {
        let status_name = "";
        switch (renderObj.state) {
            case 0:
                 status_name = "Назначен";
                break;
            case 1:
                 status_name = "В процессе";
                break;
            case 2:
                 status_name = "Завершен";
                break;
            case 3:
                 status_name = "Не пройден";
                break;
            case 4:
                 status_name = "Пройден";
                break;
            case 5:
                 status_name = "Не назначен";
                break;
            
        
            default:
                break;
        }
   
    return (
        <>
            <div className="collab-string row no-gutters">
                <div className="col-12 col-md-4">
                    <div className="c_fullname_card">
                        <span>{renderObj.title}</span>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-6 col-md-4">
                            <div className="widget-main">
                                <div className="widget-label">
                                    <span>Статус</span>
                                </div>
                                <div className="widget-numbers">
                                    {status_name}
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-4">

                            <div className="widget-main">
                                <div className="widget-label">
                                    <span>Пройти до</span>
                                </div>
                                <div className="widget-numbers">
                                    {renderObj.deadline}
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-4">
                            <div className="widget-main">
                                <div className="widget-label">
                                    <span>Прогресс</span>
                                </div>
                                <div className="widget-numbers">
                                    {renderObj.progress}%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} else {
    let status_name = '';
    switch (renderObj.state) {
        case 'plan':
            status_name  = "Планируется"
        break;
        case 'cancel':
            status_name  = "Отменено"
        break;
        case 'active':
            status_name  = "Проводится"
        break;
        case 'close':
            status_name  = "Проводится"
        break;

        default:
        break;
    }
    return (
        <>
            <div className="collab-string row no-gutters">
                <div className="col-12 col-md-4">
                    <div className="c_fullname_card">
                        <span>{renderObj.title}</span>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-6">
                            <div className="widget-main">
                                <div className="widget-label">
                                    <span>Статус</span>
                                </div>
                                <div className="widget-numbers">
                                    {status_name}
                                </div>
                            </div>
                        </div>
                        <div className="col-6">

                            <div className="widget-main">
                                <div className="widget-label">
                                    <span>Дата</span>
                                </div>
                                <div className="widget-numbers">
                                    {renderObj.startDate}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
}
export default CollabActivityItem