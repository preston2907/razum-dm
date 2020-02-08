import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./card-list-item.css";
import icon from "./icon.svg";

const CardListItem = ({ elem, showRequireBadge }) => {
  let percentage = elem.progress !== false ? elem.progress : false;
  if ( elem.progress=== 0 ) {
    percentage = false;
  }


  if (showRequireBadge === undefined) {
    showRequireBadge = elem.showBadge
  }

  if (elem.showDuration === false ) {
    elem.timeLimit = "undefined"
  }  
  const statusClass = elem.status_class !== undefined ? elem.status_class : '';
  let buttonText = '';
  let needButton = false;
  switch (statusClass) {
    case 'c_progress':
      buttonText = "Продолжить";
      needButton = true;
      break;

    case 'c_success':
      needButton = false;
      break;

    case 'c_assigned':
      buttonText = "Начать";
      needButton = true;
      break;

    case 'c_fail':
      needButton = false;
      break;
      case 'c_viewresult':
          buttonText = "К Результату";
          needButton = true;
        break;
    default:
  }

  if (statusClass === "c_assigned" && elem.type==="training" ) {
    needButton = true;
    buttonText = "Посмотреть";
  }
  if (statusClass === "c_success" && elem.type==="training" ) {
    needButton = true;
    buttonText = "Посмотреть";
  }
  if (statusClass === "c_success" && elem.type==="course" ) {
    needButton = true;
    buttonText = "Посмотреть";
  }
  if (statusClass === "c_fail" && elem.type==="course" ) {
    needButton = true;
    buttonText = "Повторить";
  }

  const strokeColor = (status) => {
    let color = '';
    switch (status) {
      case 'c_progress': color = '#f5b800';

        buttonText = "Продолжить";
        needButton = true;
        break;

      case 'c_success': color = '#6bca6b';
        needButton = false;
        break;

      case 'c_assigned': color = '#989898';
        buttonText = "Начать";
        needButton = true;
        break;
        case 'c_viewresult':
            color = '#6bca6b'
            buttonText = "К Результату";
            needButton = true;
          break;

      case 'c_fail': color = 'tomato';
        needButton = false;

        break;

      default: color = '#3e98c7';

    }

    return color;
  }

  let is_required = elem.is_required !== undefined ? true : false;
  let start = elem.deadline || elem.startDate
  let showBadge = (showRequireBadge === false) ? false : true;
  

  function reDirect() {
    window.open(elem.link,'_blank');
  }
  if (elem.type === 'training') {
    showBadge = false;
  }

  return (
    <div className="card-wrapper">
      <div className="card-wiew">
        <img className="course-preview" src={elem.url} alt="preview"/>
        <div className={statusClass}>
          <span>Статус: </span>
          <span>{elem.state}</span>
        </div>
      </div>
      <div className="card-info">
        {showBadge && is_required && (


          <div className="card-level-urgent">
            <span>{elem.is_required}</span>
          </div>

        )
        }
        {(elem.timeLimit !== 'undefined') && (


          <div className="card-time-wrapper">
            {start && (
              <span className="card-date">Пройти до {start}</span>
            )}
            <div className = "course-duration">
              <img src={icon} alt='time-icon' />
              <span className="card-time">{elem.timeLimit} минут</span>
            </div>
          </div>
        )}
        {(elem.type === 'training' && elem.startDate !== '') && (


          <div className="card-time-wrapper">
            {start && (
              <span className="card-date">Дата начала: {start}</span>
            )}
            
          </div>
        )}
        <p className="card-title">{elem.title}</p>
        <div className="card-progress-wrapper">
          {needButton && (
            <button onClick={reDirect}>{buttonText}</button>

          )}
          
            
          {(percentage && elem.progress !== 0) && (
            <div>
              <CircularProgressbar
                value={elem.progress}
                text={`${elem.progress}%`}
                strokeWidth={10}
                styles={buildStyles({ pathColor: strokeColor(statusClass), trailColor: 'none' })} />
            </div>)}

        </div>
      </div>
    </div>
  );
};

export default CardListItem;
