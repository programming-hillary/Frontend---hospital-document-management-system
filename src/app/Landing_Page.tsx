import Header from './header/header/header'
import Banner from './banner/banner'
import Footer from './footer/footer'

import styles from './landing-page.module.css'

const Landing_Page = () => {

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.my_container}>
          <div className="my_row">
            <div className="my_header">
              <Header />
            </div>
          </div>
          <div className="my_row">
            <div className="my_banner">
              <Banner />
            </div>
          </div>
          <div className="my_row">
            <div className="my_footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing_Page
