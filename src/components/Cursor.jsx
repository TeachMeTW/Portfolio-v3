import { useState, useEffect } from 'react';
import cursor from '../assets/cursor.png';

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor"
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '50px',
        height: '50px',
        background: `url(${cursor}) no-repeat center`,
        backgroundSize: 'contain',
        pointerEvents: 'none',
        zIndex: 9999,
        rotate: 45,
      }}
    />
  );
}

export default Cursor;
