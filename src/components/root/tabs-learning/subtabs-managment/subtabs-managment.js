import React from 'react';
import TitleIcon from '../../../title-icon'
import './subtabs-managment.css'

const SubtabsManagment = () => {
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
                    <div className='col-12 col-md-4 develop-prog-card'>

                           <div className="dev-prog-name">
                               <span>Программа «MUST HAVE»</span>
                           </div>
                           <div className='dev-prog-status'>
                            Статус: Пройдено
                           </div>
                           <div className='dev-prog-status'>
                            Пройти до: 01.02.2020
                           </div>
                           <div className='dev-prog-button'>
                            <button type="button" >
                                Перейти
                            </button>
                           </div>

                    </div>
                    <div className='col-12 col-md-4 develop-prog-card'>

                           <div className="dev-prog-name">
                               <span>Программа «MUST HAVE»</span>
                           </div>
                           <div className='dev-prog-status'>
                            Статус: Пройдено
                           </div>
                           <div className='dev-prog-status'>
                            Пройти до: 01.02.2020
                           </div>
                           <div className='dev-prog-button'>
                            <button type="button" >
                                Перейти
                            </button>
                           </div>

                    </div>
                    <div className='col-12 col-md-4 develop-prog-card'>

                           <div className="dev-prog-name">
                               <span>Программа «MUST HAVE»</span>
                           </div>
                           <div className='dev-prog-status'>
                            Статус: Пройдено
                           </div>
                           <div className='dev-prog-status'>
                            Пройти до: 01.02.2020
                           </div>
                           <div className='dev-prog-button'>
                            <button type="button" >
                                Перейти
                            </button>
                           </div>

                    </div>
                   
                </div>
            </div>
    )
}

export default SubtabsManagment;