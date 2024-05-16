'use client'
import React, { useState } from "react";
import { GoogleMap, useJsApiLoader , MarkerF  ,StreetViewPanorama, Marker} from '@react-google-maps/api';
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
        width: "800px",
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
        <div className="container  items-center  p-8 flex flex-col lg:flex-row gap-4">
  <div className="bg-white rounded-lg shadow-md p-8 flex-1">
    <GoogleMap
      options={options}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
    >
      <Marker
        position={center}
        visible={pinVisible}
        icon={{
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: '#1976D2',
          fillOpacity: 1,
          strokeColor: '#FFFFFF',
          strokeWeight: 2,
          scale: 8
        }}
        onClick={() => {
          setViewVisible(true);
        }}
      />

      <StreetViewPanorama
        options={{
          position: center,
          visible: viewVisible,
        }}
      />
    </GoogleMap>
  </div>
  <div className="  bg-primary rounded-lg  font-bold text-white  shadow-md p-8 flex-1">
    <h2 className="text-3xl font-semibold mb-4">
      Localização da Clínica
    </h2>
    <div className="flex items-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M2 8a6 6 0 1110.773 3.993L10 17.464l-2.773-5.471A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z" clipRule="evenodd" />
      </svg>
      <p className="text-white ">Rua Fictícia, 123</p>
    </div>
    <div className="flex items-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 0a7 7 0 016.443 4.256A9.982 9.982 0 0020 10c0 5.523-4.477 10-10 10S0 15.523 0 10C0 4.477 4.477 0 10 0zM6 10a4 4 0 118 0 4 4 0 01-8 0z" clipRule="evenodd" />
      </svg>
      <p className="text-white">Bairro Imaginário, Cidade Inexistente</p>
    </div>
    <div className="flex items-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5 2a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1H5zm0-2h10a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V3a3 3 0 013-3z" />
      </svg>
      <p className="text-white">CEP: 00000-000</p>
    </div>
    <div className="flex items-center mb-8">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7 2.5a.5.5 0 00-.5.5v13a.5.5 0 001 0v-13a.5.5 0 00-.5-.5zm6 0a.5.5 0 00-.5.5v13a.5.5 0 001 0v-13a.5.5 0 00-.5-.5zM2 6a.5.5 0 00-.5.5v9a.5.5 0 001 0v-9A.5.5 0 002 6zm14 0a.5.5 0 00-.5.5v9a.5.5 0 001 0v-9a.5.5 0 00-.5-.5z" clipRule="evenodd" />
      </svg>
      <p className="text-white">Estado, País</p>
    </div>
    <Button className="bg-blue-500 hover:bg-white hover:text-secondary text-white font-semibold">
      Agendar Consulta
    </Button>
  </div>
</div>
      ) : (
        <div>Carregando...</div>
      );
    }
