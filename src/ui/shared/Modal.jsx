// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// function Modal({ children, handleModal }) {
//   const modalRef = useRef();
//   useEffect(() => {
//     const clickHandler = (e) => {
//       if (
//         modalRef.current &&
//         !modalRef.current.contains(e.target) &&
//         e.target !== document.body
//       ) {
//         handleModal(false);
//       }
//     };
//     document.addEventListener("mousedown", clickHandler);

//     return () => {
//       document.removeEventListener("mousedown", clickHandler);
//     };
//   }, []);
//   return (
//     <div className="p-4 fixed z-50 inset-0 bg-black bg-opacity-40 flex justify-center items-center">
//       <motion.div
//         key="modal"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.8 }}
//         transition={{ duration: 0.3, ease: "easeInOut" }}
//         ref={modalRef}
//         className="p-4 md:p-10 bg-white"
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// }

// export default Modal;

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Modal({ children, handleModal }) {
  const modalRef = useRef();
  useEffect(() => {
    const clickHandler = (e) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        e.target !== document.body
      ) {
        handleModal(false);
      }
    };
    const keydownHandler = (e) => {
      if (e.key === "Escape") {
        handleModal(false);
      }
    };
    document.addEventListener("mousedown", clickHandler);
    document.addEventListener("keydown", keydownHandler);
    return () => {
      document.removeEventListener("mousedown", clickHandler);
      document.addEventListener("keydown", keydownHandler);
    };
  }, []);
  return (
    <div className="p-4 fixed z-40 inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        ref={modalRef}
        className="p-4 md:p-10 bg-[#EAECF6] max-h-[80vh] overflow-y-auto relative"
      >
        <button
          className="absolute top-3 right-4"
          onClick={() => handleModal(false)}
        >
          <FontAwesomeIcon icon={faX} className="text-[#5E17EB]" />
        </button>
        {children}
      </motion.div>
    </div>
  );
}

export default Modal;
