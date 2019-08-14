import React from 'react';
import { statement } from '@babel/template';

import {BUY_FEATURE, REMOVE_FEATURE} from '../actions/actions';
export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    store: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

// export const mockReducer = (state = initialState) => {
//            return {
//             ...state
//            }
//         }
         
export const mockReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BUY_FEATURE':
            console.log('stateReducer', action.payload);
      return {
                 ...state,  additionalPrice: state.additionalPrice + action.payload.price

                //  additionalPrice: state.additionalPrice? [...state.additionalPrice + action.payload.price]: [action.payload.price],
                //  car: {...state.car,
                //  features: state.car.features? [...state.car.features, action.payload]: [action.payload]
                //  }
             }
            
            case 'REMOVE_FEATURE':
                console.log('RemoveFeatureAction.payload', action.payload);
                return {
                    ...state,
                    car: {...state.car,
                    features: state.car.features? [...state.car.features, action.payload]: [action.payload]
                }
                
                }
                    
            default:
                return state;
    
  }
}