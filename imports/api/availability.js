import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import {booleanHours, hoursById, initState} from '../ui/reducers/WeekReducer';
import GroupSchedule from '/imports/api/group'

const Availability = new Mongo.Collection('availability');
let moment = require('moment/moment');
moment.defaultFormat = "YYYYMMDD";
export default Availability;

//refactor repetitive code
Meteor.methods({
    updateAvailability(sched) {
        Availability.update({user: Meteor.userId(), date: sched.date}, sched, { upsert: true });

        let group = Meteor.users.find({_id: Meteor.userId()}).fetch()[0];
        group = group.profile.group;
        const groupSched = GroupSchedule.find({group : group, date: sched.date}).fetch()[0];

        if (groupSched.submitted.indexOf(Meteor.userId()) === -1) {
            groupSched.submitted.push(Meteor.userId());
        }

        Object.keys(sched.hours.byId).map(function(key, index) {
            if (sched.hours.byId[key].availability && !groupSched[key].busyUsers.includes(Meteor.userId())) {
                groupSched[key].availability = false;
                groupSched[key].busyUsers.push(Meteor.userId());
            } else if (!sched.hours.byId[key].availability && groupSched[key].busyUsers.includes(Meteor.userId())) {
                let index = groupSched[key].busyUsers.indexOf(Meteor.userId());
                groupSched[key].busyUsers.splice(index, 1);

                if (groupSched[key].busyUsers.length === 0) {
                    groupSched[key].availability = true;
                }
            }
        });
        GroupSchedule.update({date: sched.date, group : group, _id: groupSched._id}, groupSched, { upsert: true });
        return sched;
    },
    fetchAvailability() {
        let start = (moment().startOf('week').format());

        if (Availability.find({user: Meteor.userId(), date:start}).count() === 0) {
            const userInitState = Object.assign({}, initState, {user: Meteor.userId(), date: start});
            Availability.insert(userInitState);
        }

        let result = Availability.find({user: Meteor.userId(), date:start}).fetch()[0];

        let nextWeek = moment().add(1, 'week').startOf('week').format();
        if (Availability.find({user: Meteor.userId(), date: nextWeek}).count() === 0) {
            const userSecondState = Object.assign({}, initState, {user: Meteor.userId(), date: nextWeek});
            Availability.insert(userSecondState);
        }

        return result;
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
            return currWeek;
        } else {
            return (Availability.find({user: Meteor.userId(), date: lastWeek.format()}).fetch()[0]);
        }
    }
});