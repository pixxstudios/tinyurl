import UrlGenerator from '../components/urlgenerator/urlgenerator';
const HomePage = () => {
    const handleOnSubmit = async (e) => {
      e.preventDefault();
      console.log('handleOnSubmit');
      await fetch('http://localhost:7766/generatetinyurl', {
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