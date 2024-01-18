import React from 'react'
import "./featuredProperties.css"
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const FeaturedProperties = () => {
  const {data,loading,error} = useFetch("https://booking-server-ppve.onrender.com/api/hotels?featured=true");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[1]}
                alt=""
                className="fpImg"
              />
              <Link to={`/hotels/${item._id}`}>
              <span className="fpName">{item.name}</span>
              </Link>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default FeaturedProperties
