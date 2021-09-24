import './directory.scss';
import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import { DIRECTORY } from '../../constants/directory';

interface DirectoryState {
  sections: {
    id: number;
    imageUrl: string;
    linkUrl: string;
    size?: string;
    title: string;
  }[];
}

class Directory extends React.Component<{}, DirectoryState> {
  state: DirectoryState = DIRECTORY;

  renderMenuList() {
    const { sections } = this.state;

    return sections.map(({ id, ...sectionProps }) => <MenuItem key={id} {...sectionProps} />);
  }

  render() {
    return <div className="directory-menu">{this.renderMenuList()}</div>;
  }
}

export default Directory;
