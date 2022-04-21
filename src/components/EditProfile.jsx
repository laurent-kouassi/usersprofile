import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Formm } from './Formm';
import { updateUsers } from '../store/actions/usersAction';
import { useDispatch } from 'react-redux';

export const EditProfile = (props) => {
  const { isModalVisible, setIsModalVisible } = props;

  const [newName, setName] = useState(isModalVisible.user && isModalVisible.user.name);
  const [newEmail, setEmail] = useState(isModalVisible.user && isModalVisible.user.email);
  const [newPhone, setPhone] = useState(isModalVisible.user && isModalVisible.user.phone);
  const [newWebsite, setWebsite] = useState(isModalVisible.user && isModalVisible.user.website);

  const dispatch = useDispatch();

  // handle ok click
  const handleOk = () => {

    // update selected user
    let user_update = {
      id: isModalVisible.user && isModalVisible.user.id,
      name: newName,
      username: isModalVisible.user && isModalVisible.user.username,
      email: newEmail ? newEmail : isModalVisible.user && isModalVisible.user.email,
      address: {
          street: isModalVisible.user && isModalVisible.user.address.street ,
          suite:  isModalVisible.user && isModalVisible.user.address.suite,
          city:   isModalVisible.user && isModalVisible.user.address.city,
          zipcode: isModalVisible.user && isModalVisible.user.address.zipcode,
          geo: {
              lat: isModalVisible.user && isModalVisible.user.address.geo.lat,
              lng: isModalVisible.user && isModalVisible.user.address.geo.lng
          }
      },
      phone: newPhone ? newPhone : isModalVisible.user && isModalVisible.user.phone,
      website: newWebsite ? newWebsite : isModalVisible.user && isModalVisible.user.website,
      company: {
          name: isModalVisible.user && isModalVisible.user.company.name,
          catchPhrase: isModalVisible.user && isModalVisible.user.company.catchPhrase,
          bs: isModalVisible.user && isModalVisible.user.company.bs
      }
    };

    // update store action 
    dispatch(
      updateUsers(
        user_update,
        success => {
          if(success){
            setIsModalVisible({
              visible: false,
              user: null
          });
          }
        }
      )
    );
  };

  // handle cancel click
  const handleCancel = () => {
    setIsModalVisible({
        visible: false,
        user: null
    });
  };

  return (
    <>
      <Modal 
        title="Update Profile" 
        visible={ isModalVisible.visible } 
        onOk={ handleOk } 
        onCancel={ handleCancel }>
          <Formm 
             name = { isModalVisible.user && isModalVisible.user.name } 
             email = { isModalVisible.user && isModalVisible.user.email } 
             phone = { isModalVisible.user && isModalVisible.user.phone } 
             website = { isModalVisible.user && isModalVisible.user.website } 
             setName = { setName }
             setEmail = { setEmail }
             setPhone = { setPhone }
             setWebsite = { setWebsite } />
      </Modal>
    </>
  );
};