import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";

// function getStyle = (availabilityAtTime) => {

// }

// function onClick = () => {
//     //This should change the state using toggleAvail, which I should input above and map
// }

const Day = ({times, key}) => {
    return (
        <ButtonGroup id="day" vertical>
            <Button variant="outline-primary">8</Button>
            <Button variant="outline-primary">9</Button>
            <Button variant="outline-primary">10</Button>
            <Button variant="outline-primary">11</Button>
            <Button variant="outline-primary">12</Button>
            <Button variant="outline-primary">13</Button>
            <Button variant="outline-primary">14</Button>
            <Button variant="outline-primary">15</Button>
            <Button variant="outline-primary">16</Button>
            <Button variant="outline-primary">17</Button>
            <Button variant="outline-primary">18</Button>
            <Button variant="outline-primary">19</Button>
            <Button variant="outline-primary">20</Button>
        </ButtonGroup>
    )
}

export default Day
