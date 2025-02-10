import { useState, useEffect } from "react";
import Firework from "./Firework";
import confetti from "canvas-confetti";

// eslint-disable-next-line react/prop-types
const Wish = ({ opened }) => {
  const [fireworks, setFireworks] = useState([]);
  const currentYear = new Date().getFullYear();
  const soniyaBirthday = new Date(`${currentYear}-02-19`);
  const currentDate = new Date();
  const timeDifference = soniyaBirthday - currentDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  useEffect(() => {
    if (opened) {
      // Trigger confetti burst
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      // Create fireworks
      const colors = ["#FF69B4", "#FFD700", "#FF6B6B", "#4CAF50", "#64B5F6"];
      const interval = setInterval(() => {
        setFireworks((prev) => {
          if (prev.length > 15) return prev.slice(1);
          return [
            ...prev,
            {
              id: Date.now(),
              color: colors[Math.floor(Math.random() * colors.length)],
              style: {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              },
            },
          ];
        });
      }, 300);

      return () => clearInterval(interval);
    }
  }, [opened]);

  return (
    <div className='relative w-full max-w-md mx-auto'>
      {fireworks.map((fw) => (
        <Firework key={fw.id} color={fw.color} style={fw.style} />
      ))}
      <div
        className={`relative transition-all duration-500 ${
          opened ? "scale-100" : "scale-90"
        }`}>
        {!opened ? (
          <div className='flex flex-col items-center'>
            <div
              className='w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-pink-500 to-purple-500 
                          rounded-2xl shadow-2xl animate-wiggle cursor-pointer
                          flex items-center justify-center border-8 border-pink-600
                          transform hover:scale-105 transition-transform duration-200'>
              <div className='absolute w-4 h-4 bg-yellow-400 rotate-45 -top-8' />
              <span className='text-white text-2xl sm:text-3xl font-bold text-center px-4'>
                Tap to Unwrap Your Surprise! 🎁
              </span>
            </div>
            <div className='w-56 sm:w-72 h-10 bg-gradient-to-r from-pink-600 to-purple-600 mt-2 rounded-xl shadow-lg' />
          </div>
        ) : (
          <div
            className='animate-popup bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500 
                        p-8 rounded-3xl shadow-2xl border-4 border-white/20 backdrop-blur-sm'>
            <div className='space-y-4'>
              <h2 className='text-white text-3xl sm:text-4xl font-bold text-center mb-4 text-nowrap'>
                🎉 Surprise! 🎉
              </h2>
              <p className='text-white text-xl sm:text-2xl font-bold text-center leading-relaxed'>
                Happy Advanced
                <br />
                {daysDifference} days Birthday
                <br />
                Soniya! 🎂
              </p>
              <div className='flex justify-center space-x-2 mt-4'>
                {["🎈", "🎊", "✨"].map((emoji, index) => (
                  <span
                    key={index}
                    className='text-2xl sm:text-3xl animate-bounce'
                    style={{ animationDelay: `${index * 200}ms` }}>
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wish;
