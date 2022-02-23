import * as React from 'react';
import styled from "styled-components";
import { colorPalette } from '../utils';

import Health from "../assets/health";
import Fitness from "../assets/fitness";
import Wellness from "../assets/wellness";
import Productivity from "../assets/productivity";
import Money from "../assets/money";
import Education from "../assets/education";
import Hobbies from "../assets/hobbies";
import Chores from "../assets/chores";
import Business from "../assets/business";
import Other from "../assets/other";

const HabitView = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: auto auto auto;
  column-gap: 30px;
  row-gap: 30px;
  height: max-content;
  align-items: center;
  justify-items: center;
  max-height: 90%;

  div:last-child {
    grid-column: 2;
    grid-row: 4;
  }
`;

const HabitCard = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  height: 93px;
  width: 93px;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &:hover,
  &:active {
    background: rgba(239, 71, 111, 0.2);
    border: 2px solid ${colorPalette.pink};
  }
`;

const HabitTitle = styled.svg`
  text-align: center;
  cursor: pointer;
  font-weight: 500;
  &:hover,
  &:active {
    color: ${colorPalette.pink};
  }
`;

const Habits = props => {
  const habitOptions = [
    Health, 
    Fitness, 
    Wellness, 
    Productivity, 
    Money, 
    Education, 
    Hobbies, 
    Chores, 
    Business, 
    Other
  ];
  
  return (
    <HabitView>
      {habitOptions.map((AnyComponent, id) => (
      <HabitTitle key={id}>
        <HabitCard>
          <AnyComponent />
        </HabitCard>
        {AnyComponent.name}
      </HabitTitle>
      ))}
    </HabitView>
  );
}

export default Habits;