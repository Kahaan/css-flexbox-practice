import React, {Component} from 'react'

class Recipe extends Component {
  constructor(props){
    super(props)
    
  }

  render (){
    console.log(this.props)
    return (
    <div>
      Recipe component
    </div>
    );
  }
}

export default Recipe;
