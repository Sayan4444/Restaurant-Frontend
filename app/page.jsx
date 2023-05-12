import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

const Home = async () => {
  const restaurants = await getRestaurants();

  return (
    <main>
      <Header />
      <div className='py-3 px-36 mt-10 flex flex-wrap justify-center'>
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant._id} />
        ))}
      </div>
    </main>
  );
};

async function getRestaurants() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_url}/api/restaurant/?select=name main_image cuisine_id location_id slug price&review_id=true`
  );
  const resJson = await res.json();
  const restaurants = resJson.data;
  return restaurants;
}

export default Home;
