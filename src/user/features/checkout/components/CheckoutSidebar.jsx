import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { QrCode, VisaABA, VisaAceleda, VisaPrince } from "../../../assets/img";
import QrCode from "../../../assets/img/ABA_QR_Code.webp";
import VisaABA from "../../../assets/img/visa_aba.webp";
import VisaAceleda from "../../../assets/img/visa_aceleda.webp";
import VisaPrince from "../../../assets/img/visa_prince.webp";
import { checkout } from "../../../../services/order.api";
import Button from "../../../../ui/shared/Button";
import Input from "../../../../ui/shared/Input";
import {
  updateUserAddress,
  updateUserPayment,
  updatePhoneNumber,
} from "../../../../services/user.api";

function CheckoutSidebar({ checkoutPrice, checkoutList, userProfile }) {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState({
    houseNo: "",
    streetNo: "",
    village: "",
    commune: "",
    district: "",
    province: "",
  });
  const { houseNo, streetNo, village, commune, district, province } = address;
  const [payment, setPayment] = useState({
    cardName: "",
    cardNumber: "",
    cardExpDate: "",
    cvv: "",
  });
  const { cardName, cardNumber, cardExpDate, cvv } = payment;
  useEffect(() => {
    if (userProfile) {
      setAddress({
        houseNo: userProfile.houseNo,
        streetNo: userProfile.streetNo,
        village: userProfile.village,
        commune: userProfile.commune,
        district: userProfile.district,
        province: userProfile.province,
      });
      setPayment({
        cardName: userProfile.cardName,
        cardNumber: userProfile.cardNumber,
        cardExpDate: userProfile.cardExpDate,
      });
      setPhoneNumber(userProfile.phoneNumber);
    }
  }, [userProfile]);
  const onChangeAddress = (e) => {
    setAddress((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onChangePayment = (e) => {
    setPayment((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onChangePhone = (e) => {
    setPhoneNumber(e.target.value);
  };
  const onChangePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };
  const handleCheckout = async (e) => {
    e.preventDefault();
    const newPayment = { cardName, cardNumber, cardExpDate };
    await updateUserPayment(newPayment);
    await updateUserAddress(address);
    await updatePhoneNumber(phoneNumber);
    const response = await checkout(checkoutList, checkoutPrice);
    if (response) {
      navigate("/");
    }
  };
  return (
    <form
      onSubmit={handleCheckout}
      className="w-full lg:w-4/12 flex flex-col gap-4 p-4 md:p-10 border"
    >
      <h1 className="text-2xl font-bold">Order Summary</h1>
      <div className="h-[1px] bg-[#D9D9D9]"></div>
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-semibold">Payment Details</h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <input
              id="default-radio-2"
              type="radio"
              value="QR_Code"
              name="default-radio"
              className="w-4 h-4 focus:ring-2"
              onChange={onChangePaymentMethod}
              checked={paymentMethod === "QR_Code"}
              required
            />
            <label forhtml="default-radio-2" className="ml-2 text-sm">
              QR Code
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="default-radio-2"
              type="radio"
              value="Credit"
              name="default-radio"
              className="w-4 h-4 focus:ring-2"
              onChange={onChangePaymentMethod}
              checked={paymentMethod === "Credit"}
              required
            />
            <label forhtml="default-radio-2" className="ml-2 text-sm">
              Credit Card
            </label>
          </div>
        </div>
      </div>
      {paymentMethod === "QR_Code" && (
        <>
          <div className="h-[1px] bg-[#D9D9D9]"></div>
          <h2 className="text-lg font-semibold">QR Code</h2>
          <img src={QrCode} alt="qr_code" />
        </>
      )}
      {paymentMethod === "Credit" && (
        <>
          <div className="h-[1px] bg-[#D9D9D9]"></div>
          <h2 className="text-lg font-semibold">Credit Card</h2>
          <div className="flex gap-4">
            <div className="w-[60px] h-auto">
              <img src={VisaABA} alt="credit_card" />
            </div>
            <div className="w-[60px] h-auto">
              <img src={VisaAceleda} alt="credit_card" />
            </div>
            <div className="w-[60px] h-auto">
              <img src={VisaPrince} alt="credit_card" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Input
              title="Card Holder Name"
              type="text"
              id="cardName"
              value={cardName}
              onChange={onChangePayment}
              isRequired={true}
            />
            <Input
              title="Card Number"
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={onChangePayment}
              isRequired={true}
            />
            <div className="flex gap-4">
              <Input
                title="Expiry"
                type="text"
                id="cardExpDate"
                value={cardExpDate}
                onChange={onChangePayment}
                isRequired={true}
              />
              <Input
                title="CVV"
                type="text"
                id="cvv"
                value={cvv}
                onChange={onChangePayment}
                isRequired={true}
              />
            </div>
          </div>
        </>
      )}
      <div className="h-[1px] bg-[#D9D9D9]"></div>
      <h2 className="text-lg font-semibold">Delivery Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <Input
          title="House No"
          id="houseNo"
          onChange={onChangeAddress}
          type="text"
          value={houseNo}
          isRequired={true}
        />
        <Input
          title="Street No"
          id="streetNo"
          onChange={onChangeAddress}
          type="text"
          value={streetNo}
          isRequired={true}
        />
        <Input
          title="Village"
          id="village"
          onChange={onChangeAddress}
          type="text"
          value={village}
          isRequired={true}
        />
        <Input
          title="Commune"
          id="commune"
          onChange={onChangeAddress}
          type="text"
          value={commune}
          isRequired={true}
        />
        <Input
          title="District"
          id="district"
          onChange={onChangeAddress}
          type="text"
          value={district}
          isRequired={true}
        />
        <Input
          title="City/Province"
          id="province"
          onChange={onChangeAddress}
          type="text"
          value={province}
          isRequired={true}
        />
      </div>
      <Input
        title="Phone Number"
        id="phoneNumber"
        onChange={onChangePhone}
        type="text"
        value={phoneNumber}
        isRequired={true}
      />
      {/* <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Shipping Cost</h3>
        <p className="text-md">$0.00</p>
      </div> */}
      <div className="h-[1px] bg-[#D9D9D9]"></div>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Total</h3>
        <p className="text-md">${checkoutPrice}</p>
      </div>
      <Button type="submit" customClass="md:w-full">
        Pay ${checkoutPrice}
      </Button>
    </form>
  );
}

export default CheckoutSidebar;
