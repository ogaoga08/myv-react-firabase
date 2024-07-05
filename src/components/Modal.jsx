export const Modal = (props) => {
  const { show, closeModal } = props;
  const modalArea = () => {
    if (show) {
      return (
        <>
        <div id="overlay" onClick={closeModal}></div>
          <div className="modal-area show">
            <div id="content">
              <p>これがモーダルウィンドウです。</p>
              <button onClick={closeModal}>close</button>
            </div>
          </div>
        </>
      );
    } else {
      return null;
    }
  };

  return <>{modalArea()}</>;
};
