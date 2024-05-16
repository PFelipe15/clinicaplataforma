'use client'
import React, { useState } from "react";
import { GoogleMap, useJsApiLoader , MarkerF  ,StreetViewPanorama} from '@react-google-maps/api';
import { Button } from "../../ui/button";
   

    export default function Map() {
      const [center, setCenter] = useState({
        lat: -5.092670743603099,
        lng: -42.815464261410334,
       
      });
    const [text, setText] = useState("")
    const [pinVisible, setPinVisible] = useState(false) 
    const [viewVisible, setViewVisible] = useState(false) 

      const containerStyle = {
        width: "100vw",
        height: "400px",
        
      };
    
      const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEAPIS_PUBLISHABLE_KEY!,
      });
  

      

      const options={
        mapTypeControl:false,
        zoomControl:false,
        fullscreenControl:false,
        clickableIcons:true,
        scrollwheel:true
      }
    
      return isLoaded ? (
        <div id="Localization" className="bg-white  rounded-lg shadow-md p-4">
            
          <GoogleMap
            options={options}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={100}
          >
            <MarkerF
              position={center}
              visible={pinVisible}
              label={{
                text: text,
                className: "text-3xl text-primary mb-20",
              }}
              onClick={() => {
                setViewVisible(true);
              }}
            ></MarkerF>

            <StreetViewPanorama
              options={{
                position: center,
                visible: viewVisible,
              }}
              
             
            />
          </GoogleMap>

         
        </div>
      ) : (
        <div>Carregando...</div>
      );
    }
