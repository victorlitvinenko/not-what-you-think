import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from 'react-loader-web';
import Country from '../components/Country/Country';
import request from '../api/api';

const CountryPage: React.FC = () => {
  const { id }: any = useParams();
  const [country, setCountry] = useState();
  const test = false;

  useEffect(() => {
    async function fetchData() {
      const data: any = await request(`countries/${id}`, 'GET');
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
