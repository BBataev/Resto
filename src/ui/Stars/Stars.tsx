import { FC } from "react";
import starIcon from "../../assets/star.svg?react";

import "./Stars.css";

interface StarsProps {
  rating: number;
}

export const Stars: FC<StarsProps> = ({ rating }) => {
  const stars = [starIcon, starIcon, starIcon, starIcon, starIcon];

  return (
    <div className="stars">
      {stars.map((Star, index) => (
        <div className="stars__star" key={index}>
          {index < rating ? (
            <Star className="colored" width={17} height={17} />
          ) : (
            <Star className="notColored" width={17} height={17}/>
          )}
        </div>
      ))}
    </div>
  );
};
