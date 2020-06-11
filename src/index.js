// function getComponent() {
// 	return import(/* webpackChunkName: 'lodash' */'lodash').then(({ default: _ }) => {
// 		const element = document.createElement('div');
// 		element.innerHTML = _.join(['Hello', 'lodash'], '-');
// 		return element;
// 	})
// }

// getComponent().then(element => {
// 	document.body.appendChild(element);
// });

// import test from './test.js';
// console.log(test.name);

import _ from 'lodash';
import jquery from 'jquery';

console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
);