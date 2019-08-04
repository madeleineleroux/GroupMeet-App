import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import {booleanHours, hoursById, initState} from '../ui/reducers/WeekReducer';

const Availability = new Mongo.Collection('availability');
let moment = require('moment/moment');
moment.defaultFormat = "YYYYMMDD";
export default Availability;

//refactor repetitive code
Meteor.methods({
    updateAvailability(sched) {
        Availability.update({user: Meteor.userId(), date: sched.date}, sched, { upsert: true });
        return sched;
    },
    fetchAvailability() {
        let start = (moment().startOf('week').format());

        if (Availability.find({user: Meteor.userId(), date:start}).count() === 0) {
            const userInitState = Object.assign({}, initState, {user: Meteor.userId(), date: start});
            Availability.insert(userInitState);
        }

        let nextWeek = moment().add(1, 'week').startOf('week').format();
        if (Availability.find({user: Meteor.userId(), date: nextWeek}).count() === 0) {
            const userSecondState = Object.assign({}, initState, {user: Meteor.userId(), date: nextWeek});
            Availability.insert(userSecondState);
        }

        return Availability.find({user: Meteor.userId()}).fetch()[0];
    },
    nextWeekAvailability(currWeek) {
        let nextWeek = moment(currWeek.date, "YYYYMDD").add(1, 'week').startOf('week').format();
        if (Availability.find({user: Meteor.userId(), date: nextWeek}).count() === 0) {
            return currWeek;
        } else {
            return (Availability.find({user: Meteor.userId(), date: nextWeek}).fetch()[0]);
        }

    },
    lastWeekAvailability(currWeek) {
        let start = (moment().startOf('week').format());
        let lastWeek = moment(currWeek.date, "YYYYMDD").subtract(1, 'week').startOf('week');
        if (lastWeek.isBefore(start)) {
            console.log(currWeek);
            return currWeek;
        } else {
            return (Availability.find({user: Meteor.userId(), date: lastWeek.format()}).fetch()[0]);
        }
    }
});