import React, { Component } from 'react'
import './Click.css'



export class ClassComponentCounter extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            time:10
            
        }
    }
    // componentDidMount(){
    //     this.interval=setInterval(this.tick,1000);
    // } 
    



    // componentDidUpdate(prevProps,prevState){
    //     //console.log(prevState.state.count);
    //     if(prevState.count !== this.state.count){
    //         console.log("Updating document");
    //         document.title =`Count ${this.state.count} times`
            
    //     }
        
    // }
    componentDidMount(){
        this.interval=setInterval(this.tick,1000);
    }
    tick=()=>{
        if(this.state.time!==0){
            this.setState({
                time:this.state.time-1
            })
        }
        
       
    }
    


  render() {
    return (
      <div>
        <div> <br/><br/><br/><p text-color='white'>Click the picture as many times as you can in {this.state.time} wacky seconds wacky seconds!</p></div>
         <img alt='hj' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6mEHex-GCgpQ60n_Ot_qMuAErauPR5_zTQ&usqp=CAU"
        onClick={()=>{
            if(this.state.time!==0){
                this.setState({count: this.state.count+1})
            }
            else{
                <p>Enough</p>
            }
        }
    }
         ></img>
         <h3>Score: {this.state.count}</h3>
        


         <button onClick={()=>window.location.reload(false)}>Reload</button>
         
       
      </div>
    )
  }
}

export default ClassComponentCounter