//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent, useDataList, useState, useRef, useContext } from "uu5g04-hooks";
import "uu_plus4u5g01-bricks";

import Calls from "calls";

import Config from "../../bricks/config/config.js";

import Tiles from "./Tiles";
import DataListStateResolver from "./common/data-list-state-resolver";
import SomeLoader from "./some-loader";
import SomeContext from "./context/some-context";
import { ModalManager } from "./common/modal-manager";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Some",
  //@@viewOff:statics
};

export const Some = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  //@@viewOn:render
  render() {
    return (
      <ModalManager>
        <SomeLoader>
          <SomeContext.Consumer>
            {
              (dataListResult) => {
                return(
                  <DataListStateResolver dataList={dataListResult}>
                    <Tiles />
                  </DataListStateResolver>
                )
              }
            }
          </SomeContext.Consumer>
        </SomeLoader>
      </ModalManager>
    );
  },
  //@@viewOff:render
});

export default Some;
