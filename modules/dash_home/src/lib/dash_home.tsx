import { useContext } from 'react';
import './dash-home.css';
import DocCard from './DocCard/DocCard';
import { DocumentsApiService } from '@org.mwashi-mwale/documents_api_service';

/* eslint-disable-next-line */
export interface DashHomeProps {}


export function DashHome(props: DashHomeProps) {
 const documentContext = useContext(DocumentsApiService)
  return (
    <section className="main_dash">
      <div className="row">
        <p>
          There are more than <span>400</span> Documents
        </p>
        <a href="#">See all</a>
      </div>

      <DocCard
        icon={documentContext!.icon}
        category={documentContext!.category}
        description={documentContext!.description}
        date={documentContext!.date}
        format={documentContext!.format}
      />
    </section>
  );
}

export default DashHome;
