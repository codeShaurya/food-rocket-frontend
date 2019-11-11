import Ember from 'ember';
import DS from 'ember-data';
import config from 'food-rocket/config/environment';

export default DS.JSONAPIAdapter.extend({
  auth: Ember.inject.service('auth'),
  host: `${config.APP.apiHost}/api/auth`,
  headers: {
    Authorization: `JWT ${window.token}`,
  },
});
