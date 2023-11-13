import { Link } from "react-router-dom";
import CartItem from "./components/CartItem";

function Cart() {
  return (
    <section className="p-4 xl:py-10 xl:px-0">
      <div className="max-w-[1000px] mx-auto border border-[#D9D9D9] rounded-2xl p-4 xl:p-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl md:text-4xl font-bold">My Cart</h1>
          <h2 className="text-xl md:text-2xl font-bold">2 Items</h2>
        </div>
        <div className="overflow-x-auto">
          <div className="w-[750px] md:w-[918px] flex justify-between items-center">
            <div className="w-[400px]">
              <p className="text-lg">Product</p>
            </div>
            <div className="w-[400px] flex justify-between items-center">
              <p>Price</p>
              <p>Quantity</p>
              <p>Sub Total</p>
            </div>
          </div>
          <div className="h-[1px] w-[750px] md:w-[918px] bg-[#D9D9D9] my-5"></div>
          <div className="w-[750px] md:w-[918px] flex flex-col gap-10">
            <CartItem />
            <CartItem />
          </div>
          <div className="h-[1px] w-[750px] md:w-[918px] bg-[#D9D9D9] flex-grow my-5"></div>
        </div>
        <div className="flex flex-col gap-2 items-end justify-center">
          <p className="text-lg font-semibold">$549.00</p>
          <p>Taxes and shipping not included</p>
          <Link
            to="/checkout"
            className="rounded-xl bg-[#5E17EB] text-white px-4 md:px-2 py-2 md:h-10 md:w-28 font-semibold text-center"
          >
            Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cart;
