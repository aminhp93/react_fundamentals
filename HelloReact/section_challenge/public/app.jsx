var BoxMessage = React.createClass({
	render: function(){
		var name = this.props.name;	
		var message = this.props.message;

		return (
			<div>
				<h1>{name}</h1>
				<p>{message}</p>
			</div>
		)
	}
})

var BoxForm = React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();
		var name = this.refs.name.value;
		var message = this.refs.message.value;
		var updates = {}

		if (name.length > 0){
			this.refs.name.value = ""
			updates.name = name
		}
		if (message.length > 0){
			this.refs.message.value = ""
			updates.message = message
		}
		this.props.onNewInput(updates);
	},
	render: function(){
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="name" placeholder="name"/>
				<br/>
				<input type="text" ref="message" placeholder="message"/>
				<br/>
				<button>Submit</button>
			</form>
		)
	}
})


var Box = React.createClass({
	// getDefaultProps: function(){
	// 	return {
	// 		name: "Default Name",
	// 		message: "Default Message"
	// 	}
	// },
	getInitialState: function() {
		return {
			name: this.props.name,
			message: this.props.message

		}
	},
	handleNewInput: function(updates){
		this.setState(updates)
	},
	render: function(){
		var name = this.state.name;
		var message = this.state.message;
		return (
			<div>
				<BoxMessage name={name} message={message}/>
				<BoxForm onNewInput={this.handleNewInput}/>
			</div>
		)
	}
})

var first = "FIRST NAME"

ReactDOM.render(
	<Box name={first}/>,
	document.getElementById('app')

)