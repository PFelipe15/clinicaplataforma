'use client';
import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Mail, MapPin } from "lucide-react";
import { CgInstagram } from "react-icons/cg";
import { BsWhatsapp } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
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
    lat: -5.07848254265384, 
    lng: -42.78508261184313,
  });

  const size = useWindowSize();

  const containerStyle = {
    width: size.width !== undefined ? (size.width <= 768 ? "400px" : "800px") : 0,
    height: "300px",
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

  const handleInstagramMouseOver = () => {
    window.open("https://www.instagram.com/urovida/");
  };

  return isLoaded ? (
    <motion.div
      className="container flex flex-col shadow-md p-2 my-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col justify-around md:flex-row   gap-4">
        <motion.div
          className="rounded-lg flex-col"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <GoogleMap
            options={options}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
          >
            <Marker
              position={center}
              visible={true}
              onClick={() => setShowChat(true)}
            />
          </GoogleMap>
        </motion.div>
        <motion.div
          className="flex flex-col mt-4 justify-center gap-2 md:mr-8 font-bold text-primary"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="hidden md:block text-3xl font-semibold mb-4">
            Localização da Clínica
          </h2>
          <div className="flex flex-col gap-4">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              <MapPin size="32" className="text-primary" />
              <p>Avenida Senador Area Leao, 1480</p>
            </motion.div>
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              <MapPin size="32" className="text-primary" />
              <p>Bairro Jóquei, Teresina/PI</p>
            </motion.div>
          </div>
          <ButtonConsulta />
        </motion.div>
      </div>
      <motion.div
        className="p-8 flex justify-center flex-col md:flex-row items-center gap-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex items-center gap-2 hover:scale-105 transition-all"
          onClick={handleEmailMouseOver}
          whileHover={{ scale: 1.1 }}
        >
          <MdMarkEmailRead size="32" className="text-primary" />
          <p>clinicaurovida@yahoo.com</p>
        </motion.div>
        <motion.div
          className="flex gap-2 items-center hover:scale-105 transition-all"
          onMouseOver={handlePhoneMouseOver}
          whileHover={{ scale: 1.1 }}
        >
          <BsWhatsapp size="32" className="text-primary" />
          <p>(86) 999337249</p>
        </motion.div>
        <motion.div
          className="flex gap-2 items-center hover:scale-105 transition-all"
          onClick={handleInstagramMouseOver}
          whileHover={{ scale: 1.1 }}
        >
          <CgInstagram size="32" className="text-primary" />
          <p>Urovida</p>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {showChat && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <WhatsAppChat onClose={() => setShowChat(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  ) : (
    <div>Carregando...</div>
  );
}
