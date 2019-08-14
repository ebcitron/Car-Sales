import React from 'react';
import {connect} from 'react-redux';
import {buyFeature} from './actions/actions';


const AdditionalFeature = props => {
  return (
    <li> 
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick = {()=>{props.buyFeature(props.feature)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};






const mapStateToProps = state => {
 console.log('ADDITIONAL FEATURES state', state.store);
  return{
    additionalPrice: state.additionalPrice,
    store: state.store
  }
}

export default connect(mapStateToProps, {buyFeature})(AdditionalFeature);
