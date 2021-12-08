//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, SessionProvider } from "uu5g04-hooks";

import Config from "./config/config.js";
import JokeInstanceProvider from "../bricks/jokes-instance-provider";
import JokesInstanceContext from "../bricks/jokes-instance-context";
import SpaReady from "./spa-ready.js";
//@@viewOff:imports

const SpaAuthenticated = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Jokes",
  //@@viewOff:statics

  render() {
    //@@viewOn:render
    return (
      <SpaReady />
    );
    //@@viewOff:render
  }
});

export default SpaAuthenticated;
