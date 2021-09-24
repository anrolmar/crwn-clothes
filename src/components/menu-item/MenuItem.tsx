import './menu-item.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface MenuItemProps {
  imageUrl: string;
  linkUrl: string;
  size?: string;
  title: string;
}

const MenuItem: React.FC<MenuItemProps & RouteComponentProps> = ({
  title,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}) => {
  return (
    <div className={size ? `${size} menu-item` : `menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
