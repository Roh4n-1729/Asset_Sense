import React, { ChangeEvent, FC, useRef } from "react";
import cn from "classnames";
import { CropIcon } from "../icons/CropIcon";
import { HueIcon } from "../icons/HueIcon";
import { SaturationIcon } from "../icons/SaturationIcon";
import { ContrastIcon } from "../icons/ContrastIcon";
import { BrightnessIcon } from "../icons/BrightnessIcon";
import { UploadIcon } from "../icons/UploadIcon";
import { DownloadIcon } from "../icons/DownloadIcon";
import  BlurIcon  from "../icons/BlurIcon";
import { Button } from "./Button";
import {InvertIcon} from '../icons/InvertIcon'
import {GrayscaleIcon} from '../icons/GrayscaleIcon'
import PaddingX from '../icons/PaddingX'
import PaddingY from '../icons/PaddingY'


import "./Navigation.scss";

interface Props {
  className?: string;
  mode?: string;
  onChange?: (mode: string) => void;
  onDownload?: () => void;
  onUpload?: (blob: string) => void;
}

export const Navigation: FC<Props> = ({
  className,
  onChange,
  onUpload,
  onDownload,
  mode
}) => {
  const setMode = (mode: string) => () => {
    onChange?.(mode);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const onUploadButtonClick = () => {
    inputRef.current?.click();
  };

  const onLoadImage = (event: ChangeEvent<HTMLInputElement>) => {
    // Reference to the DOM input element
    const { files } = event.target;

    // Ensure that you have a file before attempting to read it
    if (files && files[0]) {
      if (onUpload) {
        onUpload(URL.createObjectURL(files[0]));
      }
    }
    // Clear the event target value to give the possibility to upload the same image:
    event.target.value = "";
  };

  return (
    <div className={cn("image-editor-navigation relative", className)}>
      <Button
        className={"image-editor-navigation__button"}
        onClick={onUploadButtonClick}
      >
        <UploadIcon />
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={onLoadImage}
          className="image-editor-navigation__upload-input"
        />
      </Button>
      <div className="image-editor-navigation__buttons ">
        <Button
          className={"image-editor-navigation__button crop"}
          active={mode === "crop"}
          onClick={setMode("crop")}
        >
          <CropIcon />
        </Button>
        <div className="absolute left-[22%] bottom-[0px]  bg-[#1b1a21] changeCrop">Crop</div>

        <Button
          className={"image-editor-navigation__button sat"}
          active={mode === "saturation"}
          onClick={setMode("saturation")}
          >
          <SaturationIcon />
        </Button>
          <div className="absolute left-[27%] bottom-[0px]  bg-[#1b1a21] changeSat">Saturation</div>
          
        <Button
          className={"image-editor-navigation__button Brit"}
          active={mode === "brightness"}
          onClick={setMode("brightness")}
        >
          <BrightnessIcon />
        </Button>
        <div className="absolute left-[32%] bottom-[0px]  bg-[#1b1a21] changeBrit">Brightness</div>
        <Button
          className={"image-editor-navigation__button Cont"}
          active={mode === "contrast"}
          onClick={setMode("contrast")}
        >
          <ContrastIcon />
        </Button>
        <div className="absolute left-[38%] bottom-[0px]  bg-[#1b1a21] changeCont">Contrast</div>

        <Button
          className={"image-editor-navigation__button Hue"}
          active={mode === "hue"}
          onClick={setMode("hue")}
        >
          <HueIcon />
        </Button>
        <div className="absolute left-[46%] bottom-[0px]  bg-[#1b1a21] changeHue">Hue</div>
        <Button
          className={"image-editor-navigation__button Blu "}
          active={mode === "blur"}
          onClick={setMode("blur")}
        >
          <BlurIcon />
        </Button>
        <div className="absolute left-[51%] bottom-[0px]  bg-[#1b1a21] changeBlu">Blur</div>
        <Button
          className={"image-editor-navigation__button Inv "}
          active={mode === "invert"}
          onClick={setMode("invert")}
        >
          <InvertIcon />
        </Button>
        <div className="absolute left-[57%] bottom-[0px]  bg-[#1b1a21] changeInv">Invert</div>

        <Button
          className={"image-editor-navigation__button Gray"}
          active={mode === "grayscale"}
          onClick={setMode("grayscale")}
        >
          <GrayscaleIcon />
        </Button>
        <div className="absolute left-[61%] bottom-[0px]  bg-[#1b1a21] changeGray">Grayscale</div>
        <Button
          className={"image-editor-navigation__button padx "}
          active={mode === "paddingX"}
          onClick={setMode("paddingX")}
        >
          <PaddingX />
        </Button>
        <div className="absolute left-[67%] bottom-[0px]  bg-[#1b1a21] changePadx">PaddingX</div>



        <Button
          className={"image-editor-navigation__button pady "}
          active={mode === "paddingY"}
          onClick={setMode("paddingY")}
        >
          <PaddingY />
        </Button>

        <div className="absolute left-[73%] bottom-[0px]  bg-[#1b1a21] changePady">PaddingY</div>

        
        
      </div>
      <Button
        className={"image-editor-navigation__button"}
        onClick={onDownload}
      >
        <DownloadIcon />
      </Button>
    </div>
  );
};
