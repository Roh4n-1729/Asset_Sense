'use client'
import React, { useState, useRef } from "react";
import cn from "classnames";
import {
  Cropper,
  CropperPreview,
} from "react-advanced-cropper";
import { AdjustablePreviewBackground } from "./components/AdjustablePreviewBackground";
import { Navigation } from "./components/Navigation";
import { Slider } from "./components/Slider";
import { AdjustableCropperBackground } from "./components/AdjustableCropperBackground";
import { Button } from "./components/Button";
import { ResetIcon } from "./icons/ResetIcon";
import "react-advanced-cropper/dist/style.css";
import "./styles.scss";

export default function ImageEditor(){
  const cropperRef = useRef(null);
  const previewRef = useRef(null);

  const [src, setSrc] = useState(require("./photo.jpeg"));

  const [mode, setMode] = useState("crop");

  const [adjustments, setAdjustments] = useState({
    brightness: 0,
    hue: 0,
    saturation: 0,
    contrast: 0,
    blur:0,
    invert:0,
    grayscale:0,
    paddingX:0,
    paddingY:0
  });

  const onChangeValue = (value) => {
    if (mode in adjustments) {
      setAdjustments((previousValue) => ({
        ...previousValue,
        [mode]: value
      }));
    }
  };

  const onReset = () => {
    setMode("crop");
    setAdjustments({
      brightness: 0,
      hue: 0,
      saturation: 0,
      contrast: 0,
      blur:0,
      invert:0,
      grayscale:0,
      paddingX:0,
      paddingY:0
    });
  };

  const onUpload = (blob) => {
    console.log(blob);
    onReset();
    setMode("crop");
    setSrc(blob);
  };

  const onDownload = () => {
    if (cropperRef.current) {
      const canvas = cropperRef.current.getCanvas();
      if (canvas) {
        const dataURL = canvas.toDataURL();
        
        const downloadLink = document.createElement("a");
        downloadLink.href = dataURL;
        downloadLink.download = "image.png"; 
        
        downloadLink.click();
      }
    }
  };
  

  const onUpdate = () => {
    previewRef.current?.refresh();
  };

  const changed = Object.values(adjustments).some((el) => Math.floor(el * 100));

  const cropperEnabled = mode === "crop";

  return (
    <>
    <div className="image-editor w-[70vw]">
      <div className="image-editor__cropper ">
        <Cropper
          src={src}
          ref={cropperRef}
          stencilProps={{
            movable: cropperEnabled,
            resizable: cropperEnabled,
            lines: cropperEnabled,
            handlers: cropperEnabled,
            overlayClassName: cn(
              "image-editor__cropper-overlay",
              !cropperEnabled && "image-editor__cropper-overlay--faded"
            )
          }}
          backgroundWrapperProps={{
            scaleImage: cropperEnabled,
            moveImage: cropperEnabled
          }}
          backgroundComponent={AdjustableCropperBackground}
          backgroundProps={adjustments}
          onUpdate={onUpdate}
        />
        {mode !== "crop" && (
          <Slider
            className="image-editor__slider"
            value={adjustments[mode]}
            onChange={onChangeValue}
          />
        )}
        <CropperPreview
          className={"image-editor__preview"}
          ref={previewRef}
          cropper={cropperRef}
          backgroundComponent={AdjustablePreviewBackground}
          backgroundProps={adjustments}
        />
        <Button
          className={cn(
            "image-editor__reset-button",
            !changed && "image-editor__reset-button--hidden"
          )}
          onClick={onReset}
        >
          <ResetIcon />
        </Button>
      </div>
      <Navigation
        mode={mode}
        onChange={setMode}
        onUpload={onUpload}
        onDownload={onDownload}
      />
      
    </div>
    </>
  );
};

