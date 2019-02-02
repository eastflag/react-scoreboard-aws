import React, {Component} from 'react';
import axios from 'axios';

export class Register extends Component {
  state = {
    name: '',
    email: '',
    sex: {
      male: false,
      female: false
    },
    country: '',
    address: '',
    power: {
      flying: false,
      penetration: false,
      hacking: false,
      strength: false
    }
  }
  
  handleText = (e, key) => {
    this.setState({[key]: e.target.value});
  }
  
  handleSex = (e) => {
    const sex = {
      male: false,
      female: false
    }
    sex[e.target.value] = e.target.checked;
    this.setState({sex});
  }
  
  handlePower = (e) => {
    const power = {...this.state.power};
    power[e.target.value] = e.target.checked;
    this.setState({power});
  }
  
  submit = (e) => {
    e.preventDefault();
    
    const sendForm = {...this.state};
    // sex => string 으로 변환
    for (let key in this.state.sex) {
      if (this.state.sex[key]) {
        Object.assign(sendForm, {sex: key})
      }
    }
    // power => 콤마로 구분된 스트링
    const power = [];
    for (let key in this.state.power) {
      if (this.state.power[key]) {
        power.push(key);
      }
    }
    Object.assign(sendForm, {power: power.toString()});
    
    console.log(sendForm);
    
    axios.post('http://eastflag.co.kr:8080/api/hero', sendForm)
      .then(response => {
        console.log(response.data);
        // form 초기화
        this.setState({
            name: '',
            email: '',
            sex: {
                male: false,
                female: false
            },
            country: '',
            address: '',
            power: {
                flying: false,
                penetration: false,
                hacking: false,
                strength: false
            }
        });
      });
  }
  
  render() {
    return (
      <>
        <h3>Hero Registration</h3>
        
        <form onSubmit={this.submit}>
          <div className="form-group mt-1">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" placeholder="Enter Name" id="name"
                   value={this.state.name} onChange={(e) => this.handleText(e, 'name')} />
          </div>
          
          <div className="form-group mt-1">
            <label htmlFor="email">Email Address</label>
            <input type="email" className="form-control" placeholder="Enter Email" id="email"
                   value={this.state.email} onChange={(e) => this.handleText(e, 'email')} />
          </div>
          
          <div className="d-flex flex-column mt-1">
            <div>성별</div>
            <div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="sex" value="male" id="male"
                       checked={this.state.sex.male} onChange={this.handleSex}/>
                <label className="form-check-label" htmlFor="male">남자</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="sex" value="female" id="female"
                       checked={this.state.sex.female} onChange={this.handleSex} />
                <label className="form-check-label" htmlFor="female">여자</label>
              </div>
            </div>
          </div>
  
          <div className="form-group mt-1">
            <label htmlFor="country">country</label>
            <select className="form-control" id="country" value={this.state.country} onChange={(e)=>this.handleText(e, 'country')}>
              <option value=""></option>
              <option value="Japan">Japan</option>
              <option value="American">American</option>
              <option value="Korean">Korean</option>
            </select>
          </div>
          
          <div className="form-group mt-1">
            <label htmlFor="address">Address</label>
            <textarea className="form-control" placeholder="Enter address" id="address" rows="3"
                      value={this.state.address} onChange={(e)=>this.handleText(e, 'address')}></textarea>
          </div>
          
          <div className="d-flex flex-column mt-1">
            <div>power</div>
            <div>
              <div className="form-check form-check-inline">
                <input type="checkbox" value="flying" className="form-check-input" id="flying"
                       checked={this.state.power.flying} onChange={this.handlePower}/>
                <label className="form-check-label" htmlFor="flying">flying</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" value="penetration" className="form-check-input" id="penetration"
                       checked={this.state.power.penetration} onChange={this.handlePower} />
                <label className="form-check-label" htmlFor="penetration">penetration</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" value="hacking" className="form-check-input" id="hacking"
                       checked={this.state.power.hacking} onChange={this.handlePower}/>
                <label className="form-check-label" htmlFor="hacking">hacking</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" value="strength" className="form-check-input" id="strength"
                       checked={this.state.power.strength} onChange={this.handlePower} />
                <label className="form-check-label" htmlFor="strength">strength</label>
              </div>
            </div>
          </div>
        
          <div className="m-3 d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-primary">등록</button>
          </div>
        
        </form>
        
        <p>
          {JSON.stringify(this.state)}
        </p>
      </>
    )
  }
}
