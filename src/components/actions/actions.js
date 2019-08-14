export const buyFeature = e => {
    console.log("BuyFeature Invoked!", e.target);
    console.log("E", e);
    return {type: "BUY_FEATURE", payload: e};
}

export const removeFeature = e => {
    console.log('removeFeature Invoked!', e.target);
    return{type:"REMOVE_FEATURE", payload: e};
}