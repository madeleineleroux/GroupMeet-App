import { Meteor } from 'meteor/meteor';
import '../api/availability';
import Availability from '/imports/api/availability';
import Users from '/imports/api/users';
import GroupSchedule from '/imports/api/group'
import Groups from '../api/groups';
import '../api/group'
import '../api/users';
import {booleanHours, hoursById, initState} from '../ui/reducers/WeekReducer';

Meteor.startup(() => {
    // If the Links collection is empty, add some data.
    if (Availability.find().count() === 0) {
        Availability.insert(initState);
    }

    if (GroupSchedule.find().count() === 0) {
        let moment = require('moment');
        moment.defaultFormat = "YYYYMMDD";
        let start = (moment().startOf('week').format());
        const allHours = booleanHours();
        const gsInitState = Object.assign({}, allHours, {_id: start});

        GroupSchedule.insert(gsInitState);

    }

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

