import LaptopForm from "./components/LaptopForm";
// import HardwareForm from "./components/HardwareForm";

function Admin({ logOut }) {
  return (
    <section className="p-4 xl:py-10 xl:px-0">
      <LaptopForm />
      {/* <HardwareForm /> */}
      {}
      <button
        onClick={logOut}
        className="bg-red-500 h-10 w-32 rounded-full font-bold"
      >
        Log Out
      </button>
    </section>
  );
}

export default Admin;
