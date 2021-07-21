import React from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import cp from 'clipboard-copy';
import shareBtn from '../images/shareIcon.svg';
import ShareBtn from '../styles/actionButton';

function ShareButton({ msg, toCopy, testid }) {
  const { enqueueSnackbar } = useSnackbar();

  const copyToClipBoard = () => {
    cp(toCopy).then(() => { enqueueSnackbar(msg); });
  };

  return (
    <ShareBtn
      type="button"
      src={ shareBtn }
      data-testid={ testid }
      onClick={ copyToClipBoard }
    >
      <img src={ shareBtn } alt="share button" />
    </ShareBtn>
  );
}

ShareButton.propTypes = {
  msg: PropTypes.string.isRequired,
  toCopy: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default ShareButton;
