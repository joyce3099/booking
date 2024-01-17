import React from "react";
import "./featured.css"
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const Featured =() =>{

  const {data,loading,error,reFetch} = useFetch("http://localhost:8800/api/hotels/countByCity?cities=berlin,madrid,london");
  

  console.log(data);

    return (
      <div className="featured">
      {loading ? ("Loading please wait") : 
      (<>
        {/* <Link to={{ pathname: "/hotels", search: "?city=berlin" }}> */}
        <div className="featuredItem">
          <img src="https://cf.bstatic.com/xdata/images/city/600x600/653256.jpg?k=db29effa75f45141e936338a82b0ca45d1a970acf280216cb28ae1a785ab447a&o=" alt="" className="featuredImg"/>
          <div className="featuredTitles">
            <h1>Berlin</h1>
            <h2>{data[0]} properties</h2>
          </div>
        </div> 
        {/* </Link> */}
        <div className="featuredItem">
          <img src="https://cf.bstatic.com/xdata/images/city/600x600/653240.jpg?k=6b015a87c8443039a685038e97dd58dab6a8748078948b27cca7d1a5fcef308d&o=" alt="" className="featuredImg"/>
          <div className="featuredTitles">
            <h1>Madrid</h1>
            <h2>{data[1]} properties</h2>
          </div>
        </div>  
        <div className="featuredItem">
          <img src="https://cf.bstatic.com/xdata/images/city/600x600/653281.jpg?k=f290f027412c3954eba82a85cf40eaa703bcbb30b67fa5f2087c7db1eb406262&o=" alt="" className="featuredImg"/>
          <div className="featuredTitles">
            <h1>London</h1>
            <h2>{data[2]} properties</h2>
          </div>
        </div>  
        </>
      )}
      </div>
    )
}

export default Featured
