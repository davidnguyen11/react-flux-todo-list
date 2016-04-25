import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

main();

function main() {
	var container = document.getElementById('container');
	ReactDOM.render(<App />, container);
}