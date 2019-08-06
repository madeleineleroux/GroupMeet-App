import { Meteor } from 'meteor/meteor';
import '../api/availability';
import Availability from '/imports/api/availability';
import Users from '/imports/api/users';
import GroupSchedule from '/imports/api/group'
import '../api/group'
import '../api/users';
import {booleanHours, hoursById, initState} from '../ui/reducers/WeekReducer';

Meteor.startup(() => {
    // If the Links collection is empty, add some data.
    // if (Availability.find().count() === 0) {
    //     Availability.insert(initState);
    // }
    // let moment = require('moment');
    // moment.defaultFormat = "YYYYMMDD";
    // let start = (moment().startOf('week').format());
    //
    // if (GroupSchedule.find().count() === 0) {
    //     const allHours = booleanHours();
    //     const gsInitState = Object.assign({}, allHours, {date: start});
    //
    //     GroupSchedule.insert(gsInitState);
    //     let nextStart = (moment().add(1,'weeks').startOf('week').format());
    //     const gsSecondWeek = Object.assign({}, allHours, {date: nextStart});
    //     GroupSchedule.insert(gsSecondWeek);
    //
    //
    // }

    if (Users.find().count() == 0) {
        Users.insert(
            {
                name: "Claire",
                avatar: "FOX",
                tasks: []
            }
        );

        Users.insert(
            {
                name: "Ben",
                avatar: "PENGUIN",
                tasks: []
            }
        );


        Users.insert(
            {
                name: "Madie",
                avatar: "GIRAFFE",
                tasks: []
            }
        );


        Users.insert(
            {
                name: "Hannah",
                avatar: "PIG",
                tasks: []
            }
        );

        Users.insert(

            {
                name: "Katrin",
                avatar: "LIZARD",
                tasks: []
            }
        );
    }
});

