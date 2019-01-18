import React, {Component} from 'react';
import axios from 'axios';
import './Heroes.scss';

class Heroes extends Component {
  state = {
    heroes: []
  }
  
  componentDidMount() {
  this.getHeroes();
  }
  
  getHeroes = async () => {
    let response = await axios.get('http://eastflag.co.kr:8080/api/heroes');
    console.log(response);
    this.setState({
      heroes: response.data
    });
  }
  
  render() {
    return (
      <ul className="img-box">
        {this.state.heroes.map(hero => (
          <li key={hero.hero_id} className="row align-items-center m-0">
            <div className="col-1 py-2">
              <img src={hero.photo} alt={hero.name} className="img-fluid rounded-circle" />
            </div>
            <span className="col">{hero.name}</span>
          </li>
        ))}
      </ul>
    )
  }
}

export default Heroes;
