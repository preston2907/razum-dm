import React, { Component } from 'react';
import Usefull from '../../services/getuseful';
import Spinner from '../Spinner';
import UsefullSwitcherItem from './usefull-switcher-item'
import UsefullItem from './usefull-item'
import CourseCatalog from '../course-catalog';

export default class Usefulll extends Component {

    getusefull = new Usefull();

    state = {
        menuItems: [
            {
                id: 1,
                name: 'Развитие',
                active: true,
                value: 'development'
            },
            {
                id: 2,
                name: 'Мотивация',
                active: false,
                value: 'motivation',
            },
            {
                id: 3,
                name: 'Материалы',
                active: false,
                value: 'materials'
            }
        ],
        show: 'development',
        data: null,
        loading: true
    }

    componentDidMount() {
        this.getusefull._getFilteredData('development').then((data) => {
            this.setState({
                data,
                loading: false
            })
        })
    }
    changeSource = (id, value) => {
        if (id !== 3) {

            this.setState({
                loading: true
            })
            this.getusefull._getFilteredData(value).then((data) => {
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
                show: 'materials',
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
                <UsefullSwitcherItem
                    key={item.id}
                    label={item.name}
                    selected={item.active}
                    onSelected={(item.active !== true) ? () => this.changeSource(item.id, item.value) : console.log()} />
            )
        })

        if (!this.state.loading) {
            if (this.state.show !== 'materials') {

                let cardListElems = this.state.data.map(elem =>
                    <div className="col-6 col-md-3 " key={elem.id} style={styleForCol}>
                        <UsefullItem elem={elem}  showRequireBadge={false} />
                    </div>);

                return (
                    <div>
                        <h2  className='mx-auto text-center part-header'>Полезное</h2>
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
                        <h2  className='mx-auto text-center part-header'>Полезное</h2>
                        <div className=' d-md courses-switcher-main row d-flex justify-content-center mx-auto'>
                            {switcherElems}
                        </div>
                        <CourseCatalog showType = 'usefull'/>
                    </div>
                )
            }
        } else {
            return (
                <>
                    <h2  className='mx-auto text-center part-header'>Полезное</h2>
                    <div className=' d-md courses-switcher-main row d-flex justify-content-center mx-auto'>
                        {switcherElems}
                    </div>
                    <Spinner />
                </>
            )
        }
    }
}