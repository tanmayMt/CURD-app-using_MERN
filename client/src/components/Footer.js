import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
      }, []);
  return (
    <div>
      <footer className="home-footer">
        <p>
          💻 Created by <strong>Tanmay Samanta</strong> | 📧 tanmoy587d@gmail.com
        </p>
        <p className="digital-clock">
          ⏰ {time.toLocaleTimeString()}
        </p>
      </footer>
    </div>
  )
}

export default Footer
