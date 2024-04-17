import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './DocCard.module.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faDeleteLeft,
  faDownload,
  faShareAlt,
} from '@fortawesome/free-solid-svg-icons';
import { DocumentCategory } from './document-category';
import { BuilderCategory } from './builder-category';

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
  const blob = new Blob();
  const fileDownloadUrl = URL.createObjectURL(blob);
  this.setState({ fileDownloadUrl: fileDownloadUrl }, () => {
    this.dofileDownload.click();
    URL.revokeObjectURL(fileDownloadUrl);
    this.setState({ fileDownloadUrl: '' });
  });

  const content = (
    <div
      style={{
        display: 'flex',
        gap: '.5rem',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <a
        download={this.fileNames[this.state.fileType]}
        href={this.state.fileDownloadUrl}
        ref={(e) => (this.dofileDownload = e)}
      >
        <FontAwesomeIcon icon={faShareAlt} className={styles.pop_icons} />
      </a>
      <a
        download={this.fileNames[this.state.fileType]}
        href={this.state.fileDownloadUrl}
        ref={(e) => (this.dofileDownload = e)}
      >
        <FontAwesomeIcon icon={faDownload} className={styles.pop_icons} />
      </a>
      <a
        download={this.fileNames[this.state.fileType]}
        href={this.state.fileDownloadUrl}
        ref={(e) => (this.dofileDownload = e)}
      >
        <FontAwesomeIcon icon={faDeleteLeft} className={styles.pop_icons} />
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
