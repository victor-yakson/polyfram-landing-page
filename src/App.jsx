import styles from "./style";
import {
  Business,
  HowItWorks,
  ProgramsAndServices,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  Modal,
} from "./components";

import { useState } from "react";
import { linkOptions } from "./constants";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loadingButton, setLoadingButton] = useState(null); // Track which button is loading

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  const handleButtonClick = (link, index) => {
    setLoadingButton(index); // Set the clicked button's index to loading state
    setTimeout(() => {
      window.location.href = link;
      console.log("link", link);

      setLoadingButton(null); // Reset loading state after navigating
      // or any other redirect logic
    }, 500); // Simulate loading time (can be removed for actual redirects)
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <h3 className="text-2xl font-semibold mb-4 ">Choose an Option</h3>
          <div className="grid grid-cols-2 gap-4">
            {linkOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(option.link, index)}
                className={`py-4 px-6 font-poppins font-medium text-[18px] text-white ${
                  loadingButton ? "bg-gray-400" : "bg-blue-gradient"
                } rounded-[10px] outline-none hover:bg-blue-600 transition-all duration-300 transform active:scale-95 focus:ring-2 focus:ring-blue-400 focus:outline-none`}
              >
                {loadingButton === index ? "Loading..." : option.title}{" "}
                {/* Show "Loading..." if the button is loading */}
              </button>
            ))}
          </div>
        </div>
      </Modal>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero modalToggle={handleModal} />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business modalToggle={handleModal} />
          <ProgramsAndServices />
          <HowItWorks modalToggle={handleModal} />
          <Testimonials />
          <Clients />
          <CTA modalToggle={handleModal} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
