import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

function Maintenance() {
  return (
    <section className="flex justify-center items-center h-[90vh]">
      <div className="flex gap-2 md:gap-4 justify-center items-center">
        <FontAwesomeIcon
          icon={faScrewdriverWrench}
          className="text-[#5E17EB] w-5 md:w-10 h-5 md:h-10"
        />
        <span className="text-2xl md:text-4xl font-bold">
          Under Construction
        </span>
      </div>
    </section>
  );
}

export default Maintenance;
