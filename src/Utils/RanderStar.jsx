import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= Math.floor(rating); i++) {
    stars.push(<FaStar key={i} className="text-pink-700" />);
  }
  if (rating % 1 !== 0) {
    stars.push(
      <FaStarHalfAlt key={Math.ceil(rating)} className="text-pink-700" />
    );
  }
  for (let i = Math.ceil(rating) + 1; i <= 5; i++) {
    stars.push(<FaStar key={i} className="text-gray-300" />);
  }
  return stars;
};
