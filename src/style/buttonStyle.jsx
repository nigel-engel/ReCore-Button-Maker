export default function buttonStyle() {
  const [buttonColor, setButtonColor] = useState("#0550ae");

  const width = useInputLogic(0);
  const height = useInputLogic(0);
  const paddingX = useInputLogic(0);
  const paddingY = useInputLogic(0);

  const buttonStyle = {
    backgroundColor: buttonColor,
    width: `${parseInt(width.value) || 0}px`,
    height: `${parseInt(height.value) || 0}px`,
    paddingLeft: `${parseInt(paddingX.value) || 0}px`,
    paddingRight: `${parseInt(paddingX.value) || 0}px`,
    paddingTop: `${parseInt(paddingY.value) || 0}px`,
    paddingBottom: `${parseInt(paddingY.value) || 0}px`,
  };
}
