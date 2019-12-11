import React, {Component} from 'react';

function Home() {
  return (
    <div>
      <div class="m-1">
        <h4 class="m-1 mb-4">React Tutorial Demo Site</h4>
      </div>

      <div className="row">
        <div className="col-12 col-sm-6">
          <div className="card m-1">
            <div className="card-header">
              <h5 className="card-title">1주차</h5>
              <h6 className="card-subtitle text-muted">페이지 방식</h6>
            </div>
            <div className="card-body">
              <p className="card-text">React Element</p>
              <p className="card-text">JSX</p>
              <p className="card-text">function component</p>
              <p className="card-text">props & state</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6">
          <div className="card m-1">
            <div className="card-header">
              <h5 className="card-title">2주차</h5>
              <h6 className="card-subtitle text-muted">Create React App</h6>
            </div>
            <div className="card-body">
              <p className="card-text">Webpack tutorial</p>
              <p className="card-text">npm & Git</p>
              <p className="card-text">Common Communication</p>
              <p className="card-text">Optimize</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6">
          <div className="card m-1">
            <div className="card-header">
              <h5 className="card-title">3주차</h5>
              <h6 className="card-subtitle text-muted">Advanced</h6>
            </div>
            <div className="card-body">
              <p className="card-text">Redux tutorial</p>
              <p className="card-text">React Redux</p>
              <p className="card-text">HighScore & Composition</p>
              <p className="card-text">Search & Filter</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6">
          <div className="card m-1">
            <div className="card-header">
              <h5 className="card-title">4주차</h5>
              <h6 className="card-subtitle text-muted">Hero Rest API</h6>
            </div>
            <div className="card-body">
              <p className="card-text">React Router Dom and SSR</p>
              <p className="card-text">BootStrap & React</p>
              <p className="card-text">Dynamic Routing & Nested Routing</p>
              <p className="card-text">Hero Rest API</p>
            </div>
          </div>
        </div>
      </div>
      
      <h5 className="mx-2 my-3"><a href="http://eastflag.co.kr/backend/rest-with-nodejs/">Backend Node REST API Tutorial</a></h5>
      <h5 className="mx-2 my-3"><a href="http://eastflag.co.kr/react/">React Tutorial</a></h5>
    </div>
  )
}

export default Home;
