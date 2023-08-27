"use client";
import React, { useState } from "react";
import Upload from "./components/Upload";
import Tag from "./components/Tag";

function Tagging() {
  const [imgLoad, setImgLoad] = useState(false);
  const [imgLoadUrl, setImgLoadUrl] = useState(null);
  const [tags, setTags] = useState([]);

  const uploadedImg = () => {
    setImgLoad(true);
  };

  const imageLoader = (url) => {
    setImgLoadUrl(url);
  };

  const tagLoader = (t) => {
    console.log(t);
    setTags(t);
  };

  return (
    <>
      <div className="blur-circle-shape"></div>
      <h1 className="text-3xl pt-10 pl-9 text-[#00ff47] inline-block">
        Tagging
      </h1>
      <div className="w-[100vw] h-[93vh] flex justify-center items-center">
        <div className="flex justify-center items-center gap-9 ">
          <h1 className=" text-2xl text-[#c3efc0] w-[40vw]">
            AI-driven <span className=" text-white">Image Tagging,</span> like
            through the Imagga API, efficiently categorizes images with
            descriptive tags, enabling quick content retrieval. This enhances
            organization, aids collaboration, refines marketing strategies, and
            offers data insights. It's crucial for businesses, e-commerce,
            archiving, and personal use, streamlining workflows and improving
            accessibility. Image tagging's automation scales for large datasets,
            benefiting various sectors and users.
          </h1>
          <img src="tagging.jpeg" alt="tagging" className=" w-[35vw]" />
        </div>
      </div>
      <Upload onUpload={uploadedImg} onImage={imageLoader} onTag={tagLoader} />

      <div className="flex w-full">
        <div className="w-[60vw] flex justify-center items-center ">
          {imgLoad && (
            <div className="p-5 h-[80vh]">
              <img
                src={imgLoadUrl}
                alt="Image"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          )}
        </div>
        <div className="h-1/2 w-[40vw] p-[5%] flex flex-wrap gap-3">
          {imgLoad && <h1>Tags:-</h1>}

          {tags.map((tag, index) => (
            <Tag className="h-[5%]" key={index} value={tag} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Tagging;
