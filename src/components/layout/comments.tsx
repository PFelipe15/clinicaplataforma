'use client'
import React, { useEffect, useState } from 'react';
import { fetchGooglePlaceDetails } from '../../app/api/reviews';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel';
import Image from 'next/image';


interface Comment {
  author_name: string;
  relative_time_description: string;
  text: string;
  rating: number;
  profile_photo_url: string;
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    async function getComments() {
      const result = await fetchGooglePlaceDetails();
      const filteredComments = result.reviews.filter((review: Comment) => review.rating === 5);
      setComments(filteredComments);
    }

    getComments();
  }, []);

  return (
    <Carousel>
      <CarouselContent className="w-[90vw] md:w-[30vw] flex items-center">
        {comments.map((comment, index) => (
          <CarouselItem key={index} className="p-4">
            <div className="bg-primary p-4 rounded-md shadow-md">
              <div className="flex items-center mb-2">
                <Image
                  src={comment.profile_photo_url}
                  alt={comment.author_name}
                  className="w-10 h-10 rounded-full mr-2"
                  width={70}
                  height={70}
                />
                <div>
                  <h3 className="font-bold">{comment.author_name}</h3>
                  <p className="text-sm text-gray-500">{comment.relative_time_description}</p>
                </div>
              </div>
              <blockquote className="text-base md:text-lg text-white">
                {comment.text}
              </blockquote>
              <div className="flex items-center mt-2">
                {[...Array(comment.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-5 h-5 text-yellow-500"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.947a1 1 0 00.95.691h4.136c.969 0 1.371 1.24.588 1.81l-3.357 2.428a1 1 0 00-.364 1.118l1.286 3.947c.3.921-.755 1.688-1.54 1.118l-3.357-2.428a1 1 0 00-1.176 0l-3.357 2.428c-.785.57-1.84-.197-1.54-1.118l1.286-3.947a1 1 0 00-.364-1.118L2.53 9.376c-.783-.57-.38-1.81.588-1.81h4.136a1 1 0 00.95-.691l1.286-3.947z" />
                  </svg>
                ))}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-secondary hover:bg-black -left-[50px]" />
      <CarouselNext className="hover:bg-black -right-[50px]" />
    </Carousel>
  );
}
