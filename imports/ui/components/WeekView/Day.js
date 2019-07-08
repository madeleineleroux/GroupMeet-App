import React from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Day = ({ hours, hourByIds }) => {
    return (
        <ButtonGroup id="day" vertical>
            {hours.map(hour => (
                <Cell key={hour} id={hour} availability={hourByIds[hour].availability}
                      {...hour}/>
            ))}
        </ButtonGroup>
    )
}

const mapStateToProps = state => ({
    hourByIds: state.WeekReducer.hours.byId
})

export default connect(mapStateToProps)(Day);
