import React from "react";
import '../styles/index.css';

const ChainConnector: React.FC = () => {
  return (
    <svg className="absolute w-full h-full pointer-events-none">
      {/* Function Card input to 1 */}
      <circle cx="345" cy="310" r="5.5" fill="#FFFFFF" stroke="#DBDBDB" strokeWidth="2" />
      <circle cx="405" cy="310" r="5.5" fill="#FFFFFF" stroke="#DBDBDB" strokeWidth="2" />

      <circle cx="345" cy="310" r="1.5" fill="#4A90E2" stroke="#4A90E2" strokeWidth="2" />
      <circle cx="405" cy="310" r="1.5" fill="#4A90E2" stroke="#4A90E2" strokeWidth="2" />
      
      <line x1="345" y1="310" x2="405" y2="310" stroke="#4A90E2" strokeWidth="6" strokeOpacity="0.5" />

      {/* Function Card 1 to 2 */}
      <circle cx="615" cy="310" r="5.5" fill="#FFFFFF" stroke="#DBDBDB" strokeWidth="2" />
      <circle cx="725" cy="310" r="5.5" fill="#FFFFFF" stroke="#DBDBDB" strokeWidth="2" />

      <circle cx="615" cy="310" r="1.5" fill="#4A90E2" stroke="#4A90E2" strokeWidth="2" />
      <circle cx="725" cy="310" r="1.5" fill="#4A90E2" stroke="#4A90E2" strokeWidth="2" />
      
      <path 
        d="M 615 310 Q 665 355 725 310" 
        stroke="#4A90E2" 
        strokeWidth="6" 
        strokeOpacity="0.5" 
        fill="transparent" 
      />

      {/* Function Card 2 to 4 */}
      <circle cx="935" cy="310" r="5.5" fill="#FFFFFF" stroke="#DBDBDB" strokeWidth="2" />
      <circle cx="575" cy="625" r="5.5" fill="#FFFFFF" stroke="#DBDBDB" strokeWidth="2" />

      <circle cx="935" cy="310" r="1.5" fill="#4A90E2" stroke="#4A90E2" strokeWidth="2" />
      <circle cx="575" cy="625" r="1.5" fill="#4A90E2" stroke="#4A90E2" strokeWidth="2" />

      <path
        d="M 572 625 C 690 470, 800 560, 935 310"
        stroke="#4A90E2"
        strokeWidth="6"
        strokeOpacity="0.5"
        fill="transparent"
      />

      {/* Function Card 4 to 5 */}
      <circle cx="785" cy="625" r="5.5" fill="#FFFFFF" stroke="#DBDBDB" strokeWidth="2" />
      <circle cx="880" cy="625" r="5.5" fill="#FFFFFF" stroke="#DBDBDB" strokeWidth="2" />

      <circle cx="785" cy="625" r="1.5" fill="#4A90E2" stroke="#4A90E2" strokeWidth="2" />
      <circle cx="880" cy="625" r="1.5" fill="#4A90E2" stroke="#4A90E2" strokeWidth="2" />
      
      <path 
        d="M 785 625 Q 832.5 675 880 625" 
        stroke="#4A90E2" 
        strokeWidth="6" 
        strokeOpacity="0.5" 
        fill="transparent" 
      />

      {/* Function Card 5 to 3 */}
      
      <circle cx="1085" cy="625" r="5.5" fill="#FFFFFF" stroke="#DBDBDB" strokeWidth="2" />
      <circle cx="1050" cy="310" r="5.5" fill="#FFFFFF" stroke="#DBDBDB" strokeWidth="2" />

      <circle cx="1085" cy="625" r="1.5" fill="#4A90E2" stroke="#4A90E2" strokeWidth="2" />
      <circle cx="1050" cy="310" r="1.5" fill="#4A90E2" stroke="#4A90E2" strokeWidth="2" />

      <path
        d="M 1085 625 Q 1180 450 1050 310"
        stroke="#4A90E2"
        strokeWidth="6"
        strokeOpacity="0.5"
        fill="transparent"
      />

      {/* Function Card 3 to output */}
      <circle cx="1258" cy="310" r="5.5" fill="#FFFFFF" stroke="#DBDBDB" strokeWidth="2" />
      <circle cx="1305" cy="310" r="5.5" fill="#FFFFFF" stroke="#DBDBDB" strokeWidth="2" />

      <circle cx="1258" cy="310" r="1.5" fill="#4A90E2" stroke="#4A90E2" strokeWidth="2" />
      <circle cx="1305" cy="310" r="1.5" fill="#4A90E2" stroke="#4A90E2" strokeWidth="2" />
      
      <line x1="1258" y1="310" x2="1305" y2="310" stroke="#4A90E2" strokeWidth="6" strokeOpacity="0.5" />

    </svg>
    
  );
};

export default ChainConnector;
