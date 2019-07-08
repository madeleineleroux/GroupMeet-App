import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Availability = new Mongo.Collection('availability');
export default Availability;

Meteor.methods({
    updateAvailability(sched) {
        Availability.update({}, sched, { upsert: true });
        return sched;
    },
    fetchAvailability() {
        return Availability.find({}).fetch()[0];
    }
});