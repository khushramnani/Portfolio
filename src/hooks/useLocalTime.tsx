// hooks/useLocalTime.ts
import { useEffect, useState } from 'react';

const useLocalTime = () => {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZoneName: 'short',
      };

      const formatter = new Intl.DateTimeFormat('en-GB', options);
      setTimeString(formatter.format(now));
    };

    updateTime(); // initial call
    const interval = setInterval(updateTime, 60 * 1000); // update every minute
    return () => clearInterval(interval);
  }, []);

  return timeString;
};

export default useLocalTime;
