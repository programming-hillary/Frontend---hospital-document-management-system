import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './DocCard.module.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faDeleteLeft,
  faDownload,
  faEnvelope,
  faShareAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from 'react-share';
import { DocumentCategory } from './document-category';
import { BuilderCategory } from './builder-category';
import { Link } from 'react-router-dom';
import { Popconfirm, Button } from 'antd';
import { useState } from 'react';
import { faFacebook, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

/* eslint-disable-next-line */
export interface DocCardProps {
  icon: IconProp;
  category: DocumentCategory;
  description: string;
  date: string;
  format: string;
  name: string;
  builder_category: BuilderCategory;
}

export function DocCard(this: any, props: DocCardProps) {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const shareElem = () => {
    return (
      <div className={styles.popover}>
      <FacebookShareButton url={'https://www.facebook.com/'}>
        <FontAwesomeIcon icon={faFacebook} />
      </FacebookShareButton>
      <EmailShareButton url={'https://www.facebook.com/'}>
        <FontAwesomeIcon icon={faEnvelope} />
      </EmailShareButton>
      <TelegramShareButton url={'https://www.facebook.com/'}>
        <FontAwesomeIcon icon={faTelegram} />
      </TelegramShareButton>
      <WhatsappShareButton url={'https://www.facebook.com/'}>
        <FontAwesomeIcon icon={faWhatsapp} />
      </WhatsappShareButton>
      </div>
    )
  }

  const content = (
    <div
      style={{
        display: 'flex',
        gap: '.5rem',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Popconfirm
        title="Choose social media app"
        description={shareElem}
        open={open}
        onConfirm={handleOk}
        okButtonProps={{ loading: confirmLoading }}
        onCancel={handleCancel}
        style={{}}
      >
        <a type="button" onClick={showPopconfirm}>
          <FontAwesomeIcon icon={faShareAlt} className={styles.pop_icons} />
        </a>
      </Popconfirm>
      <Link to="" target="_blank" download></Link>
      <Link to="" target="_blank" download>
        <FontAwesomeIcon icon={faDownload} className={styles.pop_icons} />
      </Link>
      <Link to="" target="_blank" download>
        <FontAwesomeIcon icon={faDeleteLeft} className={styles.pop_icons} />
      </Link>
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
        <div className="right-top">
          <h4>{props.format}</h4>
          <div style={{ borderLeft: '6px solid whiite', height: '100%' }}></div>
          <span>{props.date}</span>
        </div>
        <div className="right-bottom">{content}</div>
      </div>
    </div>
  );
}

export default DocCard;
