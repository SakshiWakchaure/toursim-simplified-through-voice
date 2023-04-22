import React, {useLayoutEffect} from 'react'
import { useNavigation } from "@react-navigation/native";

function Map() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
          
        });
      }, []);
  return (
    <div>

    <head>
    {/* <!-- Make sure you put this AFTER Leaflet's CSS --> */}
  <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
  integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
  crossorigin=""></script>

    </head>
      <body>

<div id="map"></div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15079.876118310414!2d73.005094!3d19.109014549999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1678297833279!5m2!1sen!2sin" width="1850" height="900" 
    style={{border:"0", padding:"0", margin: "0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>



</body>
    </div>
  )
}

export default Map
