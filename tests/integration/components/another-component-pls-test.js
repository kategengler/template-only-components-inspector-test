import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('another-component-pls', 'Integration | Component | another component pls', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{another-component-pls}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#another-component-pls}}
      template block text
    {{/another-component-pls}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
