import types from 'config/types';
import Mustache from 'parallel-dom/shared/Mustache/_Mustache';

import detach from 'parallel-dom/items/Triple/prototype/detach';
import find from 'parallel-dom/items/Triple/prototype/find';
import findAll from 'parallel-dom/items/Triple/prototype/findAll';
import firstNode from 'parallel-dom/items/Triple/prototype/firstNode';
import render from 'parallel-dom/items/Triple/prototype/render';
import setValue from 'parallel-dom/items/Triple/prototype/setValue';
import teardown from 'parallel-dom/items/Triple/prototype/teardown';
import toString from 'parallel-dom/items/Triple/prototype/toString';

var Triple = function ( options, docFrag ) {
	this.type = types.TRIPLE;

	this.initialising = true;
	Mustache.init( this, options );

	this.initialising = false;
};

Triple.prototype = {
	detach: detach,
	find: find,
	findAll: findAll,
	firstNode: firstNode,
	reassign: Mustache.reassign,
	render: render,
	resolve: Mustache.resolve,
	setValue: setValue,
	teardown: teardown,
	toString: toString,
	update: Mustache.update
};

export default Triple;
