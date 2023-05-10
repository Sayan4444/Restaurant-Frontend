import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

const Search = async ({ searchParams }) => {
  const restaurants = await getRestaurantByLocation(searchParams);
  return (
    <>
      <Header />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSideBar searchParams={searchParams} />
        <div className='w-5/6'>
          {restaurants.length === 0 ? (
            <p>Sorry,we found no restaurants in this area</p>
          ) : (
            restaurants.map((restaurant) => (
              <RestaurantCard restaurant={restaurant} key={restaurant._id} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

async function getRestaurantByLocation(searchParams) {
  let url = `${process.env.url}/api/restaurant/?location_id=true&cuisine_id=true&select=name main_image price slug&location=${searchParams.city}&review_id=true`;

  if (searchParams.cuisine) {
    url = url + `&cuisine=${searchParams.cuisine}`;
  }

  if (searchParams.price) {
    url = url + `&filter[price]=${searchParams.price}`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return data.data;
}

export default Search;
