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
import StringFunctions from "./StringFunctions";
import RandomNumbers from "./RandomNumbers";
import Flatten from "./Flatten";
import Challenge1 from "./Challenge1";
import Challenge2ClassNames from "./Challenge2ClassNames";
import Challenge3ReplaceURLParams from "./Challenge3ReplaceURLParms";
import Challenge4BackendErrorMessages from "./Challenge4BackendErrorMessages";
import Challenge5NestedList from "./Challenge5NestedList";
import Homework from "./Homework/Homework";

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
      <StringFunctions></StringFunctions>
      <RandomNumbers />
      <Flatten />
      <Challenge1 />
      <Challenge2ClassNames />
      <Challenge3ReplaceURLParams />
      <Challenge4BackendErrorMessages />
      <Challenge5NestedList />
      <Homework />
    </div>
  );
};

export default LodashUdemy;
