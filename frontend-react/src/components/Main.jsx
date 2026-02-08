import React from "react";
import Button from "./Button";
import Header from "./Header";
import Footer from "./Footer";

const Main = ()=>{
    return(
        <>
       
        <div className="container">
            <div className="p-5 text-center bg-light-dark rounded">
                <h1 className="text-light">Stock Prediction Portal</h1>
                <p className="text-light lead">The stock prediction portal util-izes machine learning techniques, specifically employing Keras, and LSTM model, integrated within the Django framework.It forecast future stock prices by analyzing 100-day and 200-day moving averages, essential indicators widely used by stock analysis to inform trading and investment decisions.</p>
                <Button />
            </div>
        </div>
       
        </>
    )
}
export default Main