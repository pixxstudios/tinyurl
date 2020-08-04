import UrlGenerator from '../components/urlgenerator/urlgenerator';
import dotenv from 'dotenv';

dotenv.config();

const HomePage = () => {
    const handleOnSubmit = async (e) => {
      e.preventDefault();
      await fetch(`${process.env.BASE_URL}:${process.env.PORT}/generatetinyurl`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: 'www.google.com' })}) 
        .then(res => res.json())
        .then(r => console.log(r))
        .catch(err => console.log('error ', err));
    };

    return <UrlGenerator onSubmit={handleOnSubmit} />
  }
  
  export default HomePage