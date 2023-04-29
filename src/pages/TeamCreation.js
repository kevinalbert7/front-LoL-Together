import React, { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";
import { ProfileContext } from "../contexts/ProfileContent";
import Header from "../components/Header/Header";

import {
  getRegion,
  getLanguages,
  getSelectedInfos,
  getValues,
  optionsRegions,
  optionsRoles,
  optionsDisponiblities,
} from "../api/filter";

import backgroundImage from "../assets/images/teamSignup-background.jpg";

import Nav from "../components/Nav/Nav";
import Logo from "../components/Logo";
import Title from "../components/Title";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button";

const SelectStyled = styled.div``;

const TeamCreation = () => {
  const navigate = useNavigate();
  const { profile, setProfile } = useContext(ProfileContext);
  const [optionsRegion, setOptionsRegion] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState([]);
  const [optionsLanguages, setOptionsLanguages] = useState([{}]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedDisponiblities, setSelectedDisponiblities] = useState([]);

  useEffect(async () => {
    if (profile) {
      setSelectedRegion([{ label: profile.region, value: profile.region }]);
      const dataRegion = await getRegion();
      setOptionsRegion(dataRegion);
      const dataLanguages = await getLanguages();
      setOptionsLanguages(dataLanguages);
      console.log("dataLanguages", dataLanguages);
      const userLanguages = getSelectedInfos(profile.languages);
      setSelectedLanguages(userLanguages);
      const userDisponibilities = getSelectedInfos(profile.disponibilities);
      setSelectedDisponiblities(userDisponibilities);
    }
  }, [profile]);

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      signup(values);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string().required("Un nom de team est requis"),
    }),
  });

  const signup = async (values) => {
    const signupResponse = await fetch("http://localhost:5000/teams", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name: values.name,
      }),
    });

    const team = await signupResponse.json();

    setProfile(team);
    navigate(`/team/${team._id}`);
  };

  // console.log("value :",formik.values)
  console.log("languages :", optionsLanguages);
  // console.log("région:",selectedRegion)
  // console.log("dispo:",selectedDisponiblities)

  return (
    <>
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header
          height="100vh"
          background={backgroundImage}
          backgroundPosition="top right"
          text=""
          flexDirectionLeft="column"
          left={
            <>
              <Logo />
              <Title text="Création d'équipe" />
            </>
          }
          fontSize="16px"
          heightRight="100vh"
          paddingRightSide="60px 0px 0px 0px"
          right={
            <form
              onSubmit={formik.handleSubmit}
              className="formulaire fs-5 col-8 d-flex justify-content-center flex-column"
            >
              <div className="mb-2">
                <label className="form-label">Nom d'équipe</label>
                <input
                  name="name"
                  type="text"
                  className="form-control shadow"
                  placeholder="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Région</label>
                <SelectStyled className="form-control shadow">
                  <Select
                    value={selectedRegion}
                    options={optionsRegions}
                    onChange={setSelectedRegion}
                  />
                  {/* <MultiSelect
                    options={optionsRegion}
                    value={selectedRegion}
                    onChange={setSelectedRegion}
                    labelledBy="Select"
                    hasSelectAll={false}
                /> */}
                </SelectStyled>
              </div>
              <div className="mb-2">
                <label className="form-label ">Langue</label>
                <SelectStyled className="form-control shadow">
                  <MultiSelect
                    options={optionsLanguages}
                    value={selectedLanguages}
                    onChange={setSelectedLanguages}
                    labelledBy="Select"
                    hasSelectAll={false}
                  />
                </SelectStyled>
              </div>
              <div className="mb-4">
                <label className="form-label">Disponiblitiés</label>
                <SelectStyled className="form-control shadow">
                  <MultiSelect
                    options={optionsDisponiblities}
                    value={selectedDisponiblities}
                    onChange={setSelectedDisponiblities}
                    labelledBy="Select"
                    hasSelectAll={false}
                  />
                </SelectStyled>
              </div>
              <Button type="submit" text="Créer" padding="10px 20px">
                Inscription
              </Button>
            </form>
          }
        ></Header>
      </motion.div>
      <Footer />
    </>
  );
};

export default TeamCreation;
