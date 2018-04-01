import React, {Component} from 'react';
import {Buttonm Viewm Dimensions} from 'react-native';


export default class CustomBUtton extends Component{

	constructor(props)
	{
		super(props);
		this.buttonPressed = this.CustomBUtton.bind(this);
	}

	state={

	}

	buttonPressed(){
		this.setState({press:true});
	}


	render(){
		return {
			<view>
				<Button style={{background:this.props.color}} onPress={
					(e)=>{

					}
				}
				/>

			</view>
}