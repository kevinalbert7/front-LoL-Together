import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { motion } from "framer-motion";

import Nav from "../components/Nav/Nav";
import UserFilter from "../components/UsersFilter";
import UserCard from "../components/UserCard";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Logo from "../components/Logo";

import backgroundImage from "../assets/images/users-background.png";

import { UsersContext } from "../contexts/UsersContext";
import { getUsers } from "../api/user";

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
      <Header background={`${backgroundImage}`} backgroundPosition="top right" text="Liste des Joueurs" left={<Logo />}/>
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
