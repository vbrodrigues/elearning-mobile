import React, { useCallback, useEffect, useState } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import logoImg from '../../assets/Logotipo.png';

import Card from '../../components/Card';

import {
  Container,
  Header,
  SearchBarContainer,
  SearchBar,
  Content,
  ContentHeader,
  ContentHeaderText,
  ContentHeaderTitle,
  CoursesList,
  EmptyCoursesText,
} from './styles';

interface Lesson {
  id: string;
  name: string;
  description: string;
  video_id: string;
}

export interface Course {
  id: string;
  name: string;
  image: string;
  lessons: Lesson[];
}

const Home: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const { navigate } = useNavigation();

  useEffect(() => {
    async function loadCourses() {
      const response = await api.get('/courses');

      setCourses(response.data);
    }

    loadCourses();
  }, []);

  const handleNavigateToCoursePage = useCallback((course) => {
    navigate('CoursePage', {
      course,
    });
  }, [navigate]);

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <SearchBarContainer>
          <Icon name="search" size={20} color="#C4C4D1" />
          <SearchBar placeholder="Busque um curso" placeholderTextColor="#C4C4D1" />
        </SearchBarContainer>
      </Header>

      <Content>
        <ContentHeader>
          <ContentHeaderTitle>Categorias</ContentHeaderTitle>
          <ContentHeaderText>
            {courses.length !== 1 ? `${courses.length} cursos` : `${courses.length} curso`}
          </ContentHeaderText>
        </ContentHeader>

        {courses.length === 0 ? <EmptyCoursesText>Nenhum curso disponível</EmptyCoursesText> : (
          <CoursesList
            data={courses}
            keyExtractor={(course) => course.id}
            numColumns={2}
            renderItem={({ item: course }) => (
              <Card onPress={() => handleNavigateToCoursePage(course)} image={course.image} title={course.name} description={course.lessons.length !== 1 ? `${course.lessons.length} aulas` : `${course.lessons.length} aula`} />
            )}
          />
        )}

      </Content>
    </Container>
  );
};

export default Home;
