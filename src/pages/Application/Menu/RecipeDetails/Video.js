import React from 'react';
import PropTypes from 'prop-types';

const allow = 'accelerometer; autoplay;'
+ 'clipboard-write; encrypted-media; gyroscope; picture-in-picture';
function Video({ urlVideo }) {
  function renderVideo() {
    const regex = /watch\?v=([\s\S]+)/;
    const youtubeId = urlVideo.match(regex)[1];
    return (
      <iframe
        width="100%"
        height="315"
        src={ `https://www.youtube.com/embed/${youtubeId}` }
        title="YouTube video player"
        frameBorder="0"
        allow={ allow }
        allowFullScreen
      />);
  }
  function renderNoVideo() {
    return (<h3>No video available</h3>);
  }

  return (
    <section data-testid="video">
      <h2>Video</h2>
      {urlVideo === null ? renderNoVideo() : renderVideo()}
    </section>
  );
}

Video.propTypes = { urlVideo: PropTypes.string };
Video.defaultProps = { urlVideo: null };

export default Video;
