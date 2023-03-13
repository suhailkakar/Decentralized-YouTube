import React from "react";

interface BackgroundProps {
  children: React.ReactNode;
  className?: string;
}
const Background: React.FC<BackgroundProps> = ({ children, className }) => {
  return (
    <body
      className={
        "bg-background-light dark:bg-background-dark  transition-all" +
        " " +
        className
      }
    >
      {children}
    </body>
  );
};

export default Background;
