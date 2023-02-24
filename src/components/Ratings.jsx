import { useEffect, useState } from "react";

function Ratings(props) {

let [number, setNumber ] = useState([0,0,0,0,0].fill(1,0,props.starNumber).fill(0,props.starNumber,5))

/* useEffect(()=> {
  let result = []
  for (let i = 0; i < 5; i += 1) {
    if (i < props.starNumber) {
      result.push(1)
    } 
    else {
      result.push(0)
      
    }
  }
  setNumber(result)
}, [setNumber]) */

return (
  <div>
  {number.map(i => <i className={`fa-solid fa-star ${i === 1? "red" : "grey"}`}></i>)}
  </div>
)

  /* let stars = "";


  for (let i = 0; i < 5; i += 1) {
    if (i < starNumber) {
      stars += ('<i class="fa-solid fa-star red"></i>')
    } 
    else {
      stars += ('<i class="fa-solid fa-star grey"></i>')
    }
  }
return (stars) */
  
}

export default Ratings;
