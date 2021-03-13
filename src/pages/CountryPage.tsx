import { useParams } from 'react-router-dom';

import { Country as CountryType } from '../stores/country';
import Country from '../components/Country/Country';

type ParamType = {
  id: string;
};

const CountryPage: React.FC = () => {
  const { id } = useParams<ParamType>();
  const country = new CountryType(id);

  return (
    <div className="j5">
      <Country country={country} />
    </div>
  );
};

export default CountryPage;
