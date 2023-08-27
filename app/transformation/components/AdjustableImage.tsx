import React, { forwardRef, useRef, CSSProperties, useLayoutEffect } from 'react';
import cn from 'classnames';
import { mergeRefs } from 'react-advanced-cropper';
import './AdjustableImage.scss';

interface Props {
	src?: string;
	className?: string;
	crossOrigin?: 'anonymous' | 'use-credentials' | boolean;
	brightness?: number;
	saturation?: number;
	hue?: number;
	contrast?: number;
	blur?: number;
	invert?:number;
	grayscale?:number;
	paddingX?:number;
	paddingY?:number
	style?: CSSProperties;
}

export const AdjustableImage = forwardRef<HTMLCanvasElement, Props>(
	(
	  {
		src,
		className,
		crossOrigin,
		brightness = 0,
		saturation = 0,
		hue = 0,
		contrast = 0,
		blur = 0,
		invert=0,
		grayscale=0,
		paddingX=0,
		paddingY=0,
		style,
	  }: Props,
	  ref
	) => {
	  const imageRef = useRef<HTMLImageElement>(null);
	  const canvasRef = useRef<HTMLCanvasElement>(null);
  
	  const drawImage = () => {
		const image = imageRef.current;
		const canvas = canvasRef.current;
		if (canvas && image && image.complete) {
		  const ctx = canvas.getContext('2d');
		  canvas.width = image.naturalWidth;
		  canvas.height = image.naturalHeight;
	  
		  if (ctx) {
			// Ensure valid ranges for blur and invert properties
			const adjustedBlur = Math.max(blur * 10, 0); // Ensure blur is non-negative
			const adjustedInvert = Math.min(Math.max(invert, 0)* 100); // Ensure invert is between 0 and 100
			const adjustedGreyScale = Math.min(Math.max(grayscale,0)*100)
	  
			ctx.filter = [
			  `brightness(${100 + brightness * 100}%)`,
			  `contrast(${100 + contrast * 100}%)`,
			  `saturate(${100 + saturation * 100}%)`,
			  `hue-rotate(${hue * 360}deg)`,
			  `blur(${adjustedBlur}px)`,
			  `invert(${adjustedInvert}%)`,
			  `grayscale(${adjustedGreyScale}%)`
			].join(' ');
			console.log(paddingY*500);
			ctx.drawImage(image, paddingX*500, paddingY*322, image.naturalWidth-2*(paddingX*500), image.naturalHeight-2*(paddingY*322));
		  }
		}
	  };
	  
  
	  useLayoutEffect(() => {
		drawImage();
	  }, [src, brightness, saturation, hue, contrast, blur,invert,grayscale,paddingX,paddingY]); 
  
	  return (
		<>
		  <canvas
			key={`${src}-canvas`}
			ref={mergeRefs([ref, canvasRef])}
			className={cn('adjustable-image-element', className)}
			style={style}
		  />
		  {src ? (
			<img
			  key={`${src}-img`}
			  ref={imageRef}
			  className={'adjustable-image-source'}
			  src={src}
			  crossOrigin={crossOrigin === true ? 'anonymous' : crossOrigin || undefined}
			  onLoad={drawImage}
			/>
		  ) : null}
		</>
	  );
	}
  );
  
  AdjustableImage.displayName = 'AdjustableImage';
  