import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Cards from "./Cards";
import Sdatas from "./Sdatas.jsx";

ReactDOM.render( 
  <>
   <h1 className = "heading_style" > List of top 5 NetflixSeries in 2022 </h1> 
   {Sdatas.map((val) => {
      return ( 
        <Cards 
        imgsrc = { val.imgsrc }
         title = { val.title }
         sname = { val.sname }
         links = { val.links }
         />
      )
    }) }
   </>,
   document.getElementById('root')
);
