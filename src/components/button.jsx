const Button = ({title, onClick, isSelected, className = '', type='button'}) => {
    return(
        <button type={type} className={`button ${isSelected ? 'selected' : ''} ${className}`} onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;