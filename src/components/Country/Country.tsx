import { Link } from 'react-router-dom';
import img from '../../media/images/img.jpg';
import './country.scss';
import '../../index.css';
import DateTime from '../Helpers/DateTime';

const Country: React.FC = () => {
  return (
    <div className="country-box">
      <div className="row">
        <div className="col">
          <div className="country-title-box">
            <div className="country-title-left">
              <h3>Country name</h3>
              <span>breadcrumbs</span>
            </div>
            <div className="country-title-right">
              <DateTime />
              <span>weather</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <img className="country-img" src={img} alt="" />
        </div>
        <div className="col-12 col-md-6">
          <div className="dfc">
            <div className="j46 mb15">
              <span>Description</span>
              <a href="https://www.youtube.com/">
                Check video about this country
              </a>
            </div>
            <span className="mb15">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
            <div>
              <div className="row">
                <div className="col">
                  <div className="dfc">
                    <span>Capital</span>
                    <span>Minsk</span>
                  </div>
                </div>
                <div className="col">
                  <div className="dfc">
                    <span>Stars</span>
                    <span>Star Star Star</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="mt25">
            <h5>Attraction</h5>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div>map</div>
        </div>
      </div>
    </div>
  );
};
export default Country;
