import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import '../imports/api/doctors.js';
function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.

});
