import { Meteor } from 'meteor/meteor';
import '../imports/api/availability';
import Availability from '/imports/api/availability';
import Links from '/imports/api/links';
import { initState } from '../imports/ui/reducers/WeekReducer';

function insertLink(title, url) {
    Links.insert({ title, url, createdAt: new Date() });
}

Meteor.startup(() => {
    // If the Links collection is empty, add some data.
    if (Availability.find().count() === 0) {
        Availability.insert(initState);
    }
});