import React from 'react';
import { PropTypes } from 'prop-types';
import Grow from '@material-ui/core/Grow';

function DisplayCardsContainer({ displaycards }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
      }}
    >
      {displaycards.map((item) => (
        <Grow
          in
          key={item.id}
        >
          {item.content}
        </Grow>
      ))}
    </div>
  );
}

DisplayCardsContainer.propTypes = {
  displaycards: PropTypes.arrayOf.isRequired,
};
export default DisplayCardsContainer;
