import {combineReducers} from "redux";
import {ADD_ITEM, CLEAR_ALL_ITEMS, REMOVE_ITEM, UPDATE_ITEM} from "./types";



export const basketReducer = (basket = {items: []}, action) => {
    switch (action.type) {
        case UPDATE_ITEM:

            console.log("ding", action.payload);
            const foundItemInBasketIndex = basket.items.findIndex(item => {
                return item.id === action.payload.id
            })
            console.log("basketcase", foundItemInBasketIndex);
            let basketItemsArray = [...basket.items];
            if (itemInBasketIndex !== -1) {

                basketItemsArray.splice(foundItemInBasketIndex, 1);

                basketItemsArray.push(action.payload);

                console.log("basketitemsarray", basketItemsArray);
            }

            basket.items = [...basketItemsArray];

            return {...basket};

        case REMOVE_ITEM:
            const _result = omit([action.payload], basket);
            return _result;

        case ADD_ITEM:
            const itemInBasketIndex = basket.items.findIndex(item => {
                return item.id === action.payload.product.id
            })
            console.log("basketcase", itemInBasketIndex);
            let basketItems = [...basket.items];
            if (itemInBasketIndex !== -1) {

                let itemInBasket = basket.items[itemInBasketIndex];
                itemInBasket.quantity++;

                basketItems.push(itemInBasketIndex);

            } else {

                let newItem = {...action.payload.product, quantity: 1};
                basketItems.push(newItem);
            }


            basket.items = [...basketItems];


            return {...basket}

        case CLEAR_ALL_ITEMS:

            console.log("clear items");
            basket.items = [];


            return {...basket}

        default:
            return basket;
    }
};

export const reducers = combineReducers({
    basket: basketReducer
});