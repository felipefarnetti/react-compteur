const Increment = (props) => {
  return (
    <button
      onClick={() => {
        props.setCounter(props.counter + 1);
      }}
    >
      +
    </button>
  );
};

export default Increment;
