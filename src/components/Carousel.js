import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


// CARD Component
import Card from '../components/Card';

// IMAGES
import OVW from '../assets/OVW.jpg';
import movie from '../assets/movie.jpg';
import car from '../assets/car.jpg';


class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items:[
                {
                    id: 0,
                    title: 'Fuze',
                    subTitle: 'Team constructor application for Overwatch',
                    imgSrc: OVW,
                    link: 'https://fuzeteam.herokuapp.com/signin',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Space & Harmony',
                    subTitle: 'Consultaiton Website built with SASS',
                    imgSrc: movie,
                    link: 'https://space-and-harmony.netlify.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'EBetz',
                    subTitle: 'Stream and bet on esports',
                    imgSrc: car,
                    link: 'https://ebetz.herokuapp.com/',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }



    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    

    render () {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;