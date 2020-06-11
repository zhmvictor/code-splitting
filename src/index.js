// function getComponent() {
// 	return import(/* webpackChunkName: 'lodash' */'lodash').then(({ default: _ }) => {
// 		var element = document.createElement('div');
// 		element.innerHTML = _.join(['Dell', 'Lee'], '-');
// 		return element;
// 	})
// }

// getComponent().then(element => {
// 	document.body.appendChild(element);
// });

import _ from 'lodash';

console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
);