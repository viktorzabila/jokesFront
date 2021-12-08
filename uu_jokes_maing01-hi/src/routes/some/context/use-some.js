//@@viewOn:imports
import { useContext } from "uu5g04-hooks";
import Context from "./some-context";
//@@viewOff:imports

export function useSome() {
  return useContext(Context);
}

export default useSome;
