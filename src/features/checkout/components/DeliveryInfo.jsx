import Button from "../../../ui/shared/Button";
import Input from "../../../ui/shared/Input";

function DeliveryInfo() {
  return (
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
  );
}

export default DeliveryInfo;
