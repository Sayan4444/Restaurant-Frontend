import Header from "./components/Header";

const loading = () => {
  const loaderAr = [];
  for (let i = 0; i < 12; i++) {
    loaderAr.push(
      <div className='w-64 h-72 m-3 bg-slate-200 animate-pulse rounded'></div>
    );
  }
  return (
    <>
      <main>
        <Header />
        <div className='py-3 px-36 mt-10 flex flex-wrap justify-center'>
          {loaderAr.map((item, index) => (
            <span key={index} className=''>
              {item}
            </span>
          ))}
        </div>
      </main>
    </>
  );
};

export default loading;
