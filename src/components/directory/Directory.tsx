import '../../styles/directory.scss';
import React from 'react';
import MenuItem from '../menu-item/MenuItem';

interface DirectoryState {
  sections: {
    title: string;
    imageUrl: string;
    size?: string;
    id: number;
  }[];
}

class Directory extends React.Component<{}, DirectoryState> {
  state: DirectoryState = {
    sections: [
      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
      },
    ],
  };

  renderMenuList() {
    return this.state.sections.map(({ id, title, imageUrl, size }) => <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />);
  }

  render() {
    return <div className="directory-menu">{this.renderMenuList()}</div>;
  }
}

export default Directory;
