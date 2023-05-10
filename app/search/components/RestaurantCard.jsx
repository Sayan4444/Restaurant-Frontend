import React from "react";
import Link from "next/link";
import Price from "../../components/Price";
import { calculateReviewRating } from "../../utils/reviewRating";
import Star from "../../components/Star";

const RestaurantCard = ({ restaurant }) => {
  const { name, main_image, location_id, cuisine_id, slug, price, review_id } =
    restaurant;

  const rating = calculateReviewRating(review_id);
  const renderRatingText = () => {
    if (rating > 4) return "Awesome";
    else if (rating <= 4 && rating > 3) return "Good";
    else if (rating <= 3 && rating > 2) return "Average";
    else return "";
  };

  return (
    <div className='border-b flex pb-5'>
      <img src={main_image} alt='main image' className='w-44 h-24 rounded' />
      <div className='pl-5'>
        <h2 className='text-3xl'>{name}</h2>
        <div className='flex items-start'>
          <div className='flex mb-2'>
            <Star rating={rating} />
          </div>
          <p className='ml-2 text-sm'>{renderRatingText()}</p>
        </div>
        <div className='mb-9'>
          <div className='font-light flex text-reg space-x-4'>
            <span>
              <Price price={price} />
            </span>
            <p className='capitalize'>{cuisine_id.name}</p>
            <p className='capitalize'>{location_id.name}</p>
          </div>
        </div>
        <div className='text-red-600'>
          <Link href={`/restaurant/${slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
