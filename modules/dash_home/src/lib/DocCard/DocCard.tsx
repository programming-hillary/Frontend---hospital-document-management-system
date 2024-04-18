import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './DocCard.module.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faDownload,
  faEnvelope,
  faShareAlt,
  faTrash,
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
import { Popover } from 'antd';
import { useState } from 'react';
import {
  faFacebook,
  faTelegram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

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
  const [docData] = useUserContext()

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setTimeout(() => {
      setOpen(false);
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
    );
  };

  const content = (
    <div
      style={{
        display: 'flex',
        gap: '.5rem',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Popover
        title=""
        
        open={open}
        style={{width: 300, height: 300}}
      >
        <a type="button" onClick={showPopconfirm}>
        </a>
      </Popover>
      <Popover
        content={shareElem}
        title="Choose social media app"
        open={open}
        placement="bottom"
        onOpenChange={handleOpenChange}
      >
          <FontAwesomeIcon icon={faShareAlt} className={styles.pop_icons} />
      </Popover>
      <Link to="" target="_blank" download></Link>
      <Link to="" target="_blank" download>
        <FontAwesomeIcon icon={faDownload} className={styles.pop_icons} />
      </Link>
      <Link to="" target="_blank" download>
        <FontAwesomeIcon icon={faTrash} className={styles.pop_icons} />
      </Link>
    </div>
  );

  return (
      <div className={styles.doc_card}>
      <div className={styles.doc_details}>
        <div className={styles.img}>
          <FontAwesomeIcon icon={props.icon} className={styles.icon} />
        </div>
        <div className={styles.text}>
          <h2>{props.category}</h2>
          <span>{props.description}</span>
        </div>
      </div>
      <div className={styles.doc_format}>
        <div className={styles.rightTop}>
          <h4>{props.format}</h4>
          <div style={{ borderLeft: '6px solid whiite', height: '100%' }}></div>
          <span>{props.date}</span>
        </div>
        <div className={styles.rightBottom}>{content}</div>
      </div>
    </div>    
  );
}

export default DocCard;
function useUserContext(): [any] {
  throw new Error('Function not implemented.');
}

