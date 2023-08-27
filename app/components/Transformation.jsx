'use client'

import Link from "next/link";
import Button from "./Button";

function Transformation(props) {

  return (
    <div>
      <div className=" w-[100vw] h-[100vh]">
        <div className=" flex flex-row gap-6 justify-center p-4">
          <div className="w-[50%] px-7">
            <h1 className="text-7xl  cursor-none" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            Enhance Your Visuals with Ease.{" "}
            </h1>
            <p className="text-2xl py-5 cursor-none" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            Turn ordinary images into captivating visual assets using our powerful set of transformation tools. Whether you're a designer, marketer, or content creator, our platform offers seamless solutions to bring out the best in your visuals.
            </p>
            <Link href='/transformation'>
            <Button text='Explore Now '   />
            </Link>
          </div>
          <div>
            <img
              className="w-[80%] h-[80%]"
              src="./tram.jpeg"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transformation;
