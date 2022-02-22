import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";

// import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

export function Prompt(props) {
  const { when, onOK, onCancel, title, okText, cancelText, message } = props;

  const history = useHistory();

  // const navigate = useNavigate();

  const [showPrompt, setShowPrompt] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (when) {
      history.block((prompt) => {
        setCurrentPath(prompt.pathname);
        setShowPrompt(true);
        return "true";
      });
    } else {
      history.block(() => {});
    }

    return () => {
      history.block(() => {});
    };
  }, [history, when]);

  const handleOK = useCallback(async () => {
    if (onOK) {
      const canRoute = await Promise.resolve(onOK());
      if (canRoute) {
        history.block(() => {});
        history.push(currentPath);
      }
    }
  }, [currentPath, history, onOK]);

  const handleCancel = useCallback(async () => {
    if (onCancel) {
      const canRoute = await Promise.resolve(onCancel());
      if (canRoute) {
        history.block(() => {});
        history.push(currentPath);
      }
    }
    setShowPrompt(false);
  }, [currentPath, history, onCancel]);

  return(<div></div>);
  // return showPrompt ? (
  //   <Modal
  //     title={title}
  //     visible={showPrompt}
  //     onOk={handleOK}
  //     okText={okText}
  //     onCancel={handleCancel}
  //     cancelText={cancelText}
  //     closable={true}
  //   >
  //     {message}
  //   </Modal>
  // ) : null;
}