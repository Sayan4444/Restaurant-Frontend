import React from "react";
import MenuCard from "./MenuCard";

const Menu = async ({ slug }) => {
  const items = await getRestaurantMenuBySlug(slug);

  return (
    <main className='bg-white mt-5'>
      <div>
        <div className='mt-4 pb-1 mb-1'>
          <h1 className='font-bold text-4xl'>Menu</h1>
        </div>
        <div className='flex flex-wrap justify-between'>
          {items.length
            ? items.map((item) => <MenuCard key={item._id} item={item} />)
            : "Sorry no menu to display"}
        </div>
      </div>
    </main>
  );
};

async function getRestaurantMenuBySlug(slug) {
  const res = await fetch(
    `${process.env.url}/api/restaurant/?filter[slug]=${slug}&select=name description images&item_id=true`
  );
  const data = await res.json();
  return data.data[0].item_id;
}

export default Menu;
