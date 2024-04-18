import styles from './homepage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBarChart,
  faCog,
  faPeopleGroup,
  faQuestionCircle,
  faSearch,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faDochub } from '@fortawesome/free-brands-svg-icons';
import { Link, Outlet } from 'react-router-dom';
import { FileUpload } from '@org.mwashi-mwale/file-upload';
import { DocumentContext } from '@org.mwashi-mwale/documents_api_service';
import axios from 'axios';
import { Documents } from '@org.mwashi-mwale/documents';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface HomepageProps {}

axios.defaults.baseURL = 'http://loacalhost8080/documents-service/documents';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.put['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.delete['Content-Type'] = 'application/json';
axios.defaults.headers['auth'] = '';

export function Homepage(props: HomepageProps) {
  const [documentData] = useState<Documents>();
  const [name] = useState()
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState()

  const getAllDocuments = async () => {
    setLoading(true)
    try {
      const getAll = await axios({
        method: 'GET',
        url: '/all',
        params: {
          _limits: 10
        },
      });
      setDocuments(getAll.data)
    } catch (e: any) {
      return setError(e);
    } finally {
      setLoading(false);
    }
  };

  const getOneDocument = async (id: string) => {
    setLoading(true)
    try {
      const getOne = await axios.get(id);
      return getOne.data;
    } catch (e: any) {
      return setError(e);
    } finally {
      setLoading(false);
    }
  };

  const uploadOneDocument = async () => {
    setLoading(true)
    try {
      const uploadDoc = await axios.post('/uploadFile');
      return uploadDoc.config;
    } catch (e: any) {
      setError(e);
    }
  };
  
  const uploadMultipleDocuments = async () => {
    setLoading(true)
    try {
      const uploadDoc = await axios.post('/uploadMultipleFiles');
      return uploadDoc.config;
    } catch (e: any) {
      setError(e);
    }
  };

  const downLoadDocuments = async () => {
    setLoading(true)
    try {
      const downloadDoc = await axios.post('/downloadFile' + {name});
      return downloadDoc.config;
    } catch (e: any) {
      setError(e);
    }
  };

  const documentOps = (id: any) => {
    getOneDocument(id)
    getAllDocuments()
    uploadOneDocument()
    uploadMultipleDocuments()
    downLoadDocuments()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.my_container}>
        <nav>
          <div className={styles.navbar}>
            <div className={styles.logo}>
              <img src="/logos/HosDocs__logo-with-text.png" alt="Logo" />
            </div>
            <ul>
              <li>
                <Link to="./">
                  <FontAwesomeIcon icon={faUser} className={styles.icon} />
                  <span className={styles.navItem}>Home</span>
                </Link>
              </li>
              <li>
                <Link to="analytics">
                  <FontAwesomeIcon icon={faBarChart} className={styles.icon} />
                  <span className={styles.navItem}>All Documents</span>
                </Link>
              </li>
              <li>
                <Link to="my_docs">
                  <FontAwesomeIcon icon={faDochub} className={styles.icon} />
                  <span className={styles.navItem}>Add Documenents</span>
                </Link>
              </li>
              <li>
                <Link to="my_history">
                  <FontAwesomeIcon
                    icon={faPeopleGroup}
                    className={styles.icon}
                  />
                  <span className={styles.navItem}>Meet</span>
                </Link>
              </li>
              <li>
                <Link to="settings">
                  <FontAwesomeIcon icon={faCog} className={styles.icon} />
                  <span className={styles.navItem}>Setting</span>
                </Link>
              </li>
              <li>
                <Link to="help">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className={styles.icon}
                  />
                  <span className={styles.navItem}>Help</span>
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.logout}>
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    className={styles.icon}
                  />
                  <span className={styles.navItem}>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <section className={styles.my_main}>
          <div className={styles.mainTop}>
            <p>Take care of what matters!</p>
          </div>
          <div className={styles.mainBody}>
            {/*<SearchProvider>*/}
            {/*<VersionsProvider>*/}
            <h1>Hospital Documents</h1>

            <div className={styles.search_bar}>
              <div className={styles.searchInputBar}>
                <input
                  type="search"
                  placeholder="Search documents here..."
                  className={styles.inputText}
                />
                <Link to="search">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className={styles.searchBtn}
                  />
                </Link>
              </div>
              <select name="category" id="">
                <option>-- SELECT DOCUMENT CATEGORY --</option>
                <option>Hospital Documents</option>
                <option>Doctor's Documents</option>
                <option>Patient Documents</option>
              </select>
              <select name="filter" id="filter" className={styles.filter}>
                <option>-- FILTERS --</option>
                <option>Health Surveys</option>
                <option>Information Systems</option>
                <option>----------------------</option>
                <option>Operative Reportss</option>
                <option>Progress Notes</option>
                <option>----------------------</option>
                <option>Consent Forms</option>
                <option>Discharge Summary</option>
                <option>Insurance Forms</option>
                <option>Medical Reports</option>
                <option>Medical Tests</option>
                <option>medical Status Exams</option>
                <option>----------------------</option>
              </select>
            </div>
            <FileUpload />
            <DocumentContext.Provider value={documents}>
              <Outlet />
            </DocumentContext.Provider>
            {/*</VersionsProvider>*/}
            {/*</SearchProvider>*/}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Homepage;
