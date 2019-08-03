import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import {booleanHours} from "../ui/reducers/WeekReducer";
const GroupSchedule = new Mongo.Collection('group');


let moment = require('moment/moment');
moment.defaultFormat = "YYYYMMDD";

Meteor.methods({
    fetchGroupSchedule() {
        let start = (moment().startOf('week').format());
        let secondWeek = (moment().add(1, 'weeks').startOf('week').format())

        if (GroupSchedule.find({_id: start}).count() === 0) {
            const allHours = booleanHours();
            const gsInitState = Object.assign({}, allHours, {_id: start});
            GroupSchedule.insert(gsInitState);
        }

        if (GroupSchedule.find({_id: secondWeek}).count() === 0) {
            const allHours = booleanHours();
            const gsSecondState = Object.assign({}, allHours, {_id: secondWeek});
            GroupSchedule.insert(gsSecondState);
        }

        return GroupSchedule.find({_id: start}).fetch()[0];
        },

    getPrevWeek(currWeek) {
        let currMoment = moment(currWeek, "YYYYMDD");
        let prevWeek = currMoment.subtract(7, 'days').startOf('week').format();

        if (GroupSchedule.find({_id: prevWeek}).count() === 0) {
            const allHours = booleanHours();
            const newWeek = Object.assign({}, allHours, {_id: prevWeek});
            GroupSchedule.insert(newWeek);
            return GroupSchedule.find({_id: prevWeek}).fetch()[0];
        } else {
            return GroupSchedule.find({_id: prevWeek}).fetch()[0];
        }
    },
    getNextWeek(currWeek) {
        let currMoment = moment(currWeek, "YYYYMDD");
        let nextWeek = currMoment.add(7, 'days').startOf('week').format();

        if (GroupSchedule.find({_id: nextWeek}).count() === 0) {
            console.log("This is the most recent week");
            return GroupSchedule.find({_id: currWeek}).fetch()[0];
        } else {
            return GroupSchedule.find({_id: nextWeek}).fetch()[0];
        }
    }
    }
);



export default GroupSchedule;