import React, {Component} from 'react';
import api from '../../utils/api';

export class Edit extends Component {
  state = {
    name: '',
    email: '',
    sex: {
      male: false,
      female: false
    },
    country: '',
    address: '',
    powers: {
      flying: false,
      penetration: false,
      hacking: false,
      strength: false
    },
    photo: ''
  }

  componentDidMount() {
    this.getHero(this.props['id']);
  }

  componentWillReceiveProps(newProps) {
    this.getHero(newProps['id']);
  }

  getHero = async (id) => {
    let response = await api.get(`/api/user/hero/${id}`);
    console.log(response);
    
    const hero = response.data;

    // 서버에서 넘어온 sex를 UI에 맞게 세팅
    const sex = {...this.state.sex};
    
    if (hero.sex) {
      sex[hero.sex] = true;
    }


    // 서버에서 넘어온 powers를 UI에 맞게 세팅
    const powers = {...this.state.powers};
    
    hero.powers.forEach(power => {
      powers[power.name] = true;
    })

    this.setState({...hero, ...{sex}, ...{powers}});
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
    const powers = {...this.state.powers};
    powers[e.target.value] = e.target.checked;
    this.setState({powers});
  }
  
  submit = (e) => {
    e.preventDefault();
    
    const sendForm = {...this.state};
    // sex: 객체 => male or female 의 string 으로 변환
    for (let key in this.state.sex) {
      if (this.state.sex[key]) {
        Object.assign(sendForm, {sex: key})
      }
    }
    // powers: 객체 => 스트링 배열로 변환
    const powers = [];
    for (let key in this.state.powers) {
      if (this.state.powers[key]) {
        powers.push(key);
      }
    }
    sendForm.powers = powers;
    
    console.log(sendForm);
    
    api.put('/api/admin/hero', sendForm)
      .then(response => {
        console.log(response.data);
        // form 초기화
        alert('수정되었습니다');
      });
  }

  handleUpload = (e) => {
    e.preventDefault();
  
  
    // 선택된 화일이 없으면 리턴
    console.log(e.target.files);
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    
    const formData = new FormData();
    formData.append('photo', e.target.files[0], e.target.files[0].name);
    api.post('/api/admin/photo', formData)
    .then(response => {
      console.log(response.data);
      this.setState({photo: response.data.data});
    });
  }
  
  render() {
    return (
      <>
        <form onSubmit={this.submit}>
          <div className="form-group mt-1">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" placeholder="Enter Name" id="name"
                   value={this.state.name} onChange={(e) => this.handleText(e, 'name')} required minLength="3" maxLength="10" />
          </div>
          
          <div className="form-group mt-1">
            <label htmlFor="email">Email Address</label>
            <input type="email" className="form-control" placeholder="Enter Email" id="email"
                   value={this.state.email} onChange={(e) => this.handleText(e, 'email')} required />
          </div>
          
          <div className="d-flex flex-column mt-1">
            <div>성별</div>
            <div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="sex" value="male" id="male"
                       checked={this.state.sex.male} onChange={this.handleSex} required />
                <label className="form-check-label" htmlFor="male">남자</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="sex" value="female" id="female"
                       checked={this.state.sex.female} onChange={this.handleSex} required />
                <label className="form-check-label" htmlFor="female">여자</label>
              </div>
            </div>
          </div>
  
          <div className="form-group mt-1">
            <label htmlFor="country">country</label>
            <select className="form-control" id="country" value={this.state.country}
                    onChange={(e)=>this.handleText(e, 'country')} required>
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
            <div>powers</div>
            <div>
              <div className="form-check form-check-inline">
                <input type="checkbox" value="flying" className="form-check-input" id="flying"
                       checked={this.state.powers.flying} onChange={this.handlePower}/>
                <label className="form-check-label" htmlFor="flying">flying</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" value="penetration" className="form-check-input" id="penetration"
                       checked={this.state.powers.penetration} onChange={this.handlePower} />
                <label className="form-check-label" htmlFor="penetration">penetration</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" value="hacking" className="form-check-input" id="hacking"
                       checked={this.state.powers.hacking} onChange={this.handlePower}/>
                <label className="form-check-label" htmlFor="hacking">hacking</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" value="strength" className="form-check-input" id="strength"
                       checked={this.state.powers.strength} onChange={this.handlePower} />
                <label className="form-check-label" htmlFor="strength">strength</label>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column mt-3 align-items-start">
            <div>사진등록</div>
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="customFile" accept="image/*" onChange={this.handleUpload} />
              <label className="custom-file-label" htmlFor="customFile">Choose file</label>
            </div>
            {
              this.state.photo ? <img src={this.state.photo} alt={this.state.name} style={{width: '200px'}} /> : ''
            }
          </div>
        
          <div className="m-3 d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-primary">수정</button>
          </div>
        
        </form>
        
        <p>
          {JSON.stringify(this.state)}
        </p>
      </>
    )
  }
}
