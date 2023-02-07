import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {stockProductos} from "../../data/stockProductos";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams;

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          id ? stockProductos.filter((item) => item.id.toString() === id) : stockProductos
        );
      }, 1000);
    });

    promesa.then((data) => {
      setItems(data);
    });
  }, [id]);

  return (
    <div className="container py-5">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
