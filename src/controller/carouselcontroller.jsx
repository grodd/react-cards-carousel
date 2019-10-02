import React from 'react';
import {
  Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Col,
} from 'reactstrap';
import CarouselContainer from '../container/carouselcontainer';

const Fullcards = [
  {
    id: 1,
    content: (
      <Col xs="2">
        <Card>
          <CardBody>
            <CardTitle>Manish</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
            <Button color="primary">Button</Button>
          </CardBody>
        </Card>
      </Col>
    ),
  },
  {
    id: 2,
    content: (
      <Col xs="2">
        <Card>
          <CardBody>
            <CardTitle>Jacob</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
            <Button color="primary">Button</Button>
          </CardBody>
        </Card>
      </Col>
    ),
  },
  {
    id: 3,
    content: (
      <Col xs="2">
        <Card>
          <CardBody>
            <CardTitle>Jake</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
            <Button color="primary">Button</Button>
          </CardBody>
        </Card>
      </Col>
    ),
  },
  {
    id: 4,
    content: (
      <Col xs="2">
        <Card>
          <CardBody>
            <CardTitle>Jack</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
            <Button color="primary">Button</Button>
          </CardBody>
        </Card>
      </Col>
    ),
  },
  {
    id: 5,
    content: (
      <Col xs="2">
        <Card>
          <CardBody>
            <CardTitle>Jill</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
            <Button color="primary">Button</Button>
          </CardBody>
        </Card>
      </Col>
    ),
  },
  {
    id: 6,
    content: (
      <Col xs="2">
        <Card>
          <CardBody>
            <CardTitle>Julie</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
            <Button color="primary">Button</Button>
          </CardBody>
        </Card>
      </Col>
    ),
  },
];

const styles = {
  borderRadius: '50%',
  height: '50%',
};

class CarouselController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
      endIndex: 3,
      cards: Fullcards,
      disabledRight: false,
      disabledLeft: true,
    };
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPrevious = this.onClickPrevious.bind(this);
  }

  onClickPrevious() {
    const { endIndex, startIndex } = this.state;
    if (startIndex > 1) {
      this.setState({
        startIndex: startIndex - 1,
        endIndex: endIndex - 1,
        disabledLeft: false,
        disabledRight: false,
      });
    } else if (startIndex > 0) {
      this.setState({
        startIndex: startIndex - 1,
        endIndex: endIndex - 1,
        disabledRight: false,
        disabledLeft: true,
      });
    }
  }

  onClickNext() {
    const { endIndex, startIndex, cards } = this.state;
    if (endIndex < cards.length - 1) {
      this.setState({
        startIndex: startIndex + 1,
        endIndex: endIndex + 1,
        disabledRight: false,
        disabledLeft: false,
      });
    } else if ((endIndex < cards.length)) {
      this.setState({
        startIndex: startIndex + 1,
        endIndex: endIndex + 1,
        disabledLeft: false,
        disabledRight: true,
      });
    }
  }

  render() {
    const {
      cards, endIndex, startIndex, disabledLeft, disabledRight,
    } = this.state;
    return (
      <CarouselContainer
        styles={styles}
        cards={cards}
        endIndex={endIndex}
        startIndex={startIndex}
        onClickNext={this.onClickNext}
        onClickPrevious={this.onClickPrevious}
        disabledLeft={disabledLeft}
        disabledRight={disabledRight}
      />
    );
  }
}


export default CarouselController;
