import '../styles/button.scss';
import { Link } from 'react-router-dom';

const Button = ({title, to, onClick, isSelected, className = ''}) => {
    return(
        <Link to={to} className={`button ${isSelected ? 'selected' : ''} ${className}`} onClick={onClick}>
            {title}
        </Link>
    );
};

export default Button;