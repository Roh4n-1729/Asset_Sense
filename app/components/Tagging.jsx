"use client";
import React from "react";
import Button from "./Button";
import Link from "next/link";

function Tagging(props) {
  return (
    <div className=" w-[100vw] h-[100vh]">
      <div className=" flex flex-row gap-6 justify-center p-4">
        <div className=" flex justify-center w-[50vw] ">
          <img
            className="w-[80%] h-[80%]"
            src="./tag.jpeg"
            alt="Image"
          />
        </div>
        <div className="w-[50%] px-7">
          <h1
            className="text-7xl  cursor-none"
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
          >
            Revolutionizing asset management and search with a human touch.
          </h1>
          <p
            className="text-2xl py-5 cursor-none"
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
          >
            Employ cutting-edge AI solutions for intelligent content-based
            tagging, facilitating effortless organization and enabling natural
            language-based asset retrieval.
          </p>

          <Link href="\tagging">
            <Button text="Explore Now" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Tagging;
