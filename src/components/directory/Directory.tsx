import './directory.scss';

import { Dispatch, useEffect } from 'react';

import { DirectoryAction } from '../../redux/directory/directory.actions';
import { ISection } from '../../shared/models';
import MenuItem from '../menu-item/MenuItem';
import { RootState } from '../../redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchDirectorySections } from '../../redux/directory/directory.action-creators';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

interface DirectoryProps {
  sections?: ISection[];
  fetchDirectorySections?: () => void;
}

const Directory: React.FC<DirectoryProps> = ({ sections, fetchDirectorySections }) => {
  useEffect(() => {
    fetchDirectorySections!();
  }, [fetchDirectorySections]);

  return (
    <div className="directory-menu">
      {sections!.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
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
