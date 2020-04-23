import React, { Component } from 'react'
import './collab-card.css';
import Spinner from '../../Spinner';
import DataRequest from '../../../services/service.js';
import CollabActivityItem from './collab-activity-item';
import TitleIcon from '../../title-icon'


export default class CollabCard extends Component {
    м
    dataReq = new DataRequest();

    state = {
        loading: true
    }


    componentDidMount() {
        this.dataReq.getObjDoc('get_collab_info', '6808788990157418356', this.props.object_id).then((resp) => {
            this.setState({
                loading: false,
                renderData: resp.data
            })
        })

    }

    render() {
        if (this.state.loading === true) {
            return (
                <Spinner />
            )
        } else {

            let renderObj = this.state.renderData;

            let showCourses = renderObj.filter(elem => elem.type === 'course').map((item) => {
                return <CollabActivityItem renderObj={item} />
            });

            let showTrainings = renderObj.filter(elem => elem.type === 'training').map((item) => {
                return <CollabActivityItem renderObj={item} />
            });
            let showTests = renderObj.filter(elem => elem.type === 'test').map((item) => {
                return <CollabActivityItem renderObj={item} />
            });



            return (
                <>
                    <div className="row justify-content-between">

                        <h3 className="person_fullname col-12 col-md-8">{this.props.c_fname}</h3>
                        <span className="back_to_all col-12 col-md-4" onClick={() => this.props.goBackClick()} > Все сотрудники <span className="bigArrow">›</span></span>
                    </div>
                    {showCourses.length > 0 && (
                        <>
                            <div className="row label_title">
                                <TitleIcon title="course" />
                                <h2 className="sub_header" >Курсы <span className="coll_length">{showCourses.length}</span></h2>
                            </div>
                            <div className="row d-none d-md-flex">
                                <div className="col-md-4">

                                </div>
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-md-4">
                                            Статус
                                    </div>
                                        <div className="col-md-4">
                                            Пройти до
                                    </div>
                                        <div className="col-md-4">
                                            Прогресс
                                    </div>
                                    </div>
                                </div>
                            </div>
                            {showCourses}
                        </>
                    )}
                    {showTrainings.length > 0 && (
                        <>
                            <div className="row label_title">
                                <TitleIcon title="training" />
                                <h2 className="sub_header" >Тренинги <span className="coll_length">{showTrainings.length}</span></h2>
                            </div>
                            <div className="row d-none d-md-flex">
                                <div className="col-md-5">

                                </div>
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-6">
                                            Статус
                                    </div>
                                        <div className="col-md-6">
                                            Дата
                                    </div>

                                    </div>
                                </div>
                            </div>
                            {showTrainings}
                        </>
                    )}
                    {showTests.length > 0 && (
                        <>
                            <div className="row label_title">
                                <TitleIcon title="test" />
                                <h2 className="sub_header" >Тесты <span className="coll_length">{showTests.length}</span></h2>
                            </div>
                            <div className="row d-none d-md-flex">
                                <div className="col-md-4">

                                </div>
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-md-4">
                                            Статус
                                    </div>
                                        <div className="col-md-4">
                                            Пройти до
                                    </div>
                                        <div className="col-md-4">
                                            Прогресс
                                    </div>
                                    </div>
                                </div>
                            </div>

                            {showTests}
                        </>
                    )}

                </>
            )
        }

    }

}

