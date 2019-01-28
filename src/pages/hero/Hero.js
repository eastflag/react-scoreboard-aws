import React, {Component} from 'react';

class Hero extends Component {
  constructor(props) {
    super(props);
    
    console.log(this.props); // match.params: {hero_id: "1"}
  }
  
  render() {
    return (
      <div>
        Hero works.
      </div>
    )
  }
}

export default Hero;
