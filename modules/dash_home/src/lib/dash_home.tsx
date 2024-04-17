import './dash-home.css';
import DocCard from './DocCard/DocCard';
import { useDocumentContext } from '@org.mwashi-mwale/documents_api_service';

/* eslint-disable-next-line */
export interface DashHomeProps {}

export function DashHome(props: DashHomeProps) {
  const documentContext = useDocumentContext();
  return (
    <section className="main_dash">
      <div className="row">
        <p>
          There are more than <span>400</span> Documents
        </p>
        <a href="#">See all</a>
      </div>

      <DocCard
        icon={documentContext[0]!.at(0)!.icon}
        category={documentContext[0]!.at(1)!.category}
        description={documentContext[0]!.at(2)!.description}
        date={documentContext[0]!.at(3)!.date}
        format={documentContext[0]!.at(4)!.format}
        name={documentContext[0]!.at(5)!.name}
        builder_category={documentContext[0]!.at(6)!.builder_category}
      />
    </section>
  );
}

export default DashHome;
