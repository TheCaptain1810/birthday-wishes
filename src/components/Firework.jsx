// eslint-disable-next-line react/prop-types
const Firework = ({ color, style }) => {
  return (
    <div
      className='absolute w-16 h-16 rounded-full animate-firework pointer-events-none'
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        ...style,
      }}
    />
  );
};

export default Firework;
