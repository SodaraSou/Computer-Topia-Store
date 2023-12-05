function Spinner({ fullScreenSpinner }) {
  return (
    <div className={fullScreenSpinner ? "loadingSpinnerContainer" : null}>
      <div className="loadingSpinner"></div>
    </div>
  );
}

export default Spinner;
