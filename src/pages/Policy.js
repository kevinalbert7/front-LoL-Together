import React from "react";
import styled from "styled-components";

import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import HeaderRightSide from "../components/Header/HeaderRightSide";
import Footer from "../components/Footer/Footer";

import backgroundImage from "../assets/images/policy-background.png";

const TextPolicy = styled.div`
  margin: 150px 200px;
  h3 {
    margin: 40px 0 20px;
  }
`;

const Policy = () => {
  return (
    <>
      <Nav />
      <Header background={backgroundImage}>
        <HeaderRightSide text="Politique de Confidentialité" />
      </Header>
      <TextPolicy>
        <h3>A. Introduction :</h3>
        <p>
          1. La confidentialité des visiteurs de notre site Web est très
          importante pour nous et nous nous engageons à la protéger. Cette
          politique explique ce que nous faisons avec vos informations
          personnelles.
        </p>
        <p>
          2. Consentir à notre utilisation de cookies conformément aux termes de
          cette politique lors de votre première visite sur notre site Web nous
          permet d'utiliser des cookies chaque fois que vous visitez notre site
          Web.
        </p>
        <h3>B. Crédit :</h3>
        <p>
          1. Ce document a été créé à l'aide d'un modèle de SEQ Legal
          (seqlegal.com) et modifié par vpnMentor (www.vpnmentor.com)
        </p>
        <h3>C. Comment nous collectons vos données personnelles :</h3>
        <p>
          Les types d'informations personnelles suivants peuvent être collectés,
          stockés et utilisés :<br />
          1. Informations sur votre ordinateur, y compris votre adresse IP,
          votre emplacement géographique, le type et la version de votre
          navigateur et votre système d'exploitation.
        </p>
        <p>
          2. Informations sur vos visites et votre utilisation de ce site Web, y
          compris la source de référence, la durée de la visite, les pages vues
          et les chemins de navigation du site Web.
        </p>
        <p>
          3. Les informations que vous entrez lorsque vous vous inscrivez sur
          notre site Web, telles que votre site Web de messagerie.
        </p>
        <p>
          4. Informations que vous entrez lorsque vous créez un profil sur notre
          site Web. Par exemple, votre nom, vos photos de profil, votre date de
          naissance, le statut de votre relation, vos centres d'intérêt et vos
          loisirs, vos études et votre emploi.
        </p>
        <p>
          5. Informations que vous saisissez pour configurer l'abonnement à nos
          e-mails et/ou newsletters.
        </p>
        <p>
          6. Informations générées lors de l'utilisation de notre site Web, y
          compris quand, à quelle fréquence et dans quelles circonstances vous
          l'utilisez.
        </p>
        <p>
          7. Informations que vous publiez sur notre site Web avec l'intention
          de les publier sur Internet.
        </p>
        <p>8. Toute autre information personnelle que vous nous envoyez.</p>
      </TextPolicy>
      <Footer />
    </>
  );
};

export default Policy;
