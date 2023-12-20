import React from "react";

function LaptopDetail({ productDetails }) {
  return (
    <table className="w-full">
      <tbody>
        <tr className="bg-[#EAECF6]">
          <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
            Model
          </td>
          <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
            {productDetails.model}
          </td>
        </tr>
        <tr className="bg-white">
          <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
            CPU
          </td>
          <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
            {productDetails.cpu}
          </td>
        </tr>
        <tr className="bg-[#EAECF6]">
          <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
            GPU
          </td>
          <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
            {productDetails.vga}
          </td>
        </tr>
        <tr className="bg-white">
          <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
            RAM
          </td>
          <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
            {productDetails.ram}
          </td>
        </tr>
        <tr className="bg-[#EAECF6]">
          <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
            Storage
          </td>
          <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
            {productDetails.storage}
          </td>
        </tr>
        <tr className="bg-white">
          <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
            Display
          </td>
          <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
            {productDetails.screen}
          </td>
        </tr>
        <tr className="bg-[#EAECF6]">
          <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
            OS
          </td>
          <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
            {productDetails.os}
          </td>
        </tr>
        <tr className="bg-white">
          <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
            Battery
          </td>
          <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
            {productDetails.battery}
          </td>
        </tr>
        <tr className="bg-[#EAECF6]">
          <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
            Weight
          </td>
          <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
            {productDetails.weight}
          </td>
        </tr>
        <tr className="bg-white">
          <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
            Connectivity
          </td>
          <td className="md:text-lg w-5/6 py-2 px-4 text-sm">N/A</td>
        </tr>
        <tr className="bg-[#EAECF6]">
          <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
            Official Warranty
          </td>
          <td className="md:text-lg w-5/6 py-2 px-4 text-sm">3 Years</td>
        </tr>
      </tbody>
    </table>
  );
}

export default LaptopDetail;
