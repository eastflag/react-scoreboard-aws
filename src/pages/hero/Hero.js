import React, {Component} from 'react';
import {Edit} from "./Edit";
import {View} from "./View";

export class Hero extends Component {
  state = {
    is_edit: false
  }

  handleEditMode = (e) => {
    this.setState(prevState => ({
      is_edit: !prevState.is_edit
    }));
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-between align-items-center m-3">
          <h3>{ this.state.is_edit ? 'Hero Edit' : 'Hero Detail View' }</h3>
          <div>
            { this.state.is_edit ? <button className="btn btn-info" onClick={this.handleEditMode}>취소</button> :
                <button className="btn btn-success" onClick={this.handleEditMode}>수정</button>
            }
            <button className="btn btn-danger ml-3">삭제</button>
          </div>
        </div>
        {
          this.state.is_edit ? <Edit hero_id={this.props.match.params['hero_id']}/> : <View hero_id={this.props.match.params['hero_id']} />
        }
      </>
    );
  }
}