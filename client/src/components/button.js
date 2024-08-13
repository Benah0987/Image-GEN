// /home/benah/developer/Image-GEN/client/src/components/button.js
import React from 'react';

function Button({ text, leftIcon, onClick }) {
  return (
    <button onClick={onClick}>
      {leftIcon} {text}
    </button>
  );
}

export default Button;
