import React from 'react';
import PropTypes from 'prop-types';

const Coin = ({ name, acronym, value, cap }) => (
  <div>
    {name}
    <ul>
      <li>
        Current value: ${String(value)
          .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
          .trim()}
      </li>
      <li>
        Market cap: ${String(cap)
          .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
          .trim()}
      </li>
    </ul>
  </div>
);

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Coin;
