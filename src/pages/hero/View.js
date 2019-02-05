import React, {Component} from 'react';
import axios from "axios";

export class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hero: null
    }
    
    console.log(this.props); // match.params: {hero_id: "1"}
  }

  componentDidMount() {
    console.log(this.props);
    this.getHero(this.props.hero_id);
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps', newProps);
    this.getHero(newProps['hero_id']);
  }

/*  componentDidUpdate() {
    console.log('componentDidUpdate');
  }*/

  getHero = async (hero_id) => {
    let response = await axios.get(`http://eastflag.co.kr:8080/api/hero/${hero_id}`);
    console.log(response);

    this.setState({hero: response.data});
  }
  
  render() {
    return (
      this.state.hero ?
        <div>
          <div className="form-group mt-1">
            <label htmlFor="name">Name:</label>
            <p className="form-control form-control-sm" id="name">{this.state.hero.name}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="email">Email Address:</label>
            <p className="form-control form-control-sm" id="email">{this.state.hero.email}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="sex">Sex:</label>
            <p className="form-control form-control-sm" id="sex">{this.state.hero.sex}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="country">Country:</label>
            <p className="form-control form-control-sm" id="country">{this.state.hero.country}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="power">Power:</label>
            <p className="form-control form-control-sm" id="power">{this.state.hero.power}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="power">Photo:</label>
            {
              this.state.hero.photo ? <img src={this.state.hero.photo} alt={this.state.hero.name}></img> : ''
            }
          </div>
          <hr className="my-5" />
        </div>
        :
        ''
    )
  }
}
