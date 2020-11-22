import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';

import logoImg from '../../assets/Logotipo.png';
import physicsImg from '../../assets/Física.png';
import mathImg from '../../assets/Math.png';
import chemistryImg from '../../assets/Quimica.png';

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

  useEffect(() => {
    async function loadCourses() {
      const response = await api.get('/courses');

      setCourses(response.data);
    }

    loadCourses();
  }, []);

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

        <CoursesList
          data={courses}
          keyExtractor={(course) => course.id}
          numColumns={2}
          renderItem={({ item: course }) => (
            <Card image={course.image} title={course.name} description={course.lessons.length !== 1 ? `${course.lessons.length} aulas` : `${course.lessons.length} aula`} />
          )}
        />

      </Content>
    </Container>
  );
};

export default Home;
