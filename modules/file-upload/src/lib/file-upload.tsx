import styles from './file-upload.module.css';
import React, { useRef, useState } from 'react';
import { Button, Modal } from 'antd';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';

/* eslint-disable-next-line */
export interface FileUploadProps {}

export function FileUpload(props: FileUploadProps) {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const draggleRef = useRef<HTMLDivElement>(null);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setLoading(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };
  return (
    <div className={styles['container']}>
      <Button onClick={showModal}>Open Draggable Modal</Button>
      <Modal
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            Draggable Modal
          </div>
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            nodeRef={draggleRef}
            onStart={(event: any, uiData: any) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <FileUpload />
      </Modal>
    </div>
  );
}

export default FileUpload;
