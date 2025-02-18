import { useSelector } from "react-redux"
import { Actions } from "../contants/actionType"
export const sign_in = (user_name) => {
    return ({
        type: Actions.SIGN_IN,
        payload: user_name
    })
}

export const new_user = (item) => {
    return ({
        type: Actions.NEW_USER,
        payload: {
            userName: item.name,
            userAccName: item.user_name,
            password: item.user_password,
            mailid: item.user_mail
        }
    })
}

export const add_cart = (item) => {
    return ({
        type: Actions.ADD_CART,
        payload: {
            item: item,
        }
    })
}

export const remove_cart = (item) => {
    return ({
        type: Actions.REMOVE_CART,
        payload: item.name,
    })
}



