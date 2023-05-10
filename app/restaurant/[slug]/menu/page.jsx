import Navbar from "../components/Navbar";
import Menu from "./components/Menu";

const RestaurantMenu = async ({ params }) => {
  const slug = params.slug;
  return (
    <>
      <div className='bg-white w-[100%] rounded p-3 shadow'>
        <Navbar slug={slug} />
        <Menu slug={slug} />
      </div>
    </>
  );
};

export default RestaurantMenu;
