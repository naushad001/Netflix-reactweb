import React from 'react';


function Cards(props) {
   console.log(props);
    return(
      <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="mypic" className="card__img" />
          <div className="card__info">
            <span className="card__category">{props.sname}</span>
            <h3 className="card__title">{props.title}</h3>
            <a href={props.links}> 
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
      </>
    )
  };

  
  
  export default Cards;