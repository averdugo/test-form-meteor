import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import 'bulma/css/bulma.css'
import { Tracker } from 'meteor/tracker'
import { Doctors } from '../imports/api/doctors';

Meteor.startup(() => {
  Tracker.autorun(function (){
    const mongoDoctors = Doctors.find().fetch()
    console.log(mongoDoctors);
    render(<App mongoDoctors={mongoDoctors} />, document.getElementById('react-target'));
	})
 
});
