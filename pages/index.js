import UrlGenerator from '../components/urlgenerator/urlgenerator';
const HomePage = () => {
    const handleOnSubmit = () => {
      console.log('handleOnSubmit');
    };

    return <UrlGenerator onSubmit={handleOnSubmit} />
  }
  
  export default HomePage