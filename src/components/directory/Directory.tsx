import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';

import { DirectoryAction } from '../../redux/directory/directory.actions';
import { DirectoryMenuContainer } from './directory.styles';
import { Dispatch } from 'redux';
import MenuItem from '../menu-item/MenuItem';
import { fetchDirectorySections } from '../../redux/directory/directory.action-creators';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory: React.FC = () => {
  const sections = useSelector(useMemo(() => selectDirectorySections, []));
  const dispatch = useDispatch<Dispatch<DirectoryAction>>();

  useEffect(() => {
    dispatch(fetchDirectorySections());
  }, [dispatch]);

  return (
    <DirectoryMenuContainer>
      {sections!.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
