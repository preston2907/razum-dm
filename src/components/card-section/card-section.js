import React from "react";
import TitleIcon from "../title-icon";
import MultipleItems from "../slider/slider";
// import {MyContext} from '../app/app'

import "./card-section.css";

const CardSection = props => {
  const { title, elems } = props;

  let giveRussianTitle = () => {
    let r_title = "";

    switch (title) { 
      case "training":
        r_title = "Тренинги";
        break;

      case "course":
        r_title = "Курсы";
        break;

      case "test":
        r_title = "Тесты";
        break;

      case "post-training":
        r_title = "Отработка навыка";
        break;

      default:
        r_title = "Title";
    }

    return r_title;
  };

  return (
    <div>
      <div className="card-section-title">
        <div>
          <TitleIcon title={title} className="title-icon" />
          <h1>{giveRussianTitle(title)}</h1>
        </div>
        {/* <MyContext.Consumer> */}
          {({showCourses, showEvents, showTests})  => {
            if (title === 'course'){

              return(
                <span onClick={showCourses}>Смотреть все Курсы </span>
                )
              }

              if (title === 'test') {
                return(
                  <span onClick={showTests}>Смотреть все Тесты </span>
                  )
              }
              if (title === 'training') {
                return(
                  <span onClick={showEvents}>Смотреть все Тренинги </span>
                  )
              }

          }}
        {/* </MyContext.Consumer> */}
      </div>

      <MultipleItems elems={elems} title={title} />
    </div>
  );
};

export default CardSection;
