import { DirectoryAction } from '../../redux/directory/directory.actions';
import { DirectoryMenuContainer } from './directory.styles';
import { Dispatch } from 'redux';
import { ISection } from '../../shared/models';
import MenuItem from '../menu-item/MenuItem';
import { RootState } from '../../redux/root.reducers';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchDirectorySections } from '../../redux/directory/directory.action-creators';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { useEffect } from 'react';

interface DirectoryProps {
  sections?: ISection[];
  fetchDirectorySections?: () => void;
}

const Directory: React.FC<DirectoryProps> = ({ sections, fetchDirectorySections }) => {
  useEffect(() => {
    fetchDirectorySections!();
  }, [fetchDirectorySections]);

  return (
    <DirectoryMenuContainer>
      {sections!.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

interface DirectorySelectorProps {
  sections: ISection[];
}

const mapStateToProps = createStructuredSelector<RootState, DirectoryProps, DirectorySelectorProps>({
  sections: selectDirectorySections,
});

const mapDispatchToProps = (dispatch: Dispatch<DirectoryAction>) => ({
  fetchDirectorySections: () => dispatch(fetchDirectorySections()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
