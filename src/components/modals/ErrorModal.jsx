const ErrorModal = ({ message }) => {
  return (
    <dialog>
      <h1>Error</h1>
      <p>{message}</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ErrorModal;
