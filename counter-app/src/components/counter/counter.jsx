import React,{ Component } from 'react';
import './counter.css'
import PropTypes from 'prop-types';



//Counter class is responsible to manage all the CounterButtons
class Counter extends Component{
  constructor()
{
  super();                      
  this.state={              
      counter:0               
 }
 this.increment=this.increment.bind(this);
 this.decrement=this.decrement.bind(this);
 this.reset=this.reset.bind(this);
} 

  render(){
  return (
    <div className="counter">  
    <div className="head">Counter</div>
     <CounterButton by = {1} incrementMethod={this.increment} decrementMethod={this.decrement} /> 
     <CounterButton by = {5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
     <CounterButton by = {10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
     <CounterButton by = {20} incrementMethod={this.increment} decrementMethod={this.decrement}/>
     
     <span className="count">{this.state.counter}</span>
     <div><button className="reset" onClick={this.reset}>Reset</button></div>
    </div>
  );
}

reset()
{
  
   this.setState(
     (prevState) => 
     {
     return {counter: 0}
   });
} 


increment(by)
{
  //use `to use the value of the props
  // console.log(`increment from child ${by}`)
   this.setState(
     (prevState) => 
     {
     return {counter: prevState.counter + by}
   });
} 
decrement(by)
{
  
   this.setState(
     (prevState) => 
     {
     return {counter: prevState.counter - by}
   });
}

}

//CounterButton Component
class CounterButton extends Component{
constructor()
{
  super();                      //ERROR
  this.state={                 //Define the initial state in constructor
      counter:0               // state => counter=0
 } 
//  this.increment=this.increment.bind(this);
//  this.decrement=this.decrement.bind(this);
}
    // render =() =>
    render()
    {
      // let style =({fontSize: "40px" , padding: "15px 20px"})
      return(
        <div className="CounterButton">
           <button onClick={()=> this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
           <button onClick={()=> this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
           {/* <span className="count"
          //  style = {style}          // used with the let statement as inline designing
             >{this.state.counter}</span> */}

        </div>
      );
    }
  
//     increment()
//  {
//     // console.log(`increment fro parent -$by`);
//     // this.state.counter++;  
//     // Do not update the value of components directly(Bad Practice)
//     this.setState(
//       (prevState)=> {
//         return {
//           counter: prevState.counter + this.props.by
//       }
      
//       // ,secondCounter: this.state.secondCounter +1
//     });
//     this.props.incrementMethod(this.props.by);
//  } 
//     decrement()
//  {
//     this.setState(
//       (prevState)=> {
//         return {
//           counter: prevState.counter - this.props.by
//       }
      
//     });
//     this.props.decrementMethod(this.props.by);
//  } 
     
}
//Default props of by property for the counter
CounterButton.defaultProps = {
by: 1
}

CounterButton.propTypes = {
by: PropTypes.number
}

   
export default Counter
  