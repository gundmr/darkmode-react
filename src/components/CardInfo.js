import React from 'react';
import { useSpring, animated } from 'react-spring';


function CardInfo(props){

    const style = useSpring({opacity: 1, from: {opacity:0}});

    return(
        <animated.div className="rg-card-info" style={style}>
        <p className="rg-card-title">{props.title}</p>
        <p className="rg-card-sub-title">{props.subTitle}</p>
        <a className="rg-link" href={props.link} target="blank" rel="noopener noreferrer">View</a>
        </animated.div>
    )

}

export default CardInfo;