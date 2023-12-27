import React from "react";

function PeriAndAccesDetail({ productDetails }) {
  return (
    <table className="w-full">
      <tbody>
        <tr className="bg-[#EAECF6]">
          <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
            Brand
          </td>
          <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
            {productDetails.brand}
          </td>
        </tr>
        <tr className="bg-white">
          <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
            Model
          </td>
          <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
            {productDetails.model}
          </td>
        </tr>
        <tr className="bg-[#EAECF6]">
          <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
            Peripheral Type
          </td>
          <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
            {productDetails.peripheralType
              ? productDetails.peripheralType
              : productDetails.accessoriesType}
          </td>
        </tr>
        <tr className="bg-white">
          <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
            N/A
          </td>
          <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
            {productDetails.description1}
          </td>
        </tr>
        <tr className="bg-[#EAECF6]">
          <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
            N/A
          </td>
          <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
            {productDetails.description2}
          </td>
        </tr>
        <tr className="bg-white">
          <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
            N/A
          </td>
          <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
            {productDetails.description3}
          </td>
        </tr>
        <tr className="bg-[#EAECF6]">
          <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
            N/A
          </td>
          <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
            {productDetails.description4}
          </td>
        </tr>
        <tr className="bg-white">
          <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
            Official Warranty
          </td>
          <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
            {productDetails.warranty}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default PeriAndAccesDetail;
