import DocCard from './DocCard/DocCard';
import { useDocumentContext } from '@org.mwashi-mwale/documents_api_service';
import styles from './dash_home.module.css'

/* eslint-disable-next-line */
export interface DashHomeProps {}

export function DashHome(props: DashHomeProps) {
  const documentContext = useDocumentContext();
  return (
    <section className={styles.main_dash}>
      <div className="my_row">
        <p>
          There are more than <span>400</span> Documents
        </p>
      </div>

      <DocCard
        icon={documentContext.icon}
        category={documentContext.category}
        description={documentContext.description}
        date={documentContext.date}
        format={documentContext.format}
        name={documentContext.name}
        builder_category={documentContext.builder_category}
      />
    </section>
  );
}

export default DashHome;
