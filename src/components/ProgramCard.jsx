import React from 'react';
import styles from '../style';
import Button from './Button';

const ProgramCard = ({ title, description, link }) => (
  <div className="p-6 rounded-lg border-2 border-[#33bbcf]  transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
    <h3 className={styles.heading3}>{title}</h3>
    <p className={styles.paragraph}>{description}</p>

    <Button func={link} styles={"mt-4 md:mt-8"} />
  </div>
);

export default ProgramCard;
