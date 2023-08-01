import React from "react";
import GuestsComp from "../../components/GuestsComp";

interface GuestsPageProps {}

const GuestsPage: React.FC<GuestsPageProps> = () => {
  return (
    <>
      <GuestsComp />
    </>
  );
};

export default GuestsPage;
