import React,{Component} from 'react';
import CardList from './CardList';
import logo from './logo.svg';
import './App.css';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import Button from './Button';
class App extends Component{
  constructor()
  {
       super();
       this.state = {
           monsters:[],
           searchfield:'',
           title:'Monsters-Rolodex'
          
       }
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(users =>this.setState({monsters:users}))
  }
  onSearchChange =(event)=>
  {
      console.log(event.target.value)
      this.setState({searchfield:event.target.value})
      this.setState({title:event.target.value})
     
  }
  onClick =() =>
  {
    console.log('Clicked Me')
  }
  render()
  {
    
    const FilterMonsters = this.state.monsters.filter(monster=>monster.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
      const {monsters,title} = this.state;
      return (
    <div className="App">
         <h1>{title}</h1>
         
         <span><SearchBox onChange={this.onSearchChange} /><Button onClick={this.onClick} /></span>
        <Scroll>
           <CardList monsters={FilterMonsters}>
           </CardList>
        </Scroll>
         

    </div>
  );
  }

}

export default App;
