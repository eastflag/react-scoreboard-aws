import React, {useState} from 'react';
import {Edit} from "./Edit";
import {View} from "./View";
import api from '../../utils/api';
import {refreshHero} from "../../redux/actions";
import {useDispatch} from "react-redux";

const Hero = (props) => {
  console.log('View: ', props);
  const [is_edit, setIs_edit] = useState(false);
  const dispatch = useDispatch();

  const handleEditMode = (e) => {
    setIs_edit(!is_edit);
  }

  const handleDelete = (e, id) => {
    if (window.confirm('삭제하시겠습니까?')) {
      api.delete(`/api/admin/hero?id=${id}`)
        .then(response => {
          console.log(response.data);
          props.history.push('/heroes/hero'); // this.props.router.push('/heroes/hero'); 3.0.0+

          // publish to parent
          dispatch(refreshHero());
        });
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center m-3">
        <h3>{ is_edit ? 'Hero Edit' : 'Hero Detail View' }</h3>
        <div>
          { is_edit ? <button className="btn btn-info" onClick={handleEditMode}>취소</button> :
              <button className="btn btn-success" onClick={handleEditMode}>수정</button>
          }
          <button className="btn btn-danger ml-3" onClick={(e) => handleDelete(e, props.match.params['id'])}>삭제</button>
        </div>
      </div>
      {
        is_edit ? <Edit id={props.match.params['id']}/> : <View id={props.match.params['id']} />
      }
    </>
  );
}

export default Hero;
