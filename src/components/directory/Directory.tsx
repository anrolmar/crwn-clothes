import './directory.scss';

import DirectoryContext from '../../contexts/directory/directory.context';
import MenuItem from '../menu-item/MenuItem';
import { useContext } from 'react';

const Directory: React.FC = () => {
  const sections = useContext(DirectoryContext);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};

export default Directory;
