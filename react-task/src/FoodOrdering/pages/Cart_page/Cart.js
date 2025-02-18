import { useSelector } from 'react-redux'

export const Cart = () => {
    const cart_items = useSelector((state) => state.all_data.cart);
  return (
    <div>
    {cart_items.length != 0 ? <div>Hi</div> : <div>Your Cart is empty</div>}
    </div>
  )
}
