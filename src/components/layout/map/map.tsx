'use client'
import React, { useState } from "react";
import { GoogleMap, useJsApiLoader , MarkerF  ,StreetViewPanorama, Marker} from '@react-google-maps/api';
import { Button } from "../../ui/button";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import ButtonConsulta from "../buttonConsulta";
   

    export default function Map() {
      const [center, setCenter] = useState({
        lat: -5.092670743603099,
        lng: -42.815464261410334,
      });
      const [text, setText] = useState("");
      const [pinVisible, setPinVisible] = useState(false);
      const [viewVisible, setViewVisible] = useState(false);

      const containerStyle = {
        width: "800px",
        height: "400px",
      };

      const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEAPIS_PUBLISHABLE_KEY!,
      });

      const options = {
        mapTypeControl: false,
        zoomControl: false,
        fullscreenControl: false,
        clickableIcons: true,
        scrollwheel: true,
      };

      const handleEmailMouseOver = () => {
        window.open('mailto:secretaria@giulianoaita.com.br');
      };
      
      const handlePhoneMouseOver = () => {
        window.open('https://api.whatsapp.com/send?phone=558699415-6897&text=Ol%C3%A1,%20quero%20uma%20consulta');
      };

      return isLoaded ? (
        <div className="container flex flex-col  shadow-md p-2 my-8  ">
          <div className="  flex flex-col  md:flex-row gap-4">
            <div className=" rounded-lg  flex-col   flex-1">
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
                    fillColor: "#1976D2",
                    fillOpacity: 1,
                    strokeColor: "#FFFFFF",
                    strokeWeight: 2,
                    scale: 8,
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
            <div className="  flex flex-col  items-center justify-center gap-2 font-bold text-primary  p-8   ">
              <h2 className="text-3xl  font-semibold mb-4">
                Localização da Clínica
              </h2>
              <div className="flex flex-col items-center justify-center gap-4">
    <div className="flex items-center justify-center">
        <MapPin size="32" className="text-primary" />
        <p>Rua Saúde, 456</p>
    </div>
    <div className="flex items-center justify-center">
        <MapPin size="32" className="text-primary" />
        <p>Bairro Bem-Estar, Cidade Vida</p>
    </div>
    <div className="flex items-center justify-center">
        <MapPin size="32" className="text-primary" />
        <p>CEP: 12345-678</p>
    </div>
    <div className="flex items-center justify-center">
        <MapPin size="32" className="text-primary" />
        <p>Estado Saúde, País Bem-Estar</p>
    </div>
</div>
              <ButtonConsulta/>
            </div>
          </div>
          <div className="p-8 flex justify-center flex-col    md:flex-row items-center gap-5">
            <div
              className="flex items-center gap-2 hover:scale-105 transition-all "
              onClick={handleEmailMouseOver}
            >
              <Mail size="32" className="text-primary" />
              <p>secretaria@giulianoaita.com.br</p>
            </div>
            <div
              className="flex gap-2 items-center hover:scale-105 transition-all"
              onClick={handlePhoneMouseOver}
            >
              <MessageCircle size="32" className="text-primary" />
              <p>(86) 99415-6897</p>
            </div>
          </div>
        </div>
      ) : (
        <div>Carregando...</div>
      );
    }
