//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Css from "./custom-tile.css.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CustomTile",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const CustomTile = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    data: UU5.PropTypes.object,
    handleOpenDetailsModal: UU5.PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { handleOpenDetailsModal, data: joke } = props;
    //@@viewOn:private
    const confirm = props.getConfirmRef();

    // function handleOpenConfirmModal() {
    //   return {
    //     onRefuse: () => console.log(joke),
    //     onConfirm: handlerMap.delete,
    //     header: "Cookies",
    //     content: <UU5.Bricks.P>Are you sure you want to delete a joke.</UU5.Bricks.P>,
    //     confirmButtonProps: { content: "Enter", colorSchema: "green" },
    //     refuseButtonProps: { content: "Leave page", colorSchema: "danger" },
    //     confirmButtonLeft: true,
    //   };
    // }
    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(
      props,
      STATICS
    );

    return currentNestingLevel ? (
      <div {...attrs}>
        <UU5.Bricks.Card className={Css.card()} bgStyle="filled">
        <UU5.Bricks.Text content={joke?.data?.name} className={Css.text()}/>
        <UU5.Bricks.Text content={joke?.data?.id}  className={Css.text()}/>
        <UU5.Bricks.Text content={joke?.data?.uuIdentityName}  className={Css.text()}/>

        <UU5.Bricks.Button
          className={Css.button()} size="m" borderRadius="5px" colorSchema="purple"
          onClick={() => handleOpenDetailsModal(joke)}
        >
          Update
          <UU5.Bricks.Icon icon="mdi-apple"/>
        </UU5.Bricks.Button>

        <UU5.Bricks.Button
          className={Css.buttonDelete()} size="m" borderRadius="5px" colorSchema="purple"
          onClick={() => {
            return confirm.open({
              header: <UU5.Bricks.Header level={4} content="Delete joke" />,
              content: <UU5.Bricks.Div>Are you sure you want to delete joke?</UU5.Bricks.Div>,
              onRefuse: () => confirm.close(),
              onConfirm: joke?.handlerMap?.delete
            })
          }}
        >
          DELETE
        </UU5.Bricks.Button>
        </UU5.Bricks.Card>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default CustomTile;
