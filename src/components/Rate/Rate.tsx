import { useState } from 'react';
import cn from 'classnames';

import Star from './Star';

import './rate.scss';

type Props = { value: number; onChange: (id: number) => void };

const Rate: React.FC<Props> = ({ value, onChange = () => {} }) => {
  const [hoveredItem, setHoveredItem] = useState(0);

  return (
    <div className="rate">
      {[...Array(5).keys()]
        .map((el, idx) => idx + 1)
        .map((index) => (
          // eslint-disable-next-line jsx-a11y/interactive-supports-focus,jsx-a11y/click-events-have-key-events
          <div
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(0)}
            onClick={() => onChange(index)}
            role="button"
            key={index}
          >
            <Star
              className={cn(
                'rate__star',
                {
                  'rate__star--filled': hoveredItem
                    ? index <= hoveredItem
                    : index <= value,
                },
                {
                  'rate__star--active': index === hoveredItem,
                }
              )}
            />
          </div>
        ))}
    </div>
  );
};

export default Rate;
