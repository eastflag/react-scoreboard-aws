import React, {useState, useEffect} from 'react';
import api from '../../utils/api';
import './Heroes.module.scss';
import Pagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.css';
import {Route, Switch} from "react-router-dom";
import Hero from "../hero/Hero";

const Heroes = (props) => {
  console.log(props);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(115);
  const [currentPage, setCurrentPage] = useState(1);
  const [heroes, setHeroes] = useState([]);
  
  useEffect(() => {
    getHeroes()
  }, [currentPage]);
  
  const getHeroes = async () => {
    let response = await api.get(`/api/user/heroes?start_index=${pageSize * (currentPage - 1)}&page_size=${pageSize}`);
    console.log(response);
    setHeroes(response.data.data);
    setTotalCount(response.data.total);
  }
  
  const handleClick = (event, id) => {
    console.log(event, id);
    event.preventDefault();
    props.history.push(`/heroes/hero/${id}`);
  }
  
  return (
    <>
      <Switch>
        <Route path="/heroes/hero/:id" component={Hero}></Route>
      </Switch>
      
      <div className="row">
        {heroes.map(hero => (
          <div className="col-6 col-sm-4 col-md-3 p-1 p-sm-2 p-md-3" key={hero.id}>
            <div className="card" onClick={(e) => handleClick(e, hero.id)} style={{cursor: 'pointer'}}>
              <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'}
                   style={{width: '100%'}} alt={hero.name}></img>
              <div className="card-body">
                <h5 className="card-title">{hero.name}</h5>
                <p className="card-text">{hero.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Pagination total={totalCount} current={currentPage} pageSize={pageSize}
                  onChange={(page) => setCurrentPage(page)} className="d-flex justify-content-center" />
    </>
  )
}

export default Heroes;
