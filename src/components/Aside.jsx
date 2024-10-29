import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";

const Aside = () => {
  return (
    <aside className="sidebar">
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src={"/images/saad.jpg"}
              alt="Saad Najam"
              width="80"
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Richard hanrick">
              Saad Najam
            </h1>

            <p className="title">Web developer</p>
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <GiClawSlashes />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <GiMailbox/>
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:richard@example.com" className="contact-link">
                  syedsaadnajam2006@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiPhone/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+12133522795" className="contact-link">
                  +92 3402329190
                </a>
              </div>
            </li>

           

            <li className="contact-item">
              <div className="icon-box">
                <GiMayanPyramid/>
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Karachi</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="https://github.com/Saad140606/" className="social-link">
                <icon-icon name="logo-github"> Github</icon-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="https://www.linkedin.com/in/syed-saad-najam-02546a302" className="social-link">
                <ion-icon name="logo-linkedin">LinkedIn</ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="https://www.instagram.com/btw_itx.saad/profilecard/?igsh=d2cxOGk5azU1MWQz" className="social-link">
                <ion-icon name="logo-instagram">Insta</ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
  )
}

export default Aside