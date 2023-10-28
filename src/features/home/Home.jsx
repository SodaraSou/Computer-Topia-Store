import { Link } from "react-router-dom";
import Slider from "../../ui/Slider";
import DropdownButton from "../../ui/shared/DropdownButton";

function Home() {
  const type = [
    { id: 1, type: "Laptop" },
    { id: 2, type: "PC Hardware" },
    { id: 3, type: "Peripharals" },
    { id: 4, type: "Accessories" },
  ];
  const price = [
    { id: 1, type: "Highest Price" },
    { id: 2, type: "Lowest Price" },
  ];
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Slider />
        {/* Categories Section */}
        <section className="p-4 xl:py-10 xl:px-0 flex items-center justify-between">
          <div className="w-full flex justify-evenly md:justify-start md:gap-4">
            <DropdownButton dropdownContent={type}>Type</DropdownButton>
            <DropdownButton dropdownContent={price}>Price</DropdownButton>
            <DropdownButton dropdownContent={price}>Offer</DropdownButton>
          </div>
        </section>
        {/* Main Product Grid Section */}
        <section className="p-4 xl:py-10 xl:px-0">
          <h1 className="text-4xl font-bold mb-10">This For You!</h1>
          <div className="grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 gap-4">
            <Link
              to="/productpage"
              className="w-full h-[300px] md:h-[400px] bg-[#D9D9D9] rounded-2xl"
            >
              test
            </Link>
            <div className="w-full h-[300px] md:h-[400px] bg-[#D9D9D9] rounded-2xl">
              test
            </div>
            <div className="w-full h-[300px] md:h-[400px] bg-[#D9D9D9] rounded-2xl">
              test
            </div>
            <div className="w-full h-[300px] md:h-[400px] bg-[#D9D9D9] rounded-2xl">
              test
            </div>
            <div className="w-full h-[300px] md:h-[400px] bg-[#D9D9D9] rounded-2xl">
              test
            </div>
            <div className="w-full h-[300px] md:h-[400px] bg-[#D9D9D9] rounded-2xl">
              test
            </div>
            <div className="w-full h-[300px] md:h-[400px] bg-[#D9D9D9] rounded-2xl">
              test
            </div>
            <div className="w-full h-[300px] md:h-[400px] bg-[#D9D9D9] rounded-2xl">
              test
            </div>
          </div>
        </section>
        {/* Top Categories Section */}
        <section className="p-4 xl:py-10 xl:px-0">
          <h1 className="text-4xl font-bold mb-10">Shop Our Top Categories</h1>
          <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-6 md:grid-rows-1 gap-4">
            <div className="w-full h-[250px] bg-[#D9D9D9] rounded-2xl">
              test
            </div>
            <div className="w-full h-[250px] bg-[#D9D9D9] rounded-2xl">
              test
            </div>
            <div className="w-full h-[250px] bg-[#D9D9D9] rounded-2xl">
              test
            </div>
            <div className="w-full h-[250px] bg-[#D9D9D9] rounded-2xl">
              test
            </div>
            <div className="w-full h-[250px] bg-[#D9D9D9] rounded-2xl">
              test
            </div>
            <div className="w-full h-[250px] bg-[#D9D9D9] rounded-2xl">
              test
            </div>
          </div>
        </section>
        {/* By Brand Section */}
        <section className="p-4 xl:py-10 xl:px-0">
          <h1 className="text-4xl font-bold mb-10">Choose by Brand</h1>
          <div className="grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4 xl:grid-cols-4 xl:grid-rows-2 gap-4">
            <div className="w-full bg-[#D9D9D9] rounded-2xl p-4 flex items-center gap-4">
              <img
                src={null}
                alt="avatar"
                className="w-[100px] h-[100px] bg-white rounded-full"
              />
              <h1 className="text-2xl font-semibold">Apple</h1>
            </div>
            <div className="w-full bg-[#D9D9D9] rounded-2xl p-4 flex items-center gap-4">
              <img
                src={null}
                alt="avatar"
                className="w-[100px] h-[100px] bg-white rounded-full"
              />
              <h1 className="text-2xl font-semibold">Apple</h1>
            </div>
            <div className="w-full bg-[#D9D9D9] rounded-2xl p-4 flex items-center gap-4">
              <img
                src={null}
                alt="avatar"
                className="w-[100px] h-[100px] bg-white rounded-full"
              />
              <h1 className="text-2xl font-semibold">Apple</h1>
            </div>
            <div className="w-full bg-[#D9D9D9] rounded-2xl p-4 flex items-center gap-4">
              <img
                src={null}
                alt="avatar"
                className="w-[100px] h-[100px] bg-white rounded-full"
              />
              <h1 className="text-2xl font-semibold">Apple</h1>
            </div>
            <div className="w-full bg-[#D9D9D9] rounded-2xl p-4 flex items-center gap-4">
              <img
                src={null}
                alt="avatar"
                className="w-[100px] h-[100px] bg-white rounded-full"
              />
              <h1 className="text-2xl font-semibold">Apple</h1>
            </div>
            <div className="w-full bg-[#D9D9D9] rounded-2xl p-4 flex items-center gap-4">
              <img
                src={null}
                alt="avatar"
                className="w-[100px] h-[100px] bg-white rounded-full"
              />
              <h1 className="text-2xl font-semibold">Apple</h1>
            </div>
            <div className="w-full bg-[#D9D9D9] rounded-2xl p-4 flex items-center gap-4">
              <img
                src={null}
                alt="avatar"
                className="w-[100px] h-[100px] bg-white rounded-full"
              />
              <h1 className="text-2xl font-semibold">Apple</h1>
            </div>
            <div className="w-full bg-[#D9D9D9] rounded-2xl p-4 flex items-center gap-4">
              <img
                src={null}
                alt="avatar"
                className="w-[100px] h-[100px] bg-white rounded-full"
              />
              <h1 className="text-2xl font-semibold">Apple</h1>
            </div>
          </div>
        </section>
        {/* Second Slider */}
        <Slider />
        {/* Best Deals Section */}
        <section className="p-4 xl:py-10 xl:px-0">
          <h1 className="text-4xl font-bold mb-10">
            Today Best Deals For You!
          </h1>
          <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4">
            <div className="w-full h-[300px] md:h-[400px] bg-[#D9D9D9] rounded-2xl">
              test
            </div>
            <div className="w-full h-[300px] md:h-[400px] bg-[#D9D9D9] rounded-2xl">
              test
            </div>
            <div className="w-full h-[300px] md:h-[400px] bg-[#D9D9D9] rounded-2xl">
              test
            </div>
            <div className="w-full h-[300px] md:h-[400px] bg-[#D9D9D9] rounded-2xl">
              test
            </div>
          </div>
        </section>
        {/* Help Service Section */}
        <section className="p-4 xl:py-10 xl:px-0">
          <h1 className="text-4xl font-bold mb-10">
            Service To Help You Shop!
          </h1>
          <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4">
            <div className="w-full h-[500px] overflow-hidden rounded-2xl">
              <div className="h-1/2 bg-[#D9D9D9]">test</div>
              <div className="h-1/2 bg-[#F5F5F5]">test</div>
            </div>
            <div className="w-full h-[500px] overflow-hidden rounded-2xl">
              <div className="h-1/2 bg-[#D9D9D9]">test</div>
              <div className="h-1/2 bg-[#F5F5F5]">test</div>
            </div>
            <div className="w-full h-[500px] overflow-hidden rounded-2xl">
              <div className="h-1/2 bg-[#D9D9D9]">test</div>
              <div className="h-1/2 bg-[#F5F5F5]">test</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
