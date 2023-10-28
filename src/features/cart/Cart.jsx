import { Link } from "react-router-dom";
import PlusSvg from "../../assets/svg/plus-solid.svg";
import MinusSvg from "../../assets/svg/minus-solid.svg";

function Cart() {
  return (
    <section className="p-4 xl:py-10 xl:px-0">
      <div className="max-w-[1000px] mx-auto border border-[#D9D9D9] rounded-2xl p-4 xl:p-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl md:text-4xl font-bold">My Cart</h1>
          <h2 className="text-xl md:text-2xl font-bold">2 Items</h2>
        </div>
        <div className="overflow-x-auto">
          <div className="w-[918px] flex justify-between items-center">
            <div className="w-[400px]">
              <p className="text-lg">Product</p>
            </div>
            <div className="w-[400px] flex justify-between items-center">
              <p>Price</p>
              <p>Quantity</p>
              <p>Sub Total</p>
            </div>
          </div>
          <div className="h-[1px] w-[918px] bg-[#D9D9D9] my-5"></div>
          <div className="w-[918px] flex flex-col gap-10">
            <div className="flex justify-between items-center">
              <div className="w-auto md:w-[400px] flex items-center gap-4 md:gap-10">
                <div className="bg-[#D9D9d9] w-[100px] md:w-[200px] h-[100px] md:h-[200px] rounded-2xl"></div>
                <h2 className="text-lg md:text-2xl font-semibold">
                  AirPods Max
                </h2>
              </div>
              <div className="w-[400px] flex justify-between items-center">
                <p className="text-md md:text-lg font-semibold">$549.00</p>
                <div className="px-4 py-2 bg-[#D9D9D9] flex items-center justify-between text-lg rounded-full dropdown-button-size">
                  <button>
                    <img
                      src={MinusSvg}
                      alt="MinusSvg"
                      className="mr-4 svg-size"
                    />
                  </button>
                  1
                  <button>
                    <img
                      src={PlusSvg}
                      alt="PlusSvg"
                      className="ml-4 svg-size"
                    />
                  </button>
                </div>
                <p className="text-md md:text-lg font-semibold">$549.00</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-[400px] flex items-center gap-4 md:gap-10">
                <div className="bg-[#D9D9d9] w-[100px] md:w-[200px] h-[100px] md:h-[200px] rounded-2xl"></div>
                <h2 className="text-lg md:text-2xl font-semibold">
                  AirPods Max
                </h2>
              </div>
              <div className="w-[400px] flex justify-between items-center">
                <p className="text-md md:text-lg font-semibold">$549.00</p>
                <div className="px-4 py-2 bg-[#D9D9D9] flex items-center justify-between text-lg rounded-full dropdown-button-size">
                  <button>
                    <img
                      src={MinusSvg}
                      alt="MinusSvg"
                      className="mr-4 svg-size"
                    />
                  </button>
                  1
                  <button>
                    <img
                      src={PlusSvg}
                      alt="PlusSvg"
                      className="ml-4 svg-size"
                    />
                  </button>
                </div>
                <p className="text-md md:text-lg font-semibold">$549.00</p>
              </div>
            </div>
          </div>
          <div className="h-[1px] w-[918px] bg-[#D9D9D9] flex-grow my-5"></div>
        </div>
        <div className="flex flex-col gap-2 items-end justify-center">
          <p className="text-lg font-semibold">$549.00</p>
          <p>Taxes and shipping not included</p>
          <Link
            to="/checkout"
            className="bg-[#D9D9D9] h-[38px] py-2 px-4 rounded-lg font-semibold"
          >
            Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cart;
