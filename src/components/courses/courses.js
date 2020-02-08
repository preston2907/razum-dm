import React, { Component } from 'react';
import GetCourses from '../../services/getcourse';
import CardListItem from "../card-list-item/card-list-item";
import Spinner from "../Spinner"

import './courses.css'
import CoursesSwitcherItem from './courses-switcher-item';
import CourseCatalog from '../course-catalog';

export default class Courses extends Component {
  getcourse = new GetCourses()
  componentDidMount() {
    this.getcourse._getFilteredData('active').then((data) => {
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
      {
        id: 3,
        name: 'Каталог',
        active: false,
        value: 'catalog'
      }
    ],
    show: 'active',
    data: null,
    loading: true
  }

  changeSource = (id, value) => {
    if( id !== 3){

      this.setState({
        loading: true
      })
      this.getcourse._getFilteredData(value).then((data) => {
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
  } else {
    let newArray = this.state.menuItems.map((elem) => {
      if (elem.id === id) {
        elem.active = true;
      } else {
        elem.active = false;
      }
      return elem
    })
    this.setState({
      show : 'catalog',
      menuItems: newArray
    })
  }
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
      if (this.state.show !== 'catalog') {

        let cardListElems = this.state.data.map(elem =>
          <div key={elem.id}  className="col-6 col-md-4 " style={styleForCol}>
            <CardListItem elem={elem} showRequireBadge={false} />
          </div>);

        return (
          <div>
            <h2  className='mx-auto text-center part-header'>Курсы</h2>
            <div className=' d-md courses-switcher-main row d-flex justify-content-center mx-auto'>
              {switcherElems}
            </div>
            <div className="row">
              {cardListElems}
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <h2  className='mx-auto text-center part-header'>Курсы</h2>
            <div className=' d-md courses-switcher-main row d-flex justify-content-center mx-auto'>
              {switcherElems}
            </div>
            <CourseCatalog showType = 'courses'/>
          </div>
        )
      }
    } else {
      return (
        <>
          <h2  className='mx-auto text-center  part-header'>Курсы</h2>
          <div className=' d-md courses-switcher-main row d-flex justify-content-center mx-auto'>
            {switcherElems}
          </div>
          <Spinner />
        </>
      )
    }

  }
}