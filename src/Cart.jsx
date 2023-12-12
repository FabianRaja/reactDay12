import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { cartDecrement, cartIncrement, totalCalculation} from "./reducer";


export default function Cart(){

    //all the values and states imported using redux
    const {productImg,productName,productDescription,productRating,productPrice,productDiscount}=useSelector((state)=>state.valuesContainer.data);
    const {cart,productStock,subTotal,total,saved}=useSelector((state)=>state.valuesContainer.values);
    //dispatch is used for changing the values globally
    const dispatch=useDispatch();

    return (
        <div className="cart">
            
            <hr/>
            
            <div className="subject">

                <div>
                    <img src={productImg} alt="image"/>
                </div>

                <div className="aligncenter">
                    <h2>{productName}</h2>
                    <p>{productDescription}</p>
                    <p>Rating : {productRating}</p>
                    <h3 className="aligncenter">Stock : {productStock}</h3>
                </div>

                <div>
                    
                </div>

                <div>
                   <h3 className="aligncenter">Rs {productPrice}</h3>
                   <div className="addRemoveButtons">
                    {/* cartIncrement is dispatched while onClick operationg add item is performed */}
                    <button className="addButton" onClick={()=>dispatch(cartIncrement())}>Add Item</button>
                      {/* cartDecrement is dispatched while onClick operationg remove item is performed */}
                    <button className="removeButton" onClick={()=>dispatch(cartDecrement())}>Remove Item</button>
                   </div>
                   <h3 className="aligncenter">In Cart</h3>
                   <h3 className="aligncenter">{cart}</h3>
                </div>

            </div>
            
            <hr/>


            <div className="prefooter">
                <div className="prefooterContent">
                    <h3>SUBTOTAL</h3>
                    <h3 className="textCenter">Rs {subTotal}</h3>
                </div>
                <div className="prefooterContent">
                    <h3>DISCOUNT</h3>
                    <h3 className="textCenter">{productDiscount}</h3>
                </div>
                <div className="prefooterContent">
                    <h3>SHIPPING</h3>
                    <h3 className="textCenter">FREE</h3>
                </div>
                <div className="checkOutSection">
                      {/* totalCalculation is dispatched while onClick operationg Checkout is performed */}
                <button className="checkOutButton" onClick={()=>dispatch(totalCalculation())}>CheckOut</button>
                 </div>
            </div>

            <hr/>

            
           
            <div className="footerSection">
                <div className="footer">
                    <h3 className="aligncenter"><b>TOTAL</b></h3>
                    {/* if only checkOut button is clicked and discount price is calculated the amount saved will be displayed */}
                    <h3 className="aligncenter">{saved!=0?(<p>(Saved : {saved}Rs)</p>):<div></div>}</h3>
                    <h3 className="aligncenter"><b>Rs {total}</b> </h3>
                </div>               
            </div>
            
           
        </div>
    )
}