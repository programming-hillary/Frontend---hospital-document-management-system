import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './DocCard.module.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faClose, faDeleteLeft, faDownload, faEdit, faEllipsisV, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';
import { Popover, Button } from 'antd';
import { useState } from 'react';
import FileOptions from './FileOptions';
import { Content } from 'antd/es/layout/layout';

/* eslint-disable-next-line */
export interface DocCardProps {
  icon: IconProp;
  category: string;
  description: string;
  date: string;
  format: string;
}

export function DocCard(props: DocCardProps) {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const content = (
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

  return (
    <div className="doc_card">
      <div className="doc_details">
        <div className="img">
          <FontAwesomeIcon icon={props.icon} className="icon" />
        </div>
        <div className="text">
          <h2>{props.category}</h2>
          <span>{props.description}</span>
        </div>
      </div>
      <div className="doc_format">
        <div className="left">
          <h4>{props.format}</h4>
          <span>{props.date}</span>
        </div>
          <Popover
            placement="bottomRight"
            content={content}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <Button style={{ background: 'none', border: 'none' }}>
              <FontAwesomeIcon icon={faEllipsisV} className="right" />
            </Button>
          </Popover>
        <Outlet />
      </div>
    </div>
  );
}

export default DocCard;
