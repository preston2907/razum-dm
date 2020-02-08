import React, { Component } from 'react';
import GetTests from '../../services/gettest';
import CardListItem from "../card-list-item/card-list-item";
import Spinner from "../Spinner"
import './tests.css'
import CoursesSwitcherItem from './event-switcher-item';

export default class Tests extends Component {
  getEvents = new GetTests();
  componentDidMount() {
    this.getEvents._getFilteredData('active').then((data) => {
      this.setState({
        data,
        loading: false
      })
    })
  }
  
  state = {
    menuItems: [
      {
        id: 1,
        name: 'Активные',
        active: true,
        value: 'active'
      },
      {
        id: 2,
        name: 'Завершенные',
        active: false,
        value: 'finished',
      },
    ],
    show: 'active',
    data: null,
    loading: true
  }

  changeSource = (id, value) => {
    this.setState({
      loading: true
    })
    this.getEvents._getFilteredData(value).then((data) => {
      let show = value;
      let newData = data;
      let newArray = this.state.menuItems.map((elem) => {
        if (elem.id === id) {
          elem.active = true;
        } else {
          elem.active = false;
        }
        return elem
      })
      this.setState({
        show,
        data: newData,
        menuItems: newArray,
        loading: false
      })
    })
  }

  render() {


    let styleForCol = {
      marginTop: '20px'
    }

    let switcherElems = this.state.menuItems.map((item) => {
      return (
        <CoursesSwitcherItem
          key={item.id}
          label={item.name}
          selected={item.active}
          onSelected={(item.active !== true) ? () => this.changeSource(item.id, item.value) : console.log()} />
      )
    })

    if (!this.state.loading) {

      let cardListElems = this.state.data.map(elem =>
        <div className="col-6 col-md-4 "  key={elem.id} style={styleForCol}>
          <CardListItem elem={elem} showRequireBadge={false} />
        </div>);

      return (
        <div>
          <h2  className='mx-auto text-center part-header'>Тесты</h2>
          <div className=' d-md tests-switcher-main row d-flex justify-content-center mx-auto'>
            {switcherElems}
          </div>
          <div className="row">
            {cardListElems}
          </div>
        </div>
      )
    } else {
      return (
        <>
          <h2  className='mx-auto text-center part-header'>Тесты</h2>
          <div className=' d-md tests-switcher-main row d-flex justify-content-center mx-auto'>
            {switcherElems}
          </div>
          <Spinner />
        </>
      )
    }

  }
}