import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('inline-hbs', 'Integration | Component | inline hbs', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`hello`);
  assert.equal(this.$().text().trim(), 'hello');
});
