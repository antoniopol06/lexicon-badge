'use strict';

import LexiconBadge from '../src/LexiconBadge';

let badge;

describe('LexiconBadge', function() {
	afterEach(() => {
		if (badge) {
			badge.dispose();
		}
	});

	it('should generate the default badge defined by Lexicon', function() {
		badge = new LexiconBadge(
			{
				label: 'Default Badge'
			}
		);

		assert.strictEqual(badge.element.outerHTML, __html__['test/fixture/testDefaultLexiconBadge.html']);
	});

	it('should generate badge with link defined by Lexicon', function() {
		badge = new LexiconBadge(
			{
				label: 'Default Badge',
				level: 'warning',
				href: '#1',
				spritemap: '../node_modules/lexicon-ux/build/images/icons/icons.svg'
			}
		);

		assert.strictEqual(badge.element.outerHTML, __html__['test/fixture/testLexiconBadgeLink.html']);
	});

	it('should generate badge with warning level', function() {
		badge = new LexiconBadge(
			{
				label: 'Default Badge',
				level: 'warning'
			}
		);

		assert.strictEqual(badge.element.outerHTML, __html__['test/fixture/testLexiconBadgeLevel.html']);
	});

	it('should generate small badge', function() {
		badge = new LexiconBadge(
			{
				label: 'Default Badge',
				size: 'sm'
			}
		);

		assert.strictEqual(badge.element.outerHTML, __html__['test/fixture/testLexiconBadgeSize.html']);
	});

});
