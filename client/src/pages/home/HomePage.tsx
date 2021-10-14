import Directory from '../../components/directory/Directory';
import { HomePageContainer } from './homepage.styles';

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
