import { createPortal } from "react-dom";
import React, { Fragment } from "react";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/css/modal-video.css";
export const Modal = ({ channel, isOpen, videoId, onClose }) => {
  return (
    <Fragment>
      {createPortal(
        <ModalVideo
          autoplay
          channel={channel}
          isOpen={isOpen}
          videoId={videoId}
          onClose={onClose}
        />,
        document.getElementById("modal-overlay")
      )}
    </Fragment>
  );
};
