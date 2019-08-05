import React from 'react';
import TaskMember from "./TaskMember";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
        accessibility: false
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
