import React, { useEffect } from 'react';

/**
 * GoogleAdSense Component
 * Renders responsive Google AdSense ads at strategic locations
 * 
 * adSlot: Your AdSense slot ID
 * format: 'auto', 'horizontal', 'vertical', 'rectangle', 'leaderboard'
 * responsive: true for fully responsive ads
 */
const GoogleAdSense = ({ 
  adSlot = '1234567890', 
  format = 'auto', 
  responsive = true,
  className = ''
}) => {
  useEffect(() => {
    // Push ads configuration to Google AdSense
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('Error loading Google AdSense:', error);
    }
  }, []);

  return (
    <div className={`my-6 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          textAlign: 'center',
        }}
        data-ad-layout={responsive ? 'in-article' : ''}
        data-ad-format={format}
        data-ad-client="ca-pub-9269188142022946"
        data-ad-slot={adSlot}
      />
    </div>
  );
};

export default GoogleAdSense;
