import React from 'react';

// This component renders a visually hidden input field designed to trap bots.
// It should be placed inside any form you want to protect.
export const AnubisHoneypot = () => {
  const honeypotStyle: React.CSSProperties = {
    position: 'absolute',
    left: '-5000px',
    opacity: '0',
    pointerEvents: 'none',
  };

  return (
    <div style={honeypotStyle} aria-hidden="true">
      <label htmlFor="anubis_honeypot">Don't fill this out if you're human:</label>
      <input type="text" id="anubis_honeypot" name="anubis_honeypot" tabIndex={-1} autoComplete="off" />
    </div>
  );
};