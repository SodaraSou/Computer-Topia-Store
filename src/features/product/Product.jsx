import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct, setLoading } from "./productSlice";
import { getProductById } from "../../services/product.api";
import Spinner from "../../ui/Spinner";
import QuantityButton from "../../ui/shared/QuantityButton";
import Button from "../../ui/shared/Button";

function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      dispatch(setLoading());
      const data = await getProductById(id);
      dispatch(setProduct(data));
    };
    fetchProduct();
  }, []);

  const product = useSelector((state) => state.product.product);
  const loading = useSelector((state) => state.product.loading);

  if (loading) {
    return (
      <div className="h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 xl:py-10 xl:px-0">
      {/* Main Product Section */}
      <section className="flex flex-col md:flex-row gap-10 mb-10">
        <div className="w-full md:w-1/2 h-[350px] md:h-[590px] bg-[#D9D9D9] rounded-3xl">
          Hello
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-5">{product.model}</h1>
          <hr className="mb-5" />
          <h1 className="text-4xl font-bold mb-5">${product.price}</h1>
          <hr className="mb-5" />
          <h2 className="text-2xl font-bold mb-5">Choose a Color</h2>
          <div className="flex gap-5 mb-5">
            <div className="bg-[#D9D9D9] w-[50px] h-[50px] xl:w-[75px] xl:h-[75px] rounded-full"></div>
            <div className="bg-[#D9D9D9] w-[50px] h-[50px] xl:w-[75px] xl:h-[75px] rounded-full"></div>
            <div className="bg-[#D9D9D9] w-[50px] h-[50px] xl:w-[75px] xl:h-[75px] rounded-full"></div>
            <div className="bg-[#D9D9D9] w-[50px] h-[50px] xl:w-[75px] xl:h-[75px] rounded-full"></div>
            <div className="bg-[#D9D9D9] w-[50px] h-[50px] xl:w-[75px] xl:h-[75px] rounded-full"></div>
          </div>
          <hr className="mb-5" />
          <div className="flex gap-5 items-center mb-5">
            <QuantityButton />
            <p className="text-lg">Only 12 items left</p>
          </div>
          <Button
            title="Add To Cart"
            customClass="w-full md:w-[200px]"
          ></Button>
        </div>
      </section>
      {/* Details Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-10">
          {product.model} Full Specification
        </h2>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2 p-4 md:p-10 bg-[#F5F5F5]">
            <h2 className="text-2xl font-bold mb-4 md:mb-10">General</h2>
            <table className="w-full">
              <tbody>
                <tr className="bg-white">
                  <td className="text-lg w-2/5 py-2 px-4">Brand</td>
                  <td className="text-lg w-3/5 py-2 px-4">Apple</td>
                </tr>
                <tr className="bg-[#D9D9D9] px-4">
                  <td className="text-lg w-2/5 py-2 px-4">Model</td>
                  <td className="text-lg w-3/5 py-2 px-4">{product.model}</td>
                </tr>
                <tr className="bg-white">
                  <td className="text-lg w-2/5 py-2 px-4">Price</td>
                  <td className="text-lg w-3/5 py-2 px-4">$549.00</td>
                </tr>
                <tr className="bg-[#D9D9D9]">
                  <td className="text-lg w-2/5 py-2 px-4">Release date</td>
                  <td className="text-lg w-3/5 py-2 px-4">December 2020</td>
                </tr>
                <tr className="bg-white">
                  <td className="text-lg w-2/5 py-2 px-4">Model Number</td>
                  <td className="text-lg w-3/5 py-2 px-4">AirPods Max</td>
                </tr>
                <tr className="bg-[#D9D9D9]">
                  <td className="text-lg w-2/5 py-2 px-4">Type</td>
                  <td className="text-lg w-3/5 py-2 px-4">Over-Ear</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full md:w-1/2 p-4 md:p-10 bg-[#F5F5F5]">
            <h2 className="text-2xl font-bold mb-4 md:mb-10">
              Product Details
            </h2>
            <table className="w-full">
              <tbody>
                <tr className="bg-white">
                  <td className="text-lg w-2/5 py-2 px-4">Microphone</td>
                  <td className="text-lg w-3/5 py-2 px-4">Yes</td>
                </tr>
                <tr className="bg-[#D9D9D9] px-4">
                  <td className="text-lg w-2/5 py-2 px-4">Driver Type</td>
                  <td className="text-lg w-3/5 py-2 px-4">Dynamic</td>
                </tr>
                <tr className="bg-white">
                  <td className="text-lg w-2/5 py-2 px-4">Price</td>
                  <td className="text-lg w-3/5 py-2 px-4">$549.00</td>
                </tr>
                <tr className="bg-[#D9D9D9]">
                  <td className="text-lg w-2/5 py-2 px-4">Water Resistant</td>
                  <td className="text-lg w-3/5 py-2 px-4">No</td>
                </tr>
                <tr className="bg-white">
                  <td className="text-lg w-2/5 py-2 px-4">Weight (g)</td>
                  <td className="text-lg w-3/5 py-2 px-4">Hello</td>
                </tr>
                <tr className="bg-[#D9D9D9]">
                  <td className="text-lg w-2/5 py-2 px-4">
                    Battery Life (Hrs)
                  </td>
                  <td className="text-lg w-3/5 py-2 px-4">20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Similar Items Section */}
      <section>
        <h2 className="text-2xl font-bold mb-10">
          Similar Items You Might Like
        </h2>
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
    </div>
  );
}

export default Product;
