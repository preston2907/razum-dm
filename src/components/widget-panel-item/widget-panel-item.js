import React, { Component } from 'react';
import './widget-panel-item.css';

export default class WidgetPanelItem extends Component {

  render() {


    const { label, max_count, count, type, inversion, text_string } = this.props;
    let percentToWidth = 0;
    if (count !== 0 ){
      percentToWidth = Math.round((count / max_count) * 100);
    } 
    let color = ''
    if (percentToWidth < 30) {
      if (!inversion) {
        color = 'ff7963';
      } else {
        color = '7ed321';
      }
    }
    if (percentToWidth >= 30 && percentToWidth < 70) {
      color = 'fbce5d';
    }
    if (percentToWidth >= 70) {
      if (!inversion) {
        color = '7ed321';
      } else {
        color = 'ff7963';
      }
    }
    if (max_count === 0 && count=== 0) {
      color = '7ed321';
      percentToWidth = 100;
    }
    const styles = {
      backgroundColor: '#' + color,
      width: percentToWidth + '%',
      maxWidth: '100%'
    }
    return (

      <div className="widget-main">
        <div className="widget-label">
          <span>{label}</span>
        </div>
        <div className="widget-numbers">
          {
            type === '2dig' && (
              <>
                <span className="big">{count}</span> <span className="small">/{max_count}</span>
              </>
            )
          }
          {
            type === 'string' && text_string!== undefined && (
              <>
                <span className="big_string">{text_string}</span>
              </>
            )
          }
          {
            type === 'string' && text_string === undefined && (
              <>
                <span className="big">{percentToWidth}%</span>
              </>
            )
          }
        </div>
        <div className="progress-bar-main">
          <div className="progress-bar-container">
            <div className="my-progress" style={styles}>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 