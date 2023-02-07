import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { stockProductos } from "../../data/stockProductos";
import "./style.css";

const ItemDetailContainer =()=>{
    const [item,setItem] = useState({});
    const {id} =useParams();

    useEffect(()=>{
        const promesa = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(stockProductos.find(item => item.id === parseInt(id)));
            },1000);
        });

        promesa.then((data)=>{
            setItem(data)
        })
    },[id]);

    return(
        <div className="container">
            <ItemDetail item ={item}/>
        </div>
    )
}

export default ItemDetailContainer;