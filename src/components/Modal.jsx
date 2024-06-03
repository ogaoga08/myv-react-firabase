export const Modal = (props) => {
  const { show, closeModal } = props;
  const modalArea = () => {
    if (show) {
      return (
        <div className="modal-area">
          <div id="overlay" onClick={closeModal}></div>
          <div id="content">
            <p>これがモーダルウィンドウです。</p>
            <button onClick={closeModal}>close</button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return <>{modalArea()}</>;
};
