import Config from "./config/config";

const card = () => Config.Css.css`
  padding: 20px;
  height: 300px;
`

const button = () => Config.Css.css`
  padding: 10px 20px;
  display: block;
  margin: auto;
`

const buttonDelete = () => Config.Css.css`
  margin-top: 10px;
  margin-left: 67px
`

const text = () => Config.Css.css`
  margin-bottom: 10px;
  text-align: center;
`

const header = () => Config.Css.css`
  margin: 0 0 0 350px;
`

const flex = () => Config.Css.css`
  display: flex;
`

export default {
  card,
  button,
  text,
  header,
  flex,
  buttonDelete
};
