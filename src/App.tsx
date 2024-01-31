import ImageSlider from './ImageSlider'
import Car1 from './imgs/car-1.jpg'
import Car2 from './imgs/car-2.jpg'
import Car3 from './imgs/car-3.jpg'
import Car4 from './imgs/car-4.jpg'
import Car5 from './imgs/car-5.jpg'

function App() {

  const IMAGES = [
    {url: Car1, alt:"Car One"},
    {url: Car2, alt:"Car Two"},
    {url: Car3, alt:"Car Three"},
    {url: Car4, alt:"Car Four"},
    {url: Car5, alt:"Car Five"}]
   return (
    <div style={{maxWidth: "1200px", width:"100%", aspectRatio: "16/9", margin: "0 auto" }}>
      <ImageSlider images={IMAGES} />
    </div>    
  )
}

export default App
