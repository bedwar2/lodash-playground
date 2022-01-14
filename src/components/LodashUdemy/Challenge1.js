import React from "react";
import { flattenDeep, chain, map } from "lodash";
import { FunctionInfo } from "../shared/FunctionInfo";
import { ExecutionOutput } from "../shared/ExecutionOutput";
import { SampleCode } from "../shared/SampleCode";

const Challenge1 = () => {
  const loc = [
    {
      location_key: [32, 22, 11],
      autoassign: 1,
    },
    {
      location_key: [41, 42],
      autoassign: 1,
    },
  ];

  const bulkConfig = [
    {
      dataValues: {
        config_key: 100,
      },
    },
    {
      dataValues: {
        config_key: 200,
      },
    },
  ];

  /* Expected output 

  [{config_key: 100, location_key: 32, autoassign: 1}...]
  */

  const getOutput = () => {
    return flattenDeep(
      map(loc, (locItem, index) => {
        const configKey = bulkConfig[index].dataValues.config_key;
        return map(locItem.location_key, (num) => {
          return {
            location_key: num,
            config_key: configKey,
            autoassign: locItem.autoassign,
          };
        });
      })
    );
  };

  const getConfigs = (locEl, index) => {
    return map(locEl.location_key, (locationKey) => {
      return {
        location_key: locationKey,
        config_key: bulkConfig[index].dataValues.config_key,
        autoassign: locEl.autoassign,
      };
    });
  };

  const alternateApproach = () => {
    return chain(loc).map(getConfigs).flatten().value();
  };

  const description = `Challenge 1 - using map`;

  const codeBlock = `
  const loc = [
    {
      location_key: [32, 22, 11],
      autoassign: 1
    },
    {
      location_key: [41, 42],
      autoassign: 1
    }
  ];

  const bulkConfig = [
      {
          dataValues: {
              config_key: 100
          }
      },
      {
          dataValues: {
              config_key: 200
          }
      }
  ]


  /* Expected output 

  [{config_key: 100, location_key: 32, autoassign: 1}...]
  */

  const getOutput = () => {
    return flattenDeep(
      map(loc, (locItem, index) => {
        const configKey = bulkConfig[index].dataValues.config_key;
        return map(locItem.location_key, (num) => {
          return {
            location_key: num,
            config_key: configKey,
            autoassign: locItem.autoassign,
          };
        });
      })
    );
  };
  `;

  return (
    <div>
      <FunctionInfo heading="Challenge 1" description={description} />

      <SampleCode code={codeBlock}></SampleCode>
      <ExecutionOutput
        componentHtml={
          <>
            <h3>Challenge 1 Output</h3>
            <div>{JSON.stringify(getOutput())}</div>

            <h3>Instructor Approach</h3>
            <div>{JSON.stringify(alternateApproach())}</div>
          </>
        }
      ></ExecutionOutput>
    </div>
  );
};

export default Challenge1;
