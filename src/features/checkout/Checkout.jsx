function Checkout() {
  return (
    <section className="p-4 xl:py-10 xl:px-0">
      <div className="w-full h-auto flex flex-col md:flex-row gap-4 md:gap-10">
        <div className="w-full md:w-4/6 h-auto flex flex-col gap-4 md:gap-10">
          {/* Review item section */}
          <div className="w-full h-auto rounded-xl flex flex-col gap-4 md:gap-10 p-4 md:p-10 border-2 ">
            <h1 className="text-2xl font-bold">Review Item And Shipping</h1>
            <div className="flex justify-between items-center gap-4 md:gap-10">
              <div className="bg-[#D9D9D9] w-[100px] md:w-[200px] h-[100px] md:h-[200px] rounded-2xl"></div>
              <div className="flex flex-grow justify-between items-center">
                <div>
                  <h2 className="text-lg md:text-2xl font-semibold">
                    AirPods Max
                  </h2>
                  <p className="text-sm">Color: Pink</p>
                </div>
                <div>
                  <h2 className="text-md md:text-xl font-semibold">$549.00</h2>
                  <p className="text-sm">Quantity: 1</p>
                </div>
              </div>
            </div>
          </div>
          {/* Delivery info section */}
          <div className="w-full rounded-xl border-2 flex flex-col gap-4 md:gap-10 p-4 md:p-10">
            <h1 className="text-2xl font-bold">Delivery Information</h1>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-lg font-semibold">
                    First Name*
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    id="firstName"
                    className="rounded-lg w-full h-[38px] px-4 border"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-lg font-semibold">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    id="lastName"
                    className="rounded-lg w-full h-[38px] px-4 border"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="firstName" className="text-lg font-semibold">
                  Address*
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="firstname"
                  className="rounded-lg w-full h-[38px] px-4 border"
                />
              </div>
              <div className="flex gap-2">
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-lg font-semibold">
                    City/Town*
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    id="City/Town"
                    className="rounded-lg w-full h-[38px] px-4 border"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-lg font-semibold">
                    Zip Code*
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    id="zipCode"
                    className="rounded-lg w-full h-[38px] px-4 border"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-lg font-semibold">
                    Mobile*
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    id="mobile"
                    className="rounded-lg w-full h-[38px] px-4 border"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-lg font-semibold">
                    Email*
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    id="email"
                    className="rounded-lg w-full h-[38px] px-4 border"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Order summary section */}
        <div className="w-full md:w-4/12 h-auto rounded-xl flex flex-col gap-4 p-4 md:p-10 border-2">
          <h1 className="text-2xl font-bold">Order Summary</h1>
          <div className="h-[1px] bg-[#D9D9D9]"></div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">Payment Details</h1>
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 focus:ring-2 "
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-sm font-medium "
                >
                  Cash on Delivery
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 focus:ring-2 "
                />
                <label
                  forhtml="default-radio-2"
                  className="ml-2 text-sm font-medium "
                >
                  QR Code
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 focus:ring-2 "
                />
                <label
                  forhtml="default-radio-2"
                  className="ml-2 text-sm font-medium "
                >
                  Credit or Debit Card
                </label>
              </div>
            </div>
            <div className="flex">
              <div className="w-[60px] h-[35px] bg-gray-500 mx-1"></div>
              <div className="w-[60px] h-[35px] bg-gray-500 mx-1"></div>
              <div className="w-[60px] h-[35px] bg-gray-500 mx-1"></div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-lg font-semibold">
                Email*
              </label>
              <input
                type="text"
                placeholder=""
                id="firstname"
                className="rounded-lg w-full h-[38px] px-4 border"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-lg font-semibold">
                Card Holder Name*
              </label>
              <input
                type="text"
                placeholder=""
                id="firstname"
                className="rounded-lg w-full h-[38px] px-4 border"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-lg font-semibold">
                Card Number*
              </label>
              <input
                type="text"
                placeholder=""
                id="firstname"
                className="rounded-lg w-full h-[38px] px-4 border"
              />
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-lg font-semibold">
                  Expiry*
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="firstname"
                  className="rounded-lg w-full h-[38px] px-4 border"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-lg font-semibold">
                  CVV*
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="firstname"
                  className="rounded-lg w-full h-[38px] px-4 border"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Sub Total</h3>
              <p className="text-md">$549.00</p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Tax(10%)</h3>
              <p className="text-md">$54.90</p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Shipping Cost</h3>
              <p className="text-md">$0.00</p>
            </div>
          </div>
          <div className="h-[1px] bg-[#D9D9D9]"></div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Total</h3>
            <p className="text-md">$603.90</p>
          </div>
          <button className="w-full h-[38px] rounded-lg bg-[#D9D9D9] px-4">
            Pay $603.90
          </button>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
