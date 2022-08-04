import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { decrementProductQuantity, incrementProductQuantity, removeProduct, selectItems, selectQuantity } from './cartSlice';
export function CartInfo() {
    const quantity = useAppSelector(selectQuantity);
    const items = useAppSelector(selectItems);
    const dispatch = useAppDispatch();

    const listItems = items.map((item, index) => {
        return <li key={index}>{item.name} <button onClick={() => dispatch(decrementProductQuantity(item.name))}>-</button> ({item.quantity}) <button onClick={() => dispatch(incrementProductQuantity(item.name))}>+</button> <button onClick={() => dispatch(removeProduct(item.name))}>🗑</button></li>
    })

    return (
        <div>
            <span>{quantity}</span>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}