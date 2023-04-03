import PropTypes from 'prop-types';
const Check = ({ checked }) => {
  const styles = {
    width: '30px',
    height: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: checked ? 'var(--gradient)' : 'white',
    borderRadius: '50%',
    border: 'thin solid var(--clr-light-gray-blue)',
  };
  if (checked) {
    delete styles.border;
  }
  return (
    <div style={styles}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="9"
        viewBox="0 0 11 9"
      >
        <path
          fill="none"
          stroke="#FFF"
          strokeWidth="2"
          d="M1 4.304L3.696 7l6-6"
        />
      </svg>
    </div>
  );
};

Check.propTypes = {
  checked: PropTypes.bool,
};
Check.defaultProps = {
  checked: false,
};
export default Check;
