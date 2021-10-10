import Button from '../../../shared/components/forms/button/Button';
import { CollectionItemProps } from './CollectionItem';
import styled from 'styled-components';

export const CollectionIemContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 22vw;
  position: relative;
  margin-bottom: 20px;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const ImageContainer = styled.img`
  background-position: center;
  background-size: cover;
  background-image: ${({ item }: CollectionItemProps) => `url(${item.imageUrl})`};
  height: 95%;
  margin-bottom: 5px;
  width: 100%;
`;

export const CollectionFooterContainer = styled.div`
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  height: 5%;
  width: 100%;

  .name {
    margin-bottom: 15px;
    width: 90%;
  }

  .price {
    width: 10%;
  }
`;

export const ButtonContainer = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  bottom: 55px;
  display: none;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;
