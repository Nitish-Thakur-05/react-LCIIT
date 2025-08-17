
const Button = ({ buttonName, className1, className2, icon, link, target, ...props }) => {
  return (
    <button
      className={`${className1} ${className2} rounded-pill`}
      onClick={() => {
        if(link) {
          if(target) {
            window.open(link, target)
          } else {
            window.open(link, '_blank')
          }
        }
      }}
      {...props}
    >
      <span className="m-0 d-flex align-items-center text-decoration-none text-nowrap">
        {icon}
        <span className="ms-1">{buttonName}</span>
      </span>
    </button>
  );
};

export default Button;
