import React from 'react';
import Checkbox from './Checkbox';
class Form extends React.Component {
  constructor(){
    super();
    this.state={
      inputValue:'',
      textarea:'我是文本域'
    }
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('aaa');
    this.refs.form.reset();
  }
  handleChange(e){
    console.log(e.target.value);
    this.setState({inputValue:e.target.value})
  }
  handleTextarea(e){
    this.setState({textarea:e.target.value})
  }
    render() {
      console.log(this.props.children);
        return (
          <div>
            <form method='POST' onSubmit={this.handleSubmit.bind(this)} ref='form'>
              <input type='text' name='phoneNumber' value={this.state.inputValue} onChange={this.handleChange.bind(this)}/>
              <textarea value={this.state.textarea} onChange={this.handleTextarea.bind(this)}/>
              <Checkbox />
              <button type='submit'>提交</button>
              <button type='reset'>重置</button>
            </form>
          </div>
        )
    }
}

export default Form;
