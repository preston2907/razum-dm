import React, { Component } from 'react';
import Spinner from '../../Spinner';
import DataRequest from '../../../services/service';
import TitleIcon from '../../title-icon'
import ListItem from './list-item';
import CollabCard from '../collab-card'

import './list.css';


export default class List extends Component {

    state = {
        loading: true,
        dataObj: {}
    }

    dataRequest = new DataRequest();


    componentDidMount() {
        this.dataRequest.getData('getcollabs', '6808788990157418356').then((resp) => {
            this.setState({
                dataObj: resp,
                loading: false,
                view_mode: 'collabs-list'
            })

        })
    }

    onCollabClick = (obj_id, c_fname) => {
        this.setState({
            view_mode: 'collab-card',
            collabID: obj_id,
            collabToRender: c_fname
        })
    }

    goBackClick = () => {
        this.setState({
            view_mode: 'collabs-list'
        })
    }
    render() {

        if (this.state.loading === true) {
            return (
                <Spinner />
            )

        } else {

            if (this.state.dataObj.message === 'is_manager') {

                if (this.state.view_mode === 'collabs-list') {

                    let renderedCollaborators = this.state.dataObj.data.map((item) => {
                        return (
                            <ListItem colObject={item} onPersonClick={(id, f_name) => this.onCollabClick(id, f_name)} />
                        )
                    })

                    return (
                        <>
                            <div className="spec_head"><h1>Обучение специалистов</h1></div>
                            <div className="row">

                                <TitleIcon title="collab" />
                                <h2 className="sub_header" >Специалисты <span className="coll_length">{this.state.dataObj.data.length}</span></h2>
                            </div>
                            <div className="row d-none d-md-flex">
                                <div className="col-md-4">

                                </div>
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-md-4">
                                            Курсов
                                    </div>
                                        <div className="col-md-4">
                                            Тренингов
                                    </div>
                                        <div className="col-md-4">
                                            Ежемесячный тест
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="collaborator-list">
                                {renderedCollaborators}
                            </div>
                        </>
                    )
                } else if (this.state.view_mode === 'collab-card') {

                    return (
                        <>
                            <div className="spec_head"><h1>Обучение специалистов</h1></div>

                            <CollabCard
                                c_fname={this.state.collabToRender}
                                object_id={this.state.collabID}
                                goBackClick={() => this.goBackClick()}
                            />
                        </>
                    )

                }
            } else {

                return (
                    <>
                        <h3 className="not-manager">Вы не являетесь директором магазина</h3>
                    </>
                )
            }

        }
    }

}
