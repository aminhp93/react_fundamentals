var GreeterMessage = React.createClass({
	render: function(){
		var name = this.props.name;
		var message = this.props.message;

		return (
			<div>
				<h1>Some {name}!</h1>
				<p>{message}</p>
			</div>
		);
	}
})

var GreeterForm = React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();

		var name = this.refs.name.value;

		if (name.length > 0){
			this.refs.name.value = "";
			this.props.onNewName(name);

		}
	},
	render: function(){
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="name"/>
				<button>Set Name</button>
			</form>
		)
	}
})


var Greeter = React.createClass({
	getDefaultProps: function(){
		return {
			name: 'React',
			message: "Default message"

		}
	},
	getInitialState: function(){
		return {
			name: this.props.name
		}
	},
	handleNewName: function(name){
		// e.preventDefault();

		// var nameRef = this.refs.name;

		// var name = nameRef.value;

		// nameRef.value = "";

		// if (typeof name === "string" && name.length > 0){
			this.setState({
				name:name
			})
		// }
		
		// alert(name);
	},
	render: function(){ 
		var name = this.state.name;
		var message = this.props.message;

		return (
			<div>

				<GreeterMessage name={name} message={message}/>

				<GreeterForm onNewName={this.handleNewName}/>
			</div>
		);
	}
})

var firstname = 'Minh';

ReactDOM.render(
	<Greeter name={firstname}/>,
	document.getElementById('app')
)