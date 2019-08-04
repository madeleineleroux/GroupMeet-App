import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Groups = new Mongo.Collection('groups');
export default Groups;

Meteor.methods({
    updateGroups(name) {
        console.log('inside meteor action');
        Groups.update({_id: name}, { upsert: true });
        return name;
    },

    fetchGroups() {
        return Groups.find({}).fetch();
    },
});