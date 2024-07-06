'use server'
 async function fetchGooglePlaceDetails() {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJh62y6ZY7jgcRsOBQPd4jhy8&fields=name,rating,formatted_phone_number,reviews&key=${process.env.NEXT_PUBLIC_GOOGLEAPIS_PUBLISHABLE_KEY}`
    );

     const data = await response.json();
    return data.result;
  }
 async function fetchGooglePlacePhotosDetails() {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJh62y6ZY7jgcRsOBQPd4jhy8&fields=name,photo&key=${process.env.NEXT_PUBLIC_GOOGLEAPIS_PUBLISHABLE_KEY}`
    );

     const data = await response.json();
    
    return data.result;
  }
  



  export  {fetchGooglePlaceDetails, fetchGooglePlacePhotosDetails}