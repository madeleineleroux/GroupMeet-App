import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import {booleanHours, hoursById, initState} from '../ui/reducers/WeekReducer';

const Availability = new Mongo.Collection('availability');
export default Availability;

//refactor repetitive code
Meteor.methods({
    updateAvailability(sched) {
        let moment = require('moment');
        moment.defaultFormat = "YYYYMMDD";
        let start = (moment().startOf('week').format());
        Availability.update({user: Meteor.userId(), date: start}, sched, { upsert: true });
        return sched;
    },
    fetchAvailability() {
        let moment = require('moment');
        moment.defaultFormat = "YYYYMMDD";
        let start = (moment().startOf('week').format());
        if (Availability.find({user: Meteor.userId(), date:start}).count() === 0) {
            console.log(start);
            const userInitState = Object.assign({}, initState, {user: Meteor.userId(), date: start});
            Availability.insert(userInitState);
        }

        return Availability.find({user: Meteor.userId()}).fetch()[0];
    }
});