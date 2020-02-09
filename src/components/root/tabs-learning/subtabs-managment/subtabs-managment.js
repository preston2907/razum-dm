import React, { Component } from 'react';
import TitleIcon from '../../../title-icon'
import './subtabs-managment.css'
import Spinner from '../../../Spinner';
import DataRequest from '../../../../services/service.js';

export default class SubtabsManagment extends Component {

    dataRequest = new DataRequest();

    componentDidMount() {
        this.dataRequest.getData('getdevprogram', '6790188742141942336').then((resp) => {
            this.setState({
                devProgramsArr: resp.data,
                loading: false
            })

        })
    }

    state = {
        loading: true
    }
    render() {

        if(this.state.loading) {
            return(
                <>
                    <Spinner/>
                </>
            )
        } else {

        
            let renderedDevProgs = this.state.devProgramsArr.map(elem => {
                let status_title = '';
                switch (elem.status) {
                    case 'not-passed':
                        status_title = 'Не пройдено';
                        break;
                    case 'passed':
                        status_title = 'Пройдено';
                        break;
                    case 'expired':
                        status_title = 'Просрочено';
                        break;
                
                    default:
                        break;
                }
                return (
                    <div className='col-12 col-md-4 develop-prog-card'>

                    <div className="dev-prog-name">
                        <span>{elem.name}</span>
                    </div>
                    <div className='dev-prog-status'>
                        Статус: {status_title}
                       </div>
                    <div className='dev-prog-status'>
                        Пройти до: {elem.last_date}
                       </div>
                    {/* <div className='dev-prog-button'>
                        <button type="button" >
                            Перейти
                        </button>
                    </div> */}

                </div>
                )
            })
        return (
            <div>
                <h2 className='mx-auto text-center part-header'>Управление</h2>
                <div className="card-section-title">
                    <div>
                        <TitleIcon title="post-training" className="title-icon" />
                        <h1>Программы развития</h1>
                    </div>
                </div>
                <div className="develop-card-wrapper row">
                    {renderedDevProgs}
                </div>
            </div>
        )
    }
    }
}

