import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actionCreator'
import {bindActionCreators} from 'redux'

class CreateTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            todotext: '',
             date: '',
             submit: false
        }
        this.onChangeTodoText = this.onChangeTodoText.bind(this);
        this.onChangeDate= this.onChangeDate.bind(this);
    }

    onChangeTodoText(e){
         if(/[A-Za-z]/.test(e.target.value)){
        this.setState({
            todotext: e.target.value
        })
         }
         else {
           this.setState({
             todotext: '',
             submit: true
           })
         }
    }
    onChangeDate(e){
      this.setState({
         date: e.target.value
      })
    }
   
render(){
        return (
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <input onChange={this.onChangeTodoText} value={this.state.todotext} type="text"  className="form-control" name="todotext" id="inputEmail3" placeholder="add todo here"/> {(this.state.submit) && <span><i className="fas fa-info-circle"></i>   Please Enter only proper tasks starting from only character values</span>}<br />
                      <br/>
                      <input onChange={this.onChangeDate} value={this.state.date} type="date" className="form-control" />
                      <button type="button" onClick={ () => this.setState({ todotext: '',date: '' }) } style={{marginTop: "25px", marginRight: "15px"}} className="btn btn-danger">Cancel</button>
                      <button type="button" onClick={() =>{ if(this.state.todotext){
                     this.props.addTodo(this.state.todotext,this.state.date); this.setState({ todotext: '',date: '' }) }}} style={{marginTop: "25px"}} className="btn btn-success">Add Todo</button>
                    </div>
                  </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}



export default connect(null, mapDispatchToProps)(CreateTodo)