import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ product, Agregar }) => {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p>Precio: ${product.price}</p>
        <div className="card-actions">
          <Link to={`/detail/${product.id}`} className="card-link">
            Más información
          </Link>
          <button className="btn btn-primary" onClick={Agregar}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
