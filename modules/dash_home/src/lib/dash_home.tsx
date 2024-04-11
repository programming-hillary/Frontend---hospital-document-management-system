import {
  faGoogleDrive,
  faGoogle,
  faFacebook,
  faGit,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './dash_home.module.css';
import './dash-home.css';
import DocCard from './DocCard/DocCard';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

/* eslint-disable-next-line */
export interface DashHomeProps {}

export function DashHome(props: DashHomeProps) {
  return (
    <section className="main_dash">
      <div className="row">
        <p>
          There are more than <span>400</span> Documents
        </p>
        <a href="#">See all</a>
      </div>

      <DocCard icon={faFilePdf} category="Kamau's discharge" description="Doctor's Document" date="20th May 2024" format="PDF" />

    </section>
  );
}

export default DashHome;
