
const StarRating = ({ rating }: { rating: number }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(<span key={i} className="star"><i className="ri-star-fill"></i></span>);
  }

  if (hasHalfStar) {
    stars.push(<span key="half-star" className="star"><i className="ri-star-half-line"></i></span>);
  }

  const emptyStars = 5 - (filledStars + (hasHalfStar ? 1 : 0));
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={`empty-star-${i}`} className="star"><i className="ri-star-line"></i></span>);
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
