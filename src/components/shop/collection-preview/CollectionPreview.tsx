import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './collection-preview.styles';

import CollectionItem from '../collection-item/CollectionItem';
import { ICartItem } from '../../../shared/models';
import React from 'react';

interface CollectionPreviewProps {
  title: string;
  items: ICartItem[];
}

class CollectionPreview extends React.Component<CollectionPreviewProps, {}> {
  renderItems() {
    const { items } = this.props;

    return items.filter((_item, index) => index < 4).map((item) => <CollectionItem key={item.id} item={item} />);
  }

  render() {
    const { title } = this.props;

    return (
      <CollectionPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>{this.renderItems()}</PreviewContainer>
      </CollectionPreviewContainer>
    );
  }
}

export default CollectionPreview;
