import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface RatingProps {
  totalStars?: number;  // Default 5 stars
  onRate?: (rating: number) => void;  // Callback function
}

const UserRating: React.FC<RatingProps> = ({ totalStars = 5, onRate}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (rate: number) => {
    setRating(rate);
    if (onRate) onRate(rate);
  };

  return (
    <div className="flex space-x-1 w-[90%] justify-center">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            size={50}
            className={`cursor-pointer transition ${
              starValue <= (hover || rating) ? "text-yellow-500" : "text-gray-300"
            }`}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          />
        );
      })}
    </div>
  );
};

export default UserRating;
