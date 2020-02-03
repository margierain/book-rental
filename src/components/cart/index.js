import React from 'react';
import { StoryOneCart } from './storyOne';
import { StoryTwoCart } from './storyTwo';
import { StoryThreeCart } from './storyThree';

export const Cart = () => {
  return (
    <div className="items">
      <h1>Calculation of Result</h1>
      <h4>Story 1 </h4>
      <StoryOneCart/>
      <br/>
      <h4>Story 2</h4>
      <StoryTwoCart/>
      <br/>
      <h4>Story 3</h4>
      <StoryThreeCart/>
      <br/>
    </div>
  )
}