import ReviewCard from "./ReviewCard";

const Reviews = ({ reviews }) => {
  return (
    <div>
      <h1 className='font-bold text-3xl mt-10 mb-7 borber-b pb-5'>
        {reviews.length > 1 && `What ${reviews.length} people are saying`}
        {reviews.length === 1 && `What 1 person is saying`}
      </h1>
      <div>
        {reviews.map((review) => (
          <ReviewCard review={review} key={review._id} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
