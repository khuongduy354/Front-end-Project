// import PropTypes from 'prop-types';
export default function PopUp(props) {
  return props.trigger ? (
    <div className="PopUp">
      <div className="popup-inner">{props.children}</div>
    </div>
  ) : null;
}

PopUp.propTypes;
