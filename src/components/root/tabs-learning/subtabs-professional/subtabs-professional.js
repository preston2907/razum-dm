import React, { Component } from 'react';

import CardListWrapper from '../../../card-list-wrapper'

export default class SubtabsProfessional  extends Component {

    render() {
      return (
        <>
        <h2 className='mx-auto text-center part-header'>Профессиональное</h2>
          <CardListWrapper />
        </>
      )
    }
  }