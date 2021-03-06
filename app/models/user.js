import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  accountType: DS.attr('string'),

  profile: DS.belongsTo(),
});
