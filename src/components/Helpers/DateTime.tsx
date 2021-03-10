import { useState, useEffect } from 'react';

const DateTime: React.FC = () => {
  const [time, setTime] = useState(new Date());

  const transformDate = () => {
    const date: Date = new Date();
    let dd: number | string = date.getDate();
    if (dd < 10) dd = `${0}${dd}`;

    let mm: number | string = date.getMonth() + 1;
    if (mm < 10) mm = `${0}${mm}`;

    let yy: number | string = date.getFullYear() % 100;
    if (yy < 10) yy = `${0}${yy}`;

    return `${dd}.${mm}.${yy}`;
  };

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  return (
    <div>
      <span className="mr10">{time.toLocaleTimeString()}</span>
      <span className="clock__date mr10">{transformDate()}</span>
    </div>
  );
};

export default DateTime;
