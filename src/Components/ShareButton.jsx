import React from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import cp from 'clipboard-copy';
import shareBtn from '../images/shareIcon.svg';

function ShareButton({ msg, toCopy, testid }) {
  const { enqueueSnackbar } = useSnackbar();

  const copyToClipBoard = () => {
    cp(toCopy).then(() => { enqueueSnackbar(msg); });
  };

  return (
    <button
      type="button"
      src={ shareBtn }
      data-testid={ testid }
      onClick={ copyToClipBoard }
    >
      <img src={ shareBtn } alt="share button" />
    </button>
  );
}

ShareButton.propTypes = {
  msg: PropTypes.string.isRequired,
  toCopy: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default ShareButton;
