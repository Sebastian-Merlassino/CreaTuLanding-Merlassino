import { useState } from "react";

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1);
    const handleClickDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    const handleClickIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };


    return (
        <div className="item-count">
            <button
                className="btn btn-outline-secondary"
                onClick={handleClickDecrement}
            >
                -
            </button>
            <p>{count}</p>
            <button
                className="btn btn-outline-secondary"
                onClick={handleClickIncrement}
            >
                +
            </button>

            <button onClick={() => addProduct(count)} className="btn btn-primary">Añadir al carrito</button>



        </div>
    );
};

export default ItemCount;
