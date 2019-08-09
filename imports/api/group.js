import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import {booleanHours} from "../ui/reducers/WeekReducer";

const GroupSchedule = new Mongo.Collection('group');


let moment = require('moment/moment');
moment.defaultFormat = "YYYYMMDD";

Meteor.methods({
    fetchGroupSchedule() {
        let group = Meteor.users.findOne({_id: Meteor.userId()});
        if (typeof group !== 'undefined') {
            group = group.profile.group;
            let start = (moment().startOf('week').format());
            let secondWeek = (moment().add(1, 'weeks').startOf('week').format());


            if (GroupSchedule.find({date: start, group: group}).count() === 0) {
                const allHours = booleanHours();
                const gsInitState = Object.assign({}, allHours, {date: start, group: group, submitted: []});
                GroupSchedule.insert(gsInitState);
            }

            if (GroupSchedule.find({date: secondWeek, group: group}).count() === 0) {
                const allHours = booleanHours();
                const gsSecondState = Object.assign({}, allHours, {date: secondWeek, group: group, submitted: []});
                GroupSchedule.insert(gsSecondState);
            }

            return GroupSchedule.find({date: start, group: group}).fetch()[0];
        }
        },

    getPrevWeek(group, currWeek) {
        let currMoment = moment(currWeek, "YYYYMDD");
        let prevWeek = currMoment.subtract(7, 'days').startOf('week').format();

        if (GroupSchedule.find({date: prevWeek, group : group}).count() === 0) {
            const allHours = booleanHours();
            const newWeek = Object.assign({}, allHours, {date: prevWeek, group: group, submitted: []});
            GroupSchedule.insert(newWeek);
            return GroupSchedule.find({group: group, date: prevWeek}).fetch()[0];
        } else {
            return GroupSchedule.find({group: group, date: prevWeek}).fetch()[0];
        }
    },
    getNextWeek(group, currWeek) {
        let currMoment = moment(currWeek, "YYYYMDD");
        let nextWeek = currMoment.add(7, 'days').startOf('week').format();

        if (GroupSchedule.find({group: group, date: nextWeek}).count() === 0) {
            return GroupSchedule.find({group: group, date: currWeek}).fetch()[0];
        } else {
            return GroupSchedule.find({group: group, date: nextWeek}).fetch()[0];
        }
    }
    }
);



export default GroupSchedule;