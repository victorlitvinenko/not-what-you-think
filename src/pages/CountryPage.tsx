import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

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
      <Country id={id} country={country} />
    </div>
  );
};

export default observer(CountryPage);
