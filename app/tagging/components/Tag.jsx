import React from "react";
import './Tag.css'
function Tag(props) {
  return (
    <div>
        <p className=" bg-slate-900 p-2 rounded underline-hover-effect">{props.value}</p>
    </div>
  );
}

export default Tag;
