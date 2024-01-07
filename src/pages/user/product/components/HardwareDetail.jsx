import React from "react";

function HardwareDetail({ productDetails }) {
  let detailsField = "";
  switch (productDetails.hardwareType) {
    case "CPU":
      detailsField = (
        <>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Core
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.cores}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Thread
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.threads}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Clock Speed
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.clock_speed}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Socket
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.socket}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Manufacturing
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.manufacturing_process}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              iGPU
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.integrated_graphics}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              TDP
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.tdp}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Cache
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.cache}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Warranty
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.warranty}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Year
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.year}
            </td>
          </tr>
        </>
      );
      break;
    case "GPU":
      detailsField = (
        <>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Vram
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.vram}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Architecture
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.architecture}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Base Clock
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.base_clock}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Boost Clock
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.boost_clock}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Connector
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.connector}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Warranty
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.warranty}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Year
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.year}
            </td>
          </tr>
        </>
      );
      break;
    case "RAM":
      detailsField = (
        <>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Ram Type
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.ram_type}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Capacity
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.capacity}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Speed
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.speed}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Capacity
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.capacity}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Warranty
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.warranty}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Year
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.year}
            </td>
          </tr>
        </>
      );
      break;
    case "Motherboard":
      detailsField = (
        <>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Socket
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.socket}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Form Factor
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.form_factor}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Memory Slots
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.memory_slots}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              PCIE Slots
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.pcie_slots}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              USB Slots
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.usb_slots}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Ethernet Ports
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.ethernet_ports}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Warranty
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.warranty}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Year
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.year}
            </td>
          </tr>
        </>
      );
      break;
    case "SSD":
      detailsField = (
        <>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Capacity
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.capacity}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Form Factor
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.form_factor}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Interface
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.interface}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Read Speed
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.read_speed}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Wirte Speed
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.wirte_speed}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Warranty
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.warranty}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Year
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.year}
            </td>
          </tr>
        </>
      );
      break;
    case "HDD":
      detailsField = (
        <>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Capacity
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.capacity}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Form Factor
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.form_factor}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Interface
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.interface}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Rotation Speed
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.rotation_speed}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Warranty
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.warranty}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Year
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.year}
            </td>
          </tr>
        </>
      );
      break;
    case "Cooler":
      detailsField = (
        <>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Cooler Type
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.coolerType}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Block Compatibility
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.blockCompatibility}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Fan Size
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.fanSize}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Fan Noise
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.fanNoise}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Fan Connector
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.fanConnector}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Warranty
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.warranty}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Year
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.year}
            </td>
          </tr>
        </>
      );
      break;
    case "PSU":
      detailsField = (
        <>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Wattage
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.wattage}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Efficiency Rating
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.efficiency_rating}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Connector
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.connector}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Dimension
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.dimension}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Warranty
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.warranty}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Year
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.year}
            </td>
          </tr>
        </>
      );
      break;
    case "Case":
      detailsField = (
        <>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Form Factor
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.form_factor}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Side Panel
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.side_panel}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Connector
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.connector}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Fan Support
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.fan_support}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Liquid Cooling
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.liquid_cooling}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Dimension
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.dimension}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Warranty
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.warranty}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Year
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.year}
            </td>
          </tr>
        </>
      );
      break;
    case "Monitor":
      detailsField = (
        <>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Screen Size
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.screenSize}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Display Type
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.displayType}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Adaptive Sync Technology
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.adaptiveSyncTechnology}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Resolution
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.resolution}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Aspect Ratio
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.aspectRatio}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Refresh Rate
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.refreshRate}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Video Port
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.videoPort}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Year
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.year}
            </td>
          </tr>
          <tr className="bg-[#EAECF6]">
            <td className="md:text-lg w-1/6 py-2 px-4 text-sm font-semibold">
              Warranty
            </td>
            <td className="md:text-lg w-5/6 py-2 px-4 text-sm">
              {productDetails.warranty}
            </td>
          </tr>
        </>
      );
      break;
    default:
      break;
  }
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
        {detailsField}
      </tbody>
    </table>
  );
}

export default HardwareDetail;
