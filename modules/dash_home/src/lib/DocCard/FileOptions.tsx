import { useState } from 'react';
import styles from './FileOptions.module.css';
import { Popover, Button, Divider } from 'antd';
import {
  faClose,
  faDeleteLeft,
  faDownload,
  faEdit,
  faEllipsisV,
  faShare,
  faShareAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* eslint-disable-next-line */
export interface FileOptionsProps {}

export function FileOptions(props: FileOptionsProps) {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <div style={
      {display: 'flex', flexDirection: 'column', gap: '.5rem', alignItems: 'center', justifyContent: 'center'}
    }>
      <FontAwesomeIcon icon={faShareAlt} className={styles.pop_icons} />
      <FontAwesomeIcon icon={faDownload} className={styles.pop_icons} />
      <FontAwesomeIcon icon={faEdit} className={styles.pop_icons} />
      <FontAwesomeIcon icon={faDeleteLeft} className={styles.pop_icons} />
      <a onClick={hide}>
        <FontAwesomeIcon icon={faClose} className={styles.pop_close} />
      </a>
    </div>
  );
}

export default FileOptions;
