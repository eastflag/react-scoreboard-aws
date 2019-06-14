import React, {Component} from 'react';
import api from "../../utils/api";

export class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hero: null
    }
    
    console.log(this.props); // match.params: {id: "1"}
  }

  componentDidMount() {
    console.log(this.props);
    this.getHero(this.props.id);
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps', newProps);
    this.getHero(newProps['id']);
  }

/*  componentDidUpdate() {
    console.log('componentDidUpdate');
  }*/

  getHero = async (id) => {
    let response = await api.get(`/api/user/hero/${id}`);
    console.log(response);
    
    const hero = response.data;
    
    const powers = hero.powers.map(item => item.name);
    hero.powers = powers;
    
    console.log(hero);

    this.setState({hero});
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
            <p className="form-control form-control-sm" id="power">{this.state.hero.powers.toString()}</p>
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
