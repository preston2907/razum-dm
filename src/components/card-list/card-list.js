import React from "react";
import CardSection from "../card-section/card-section";
import CardListItem from "../card-list-item/card-list-item";
import "./card-list.css";

const cardList = props => {
  let elemSections =  props.sections;
  let allCards =  props.items;
  let sections = elemSections.map((item,i) => {
    if (item.visible) {
      let elems = allCards
        .filter(i => i.type === item.name)
        .map((elem) => <CardListItem elem={elem} key={elem.id} />);

      return (<CardSection key = {i} title={item.name} elems={elems} />)
    } else {
      // eslint-disable-next-line
      return 
    }
  });

  return sections;
};

export default cardList;
