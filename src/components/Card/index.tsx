import React from 'react';
import { ImageSourcePropType, ButtonProps } from 'react-native';

import {
  Card,
  CardImage,
  CardText,
  CardTitle,
} from './styles';

interface CardProps extends ButtonProps {
  image: string;
  title: string;
  description: string;
}

const Home: React.FC<CardProps> = ({
  image, title, description, ...rest
}: CardProps) => (
    <Card {...rest}>
      <CardImage source={{ uri: image }} />
      <CardTitle>{title}</CardTitle>
      <CardText>{description}</CardText>
    </Card>
  );

export default Home;
