
import { act, useEffect } from "react";
import { Actions } from "../contants/actionType";

const initialState = {
    sign_in: null,
    user_data: [{
        userName: "Bharanitharan",
        userAccName: "Bharani@",
        password: "Bharani2004@",
        mailid: "m.bhranithran2004@gmail.com"
    }, {
        userName: "Murugaiyan",
        userAccName: "Murugaiyan@",
        password: "Murugaiyan1974@",
        mailid: "murugaiyan@1974@gamil.com"
    }],
    cart: [{
        item: {
            "name": "Hyderabadi Dum Biryani",
            "category": "biryani",
            "icon": "fas fa-bowl-food",
            "rating": "4.1"
        },
        no_item: 1
    }]
}

export const reducers = (state = initialState, action_get) => {
    switch (action_get.type) {
        case Actions.SIGN_IN:
            return { ...state, sign_in: action_get.payload };
            break;
        case Actions.NEW_USER:
            return { ...state, user_data: [...state.user_data, action_get.payload] }
        case Actions.ADD_CART:
            return {
        ...state,
        cart: state.cart.some(cartItems => cartItems.item.name === action_get.payload.item.name)
            ? state.cart.map(cartItem =>
                cartItem.item.name === action_get.payload.item.name
                    ? { ...cartItem, no_item: (cartItem.no_item || 1) + 1 }
                    : cartItem
            )
            : [...state.cart, { item: action_get.payload.item, no_item: 1 }]
    };
        case Actions.REMOVE_CART:
            return { ...state, cart: state.cart.some(cartItems => (cartItems.item.name === action_get.payload)) ? state.cart.map(cartItem => cartItem.no_item > 1 ? {...cartItem, no_item: cartItem.no_item-1} : null).filter(cartItem => cartItem !== null) : state.cart}
            break;
        default:
            return state
            break;
    }

}


