import React, { useState } from 'react';
import { Card, Avatar, Row, Col } from 'antd';
import {
     HeartOutlined,
     HeartFilled, 
     EditOutlined, 
     DeleteOutlined, 
     MailOutlined, 
     PhoneOutlined, 
     GlobalOutlined} from '@ant-design/icons';
import { Services } from '../api/services';
import { useDispatch } from 'react-redux';
import { EditProfile } from './EditProfile';
import { deleteUsers } from '../store/actions/usersAction';

const { Meta } = Card;
const style = { margin: '15px', padding: '8px 0' };

export const Profile = (props) => {
    const [userAvatar, setUserAvatar] = useState();
    const [love, setLove] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState({
        visible: false,
        user: null
    });
    
    const { user } = props;

    const server = new Services();
    const dispatch = useDispatch();

    // get  each user avatar
    server.getAvatar(user.username)
          .then(res => {
            setUserAvatar(res.url);
          });

    const handleSelectUser = () => {
        setIsModalVisible({
            visible: true,
            user: user
        });
    };

    const handleDeleteUser = () => {
        dispatch(
            deleteUsers(
              user.id
            )
        );
    };

  return (
      <div>
        <Card
           style={style}
           hoverable 
           bordered={true}
           cover={
            <img
                src={userAvatar}
            />
            }
            actions={[
                <HeartOutlined 
                    key='heart' 
                    color='red' 
                    style={{color: 'red'}} onClick={e => setLove(true)}/>,
                // <HeartFilled
                //     key='heart' 
                //     color='red' 
                //     style={{color: 'red'}} onClick={e => setLove(false)} />,
                <EditOutlined key="edit" onClick={e => handleSelectUser()}/>,
                <DeleteOutlined key="delete" onClick={handleDeleteUser}/>,
            ]}
        >
            <div>
            <h3>{user?.name}</h3>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <MailOutlined />
                <p style={{marginLeft: '10px'}}>{user.email}</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <PhoneOutlined />
                <p style={{marginLeft: '10px'}}>{user.phone}</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <GlobalOutlined />
                <p style={{marginLeft: '10px'}}>{user.website}</p>
            </div>
            </div>
        </Card>

        {/* edit profile */}
        <EditProfile 
           isModalVisible = { isModalVisible } 
           setIsModalVisible = { setIsModalVisible } />
      </div>
 )
};
