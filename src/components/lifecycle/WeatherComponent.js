import React from 'react';
class WeatherComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: "Sunny",
            pictures:[]
        };
    }
  
    componentDidMount(){
        console.log("inside componentDidMount method");
        //REST Call   axios.get axios.put,axios.post,axios.delete
        fetch('https://randomuser.me/api/?results:100')
        .then (results=> {
            return results.json();
        }).then (data =>{
            var pictures=data.results.map(pic => {
                return(
                    <div key={Math.random()}>
                      <img src={pic.picture.medium}/>
                    </div>
                )
            })
            this.setState({pictures:pictures});
            console.log("state",this.state.pictures) ;  
        })        
    }    
    changeName() {
        this.setState({weather:"Rainy"})
    }
    render() {
        console.log("inside render method");
        return (
            <div>            
                <h1>Today Weather is : {this.state.weather}</h1>
                <button onClick={(event)=>this.changeName(event)}>
                    Change weather to Rainy
                </button>                
                <span>
                    {this.state.pictures}
                </span>
            </div>
        );
    }
}
export default WeatherComponent;


/*
ES 6 : Promise
Sync call and Async call

Promise allows you to make async calls. asyc and await

function LRT(){
    try{
      ....
      ....// 3 mts
    }catch()
}
function SRT(){
    console.log("Welcome ")
}
LRT()
SRT()

function invoke(){
return new Promise(resolve,reject){
    ajax call
    resolve(data)
    else
    reject("error")
}
}

invoke()
.then(response=>Console.log(response)
.error(e)=>console.log(e)
)
STR()

async/await internally uses promise

mobx  - flow -generators   function* invoke(){ yeild}

promise ES6

fetch(url) 
 .then ((response)=>console.log(response))
 .error(e =>console.log(e))


 function invoke(){
     return new Promise(resolve,reject)
     ajax
     ....c
     call other functions
     resolve(data)
     reject("sorry problem")
 }

 invoke().then((result)=>{console.log(result)})
 .error(e=> console.log(e))
*/
