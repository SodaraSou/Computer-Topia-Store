function Payment({ editSvg }) {
  return (
    <div className="w-full md:w-1/2 border rounded-xl p-4 md:p-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl md:text-4xl font-bold">Payment</h1>
        <button>
          <img src={editSvg} alt="edit" className="svg-size" />
        </button>
      </div>
      <div className="text-lg">
        <p>*************1234</p>
        <p>Expiration date: 01/2024</p>
        <p>Sou Sodara</p>
      </div>
    </div>
  );
}

export default Payment;
