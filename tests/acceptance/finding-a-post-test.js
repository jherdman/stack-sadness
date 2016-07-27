import { test } from 'qunit';
import moduleForAcceptance from 'stack-sadness/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | finding a post');

test('visiting /finding-a-post', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
