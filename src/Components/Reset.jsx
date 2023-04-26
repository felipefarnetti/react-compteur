const reset = (props) => {
  const remise = [setCounter];
  return (
    <button
      onClick={() => {
        props.setReset(props.remise);
      }}
    >
      +
    </button>
  );
};

export default Reset;
