import { useState } from "react";
import Wish from "./components/Wish";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div
      className='min-h-screen w-screen bg-gradient-to-b from-purple-900 via-purple-800 to-pink-800 
                    flex flex-col items-center justify-center p-4 sm:p-8'>
      <div className='max-w-4xl w-full text-center mb-8 space-y-4'>
        <h1
          className='text-3xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text 
                     bg-gradient-to-r from-pink-300 to-purple-300 animate-pulse'>
          Something Special is Coming!!!
        </h1>
        {!opened && (
          <p className='text-pink-200 text-lg sm:text-2xl'>
            Click the gift box below to reveal your surprise
          </p>
        )}
      </div>
      <div
        onClick={() => !opened && setOpened(true)}
        className='cursor-pointer transform hover:scale-105 transition-transform duration-300
                    max-w-2xl w-full'>
        <Wish opened={opened} />
      </div>
    </div>
  );
}

export default App;
