import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Images from "./components/Images";
import Description from "./components/Description";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";
import { notFound } from "next/navigation";

const Restaurant = async ({ params }) => {
  const slug = params.slug;
  const restaurantData = await getRestaurantBySlug(slug);
  if (!restaurantData) notFound();
  const { name, description, images, review_id } = restaurantData;
  return (
    <>
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        <Navbar slug={slug} />
        <Title name={name} />
        <Rating reviews={review_id} />
        <Description description={description} />
        <Images images={images} />
        <Reviews reviews={review_id} />
      </div>
      <div className='w-[27%] relative text-reg'>
        <ReservationCard />
      </div>
    </>
  );
};

async function getRestaurantBySlug(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_url}/api/restaurant/?filter[slug]=${slug}&select=name description images&review_id=true`
  );
  const data = await res.json();
  return data.data[0];
}

export default Restaurant;
