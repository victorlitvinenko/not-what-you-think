import './header.scss';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header">
        <select>
          <option value="EN">EN</option>
          <option value="RU">RU</option>
          <option value="CN">CN</option>
        </select>
        <input
          type="search"
          className="search__country"
          placeholder=" find country"
        />
        <img src="" alt="logo" />
        <img src="" alt="img user" />
        <p>
          <a href="https://png.icons8.com/firewall/color">Name(Login)</a>
        </p>
        <form>
          <button type="button">Sign out</button>
        </form>
      </div>
    </header>
  );
};
export default Header;
