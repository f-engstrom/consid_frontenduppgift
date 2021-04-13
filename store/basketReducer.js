import {combineReducers} from "redux";
import {ADD_ITEM, CLEAR_ALL_ITEMS, REMOVE_ITEM, UPDATE_ITEM} from "./types";


export const basketReducer = (basket = {items: []}, action) => {
    switch (action.type) {
        case UPDATE_ITEM:

            const foundItemInBasketIndex = basket.items.findIndex(item => {
                return item.id === action.payload.id
            })
            let basketItemsArray = [...basket.items];
            if (foundItemInBasketIndex !== -1) {

                basketItemsArray.splice(foundItemInBasketIndex, 1);

                basketItemsArray.push(action.payload);

            }

            basket.items = [...basketItemsArray];
            basket.items.sort(function(a,b){
                return a.id-b.id;
            })

            return {...basket};

        case REMOVE_ITEM:
            
           const filteredArray = basket.items.filter(item=> item.id !== action.payload);
           
           basket.items = filteredArray;
           
            return {...basket};

        case ADD_ITEM:
            
            const itemInBasketIndex = basket.items.findIndex(item => {
                return item.id === action.payload.id
            })
            
            if (itemInBasketIndex !== -1) {

                let itemInBasket = basket.items[itemInBasketIndex];
                itemInBasket.quantity++;
                

            } else {


                let newItem = {...action.payload, quantity: 1};
                basket.items.push(newItem);
            }


            basket.items.sort(function (a, b) {
                return a.id - b.id;
            })

            
            return {...basket}

        case CLEAR_ALL_ITEMS:

            basket.items = [];


            return {...basket}

        default:
            return basket;
    }
};

export const reducers = combineReducers({
    basket: basketReducer
});