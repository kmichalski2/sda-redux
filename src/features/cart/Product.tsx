import { useAppDispatch } from "../../app/hooks";
import { addProduct } from "./cartSlice";

export interface ProductProps {
    name: string;
}

export function Product(props: ProductProps) {
    const dispatch = useAppDispatch();
    
    return (
        <div>
            <h2>{props.name}</h2>
            <button onClick={() => dispatch(addProduct(props.name))}>Add to Cart</button>
        </div>
    )
}