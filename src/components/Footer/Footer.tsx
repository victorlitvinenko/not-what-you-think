import './footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div>Created by </div>
        <a href="https://github.com/victorlitvinenko/" className="rollover__vl">
          Victor
        </a>
        <a href="https://github.com/goonext/" className="rollover__vd">
          Valeriy
        </a>
        <a href="https://github.com/cqxg/" className="rollover__ii">
          Ihar
        </a>
        <a href="https://github.com/skypneuma" className="rollover__vs">
          Vyacheslav
        </a>
        <a
          href="https://github.com/vladimirleontev281"
          className="rollover__vld"
        >
          Vladimir
        </a>
        <a href="https://github.com/sergeytestweb/" className="rollover__sp">
          Sergey
        </a>
        <div> in 2k21</div>
      </div>
      <div>
        <a href="https://rs.school/js/">
          <img
            width="55"
            src="https://rs.school/images/rs_school_js.svg"
            alt="rss"
            style={{ marginLeft: '25px', marginTop: '5px' }}
          />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
