'use client'
import { CgInstagram } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";

export default function InstagramButton() {
    const handleInstagramMouseOver = () => {
        window.open("https://www.instagram.com/urovida/") // Show the chat component when mouse over the phone icon
      };
    return (
        <div
        className="flex gap-2 items-center hover:scale-105 transition-all"
        onClick={handleInstagramMouseOver}
      >
        <FaInstagram size="32" className="text-primary" /> 
       </div>
    );
}