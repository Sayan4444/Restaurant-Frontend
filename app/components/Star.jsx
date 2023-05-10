import Image from "next/image";
import fullStarImg from "../../public/icons/full-star.png";
import halfStarImg from "../../public/icons/half-star.png";
import emptyStarImg from "../../public/icons/empty-star.png";

const Star = ({ rating }) => {
  const imageAr = calculateStars(rating);
  return (
    <>
      {imageAr.map((image, index) => (
        <span key={index}>{image}</span>
      ))}
    </>
  );
};

function calculateStars(rating) {
  let fullStar, halfStar, emptyStar;
  fullStar = Math.floor(rating);
  if (fullStar === rating) {
    halfStar = 0;
    emptyStar = 5 - fullStar;
  } else {
    const difference = rating - fullStar;
    if (difference > 0.2) halfStar = 1;
    else halfStar = 0;
    emptyStar = 5 - fullStar - halfStar;
  }
  const imageAr = [];

  const width = 15;
  for (let i = 1; i <= fullStar; i++) {
    imageAr.push(
      <Image src={fullStarImg} width={width} alt='full star image' />
    );
  }

  for (let i = 1; i <= halfStar; i++) {
    imageAr.push(
      <Image src={halfStarImg} width={width} alt='half star image' />
    );
  }

  for (let i = 1; i <= emptyStar; i++) {
    imageAr.push(
      <Image src={emptyStarImg} width={width} alt='empty star image' />
    );
  }
  return imageAr;
}

export default Star;
