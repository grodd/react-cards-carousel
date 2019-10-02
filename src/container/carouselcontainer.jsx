import React from 'react';
import { Button, Row } from 'reactstrap';
import { PropTypes } from 'prop-types';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import DisplayCardsContainer from './displaycardscontainer';

function CarouselContainer({
  styles, cards, onClickNext, onClickPrevious, endIndex,
  startIndex, disabledLeft, disabledRight,
}) {
  const displayCards = cards.slice(startIndex, endIndex);
  return (
    <div>
      <Row style={{ width: '100%' }}>
        <div style={{
          height: '100px', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '5px',
        }}
        >
          <Button color="primary" style={styles} onClick={onClickPrevious} disabled={disabledLeft}><MdChevronLeft size="1.75em" /></Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button color="primary" style={styles} onClick={onClickNext} disabled={disabledRight}><MdChevronRight size="1.75em" /></Button>
        </div>
      </Row>
      <Row style={{ width: '100%' }}>
        <DisplayCardsContainer displaycards={displayCards} />
      </Row>

    </div>
  );
}

CarouselContainer.propTypes = {
  styles: PropTypes.shape.isRequired,
  cards: PropTypes.arrayOf.isRequired,
  onClickNext: PropTypes.func.isRequired,
  onClickPrevious: PropTypes.func.isRequired,
  endIndex: PropTypes.number.isRequired,
  startIndex: PropTypes.number.isRequired,
  disabledLeft: PropTypes.bool.isRequired,
  disabledRight: PropTypes.bool.isRequired,
};

export default CarouselContainer;
