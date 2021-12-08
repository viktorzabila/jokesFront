//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createComponent, useDataList, useState, useRef, useContext } from "uu5g04-hooks";
import "uu_plus4u5g01-bricks";

import Config from "./config/config";

import SomeContext from "./context/some-context";

import Calls from "calls";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "SomeLoader",
  //@@viewOff:statics
};

export const SomeLoader = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  //@@viewOn:render
  render(props) {
    const dataListResult = useDataList({
      handlerMap: {
        load: Calls.listJokes,
        create: Calls.createJoke
      },
      itemHandlerMap: {
        update: Calls.updateJoke,
        delete: Calls.deleteJoke
      }
    });

    return (
      <SomeContext.Provider value={dataListResult}>{props.children}</SomeContext.Provider>
    );
  },
  //@@viewOff:render
});

export default SomeLoader;
