import Button from "../../../ui/shared/Button";
import Input from "../../../ui/shared/Input";

function CheckoutSidebar({ checkoutPrice, handleCheckout }) {
  return (
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
        <Input title="Email" type="email" id="email" />
        <Input title="Card Holder Name" type="text" id="cardHolderName" />
        <Input title="Card Number" type="text" id="cardNumber" />
        <div className="flex gap-2">
          <Input title="Expiry" type="text" id="expiry" />

          <Input title="CVV" type="text" id="cvv" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">Shipping Cost</h3>
        <p className="text-md">$0.00</p>
      </div>
      <div className="h-[1px] bg-[#D9D9D9]"></div>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">Total</h3>
        <p className="text-md">${checkoutPrice}</p>
      </div>
      <Button onClick={handleCheckout} customClass="md:w-full">
        Pay ${checkoutPrice}
      </Button>
    </div>
  );
}

export default CheckoutSidebar;
