import './loading-page.less';
import './loader';

/* eslint-disable-next-line */
export interface LoadingPageProps {}

export function LoadingPage(props: LoadingPageProps) {
  return (
    <div>
      <div id="particles-background" className="vertical-centered-box"></div>
      <div id="particles-foreground" className="vertical-centered-box"></div>

      <div className="vertical-centered-box">
        <div className="content">
          <div className="loader-circle"></div>
          <div className="loader-line-mask">
            <div className="loader-line"></div>
          </div>
          Logo
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
