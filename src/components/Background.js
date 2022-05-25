//Background.js
import React from "react";

const Background = ({ children }) => {
  return (
    <body className="bg-white dark:bg-backgroundBlack  transition-all">
      {children}
    </body>
  );
};

export default Background;
