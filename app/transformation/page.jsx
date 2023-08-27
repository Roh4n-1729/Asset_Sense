import React from "react";
import ImageCropper from "./ImageCropper";
import styles from "./Transformation.module.css";

function Page() {
  return (
    <div>
      <h1 className="text-3xl pt-9 pl-9 text-[#00ff47] inline-block">
        Transformation
      </h1>
      <div className={styles["blur-circle-shape"]}></div>
      <div className=" flex justify-center items-center gap-10 mt-7">
        <div className=" flex flex-col justify-center items-center gap-4">
          <p className="text-2xl py-5 text-justify w-[40vw] text-[#c3efc0] ">
            Fuel Innovation: Unleash your digital assets to empower diverse
            community projects. Join forces with fellow creators, sparking a
            network of inspiration and collaboration that stretches beyond
            boundaries, igniting artistry and innovation across realms.
          </p>
        </div>
        <img
          className=" w-[40vw] h-[60vh] "
          src="/transformation3.jpeg"
          alt="robot"
        />
      </div>

      <div className="w-[100vw] h-[100vh] flex flex-col justify-around items-center">
        <ImageCropper />
      </div>
    </div>
  );
}

export default Page;
