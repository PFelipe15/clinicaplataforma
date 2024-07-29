'use client';
import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaTimes } from "react-icons/fa";

interface Post {
  id: string;
  title: string;
  slug: string;
  tags: string[];
  descricao: string;
  imageCapa: string;
  createAt: string;
}

interface CommandSearchProps {
  posts: Post[];
}

export default function CommandSearch({ posts }: CommandSearchProps) {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<Post[]>([]);
  const [isClient, setIsClient] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    if (value) {
      const filtered = posts.filter(post => 
        post.title.toLowerCase().includes(value.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase()))
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: Post) => {
    setInputValue(suggestion.title);
    setFilteredSuggestions([]);
  };

  const handleCloseSuggestions = () => {
    setFilteredSuggestions([]);
  };


  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) return  <p>Carregando...</p>
  


  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Pesquisar "
        className="border border-primary rounded-lg px-8 p-1 w-80"
      />
      {inputValue && filteredSuggestions.length > 0 && (
        <motion.ul 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-10 border border-primary  p-2 rounded-lg bg-white shadow-md mt-2 w-full max-h-60 overflow-y-auto"
        >
          <div className="flex absolute right-1 top-1 justify-end p-2">
            <FaTimes 
              className="cursor-pointer text-primary"
              onClick={handleCloseSuggestions}
            />
          </div>
          {filteredSuggestions.map((suggestion) => (
            <motion.a
            href={`/noticias/${suggestion.slug}`}
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-200"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <FaSearch  className="mr-2 text-primary min-w-[20px]" />
              {suggestion.title}
            </motion.a>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
