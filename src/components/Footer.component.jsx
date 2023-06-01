import footerImage from '../assets/images/footerbg.jpg'

const FooterComponent = () => {
  return (
    <footer style={{backgroundImage: `url(${footerImage})`}}>
      <div className="wrapper">
        <div className="footer-list">
          <div className="item">
            <div className="logo">
              <h2>LOGO</h2>
            </div>

            <div className="desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident natus nisi, nam, quod eveniet id sequi facere magni qui
              alias minus unde eligendi culpa modi sint ullam ipsum pariatur
              sunt!
            </div>
          </div>

          <div className="item">
            <div className="f-title">Useful Links</div>

            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="advanture.html">Adventures</a>
              </li>
              <li>
                <a href="blog">Blog</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="item">
            <div className="f-title">Support Links</div>

            <ul>
              <li>
                <a href="index.html">Ask a Question</a>
              </li>
              <li>
                <a href="about.html">Delivery Terms</a>
              </li>
              <li>
                <a href="adventures.html">Careers</a>
              </li>
            </ul>
          </div>

          <div className="item">
            <div className="f-title">Support Links</div>

            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                Shantinager, Tinkune, Kathmandu 44000
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                example@example.com
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                (977) 9876543210
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <span>© Copyright 2022 Company </span>

          <div className="icons">
            <div className="icon">
              <a href="">
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            <div className="icon">
              <a href="">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>

            <div className="icon">
              <a href="">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>

            <div className="icon">
              <a href="">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
