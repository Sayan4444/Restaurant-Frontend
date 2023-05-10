import { calculateReviewRating } from "../../../utils/reviewRating";
import Star from "../../../components/Star";

const Rating = ({ reviews }) => {
  const rating = calculateReviewRating(reviews);
  return (
    <div className='flex items-end'>
      <div className='ratings mt-2 flex items-center'>
        {/* <p>*****</p> */}
        <Star rating={rating} />
        <p className='text-reg ml-3'>{rating}</p>
      </div>
      <div>
        <p className='text-reg ml-4'>
          {reviews.length} Review{reviews.length > 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
};

export default Rating;
