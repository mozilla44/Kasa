import { useEffect, useState } from "react";

function Ratings({starNumber}) {
return (
  <div>
  {Object.entries([0,0,0,0,0].fill(1,0,starNumber).fill(0,starNumber,5)).map(([k,i]) => <i key={"star-" + k} className={`fa-solid fa-star ${i === 1? "red" : "grey"}`}></i>)}
  </div>
)
}

export default Ratings;
