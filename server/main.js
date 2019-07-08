import { Meteor } from 'meteor/meteor';
import './api/availability';
import Availability from '/server/api/availability';
import Users from '/server/api/users';
import './api/users';
import { initState } from '../imports/ui/reducers/WeekReducer';

Meteor.startup(() => {
    // If the Links collection is empty, add some data.
    if (Availability.find().count() === 0) {
        Availability.insert(initState);
    }

    if (Users.find().count() == 0) {
        Users.insert(
            {
                name: "Claire",
                tasks: []
            }
        );

        Users.insert(
            {
                name: "Ben",
                tasks: []
            }
        );


        Users.insert(
            {
                name: "Madie",
                tasks: []
            }
        );


        Users.insert(
            {
                name: "Hannah",
                tasks: []
            }
        );

        Users.insert(
            {
                name: "Katrin",
                tasks: []
            }
        );
    }
});