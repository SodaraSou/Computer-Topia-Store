// import { useEffect, useState, useRef } from "react";
// import downArrowSvg from "../../user/assets/svg/chevron-down-solid.svg";

// function DropdownButton({ children, dropdownContent, onSelect }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const buttonRef = useRef();
//   useEffect(() => {
//     const handler = (e) => {
//       if (buttonRef.current && !buttonRef.current.contains(e.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);

//     return () => {
//       document.removeEventListener("mousedown", handler);
//     };
//   }, []);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleItemClick = (item) => {
//     onSelect(item);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative inline-block" ref={buttonRef}>
//       <button
//         onClick={toggleDropdown}
//         className="px-4 md:px-2 py-2 md:h-10 bg-[#5E17EB] text-white font-semibold flex justify-center items-center rounded-xl"
//       >
//         {children}
//         <img
//           src={downArrowSvg}
//           alt="downArrowSvg"
//           className={`ml-2 svg-size transform ${
//             isOpen ? "rotate-180" : "rotate-0"
//           }`}
//         />
//       </button>
//       {isOpen && (
//         <div className="p-2 w-[150px] absolute top-full right-0 mt-2 bg-[#EAECF6]  border border-gray-300 rounded-lg shadow-lg">
//           <ul>
//             {dropdownContent.map((item) => (
//               <li key={item.id}>
//                 <button onClick={() => handleItemClick(item.type)}>
//                   {item.type}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DropdownButton;
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function DropdownButton({ children, dropdownContent, onSelect, openModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleItemClick = (item) => {
    onSelect(item);
    if (openModal) {
      openModal(true);
    }
    setIsOpen(false);
  };
  return (
    <div className="relative inline-block" ref={buttonRef}>
      <button
        onClick={toggleDropdown}
        className="p-2 md:h-10 text-sm md:text-base bg-[#5E17EB] text-white font-semibold flex justify-center items-center gap-2 rounded-xl"
      >
        {children}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`text-white transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-2 w-[150px] absolute z-10 top-full right-0 mt-2 bg-[#EAECF6]  border border-gray-300 rounded-lg shadow-lg">
          <ul>
            {dropdownContent.map((item) => (
              <li key={item.id}>
                <button onClick={() => handleItemClick(item.type)}>
                  {item.type}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownButton;
