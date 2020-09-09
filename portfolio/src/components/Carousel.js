import React from 'react';


import sun from '../assets/images/sun.jpeg'
import Goblin from '../assets/images/goblinSlayer.jpeg'
import Moon from '../assets/images/moon.jpeg'


import Card from '../components/Card'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Project 1 - Mysite github',
                    SubTitle: 'My project 1',
                    imgSrc: sun,
                    link: 'https://github.com/jaimevepe/MySite',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Project 2',
                    SubTitle: 'My project 2',
                    imgSrc: Goblin,
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Project 3',
                    SubTitle: 'My project 3',
                    imgSrc: Moon,
                    link: '',
                    selected: false
                }
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
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;