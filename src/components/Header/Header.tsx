import './header.scss';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header">
        <div className="block">
          <select className="select">
            <option value="EN">EN 🇬🇧</option>
            <option value="RU">RU 🇷🇺</option>
            <option value="CH">中國 🇨🇳</option>
          </select>
          <input
            type="search"
            className="search__country"
            placeholder=" find country"
          />
        </div>
        <img src="" alt="logo" />
        <div className="block">
          <img src="" alt="img user" />
          <a href="https://png.icons8.com/firewall/color">Name(Login)</a>
          <button type="button">Sign out</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
