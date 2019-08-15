import {REMOVE_FEATURE, BUY_FEATURE} from '../actions/index';


const initialState = {
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
  
const reducer = (state = initialState, action) => {
    console.log('action', action);
    switch(action.type){
        case BUY_FEATURE:
            //const featureObj = state.store.find(feature => feature.id === action.payload.id);
            if(state.car.features.find(feature => feature.id === action.payload)){
              return state;
            } else {
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features, action.payload],
                    price: state.car.price + action.payload.price
                }
                }
              }
            case REMOVE_FEATURE:
              return {
                ...state,
                car: {
                  ...state.car,
                  price: state.car.price - action.payload.price,
                  features: state.car.features.filter(feature => (
                    feature.id !== action.payload.id
                  ))
                }
              };
            
        default:
            return state;
    }
};

export default reducer;

// Hello! My name is Eli, I am a longtime lostvaper, and I know you guys are good about customer service. I purchased a lostVape Orion unit with the included DNA chip. I absolutely love it and have given it great reviews. last night I woke up with a burning pain against my thigh and saw that the unit had popped open and was VERY hot. I have only charged it with either the one provided, or other high end cords of the same electrical

//  I used to modify, fix, and review electronics, and Ive decided to get back into it. I work with alot of southeast Asians who all chainsmoke. I have showed my devices off, and Ive convinced many to invest in a device and try to quit T-Cigs ("Traditional", love that term lol). I know that I could turn a healthy amount of smokers into lost-vapers. Some of them are like me, and like to tinker, others just want something that works and doesnt take much maintenance. I feel like your product line is more inclusive than others, and would love to work with you guys. 