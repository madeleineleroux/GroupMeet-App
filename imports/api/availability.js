import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import Availability from '../collections'

Meteor.methods({
    updateAvailability(sched) {
        Availability.update({}, sched, { upsert: true });
        return sched;
    },
    fetchAvailability() {
        let val = Availability.find({}).fetch();
        return {};
    }
});