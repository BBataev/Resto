import { FC, useState } from "react";
import starIcon from "../../assets/star.svg?react";

import "./Stars.css";
import { updateRestaurantRating } from "../../components/api/api";
import { queryClient } from "../../components/api/queryClient";
import { useMutation } from "@tanstack/react-query";

interface StarsProps {
  id: string;
  rating: number;
  size: string;
  change?: string;
}

export const Stars: FC<StarsProps> = ({ id, rating, size, change }) => {
  const updateRating = useMutation(
    {
      mutationFn: updateRestaurantRating,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["restorants"] });
      },
    },
    queryClient
  );

  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const stars = [
    { star: starIcon, id: 1 },
    { star: starIcon, id: 2 },
    { star: starIcon, id: 3 },
    { star: starIcon, id: 4 },
    { star: starIcon, id: 5 },
  ];

  const handleStarHover = (starId: number) => {
    setHoveredStar(starId);
  };

  return (
    <div className="stars">
      {stars.map((Star) => (
        <div
          key={Star.id}
          onMouseEnter={() => {
            {
              change === "can" ? handleStarHover(Star.id) : "";
            }
          }}
          onMouseLeave={() => setHoveredStar(null)}
        >
          <Star.star
            className={`stars__star ${
              Star.id <= rating ? "colored" : "notColored"
            } ${
              hoveredStar !== null && Star.id <= hoveredStar ? "hovered" : ""
            } ${size === "based" ? `based` : `moded`}`}
            onClick={() => {
              {
                change === "can"
                  ? (updateRating.mutate({ id, raiting: Star.id }))
                  : "";
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};
