import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';

import LexiconIcon from 'lexicon-icon'; // jshint ignore:line

import templates from './LexiconBadge.soy';

/**
 * Implementation of the Lexicon Icon Piece
 *
 * @see  {@link http://liferay.github.io/lexicon/content/badges-and-labels/|Lexicon Definition}
 */
class LexiconBadge extends Component {
}

/**
 * State definition.
 * @ignore
 * @static
 * @type {!Object}
 */
LexiconBadge.STATE = {
	/**
	 * URI of the badge.
	 * @default undefined
	 * @instance
	 * @memberof LexiconBadge
	 * @type {string}
	 */
	href: {
		validator: core.isString
	},

	/**
	 * Label of the Badge
	 * @default undefined
	 * @instance
	 * @memberof LexiconBadge
	 * @type {string}
	 */
	label: {
		validator: core.isString
	},

	/**
	 * Level of the Sticker
	 * @default default
	 * @description Values are allowed: 'default', 'primary', 'success, 'info', 'warning' and 'danger'
	 * @instance
	 * @memberof LexiconSticker
	 * @type {string}
	 */
	level: {
		validator: core.isString,
		value: 'default'
	},

	/**
	 * Size of the Sticker
	 * @default undefined
	 * @description Values are allowed: 'sm' and 'lg'
	 * @instance
	 * @memberof LexiconSticker
	 * @type {string}
	 */
	size: {
		validator: core.isString
	},
};

// Register component
Soy.register(LexiconBadge, templates);

export default LexiconBadge;