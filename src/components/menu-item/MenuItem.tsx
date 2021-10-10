import {
  BackgroundImageContainer,
  ContentContainer,
  ContentSubtitle,
  ContentTitle,
  MenuItemContainer,
} from './menu-item.styles';
import { useHistory, useRouteMatch } from 'react-router-dom';

interface MenuItemProps {
  imageUrl: string;
  linkUrl: string;
  size?: string;
  title: string;
}

export type MenuProps = MenuItemProps;

const MenuItem: React.FC<MenuProps> = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImageContainer className="background-image" imageUrl={imageUrl} />
      <ContentContainer className="content">
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
