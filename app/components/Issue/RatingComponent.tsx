import React, { useState } from 'react';

interface RatingProps {
  onRatingSelected: (rating: 'happy' | 'neutral' | 'sad') => void;
}

const RatingComponent: React.FC<RatingProps> = ({ onRatingSelected }) => {
  const [selectedRating, setSelectedRating] = useState<'happy' | 'neutral' | 'sad' | null>(null);

  const handleRatingSelected = (rating: 'happy' | 'neutral' | 'sad') => {
    setSelectedRating(rating);
    onRatingSelected(rating);
  };

  return (
    <div className="rating-component flex flex-col items-center">
      <h3 className="text-center mb-2">이 콘텐츠가 도움이 됐나요?</h3>
      <div className="flex items-center">
        <div
          className={`cursor-pointer mx-2 ${selectedRating === 'happy' ? 'text-green-500' : ''}`}
          onClick={() => handleRatingSelected('happy')}
        >
          <div className="flex flex-col items-center">
            <span role="img" aria-label="happy" className="text-4xl">
              😊
            </span>
            <div>도움 됐어요</div>
          </div>
        </div>
        <div
          className={`cursor-pointer mx-2 ${selectedRating === 'neutral' ? 'text-yellow-500' : ''}`}
          onClick={() => handleRatingSelected('neutral')}
        >
          <div className="flex flex-col items-center">
            <span role="img" aria-label="neutral" className="text-4xl">
              😐
            </span>
            <div>그냥 그래요</div>
          </div>
        </div>
        <div
          className={`cursor-pointer mx-2 ${selectedRating === 'sad' ? 'text-red-500' : ''}`}
          onClick={() => handleRatingSelected('sad')}
        >
          <div className="flex flex-col items-center">
            <span role="img" aria-label="sad" className="text-4xl">
              😒
            </span>
            <div>별로에요</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingComponent;
