// import React,{Component,Fragment} from 'react';

// import TaskTwo from '../components/tasktwo/TaskTwo';
// import { userGet} from '../api/api';
// import {connect} from 'react-redux';
// import store from '../store'


// class Dashboard extends Component
// {
// 	constructor(props){
// 		super();
		
// 	}

// componentDidMount(){
// 	console.log('data in dashboard',this.props.userData)
// userGet()
// }
// componentDidUpdate(){
// 	console.log('did update in dashboard',this.props.userData)
// }
//  render(){      
         
//  return(<Fragment>    
	
// 	<TaskTwo user={this.props.userData} />
// 	{/* cart={this.props.cart} */}
       


// 	</Fragment>)        	
//   }
// }
// const mapStateToProps =(state)=>{
// 	console.log('main state',state,store.getState())
// 	return {userData:state.user
// 	}
// }
// export default connect(mapStateToProps,null)( Dashboard);   