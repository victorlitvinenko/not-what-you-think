import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import Loader from 'react-loader-web';

import { CountryType } from '../stores/country-store';
import request from '../api/api';
import Loader from '../components/Loader/Loader';
import Country from '../components/Country/Country';

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
      {!country ? <Loader /> : <Country countryData={country} />}
    </div>
  );
};

export default CountryPage;
