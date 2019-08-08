import React, { Component } from 'react'
import { connect } from 'react-redux';

class Avatar extends Component {
    constructor(props) {
        super(props);
        this.getAvatar = this.getAvatar.bind(this);
    }

    getAvatar = () => {
        let url = "/avatars/";
        let ending;
        return "/avatars/Penguin.png";
        if (typeof this.props.type === 'undefined') {
            return "/avatars/Penguin.png";
        }

        switch(this.props.type) {
            case 'GIRAFFE':
                ending = "Giraffe.png";
                break;
            case 'PIG':
                ending = "Pig.png";
                break;
            case 'FOX':
                ending = "Fox.png";
                break;
            case 'PENGUIN':
                ending = "Penguin.png";
                break;
            case 'LIZARD':
                ending = "Lizard.png";
                break;
            default:
                ending = "BearFace.png";
                break;
        }
        url = url + ending;
        return url;
        };

        render() {
        return <img className="avatar" src={"/avatars/Penguin.png"} />
    }
}
const mapStateToProps = state => ({
    tasks: state.TaskReducer
});

export default connect(mapStateToProps)(Avatar)