import React from 'react';

const Link = ({ to, download, children, ...props }) => {
  return (
    <a href={to} download={download} className="custom-link" {...props}>
      {children}
    </a>
  );
};

export default Link;
