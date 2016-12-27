var React = require('react');
var ReactDOM = require('react-dom');

var Greeter = require('Greeter')

var firstName = 'Jens';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
