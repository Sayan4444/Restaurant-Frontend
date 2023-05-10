import React from "react";
import Link from "next/link";
import Price from "./Price";
import Star from "../components/Star";
import { calculateReviewRating } from "../utils/reviewRating.js";

const RestaurantCard = ({ restaurant }) => {
  const { name, main_image, cuisine_id, location_id, slug, price, review_id } =
    restaurant;

  const rating = calculateReviewRating(review_id);

  return (
    <div className='w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'>
      <Link href={`/restaurant/${slug}`}>
        <img
          src={main_image}
          alt='main image of restaurant'
          className='w-full h-36'
        />
        <div className='p-1'>
          <h3 className='font-bold text-2xl mb-2'>{name}</h3>
          <div className='flex items-center'>
            <Star rating={rating} />
            <p className='ml-2'>
              {review_id.length} review{review_id.length > 1 ? "s" : ""}
            </p>
          </div>
          <div className='flex text-reg font-light capitalize'>
            <p className=' mr-3'>{cuisine_id.name}</p>
            <Price price={price} />
            <p>{location_id.name}</p>
          </div>
          <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
