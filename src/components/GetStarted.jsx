import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer  `}
    >
      <div className={`${styles.flexCenter} flex-col  bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart}`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">get </span>
          </p>
            <img src={arrowUp} alt='arrpr'/>
        </div>
        <div className={`${styles.flexStart}`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">started </span>
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default GetStarted;
