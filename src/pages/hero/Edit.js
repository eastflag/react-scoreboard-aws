import React, {useState, useEffect} from 'react';
import api from '../../utils/api';

export const Edit = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sex, setSex] = useState({
    male: true,
    female: false
  });
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [powers, setPowers] = useState({
    flying: false,
    penetration: false,
    hacking: false,
    strength: false
  });
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    getHero(props.id)
  }, [props.id])

  const getHero = async (id) => {
    let response = await api.get(`/api/user/hero/${id}`);
    console.log(response);
    
    const hero = response.data;

    setName(hero.name);
    setEmail(hero.email);
    // hero = { ..., sex: 'female' }
    const sex = {
      male: false,
      female: false
    };
    sex[hero.sex] = true;
    setSex(sex);
    // hero = { ..., powers: ['flying', 'strength'] }
    const powers = {
      flying: false,
      penetration: false,
      hacking: false,
      strength: false
    };
    hero.powers.forEach(power => {
      powers[power.name] = true;
    });
    setPowers(powers);
    setCountry(hero.country);
    setAddress(hero.address);
    setPhoto(hero.photo);
  }

  const submit = (e) => {
    e.preventDefault();
    const form = document.getElementById('form');
    console.log(form.checkValidity());
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    const sendForm = { id: props.id, name, email, country, address, photo, powers: [] };
    // sex: 객체 => male or female 의 string 으로 변환
    for (let key in sex) {
      if (sex[key]) {
        sendForm.sex = key;
      }
    }
    // powers: 객체 => 스트링 배열로 변환
    for (let key in powers) {
      if (powers[key]) {
        sendForm.powers.push(key);
      }
    }
    
    console.log(sendForm);
    
    api.put('/api/admin/hero', sendForm)
      .then(response => {
        console.log(response.data);
        // form 초기화
        alert('수정되었습니다');
      });
  }

  const handleUpload = (e) => {
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
      setPhoto(response.data.data);
    });
  }

  return (
    <>
      <form onSubmit={submit} noValidate id="form">
        <div className="form-group mt-1">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" placeholder="Enter Name" id="name"
                 value={name} onChange={(e) => setName(e.target.value)} required minLength="3" maxLength="10" />
          <div className="invalid-feedback">
            3 ~ 10 사이의 이름을 입력하세요.
          </div>
        </div>

        <div className="form-group mt-1">
          <label htmlFor="email">Email Address</label>
          <input type="email" className="form-control" placeholder="Enter Email" id="email"
                 value={email} onChange={(e) => setEmail(e.target.value)} required />
          <div className="invalid-feedback">
            이메일 형식을 입력하세요.
          </div>
        </div>

        <div className="d-flex flex-column mt-1">
          <div>성별</div>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="sex" value="male" id="male"
                     checked={sex.male} onChange={(e) => setSex({male: e.target.checked, female: !e.target.checked})} />
              <label className="form-check-label" htmlFor="male">남자</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="sex" value="female" id="female"
                     checked={sex.female} onChange={(e) => setSex({male: !e.target.checked, female: e.target.checked})} />
              <label className="form-check-label" htmlFor="female">여자</label>
            </div>
          </div>
        </div>

        <div className="form-group mt-1">
          <label htmlFor="country">country</label>
          <select className="form-control" id="country" value={country}
                  onChange={(e)=>setCountry(e.target.value)} required>
            <option value=""></option>
            <option value="Japan">Japan</option>
            <option value="American">American</option>
            <option value="Korean">Korean</option>
          </select>
          <div className="invalid-feedback">
            국가를 선택하세요.
          </div>
        </div>

        <div className="form-group mt-1">
          <label htmlFor="address">Address</label>
          <textarea className="form-control" placeholder="Enter address" id="address" rows="3"
                    value={address} onChange={(e)=>setAddress(e.target.value)}></textarea>
        </div>

        <div className="d-flex flex-column mt-1">
          <div>powers</div>
          <div>
            <div className="form-check form-check-inline">
              <input type="checkbox" value="flying" className="form-check-input" id="flying"
                     checked={powers.flying} onChange={(e) => setPowers({...powers, flying: e.target.checked})}/>
              <label className="form-check-label" htmlFor="flying">flying</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" value="penetration" className="form-check-input" id="penetration"
                     checked={powers.penetration} onChange={(e) => setPowers({...powers, penetration: e.target.checked})} />
              <label className="form-check-label" htmlFor="penetration">penetration</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" value="hacking" className="form-check-input" id="hacking"
                     checked={powers.hacking} onChange={(e) => setPowers({...powers, hacking: e.target.checked})}/>
              <label className="form-check-label" htmlFor="hacking">hacking</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" value="strength" className="form-check-input" id="strength"
                     checked={powers.strength} onChange={(e) => setPowers({...powers, strength: e.target.checked})} />
              <label className="form-check-label" htmlFor="strength">strength</label>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column mt-3 align-items-start">
          <div>사진등록</div>
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="customFile" accept="image/*" onChange={handleUpload} />
            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
          </div>
          {
            photo ? <img src={photo} alt={name} style={{width: '200px'}} /> : ''
          }
        </div>

        <div className="m-3 d-flex justify-content-center">
          <button type="submit" className="btn btn-outline-primary">수정</button>
        </div>

      </form>

      <p>
        {JSON.stringify({
          name, email, sex, country, address, powers, photo
        })}
      </p>
    </>
  )
}
