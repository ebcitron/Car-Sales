import React from 'react';
import { buyFeature } from '../actions';

const AdditionalFeature = props => {
  console.log('featureProps', props)
  return (
    <li>
     <span style={{border: "2px solid black"}}>
      <button className="button" onClick={buyFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
       </span> {/* Add an onClick that will let you add a feature to your car */}
    </li>
  );
};

export default AdditionalFeature;
