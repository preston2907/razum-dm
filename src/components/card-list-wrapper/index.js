import React, { Component } from 'react';
import Service from '../../services/mainpageservice.js'
import CardList from '../card-list';
import Spinner from '../Spinner'

export default class CardListWrapper extends Component {

    service = new Service();
    
    componentDidMount() {
        this.service._getTransformData().then((data) =>{
            let tempArray = [];
            if ((data.findIndex( elem=> elem.type === 'course') !== -1)) {
                tempArray.push({
                    name: 'course',
                    visible: true
                })
            } else {
                tempArray.push({
                    name: 'course',
                    visible: false
                })
            }

            if ((data.findIndex( elem=> elem.type === 'training') !== -1)) {
                tempArray.push({
                    name: 'training',
                    visible: true
                })
            } else {
                tempArray.push({
                    name: 'training',
                    visible: false
                })
            }
            if ((data.findIndex( elem=> elem.type === 'test') !== -1)) {
                tempArray.push({
                    name: 'test',
                    visible: true
                })
            } else {
                tempArray.push({
                    name: 'test',
                    visible: false
                })
            }
            if ((data.findIndex( elem=> elem.type === 'post-training') !== -1)) {
                tempArray.push({
                    name: 'post-training',
                    visible: true
                })
            } else {
                tempArray.push({
                    name: 'post-training',
                    visible: false
                })
            }
            this.setState({
                data: data,
                sections: tempArray,
                loading: false
            })
        });
    }

state = {
    data: null,
  currentTab: 'main',
  sections: [
      {
      name: "course",
      visible: true
    },
    {
      name: "test",
      visible: true
    },
    {
      name: "training",
      visible: true
    },
    {
        name: "post-training",
      visible: false
    }
],

  loading: true
};

    render() {
        if (this.state.loading === true) {
            
            return(
                <>
                <Spinner/>
            </>
        )
    } else {

        return (
            <>
            <CardList  items={this.state.data} sections={this.state.sections}  />
            </>
        )
    }
    }
}