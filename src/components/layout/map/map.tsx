'use client';
import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, StreetViewPanorama, Marker } from '@react-google-maps/api';
import { Mail, MapPin, MessageCircle } from "lucide-react";
import ButtonConsulta from "../buttonConsulta";
import WhatsAppChat from "./whatsAppChat"; // Import the new WhatsAppChat component

type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

export default function Map() {
  const [showChat, setShowChat] = useState(false); // State to control the visibility of the chat component

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState<WindowSize>({
      width: typeof window !== 'undefined' ? window.innerWidth || 0 : undefined,
      height: typeof window !== 'undefined' ? window.innerHeight || 0 : undefined,
    });

    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      if (typeof window !== 'undefined') {
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);

    return windowSize;
  }

  const [center, setCenter] = useState({
    lat: -5.078418091095698,
    lng: -42.785124571450204,
  });

  const size = useWindowSize();

  const containerStyle = {
    width: size.width !== undefined ? (size.width <= 768 ? "400px" : "990px") : 0,
    height: "400px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEAPIS_PUBLISHABLE_KEY!,
  });

  const options = {
    mapTypeControl: true,
    zoomControl: true,
    fullscreenControl: false,
    clickableIcons: true,
    scrollwheel: true,
  };

  const handleEmailMouseOver = () => {
    window.open('mailto:urovida@gmail.com');
  };

  const handlePhoneMouseOver = () => {
    setShowChat(true); // Show the chat component when mouse over the phone icon
  };

  return isLoaded ? (
    <div className="container flex flex-col shadow-md p-2 my-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="rounded-lg flex-col">
          <GoogleMap
            options={options}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
          >
            <Marker
              position={center}
              visible={true}
              onClick={() => {
                setShowChat(true); // Show the chat component when clicking the marker
              }}
            />

            <StreetViewPanorama
              options={{
                position: center,
                visible: true,
              }}
            />
          </GoogleMap>
        </div>
        <div className="flex flex-col mt-4 justify-center gap-2 md:mr-8 font-bold text-primary">
          <h2 className="hidden md:block text-3xl font-semibold mb-4">
            Localização da Clínica
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <MapPin size="32" className="text-primary" />
              <p>Avenida Senador Area Leao, 1480</p>
            </div>
            <div className="flex items-center">
              <MapPin size="32" className="text-primary" />
              <p>Bairro Jóquei, Terezina.</p>
            </div>
            <div className="flex items-center">
              <MapPin size="32" className="text-primary" />
              <p>CEP: 64049110</p>
            </div>
            <div className="flex items-center">
              <MapPin size="32" className="text-primary" />
              <p>Piaui, Brazil</p>
            </div>
          </div>
          <ButtonConsulta />
        </div>
      </div>
      <div className="p-8 flex justify-center flex-col md:flex-row items-center gap-5">
        <div
          className="flex items-center gap-2 hover:scale-105 transition-all"
          onClick={handleEmailMouseOver}
        >
          <Mail size="32" className="text-primary" />
          <p>urovida@gmail.com.br</p>
        </div>
        <div
          className="flex gap-2 items-center hover:scale-105 transition-all"
          onMouseOver={handlePhoneMouseOver}
        >
          <MessageCircle size="32" className="text-primary" />
          <p>(86) 999337249</p>
        </div>
      </div>
      {showChat && <WhatsAppChat onClose={() => setShowChat(false)} />} {/* Render the chat component */}
    </div>
  ) : (
    <div>Carregando...</div>
  );
}
