import React from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import { connect } from 'react-redux'
import { addComputer } from './actionAdd'
import ModelDetails from './ModelDetails'

const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
]

class SelectComputer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.updateSelection = this.updateSelection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateSelection(event) {
    this.setState({name: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    //alert('Your computer is: ' + this.state.name)
    const model = data.find((model)=> model.name === this.state.name)
    const name = model.name
    const manu = model.manufacturer
    const year = model.year
    const ori = model.origin
    addComputer({
      type: 'ADD_COMP',
      payload: 
        name,
        manu,
        year,
        ori
    })
    console.log(model)
      
  }

  //I've been struggling with the state in the App, I couldn't get to Add a new computer with the dispatcher addComputer
  //I got blocked and wasn't able to solve the issue.
  //-The store was initialized correctly
  //-the initial state in the reducer I think it's also done correctly
  //as well as the connect at the bottom with the function
  //... I'm out of ideas

  render(){
    const element = 
    <form onSubmit={this.handleSubmit}>
    <select onChange={this.updateSelection}>
      <option key= "" value="">-- pick a model --</option>
    { data.map(computer =>
    <option key={computer.name} value={computer.name}>
      { computer.name + ' (' + computer.year + ')'}
    </option>
    ) }
    </select>
    <input type="submit" value="Add" />
    </form>

    return(
      element
    )
  }
}

function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
     <SelectComputer />
     <ModelDetails />
    </div>
    </Provider>
  );
}

const mapStateToProps = (state) => {
  return {
    computer: state
  }
}

export default connect(mapStateToProps , { addComputer })(App, SelectComputer)
