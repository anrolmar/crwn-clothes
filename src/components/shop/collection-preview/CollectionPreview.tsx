import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './collection-preview.styles';
import { useHistory, useRouteMatch } from 'react-router-dom';

import CollectionItem from '../collection-item/CollectionItem';
import { ICartItem } from '../../../shared/models';
import React from 'react';

interface CollectionPreviewProps {
  title: string;
  routeName: string;
  items: ICartItem[];
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({ title, routeName, items }) => {
  const history = useHistory();
  const { path } = useRouteMatch();

  const renderItems = () => {
    return items.filter((_item, index) => index < 4).map((item) => <CollectionItem key={item.id} item={item} />);
  };

  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => history.push(`${path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>{renderItems()}</PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
