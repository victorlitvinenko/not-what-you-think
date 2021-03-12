import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from 'react-loader-web';

import Country, { CountryType } from '../components/Country/Country';
import request from '../api/api';

type ParamType = {
  id: string;
};

const CountryPage: React.FC = () => {
  const { id } = useParams<ParamType>();
  const [country, setCountry] = useState<CountryType>();

  useEffect(() => {
    async function fetchData() {
      const data = await request<CountryType>(`countries/${id}`, 'GET');
      setCountry(data);
    }
    fetchData();
  }, [id]);

  return (
    <div className="j5">
      {!country ? (
        <Loader type="Loading" color="#00BFFF" height={300} width={300} />
      ) : (
        <Country countryData={country} />
      )}
    </div>
  );
};

export default CountryPage;
