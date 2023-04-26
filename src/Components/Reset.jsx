const reset = (props) => {
  const remise = "0";
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
