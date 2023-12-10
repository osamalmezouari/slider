
import React, { useState } from 'react';
import { BiSolidQuoteRight } from 'react-icons/bi';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import './slider.css';

import people from './data'; // Assuming your array is named "people"

const Slider = () => {
    const [count, setCount] = useState(0);

    const handlerClick = (direction) => {
        if (direction === 'right') {
            setCount((prevCount) => (prevCount + 1) % people.length);
        } else if (direction === 'left') {
            setCount((prevCount) => (prevCount - 1 + people.length) % people.length);
        }
    };

    const currentReview = people[count];

    return (
        <section className="review">
            <button className="left" onClick={() => handlerClick('left')}>
                <AiOutlineLeft />
            </button>
            <article>
                <div className="img" style={{ backgroundImage: `url(${currentReview.image})` }}></div>
                <h1 className="name">{currentReview.name}</h1>
                <h2 className="jobTitle">{currentReview.title}</h2>
                <div className="quote">{currentReview.quote}</div>
                <div className="quoteIcon">
                    <BiSolidQuoteRight />
                </div>
            </article>
            <button className="right" onClick={() => handlerClick('right')}>
                <AiOutlineRight />
            </button>
        </section>
    );
};

/*export default Slider;
import "./slider.css"
import {useEffect, useState} from "react";
import people from "./data.js";
import {BiSolidQuoteRight} from "react-icons/bi";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

const Slider = () =>{
    const [reviews,setReviews] = useState(people[0])
    const [count,setCount] = useState(0)
    const handlerClick = (direction,id) => {
        if (direction === "right") {
            if (id >= 1 && id < people.length ) {
                setCount(id);
            }
            else if (id === people.length) {
                setCount(0);
            }
        }
        else if (direction=== "left"){
            if (id === 1) {
                setCount(people.length - 1)
            }
            else if (id > 1 && people.length >= id) {
                setCount(id - 2)
            }
        }
    }
    useEffect(() => {
        setReviews(people[count]);
    }, [count]);

    const {id,image,name,title,quote} = reviews
    return (
        <>
            <section className={"review"}>
                <button className={"left"} onClick={()=> handlerClick('left',id)}><AiOutlineLeft /></button>
                <article>
                    <div className={"img"} style={{backgroundImage:`url(${image})`}}></div>
                    <h1 className={"name"}>{name}</h1>
                    <h2 className={"jobTitle"}>{title}</h2>
                    <div className={"quote"}>{quote}</div>
                    <div className={"quoteIcon"}><BiSolidQuoteRight /></div>
                </article>
                <button className={"right"} onClick={()=> handlerClick('right',id)}><AiOutlineRight /></button>
            </section>
        </>
    )
}
export default Slider */
