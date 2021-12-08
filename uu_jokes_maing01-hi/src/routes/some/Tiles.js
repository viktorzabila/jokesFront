//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Uu5Tiles from "uu5tilesg02";

import CustomTile from "./custom-tile";
import { useContextModal } from "./common/modal-manager";
import { useSome } from "./context/use-some";
import { SomeUpdateHeader, SomeUpdateControls, SomeUpdateForm } from "./some-update-form/some-update-form";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Tiles",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const Tiles = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    data: UU5.PropTypes.object,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
    const [open, close, showAlert, getConfirmRef] = useContextModal();

    const { data, handlerMap: listHandlerMap } = useSome();
    //@@viewOff:hooks

    //@@viewOn:private
    function handleOpenDetailsModal(data) {
      open({
        header: <SomeUpdateHeader />,
        content: <SomeUpdateForm data={data} closeModal={close} showAlert={showAlert} />,
        footer: <SomeUpdateControls />,
      });
    }

    function handleOpenCreateModal() {
      open({
        header: <SomeUpdateHeader />,
        content: <SomeUpdateForm  isCreateForm={true} listHandlerMap={listHandlerMap} closeModal={close} showAlert={showAlert} />,
        footer: <SomeUpdateControls isCreateForm={true}/>,
      });
    }

    const getActions = () => [
      {
        active: true,
        icon: "mdi-plus-circle",
        content: "Add new joke",
        colorSchema: "primary",
        bgStyle: "filled",
        onClick: handleOpenCreateModal,
      }
    ]
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(
      props,
      STATICS
    );

    function handleItemSearch(item, value) {
      let fragments = value.split(/[\s,.-;:_]/);
      return fragments.some((frag) => {
        return item.data.name.toLowerCase().indexOf(frag.toLowerCase()) !== -1;
      });
    }

    return  (
      <Uu5Tiles.ControllerProvider
        data={data}
      >
        <UU5.Bricks.Container >
          <UU5.Bricks.Box
            colorSchema="blue"
          >
        <Uu5Tiles.ActionBar
          onItemSearch={handleItemSearch}
          actions={getActions()}
        />
            <Uu5Tiles.Grid
              tileMinWidth={200}
              tileMaxWidth={400}
              tileSpacing={40}
              rowSpacing={40}
            >
          <CustomTile getConfirmRef={getConfirmRef} handleOpenDetailsModal={handleOpenDetailsModal} />
            </Uu5Tiles.Grid>
          </UU5.Bricks.Box>
        </UU5.Bricks.Container>
      </Uu5Tiles.ControllerProvider>
    );
    //@@viewOff:render
  },
});

export default Tiles;
