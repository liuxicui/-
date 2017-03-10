import React from 'react';



class Checkbox extends React.Component {
    constructor(){
      super();
      this.state={
        checkboxValue:['apple']
      }
    }
    handleChange(e){
      let ckvalue = this.state.checkboxValue;
      let nowcheck = e.target.value;
      let index = ckvalue.findIndex(element =>element === nowcheck)
      if(index === -1){
        ckvalue.push(nowcheck)
      }else{
        ckvalue.splice(index,1)
      }
      this.setState({checkboxValue:ckvalue})
    }
    render() {
      console.log(this.state.checkboxValue);
        return (
          <div >
            <input type='checkbox' value='apple' name='fruits' onChange={this.handleChange.bind(this)}/>苹果
            <input type='checkbox' value='pear' name='fruits'  onChange={this.handleChange.bind(this)}/>梨
            <input type='checkbox' value='banana' name='fruits' onChange={this.handleChange.bind(this)}/>香蕉

          < /div >
        )
    }
}

export default Checkbox;
