/*var React=require('react');
var ReactDOM=require('react-dom');*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
// ReactDOM.render(React.createElement('h1', false, 'Hello from react!'), 
//       document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

if(module.hot){
	module.hot.accept('./App',()=>{
		const NextApp=require('./App').default;
		ReactDOM.render(
			<App />,
			document.getElementById('root')
			);
	});
}