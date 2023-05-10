import Link from "next/link";
import Price from "../../components/Price";

const SearchSideBar = async ({ searchParams }) => {
  const locations = await getLocation();
  const cuisines = await getCuisine();
  return (
    <div className='w-1/5'>
      <div className='border-b pb-4'>
        <h1 className='mb-2'>Region</h1>
        <div className='flex flex-col'>
          {locations.map((location) => (
            <Link
              href={{
                pathname: "/search",
                query: { ...searchParams, city: location.name },
              }}
              className='font-light text-reg capitalize'
              key={location._id}
            >
              {location.name}
            </Link>
          ))}
        </div>
      </div>
      <div className='border-b pb-4 mt-3'>
        <h1 className='mb-2'>Cuisine</h1>
        <div className='flex flex-col'>
          {cuisines.map((cuisine) => (
            <Link
              href={{
                pathname: "/search",
                query: { ...searchParams, cuisine: cuisine.name },
              }}
              className='font-light text-reg capitalize'
              key={cuisine._id}
            >
              {cuisine.name}
            </Link>
          ))}
        </div>
      </div>
      <div className='mt-3 pb-4'>
        <h1 className='mb-2'>Price</h1>
        <div className='flex text-center'>
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, price: "CHEAP" },
            }}
            className='border w-full text-reg font-light rounded-l p-2'
          >
            $
          </Link>
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, price: "REGULAR" },
            }}
            className='border-r border-t border-b w-full text-reg font-light p-2'
          >
            $$
          </Link>
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, price: "EXPENSIVE" },
            }}
            className='border-r border-t border-b w-full text-reg font-light p-2 rounded-r'
          >
            $$$
          </Link>
        </div>
      </div>
    </div>
  );
};

async function getLocation() {
  const res = await fetch(`${process.env.url}/api/location`);
  const data = await res.json();
  return data.data;
}
async function getCuisine() {
  const res = await fetch(`${process.env.url}/api/cuisine`);
  const data = await res.json();
  return data.data;
}

export default SearchSideBar;
