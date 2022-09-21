
import { CartItemType } from '../../types/CartItemType'; 

import { Wrapper } from './Cart.style';

import CartItem from '../cartItem/CartItem';


type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}


const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

    const calculateTotal = (items: CartItemType[]) => {
        return items.reduce((ack: number, item) =>
            ack + item.amount * item.price, 0
        )
    }

    return (
        <Wrapper>
            <h2>Твоята количка</h2>
            {cartItems.length === 0 ? <p>Все още няма нищо добавено.</p> : null}
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2>Общо {calculateTotal(cartItems).toFixed(2)} BGN</h2>
        </Wrapper>
    )
}


export default Cart;