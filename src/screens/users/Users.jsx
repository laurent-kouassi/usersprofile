import React, { useState, useEffect } from 'react';
import { Profile } from '../../components/Profile'
import { users } from '../../store/actions';
import { useSelector, useDispatch } from "react-redux";
import { Col, Row } from 'antd';
import { Loader } from '../../components/Loader';

export const Users = () => {
    // const [error, setError] = useState();
    const usersList = useSelector(state => state.users);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(
            users( 
              error => {
                alert(error);
              }
            )
        );
    }, []);

  return (
    <div>
        <Row>
         {   usersList.length > 0 ?
             usersList?.map((user, index) => (
                <Col className="gutter-row" >
                  <Profile user = { user } />
                </Col>
            )) :
            <Loader />

         }
        </Row>
    </div>
  )
}
