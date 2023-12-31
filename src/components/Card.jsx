import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
    let options = props.options;
    let priceOptions = Object.keys(options);
    let dispatch = useDispatchCart();
    let data = useCart();

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");
    const priceRef = useRef();


    const handleAddCart = async () => {
        let food = [];
        for (const item of data){
            if (item.id === props.foodItem._id) {
                food = item;
                break;
            }
        }
        if (food !=[]) {
            if (food.size === size){
                await dispatch({ type:"UPDATE", id: props.foodItem._id, price:finalPrice, qty:qty});
                return
            } else {
                await dispatch({
                    type: "ADD", id: props.foodItem._id, name: props.foodItem.name,
                    price: finalPrice, qty: qty, size: size
                });
                return
            }

        }
      
       // console.log(data);
    }

    let finalPrice = qty * parseInt(options[size]);

    useEffect(() => {
        setSize(priceRef.current.value)
    }, []);


    return (
        <div>
            <div class="card m-3 g-2"  id="card" style={{ width: "18rem", maxHeight: "380px" }}>
                <img src={props.foodItem.img} class="card-img-top" alt="food " style={{ height: "200px", objectFit: "fill" }} />
                <div class="card-body">
                    <h5 class="card-title">{props.foodItem.name}</h5>

                    <div className='container w-100'>
                        <select className='m-2 h-10 rounded ' id="qty" onChange={(e) => setQty(e.target.value)} >
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-10 rounded' id="qty" ref={priceRef}  onChange={(e) => setSize(e.target.value)} >
                            {priceOptions.map((data) => {
                                return (<option key={data} value={data}>{data}</option>)
                            })}
                        </select>
                        <div className='d-inline fs-5 h-100'>₹{finalPrice}/-</div>
                    </div>
                    <hr id='breakline' />
                    <button className='btn justify-content-center ms-2' id='cardbtn' onClick={handleAddCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
