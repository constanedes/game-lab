/* eslint-disable @typescript-eslint/no-explicit-any */
import Carousel from 'react-bootstrap/Carousel';
import gameslist from '../../../../../helpers/gamesList';
import { Card, Button, CardGroup, Row, Col } from 'react-bootstrap';
import Game from './../Games/Game';
import './carousel.css';

function GamesCarousel() {
    return (
        <>
            <div className="cabecera">
                <Carousel className="col-4">
                    {gameslist.map((e: any | undefined, key: any | undefined) => {
                        return (
                            <Carousel.Item interval={1500} key={key}>
                                <img className="carousel-img" src={e.image} alt={e.name} />
                                <Carousel.Caption>
                                    <h3>Play Now!</h3>
                                    <p>{e.name}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
                <div className="banner-game-lab"></div>
            </div>
        </>
    );
}

export default GamesCarousel;
