import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { motion } from "framer-motion";

import Nav from "../components/Nav";
import Logo from "../components/Logo";
import Title from "../components/Title";
import UserFilter from "../components/UsersFilter";
import UserCard from "../components/UserCard";
import Footer from "../components/Footer";
import Header from "../components/Header"

import backgroundImage from "../images/users-background.png";

import { UsersContext } from "../contexts/UsersContext";
import { getUsers } from "../api/user";

const LeftSide = styled.div`
  padding: 100px;
`;

const RightSide = styled.div`
  font-size: 36px;
  padding: 100px;

  .p2 {
    font-size: 15px;
  }
`;

const Middle = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
`;

const Users = () => {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UsersContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  // console.log(data);

  const fetchUsers = async () => {
    const data = await getUsers();

    if (data.error) {
      navigate("/login");
    } else {
      setUsers(data);
    }
  };

  // if(!users) {
  //   return <h1>Chargement...</h1>
  // }

  // console.log("users", users)
  return (
    <>
      <Nav />
      <motion.div style={{ x: 100 }} animate={{ x: 0 }}>
        <Header background={`${backgroundImage}`}>
          <RightSide>
            <Title text="Liste des joueurs" size="64" />
          </RightSide>
        </Header>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Middle>
          <div className="container">
            <div className="row">
              <div className="col mt-2 d-flex justify-content-center fs-3">
                Trier par :
              </div>
            </div>
            <div className="row my-3">
              <UserFilter />
            </div>
            <motion.div style={{ x: -100 }} animate={{ x: 0 }}>
              <div className="row d-flex justify-content-around">
                {users ? (
                  users.map((element) => (
                    <UserCard
                      key={element._id}
                      id={element._id}
                      username={element.username}
                      summoner_name={element.summoner_name}
                      discord={element.discord}
                      region={element.region}
                      languages={element.languages}
                      disponibilities={element.disponibilities}
                      roles={element.roles}
                    />
                  ))
                ) : (
                  <UserCard
                    // key={element._id}
                    // id={element._id}
                    username="{element.username}"
                    summoner_name="{element.summoner_name}"
                    discord="{element.discord}"
                    region="{element.region}"
                    languages="{element.languages}"
                    disponibilities="{element.disponibilities}"
                    roles="{element.roles}"
                  />
                )}
              </div>
            </motion.div>
          </div>
        </Middle>
      </motion.div>
      <Footer />
    </>
  );
};

export default Users;
