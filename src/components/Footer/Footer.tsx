import { observer } from 'mobx-react-lite';

import UiStore from '../../stores/ui-store';
import translations from '../../libs/translations';

import './footer.scss';

const Footer: React.FC = () => {
  const t = translations[UiStore.language];

  return (
    <footer className="footer">
      <div className="footer__content">
        <div>{t.createdBy}</div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/victorlitvinenko/"
          className="rollover__vl"
        >
          Victor
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/goonext/"
          className="rollover__vd"
        >
          Valeriy
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/cqxg/"
          className="rollover__ii"
        >
          Ihar
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/skypneuma"
          className="rollover__vs"
        >
          Viacheslav
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/vladimirleontev281"
          className="rollover__vld"
        >
          Vladimir
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/sergeytestweb/"
          className="rollover__sp"
        >
          Sergey
        </a>
      </div>
      <div className="footer__year_box">
        <a target="_blank" rel="noreferrer" href="https://rs.school/js/">
          <img
            width="55"
            src="https://rs.school/images/rs_school_js.svg"
            alt="rss"
            style={{ marginLeft: '25px', marginTop: '5px' }}
          />
        </a>
        <div className="footer__year"> in 2k21</div>
      </div>
    </footer>
  );
};
export default observer(Footer);
