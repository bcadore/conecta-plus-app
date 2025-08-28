import BotaoAddContato from '../../components/BotaoAddContato';
import AsideContainer from '../../containers/AsideContainer';
import ContactsListContainer from '../../containers/ContactsListContainer';

const Home = () => {
  return (
    <>
      <AsideContainer />
      <ContactsListContainer />
      <BotaoAddContato />
    </>
  );
};

export default Home;
