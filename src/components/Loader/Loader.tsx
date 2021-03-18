import './loader.scss';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="loader__ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
