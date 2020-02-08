import React, { Component } from 'react'
import './course-catalog.css';
import Spinner from '../Spinner';
import CatalogCategory from './catalog-category'
import CatalogItem from './catalog-item'
import CatalogSource from '../../services/getcatalogcourses'
import UsefullCatalog from '../../services/getusefullcatalog'



export default class CourseCatalog extends Component {

    componentDidMount() {
        let catalogSource = null;

        if (this.props.showType === 'courses') {
            catalogSource = new CatalogSource();
        } else {
            catalogSource = new UsefullCatalog();
        }
        catalogSource.getData().then((data) => {
            this.setState({
                loading: false,
                coursesArr: data.objects.courses,
                categorysArr: data.objects.categories,
                currentCategory: 'All',
                currentCategoryName: 'Все'
            })
        })
    }
    state = {
        loading: true
    }
    changeCategory = (code,name) => {
        this.setState({
            currentCategory: code,
            currentCategoryName: name
        })
    }

    filteredElems = () => {
        // eslint-disable-next-line
        return this.state.coursesArr.filter((elem) => {
            if (this.state.currentCategory !== 'All') {

                if (elem.category === this.state.currentCategory) {
                    return true
                }
            } else {
                return true
            }
        })
    }

    render() {
        if (this.state.loading) {
            return (
                <Spinner />
            )
        } else {
            const categorys = this.state.categorysArr.map((item) => {
                return (
                    <li key={item.id} className="nav-item" >
                        <CatalogCategory
                            elem={item}
                            isActive={this.state.currentCategory === item.code}
                            onSelect={(this.currentCategory !== item.code) ? () => this.changeCategory(item.code,item.name) : console.log}
                            isMobile={false}
                        />
                    </li>
                )
            })
            const categorysMob = this.state.categorysArr.map((item) => {
                return (

                    <CatalogCategory
                        key={item.id}
                        elem={item}
                        isActive={this.state.currentCategory === item.code}
                        onSelect={(this.currentCategory !== item.code) ? () => this.changeCategory(item.code, item.name) : console.log}
                        isMobile={true}
                    />

                )
            })


            const courses = this.filteredElems().map((elem) => {
                return (
                    <CatalogItem
                        key={elem.id}
                        elem={elem}
                    />
                )
            })
            return (

                <div>
                    <ul className="nav nav-pills mb-3 catalog">
                        <div className="dropdown mobile">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.currentCategoryName}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {categorysMob}
                            </div>
                        </div>

                        {categorys}

                    </ul>
                    <div className="finded-items row">
                        {courses}
                    </div>
                </div>
            )
        }
    }

}