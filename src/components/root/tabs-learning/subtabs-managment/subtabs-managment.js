/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import TitleIcon from '../../../title-icon'
import './subtabs-managment.css'
import Spinner from '../../../Spinner';
import DataRequest from '../../../../services/service.js';
import DevProgramCard from './devprogram-card'

export default class SubtabsManagment extends Component {

    dataRequest = new DataRequest();

    componentDidMount() {
        this.dataRequest.getData('getdevprogram', '6790188742141942336').then((resp) => {
            this.setState({
                devProgramsArr: resp.data,
                loading: false,
                view_mode: 'program-list'
            })

        })
    }

    state = {
        loading: true
    }

    ShowProgramCard = (cardid) => {

        this.setState({
            view_mode: 'program-card',
            object_id: cardid
        })

    }
    goBackClick = () => {
        this.setState({
            view_mode: 'program-list'
        })
    }
    render() {

        
        if (this.state.loading) {
            return (
                <>
                    <Spinner />
                </>
            )
        } else {

            if (this.state.view_mode === 'program-list') {

            
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
                    <div className="wraps col-12 col-md-4">
                        <div className="card catalog-card"  >

                            <img className="card-img-top-develop" src={elem.img} alt="Card cap" />
                            <div className="card-body">
                                <p className="card-title">{elem.name}</p>
                                <div className='dev-prog-status'>
                                    Статус: {status_title}
                                </div>
                                <div className='dev-prog-status'>
                                    Пройти до: {elem.last_date}
                                </div>
                                {elem.url !== undefined && (
                                    <a onClick={()=> this.ShowProgramCard(elem.id)}  className="btn btn-warning dev-prog-img">Перейти</a>
                                    )
                                }
                                    
                                
                            </div>
                        </div>
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
            } else {
                return (
                    <DevProgramCard 
                    object_id = {this.state.object_id}
                    goBackClick = {()=> this.goBackClick()} />
                )

            }
        }
    }
}

