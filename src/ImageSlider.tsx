import { useState } from "react"
import {ArrowLeft, ArrowRight, Circle, CircleDot} from "lucide-react"
import './image-slider.css' 
type ImageSliderProps= {
    images: {
        url: string,
        alt:string
    }[]
}

export default function ImageSlider({images} : ImageSliderProps)
{
    const [imageIndex, setImageIndex] = useState(0)
    return <section aria-label="Image Slider" style={{width: "100%", height: "100%", position: "relative"}}>
        <a className="skip-link" href="after-image-sider-controls">Skip Image Slider Controls</a>
        <div style={{width: "100%", height: "100%", display: "flex",overflow: "hidden"}}>
            {images.map(({url, alt}, index) => 
            <img 
              key={index} 
              src={url} 
              alt={alt}
              aria-hidden={index !== imageIndex} 
              className="img-slider-img" 
              style={{translate: `-${imageIndex * 100}% 0`}}
            />) }
        </div>
        <button 
            onClick={() => setImageIndex((imageIndex + 1) % images.length)} className="img-slider-btn" style={{left: 0}}
            aria-label="View Previous Image">
                <ArrowLeft aria-hidden/>
        </button>
        <button 
        onClick={() => setImageIndex((imageIndex - 1 + images.length) % images.length)} 
        className="img-slider-btn" style={{right: 0}} aria-label="View Next Image">
            <ArrowRight aria-hidden/>
        </button>
        <div style={{position: "absolute", bottom: ".5rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: ".5rem"}}>
            {images.map((_, index) => 
            <button key={index} onClick={() => setImageIndex(index)} aria-label={`View Image ${index + 1}`} className="img-slider-dot-btn">{index === imageIndex ? <CircleDot aria-hidden/> : <Circle aria-hidden/>}</button>)}
        </div>
        <div id="after-image-sider-controls"></div>
    </section>
}