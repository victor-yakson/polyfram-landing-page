import styles, { layout } from "../style";
import Button from "./Button";

const HowItWorks = ({ modalToggle }) => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        How It Works <br className="sm:block hidden" /> in 3 Simple Steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Discover how easy it is to start growing your wealth with our crypto
        investment platform. Follow these steps to get started:
      </p>

      <ol className={`${styles.paragraph} mt-5 list-decimal pl-5 space-y-4`}>
        <li>
          <strong>Choose a Program:</strong> Select from a range of options like
          staking, mining, or yield farming tailored to your goals.
        </li>
        <li>
          <strong>Connect Your Wallet:</strong> Link your cryptocurrency wallet
          securely to start using our platform and access all features.
        </li>

        <li>
          <strong>Start Investing:</strong> Deposit your funds and watch your
          assets grow effortlessly.
        </li>
      </ol>

      <Button styles={`mt-10`} func={modalToggle} />
    </div>
  </section>
);

export default HowItWorks;
