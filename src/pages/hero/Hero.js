import React, {Component} from 'react';
import {Edit} from "./Edit";
import {View} from "./View";
import api from '../../utils/api';
import connect from "react-redux/es/connect/connect";
import {refreshHero} from "../../redux/actions";

class Hero extends Component {
  state = {
    is_edit: false
  }

  handleEditMode = (e) => {
    this.setState(prevState => ({
      is_edit: !prevState.is_edit
    }));
  }

  handleDelete = (e, id) => {
    if (window.confirm('삭제하시겠습니까?')) {
      api.delete(`/api/admin/hero?id=${id}`)
          .then(response => {
            console.log(response.data);
            this.props.history.push('/heroes/hero'); // this.props.router.push('/heroes/hero'); 3.0.0+

            // publish to parent
            this.props.refreshHero();
          });
    }
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
            <button className="btn btn-danger ml-3" onClick={(e) => this.handleDelete(e, this.props.match.params['id'])}>삭제</button>
          </div>
        </div>
        {
          this.state.is_edit ? <Edit id={this.props.match.params['id']}/> : <View id={this.props.match.params['id']} />
        }
      </>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  refreshHero: () => dispatch(refreshHero())
})

export default connect(null, mapDispatchToProps)(Hero);
