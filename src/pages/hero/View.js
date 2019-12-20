import React, {useState, useEffect} from 'react';
import api from "../../utils/api";

export const View = (props) => {
  console.log('View: ', props); // { id: "1"}
  const [hero, setHero] = useState(null);

  useEffect(() => {
    getHero(props.id);
  }, [props.id]);

  const getHero = async (id) => {
    let response = await api.get(`/api/user/hero/${id}`);
    console.log(response);
    
    const hero = response.data;
    
    const powers = hero.powers.map(item => item.name);
    hero.powers = powers;
    
    console.log(hero);

    setHero(hero);
  }

  return (
    hero ?
      <div>
        <table className="table">
          <tbody>
          <tr>
            <th scope="row">Name</th>
            <td>{hero.name}</td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td>{hero.email}</td>
          </tr>
          <tr>
            <th scope="row">Sex</th>
            <td>{hero.sex}</td>
          </tr>
          <tr>
            <th scope="row">Country</th>
            <td>{hero.country}</td>
          </tr>
          <tr>
            <th scope="row">Power</th>
            <td>{hero.powers.toString()}</td>
          </tr>
          <tr>
            <th scope="row">Photo</th>
            <td>
              {
                hero.photo ? <img src={hero.photo} alt={hero.name} style={{maxWidth: '100%'}}></img> : ''
              }
            </td>
          </tr>
          </tbody>
        </table>
        <hr className="my-5" />
      </div>
      :
      ''
  )
}
