//@@viewOn:imports
import "uu5g04-bricks";
import { createVisualComponent } from "uu5g04-hooks";
import "uu_plus4u5g01-bricks";

import Config from "./config/config.js";
import JokeList from "../bricks/joke-list";
import JokeProvider from "../bricks/joke-provider";
import JokeCreate from "../bricks/joke-create";
//@@viewOff:imports
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Home",
  //@@viewOff:statics
};


export const Home = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render() {
    return <div>Welcome in uuJokes</div>;
  }
});

export default Home;
