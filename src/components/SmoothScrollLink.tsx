import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SmoothScrollLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  offset?: number;
  onClick?: () => void;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ 
  to, 
  children, 
  className, 
  offset = 80, 
  onClick 
}) => {
  const location = useLocation();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      // Only smooth scroll on the home page
      event.preventDefault();
      const targetElement = document.getElementById(to);
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link 
      to={location.pathname === '/' ? `#${to}` : `/#${to}`} 
      className={className} 
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default SmoothScrollLink;