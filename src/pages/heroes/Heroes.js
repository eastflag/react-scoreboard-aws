import React, {Component} from 'react';
import api from '../../utils/api';
import './Heroes.module.scss';
import Pagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.css';
import {Route, Switch} from "react-router-dom";
import Hero from "../hero/Hero";
import connect from "react-redux/es/connect/connect";

class Heroes extends Component {
  state = {
    pageSize: 10,
    totalCount: 115,
    currentPage: 1,
    heroes: []
  }
  
  componentDidMount() {
    this.getHeroes();
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps:', newProps);
    this.getHeroes();
  }
  
  getHeroes = async () => {
    let response = await api.get(`/api/user/heroes?start_index=${this.state.pageSize * (this.state.currentPage - 1)}&page_size=${this.state.pageSize}`);
    console.log(response);
    this.setState({
      heroes: response.data.data,
      totalCount: response.data.total
    });
  }
  
  render() {
    return (
      <>
        <Switch>
          <Route path="/heroes/hero/:id" component={Hero}></Route>
        </Switch>
        
        <div className="row">
          {this.state.heroes.map(hero => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-1 p-sm-2 p-md-3" key={hero.id}>
              <div className="card" onClick={(e) => this.handleClick(e, hero.id)} style={{cursor: 'pointer'}}>
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
      
        <Pagination total={this.state.totalCount} current={this.state.currentPage} pageSize={this.state.pageSize}
                    onChange={this.onChange} className="d-flex justify-content-center" />
      </>
    )
  }
  
  onChange = (page) => {
    this.setState({currentPage: page}, () => {
      this.getHeroes();
    });
  }
  
  handleClick = (event, id) => {
    console.log(event, id);
    event.preventDefault();
    this.props.history.push(`/heroes/hero/${id}`);
  }
}

let mapStateToProps = (state) => {
  return {
    refresh_count: state.heroReducer.refresh_count
  }
}

export default connect(mapStateToProps, null)(Heroes);
