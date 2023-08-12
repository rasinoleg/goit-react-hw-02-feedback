import React from 'react';
import PropTypes from 'prop-types';
import css from '../FeedbakOptions/Feedbak.Options.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionKeys = options ? Object.keys(options) : [];

  return (
    <div className={css.feedbackOptionsOne}>
      {optionKeys.map(option => (
       <button
          className={css.button}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;