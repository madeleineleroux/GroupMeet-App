
import React from 'react';
import { connect } from 'react-redux';
import TaskMember from "./TaskMember";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//this is a design decision to use card deck. Alternates: CardColumns, CardGroup
// function LeftArrow(props) {
//     const { onClick } = props;
//     return (
//         <div className="triangle-left triangle" onClick={onClick}></div>
//     );
// }
//
// function RightArrow(props) {
//     const { onClick } = props;
//     return (
//         <div className="triangle-right triangle" onClick={onClick}></div>
//     );
// }
const TaskGroup = ({ groupMembers }) => {
    let settings = {
        className:"TaskGroup",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        slide: 'TaskMember',
        centerPadding: "60px",
        // prevArrow: <LeftArrow/>,
        // nextArrow: <RightArrow/>
    };
    return (
        <Slider {...settings}>
            {Object.keys(groupMembers).map(id => (
                <TaskMember key={id} name={groupMembers[id].name} tasks={groupMembers[id].tasks} idKey={id} {...id}/>
            ))}
        </Slider>
    )
};

export default TaskGroup

// const mapStateToProps = state => ({
//     groupMembers: state.TaskReducer
// });
//
// export default connect(mapStateToProps)(TaskGroup);
