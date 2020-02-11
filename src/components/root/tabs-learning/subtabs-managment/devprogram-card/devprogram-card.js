import React, { Component } from 'react'
import './devprogram-card.css';
import DataRequest from '../../../../../services/service.js';
import Spinner from '../../../../Spinner';


export default class DevProgramCard extends Component {

    dataReq = new DataRequest();
    componentDidMount() {
        this.dataReq.getObjDoc('getdevprogramcard', '6790188742141942336', this.props.object_id).then((resp) => {
            this.setState({
                loading: false,
                renderObj: resp.data
            })
        })
    }

    state = {
        loading: true
    }


    render() {
        if (this.state.loading) {
            return (
                <Spinner />
            )
        } else {

            

            return (
                <>
                <p>{JSON.stringify(this.state.renderObj)}</p>
                <button type="button" className="btn btn-warning" onClick= {()=> this.props.goBackClick()}> Вернуться назад</button>
                </>
            )
        }
    }
}