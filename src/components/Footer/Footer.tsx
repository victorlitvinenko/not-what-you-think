import './footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>Created by </p>
      <a href="https://github.com/victorlitvinenko/">Victor</a>
      <a href="https://github.com/goonext/">Valeriy</a>
      <a href="https://github.com/cqxg/">Igor</a>
      <a href="https://github.com/skypneuma">Vyacheslav</a>
      <a href="https://github.com/vladimirleontev281">Vladimir</a>
      <a href="https://github.com/sergeytestweb/">Sergey</a>
      <p> 2k21</p>
      <a href="https://rs.school/js/">
        <img
          width="55"
          src="https://rs.school/images/rs_school_js.svg"
          alt="rss"
          style={{ marginLeft: '25px', marginTop: '5px' }}
        />
      </a>
    </footer>
  );
};
export default Footer;
