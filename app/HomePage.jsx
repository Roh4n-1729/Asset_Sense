"use client";
import React, { useEffect,useState } from "react";
import { motion } from "framer-motion";
import Community from "./components/Community";
import Billboard from "./components/Billboard";
import Tagging from "./components/Tagging";
import Transformation from "./components/Transformation";
import Button from './components/Button'
import Link from "next/link";


function HomePage() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");


  return (
    <>
    <div className="blur-circle-shape"></div>
     <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />
      <Billboard />
      <Tagging onMouseEnter={textEnter} onMouseLeave={textLeave} />
      <Transformation onMouseEnter={textEnter} onMouseLeave={textLeave} />

      <div>
        <div className=" flex flex-col gap-3">
          <h1 className=" pl-4 text-9xl ">Contribute to the Community</h1>
          <p className=" pr-4 text-2xl text-right  ">  Be the missing piece for somebody</p>
        </div>
        <Community />
        <div className=" pb-3 flex flex-col justify-center items-center">
          <Link href='/community'>
        <Button text='Explore Now' />
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
