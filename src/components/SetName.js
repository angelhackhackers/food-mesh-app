import {Text,View,Image, List} from 'react-native'
import React from 'react'
import style from '../config/styles'
import {FontAwesome} from '@expo/vector-icons';
import { Input, Button,ButtonGroup} from 'react-native-elements';
import Store from '../stores/store'
import {observer} from 'mobx-react'

// const RapidAPI = require('rapidapi-connect');
// const rapid = new RapidAPI("default-application_5bcac448e4b09efa5fbca33f", "2cea858f-34cf-43b8-9fe6-b7f231ba0806");



const CreateEventFrame = observer (class CreateEventFrame extends React.Component {
	constructor(){
		super()
		this.state = {
			selectedVegitarian: 0,
			isTimePickerVisible: false,
	  };
	  this.updateIndex = this.updateIndex.bind(this)
	}

	showTimePicker = () => {this.setState({ isTimePickerVisible: true });};

	hideTimePicker = () => this.setState({ isTimePickerVisible: false });

	handleTimePicked = (date) => {
		console.log(date.getHours())
		Store.scheduleEvent.time.setHours(date.getHours())
		Store.scheduleEvent.time.setMinutes(date.getMinutes())
		this.hideTimePicker();
	};
	updateIndex (selectedIndex) {
		this.setState({selectedVegitarian:selectedIndex})
	}
	render(){
		const buttons = ['None', 'Vegan', 'Seafood']

		return (
			<View style ={style.createEventView}>
			{/* <Text style={style.bigFont}>7:00pm</Text>
			<Text style={style.smallFont}>at</Text>
			<Text style={style.bigFont}>The George Inn</Text> */}
			<Text style={{fontSize: 22, marginBottom: 64}}>Add Restaurant</Text>
			<Input
				placeholderTextColor='grey'
				containerStyle ={style.createEventContainer}
				inputContainerStyle={style.createEventTextUnderline}
				inputStyle = {style.createEventText}
				placeholder='Restaurant Name'
			/>
			<View style={{flex: 0, width: '100%', paddingLeft:20, paddingRight:20}}>
			<Button
				onPress = {
					()=>{return this.props.navigation.navigate('EventList')}
			}
				buttonStyle = {[style.createEventButton,{marginTop:0}]}
				titleStyle =  {style.createEventButtonTitle}
				style = {style.createEventButtonContainer}
				title={`${Store.scheduleEvent.shop.name}`}
			/>
			<ButtonGroup
			onPress={this.updateIndex}
			selectedIndex={this.state.selectedVegitarian}
			buttons={buttons}
			innerBorderStyle= {{width:0}}
			containerStyle = {{borderWidth:0, marginTop: 32, height: 48, marginLeft:-5, marginRight:-5}}
			buttonStyle = {[style.createEventButtonGroup,{marginHorizontal:5}]}
			textStyle = {{fontSize: 20, color: '#ffffff'}}
			selectedButtonStyle = {[style.createEventButtonGroup,
				{marginHorizontal:5,backgroundColor:'#f16f69'},

			]}
			//containerStyle={{height: 100}}
			/>
			<Button
				onPress = {()=>{return this.props.navigation.navigate('MainMap')}}
				buttonStyle = {[style.createEventButton,{backgroundColor:'black', marginTop: 40}]}
				titleStyle =  {{color:'white', fontSize: 20}}
				style = {style.createEventButtonContainer}
				// onPress = {()=>{}}   //Jack's code
				// buttonStyle = {style.loginButton}
				// titleStyle =  {style.loginButtonTitle}
				// style = {style.loginButtonContainer}
				title='Create'
			/>
			</View>
			</View>

		)
	}
})

// function mapStateToProps(){

// }



// function mapDispatchToProps(){

// }


// ()=>{rapid.call('GooglePlaces', 'getNearbyPlaces', {
			// 		'apiKey': 'AIzaSyAmZSOx8k5cAHtFl0YefRAyByQ14_t4WGA',
			// 		'radius': '100',
			// 		'coordinate': '51.49648578510567, -0.1297891139984109',
			// 		'type': ['restaurant']

			// 	}).on('success', (payload)=>{
			// 		 console.log(payload)
			// 	}).on('error', (payload)=>{
			// 		 /*YOUR CODE GOES HERE*/
			// 	});
			// }
const CreateEvent = CreateEventFrame
 // connect(mapDispatchToProps)(CreateEventFrame)
export default CreateEvent
