import React from 'react';
import PropTypes from 'prop-types';
import setTimeFormat from '../../utils/helpers';

import '../../styles/index.css';

export const Controls = ({
  time,
  start,
  stop,
  reset,
  wait,
}) => (
  <>
    <div className="main-section">

      {setTimeFormat(time)}

    </div>
    <section className="main">
      <div className="container">
        <button type="button" className="stopwatch-btn stopwatch-btn-gre" onClick={start}>
          Start
        </button>
        <button type="button" className="stopwatch-btn stopwatch-btn-red" onClick={stop}>
          Stop
        </button>
        <button type="button" className="stopwatch-btn stopwatch-btn-gre" onClick={reset}>
          Reset
        </button>
        <button type="button" className="stopwatch-btn stopwatch-btn-yel" onDoubleClick={wait}>
          Wait
        </button>
      </div>
    </section>
  </>
);

Controls.propTypes = {
  time: PropTypes.number.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  wait: PropTypes.func.isRequired,
};
