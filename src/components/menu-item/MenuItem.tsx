import '../../styles/menu-item.scss';

interface MenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, imageUrl, size }) => {
  return (
    <div className={size ? `${size} menu-item` : `menu-item`}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
