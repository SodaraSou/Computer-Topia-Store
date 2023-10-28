function Address({ editSvg }) {
  return (
    <div className="w-full md:w-1/2 border rounded-xl p-4 md:p-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl md:text-4xl font-bold">Address</h1>
        <button>
          <img src={editSvg} alt="edit" className="svg-size" />
        </button>
      </div>
      <div className="text-lg">
        <p>Sou Sodara</p>
        <p>
          123, St. Norodom, <br />
          Boeung Kok, Toul Kork, <br /> Phnom Penh, 100100
        </p>
      </div>
    </div>
  );
}

export default Address;
