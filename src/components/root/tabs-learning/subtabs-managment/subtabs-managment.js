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

        if (this.state.loading) {
            return (
                <>
                    <Spinner />
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
                    <div className="wraps col-6 col-md-4">
                        <div className="card catalog-card"  >
                            {/* eslint-disable-next-line */}

                            <img className="card-img-top-develop" src={elem.img} alt="Card cap" />
                            <div className="card-body">
                                <p className="card-title">{elem.name}</p>
                                <div className='dev-prog-status'>
                                    Статус: {status_title}
                                </div>
                                <div className='dev-prog-status'>
                                    Пройти до: {elem.last_date}
                                </div>
                                {/* eslint-disable-next-line */}
                                {/* <a href={elem.url} target='_blank' className="btn btn-warning">Перейти</a> */}
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
        }
    }
}

