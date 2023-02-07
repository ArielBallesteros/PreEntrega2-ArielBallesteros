import "./itemDetail.css";

const ItemDetail = ({item})=>{
    return(
        <div className="row">
        <div className="col">
          <div className="card">
            <img
              className="img"
              src={item.img}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">Precio: ${item.precio}</p>
              <p className="card-text">Descripcion: {item.desc}</p>
              <p className="card-text">Cantidad: {item.cantidad}</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ItemDetail