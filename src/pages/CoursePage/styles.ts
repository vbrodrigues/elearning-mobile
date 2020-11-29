import { FlatList, RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Lesson } from '.';

interface PlayButtonProps {
  completed: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background-color: #6548A3;
  flex-direction: row;
  justify-content: space-between;
  height: 142px;
  padding: 24px;
  margin-top: 14px;
`;

export const HeaderBackButton = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
`;

export const HeaderFavorite = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
`;

export const Content = styled.View`
  margin-top: -50px;
  background-color: #F0EDF5;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  flex: 1;
`;

export const ContentHeader = styled.View`
  padding: 27px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentHeaderTitle = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
`;

export const ContentHeaderText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
`;

export const EmptyLessonsText = styled.Text`
  align-self: center;
`;

export const LessonsList = styled(FlatList as new () => FlatList<Lesson>)`
  background-color: #F0EDF5;
  padding: 15px;
`;

export const LessonCardContainer = styled.View`
  flex-direction: row-reverse;
  align-items: center;
  width: 326px;
  margin-bottom: 16px;
`;

export const PlayButton = styled(RectButton) <PlayButtonProps>`
  height: 68px;
  width: 68px;
  border-radius: 16px;
  background-color: ${(props) => (props.completed ? '#61C5BD' : '#FF6680')} ;
  margin-right: -32px;
  justify-content: center;
  align-items: center;
`;

export const LessonCard = styled.View`
  background-color: #FFF;
  width: 290px;
  padding: 16px 16px 16px 56px;
  border-radius: 16px;
`;

export const LessonCardTitleContainer = styled.View`
  flex-wrap: nowrap;
  max-width: 133px;
`;

export const LessonCardTitle = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 15px;
  color: #6C6C80;
  margin-bottom: 16px;
`;

export const LessonCardInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const LessonCardStatsContainer = styled.View`
  flex-direction: row;
`;

export const LessonCardStatsText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: #C4C4D1;
  margin-right: 17px;
`;

export const LessonCardCompleted = styled.View`
  background-color: #61C5BD;
  padding: 3px 8px;
  border-radius: 12px;
`;

export const LessonCardCompletedText = styled.Text`
  color: #FFF;
  font-family: 'Roboto-Regular';
  font-size: 10px;
`;
