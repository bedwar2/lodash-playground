import React from "react";
import Each from "./Each";
import Filter from "./Filter";
import Map from "./Map";
import Reject from "./Reject";
import Every from "./Every";
import Sort from "./Sort";
import GroupBy from "./GroupBy";
import ChainingInLodash from "./ChainingInLodash";
import PartsOfAnArray from "./PartsOfAnArray";

const LodashUdemy = (props) => {
  return (
    <div className="container mb-4">
      <Each></Each>
      <Map></Map>
      <Filter></Filter>
      <Reject></Reject>
      <Every></Every>
      <Sort></Sort>
      <GroupBy></GroupBy>
      <ChainingInLodash></ChainingInLodash>
      <PartsOfAnArray></PartsOfAnArray>
    </div>
  );
};

export default LodashUdemy;
