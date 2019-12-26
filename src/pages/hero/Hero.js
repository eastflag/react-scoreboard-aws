import React, {useState} from 'react';
import {Edit} from "./Edit";
import {View} from "./View";
import api from '../../utils/api';
import {refreshHero} from "../../redux/actions";
import {useDispatch} from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {useToasts} from 'react-toast-notifications';

const Hero = (props) => {
  console.log('View: ', props);
  const [is_edit, setIs_edit] = useState(false);
  const dispatch = useDispatch();
  const {addToast} = useToasts();

  const handleEditMode = (e) => {
    setIs_edit(!is_edit);
  }

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleDelete = () => {
      toggle();
      api.delete(`/api/admin/hero?id=${props.match.params.id}`)
        .then(response => {
          console.log(response.data);
          props.history.push('/heroes/hero'); // this.props.router.push('/heroes/hero'); 3.0.0+

          // publish to parent
          dispatch(refreshHero());
          addToast('삭제되었습니다.', { appearance: 'success', autoDismiss: true });
        });
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center m-3">
        <h3>{ is_edit ? 'Hero Edit' : 'Hero Detail View' }</h3>
        <div>
          { is_edit ? <button className="btn btn-info" onClick={handleEditMode}>취소</button> :
              <button className="btn btn-success" onClick={handleEditMode}>수정</button>
          }
          <button className="btn btn-danger ml-3" onClick={toggle}>삭제</button>
        </div>
      </div>
      {
        is_edit ? <Edit id={props.match.params['id']}/> : <View id={props.match.params['id']} />
      }
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>삭제</ModalHeader>
        <ModalBody>
          {} 삭제하시겠습니까?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleDelete}>OK</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Hero;
