import runloop from 'global/runloop';
import css from 'global/css';

import bind from 'parallel-dom/items/Element/prototype/bind';
import bubble from 'parallel-dom/items/Element/prototype/bubble';
import bubble from 'parallel-dom/items/Element/prototype/bubble';
import detach from 'parallel-dom/items/Element/prototype/detach';
import find from 'parallel-dom/items/Element/prototype/find';
import findAll from 'parallel-dom/items/Element/prototype/findAll';
import findAllComponents from 'parallel-dom/items/Element/prototype/findAllComponents';
import findComponent from 'parallel-dom/items/Element/prototype/findComponent';
import findNextNode from 'parallel-dom/items/Element/prototype/findNextNode';
import firstNode from 'parallel-dom/items/Element/prototype/firstNode';
import init from 'parallel-dom/items/Element/prototype/init';
import reassign from 'parallel-dom/items/Element/prototype/reassign';
import render from 'parallel-dom/items/Element/prototype/render';
import teardown from 'parallel-dom/items/Element/prototype/teardown';
import toString from 'parallel-dom/items/Element/prototype/toString';

var Element = function ( options ) {
	this.init( options );
};

Element.prototype = {
	bind: bind,
	bubble: bubble,
	detach: detach,
	find: find,
	findAll: findAll,
	findAllComponents: findAllComponents,
	findComponent: findComponent,
	findNextNode: findNextNode,
	firstNode: firstNode,
	init: init,
	reassign: reassign,
	render: render,
	teardown: teardown,
	toString: toString
};

export default Element;
