import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr();
  description: DS.attr();
  thc: DS.attr();
  cbd: DS.attr();
  type: DS.attr();
  image_url: DS.attr();
});
