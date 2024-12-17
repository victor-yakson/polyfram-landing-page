import { programs } from "../constants";
import styles, { layout } from "../style";
import ProgramCard from "./ProgramCard";

const ProgramsAndServices = () => (
  <section
    id="programs-services"
    className={`${layout.section} md:flex-col items-center justify-center`}
  >
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Comprehensive Crypto <br className="sm:block hidden" /> Investment
        Programs{" "}
      </h2>
      <p className={`${styles.paragraph} mt-5`}>
        Explore our range of secure and high-yield investment opportunities,
        including staking, mining, polymatrix, yield farming, and custom
        strategies designed to maximize your wealth.
      </p>
    </div>

    {/* Cards Container */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {programs.map((program, index) => (
        <ProgramCard
          key={index}
          title={program.title}
          description={program.description}
          link={program.link}
        />
      ))}
    </div>
  </section>
);

export default ProgramsAndServices;
