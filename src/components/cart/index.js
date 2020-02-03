import React from 'react';
import { StoryOneCart } from './storyOne';
import { StoryTwoCart } from './storyTwo';

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
    </div>
  )
}