import React from 'react';
// import PropTypes from 'prop-types';

function ContactFilter({ onSetFilter, filretValue }) {
  return (
    <>
      <label>
        <p>Filter</p>
        <input
          type="text"
          name="filter"
          onInput={onSetFilter}
          value={filretValue}
        />
      </label>
    </>
  );
}

// ContactFilter.propTypes = {};

export default ContactFilter;
