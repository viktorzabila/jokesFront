//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsiValues } from "uu5g04-hooks";
import "uu5g04-forms";
import Lsi from "./joke-create-form.lsi";
import Config from "./config/config";
//@@viewOff:imports

const JokeCreateForm = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "JokeCreateForm",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSubmit: UU5.PropTypes.func,
    onCancel: UU5.PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSubmit: () => {},
    onCancel: () => {},
  },
  //@@viewOff:defaultProps

  render({ onSave, onCancel }) {
    //@@viewOn:hooks
    const inputLsi = useLsiValues(Lsi);
    //@@viewOn:hooks

    //@@viewOn:render
    return (
      <UU5.Forms.Form onSave={onSave} onCancel={onCancel} labelColWidth="xs-12 m-3" inputColWidth="xs-12 m-9">
        <UU5.Forms.Text label={inputLsi.name} name="name" />
        <UU5.Forms.Text label={inputLsi.text} name="text" />
        <UU5.Forms.Controls />
      </UU5.Forms.Form>
    );
    //@@viewOff:render
  },
});

export default JokeCreateForm;
