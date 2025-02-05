import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Home } from './Home'
import { Product } from './Product'
import { Cart } from './Cart'
import { createContext,  useReducer } from 'react'
import { fetch_details } from './loader'
import { WebLayout } from './WebLayout'
export const Productscontext = createContext();

export const WebSite_layout = () => {
    const reducer = (state,action)=>{
        switch(action.type){
            case "Buy_item":
                return {...state, Buy_items: action.buyItem};
            case "Add_cart":
                return{...state, cart_product:[...state.cart_product, action.addCart]};
            case "Remove_cart":
                return{...state, cart_product: state.cart_product.filter((ele => ele.id !== action.id))}
            default:
                return {state};
        }
    }
    const [state, dispatch] = useReducer(reducer, {cart_product: [], Buy_items: null}) 
    const handleAddCart = (item)=>{
        dispatch({type: "Add_cart", addCart: item})
    }
    const handleBuy = (item) =>{
        dispatch({type: "Buy_item", buyItem: item});
    }
    const remove_cart = (id) =>{
        dispatch({type: "Remove_cart", id: id});
    }
    const route = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<WebLayout />}>
            <Route index element={<Home />} loader={fetch_details} />
            <Route path='product' element={<Product />} />
            <Route path='cart' element={<Cart />} />
        </Route>
    ))

    return (
        <Productscontext.Provider value={{handleAddCart, state, handleBuy, remove_cart}}>
        <RouterProvider router={route} />
        </Productscontext.Provider>
    )
}
