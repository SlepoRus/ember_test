import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    changed(e) {
      const { value } = e.target;
      let sum = value / 4.165;
      this.set('calculateValue',sum.toFixed(3));
    }
  }
});
