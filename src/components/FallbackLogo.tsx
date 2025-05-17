
import React from 'react';

interface FallbackLogoProps {
  height?: string;
  width?: string;
  className?: string;
}

const FallbackLogo: React.FC<FallbackLogoProps> = ({ height = '400px', width = '100%', className = '' }) => {
  return (
    <div 
      style={{ 
        height, 
        width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #7E69AB 0%, #9b87f5 50%, #D6BCFA 100%)',
        borderRadius: '1rem'
      }} 
      className={className}
    >
      <div className="text-4xl font-bold text-white">NEEXT</div>
    </div>
  );
};

export default FallbackLogo;
