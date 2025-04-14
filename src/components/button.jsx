const Button = ({title, onClick, isSelected, className = ''}) => {
    return(
        <button className={`button ${isSelected ? 'selected' : ''} ${className}`} onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;