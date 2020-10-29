import React from 'react';
import { Title, Subtitle, Image, Pane, Container, Inner } from './styles/jumbotron';


export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Inner direction={direction}>
            <p>{children}</p>
        </Inner>
    )
}
Jumbotron.Container = function JumbotronContainer({ children, restProps }) {
    return <Container {...restProps}> {children}</Container>;
}


Jumbotron.Pane = function JumbotronPane({ children, restProps }) {
    return <Pane {...restProps}> {children}</Pane>;
}


Jumbotron.Title = function JumbotronTitle({ children, restProps }) {
    return <Title {...restProps}> {children}</Title>;
}

Jumbotron.Subtitle = function JumbotronSubtitle({ children, restProps }) {
    return <Subtitle {...restProps}> {children}</Subtitle>;
}


Jumbotron.Image = function JumbotronImage({ children, restProps }) {
    return <Image {...restProps} />;
}