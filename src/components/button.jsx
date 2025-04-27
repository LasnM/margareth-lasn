import '../styles/button.scss';
import { Link } from 'react-router-dom';

const Button = ({title, to, onClick, isSelected, className = '', target=''}) => {
  if (!to) {
    return (
      <button
        onClick={onClick}
        className={`button ${isSelected ? 'selected' : ''} ${className}`}
      >
        {title}
      </button>
    );
  }

  if(to?.startsWith('#') || to?.startsWith('http')){
        return (
            <a
              href={to}
              target={target}
              onClick={onClick}
              className={`button ${isSelected ? 'selected' : ''} ${className}`}
            >
              {title}
            </a>
          );
    }

    return(
        <Link to={to} className={`button ${isSelected ? 'selected' : ''} ${className}`} onClick={onClick}>
            {title}
        </Link>
    );
};

export default Button;