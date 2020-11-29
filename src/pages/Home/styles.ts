import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { Course } from '.';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background-color: #6548A3;
  height: 217px;
  padding: 24px;
`;

export const SearchBarContainer = styled.View`
  background-color: #FFF;
  height: 56px;
  margin-top: 24px;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  padding-left: 26px;
`;

export const SearchBar = styled.TextInput`
  width: 100%;
  color: #C4C4D1;
  margin-left: 16px;
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

export const CoursesList = styled(FlatList as new () => FlatList<Course>)`
  background-color: #F0EDF5;
  padding: 15px;
`;

export const EmptyCoursesText = styled.Text`
  align-self: center;
`;
