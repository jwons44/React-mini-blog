import { useState, useRef, useEffect } from "react";

const MyModal = () => {
  const [actionModal, setActionModal] = useState(false);
  const node = useRef();

  useEffect(() => {
    const clickOutside = (e) => {
      // 모달이 열려 있고 모달의 바깥쪽을 눌렀을 때 창 닫기
      if (actionModal && node.current && !node.current.contains(e.target)) {
        setActionModal(false);
      }
    };

    document.addEventListener("mousedown", clickOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [actionModal]);

  return (<div ref={node}>
    <div
      className="flex shrink-0 pointer"
      onClick={() => setActionModal((pre) => !pre)}
    >
      여깅
    </div>
    {actionModal ? (
      <div
        style={{
          position: "fixed",
          backgroundColor: "white",
          padding: "0.625rem",
          border: "1px solid grey",
          zIndex: 10,
          borderRadius: "4px",
        }}
      >
        <div className="p-10">action sheet</div>
        <div className="p-10">action sheet</div>
        <div className="p-10">action sheet</div>
      </div>
    ) : null}
  </div>)
}

export default MyModal;