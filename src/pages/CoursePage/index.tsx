import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import logoImg from '../../assets/Logotipo.png';
import api from '../../services/api';
import { Course } from '../Home';

import {
  Container,
  Header,
  HeaderBackButton,
  HeaderFavorite,
  Content,
  ContentHeader,
  ContentHeaderText,
  ContentHeaderTitle,
  LessonsList,
  EmptyLessonsText,
  LessonCard,
  LessonCardTitle,
  LessonCardInfo,
  LessonCardCompleted,
  LessonCardCompletedText,
  LessonCardStatsText,
  LessonCardStatsContainer,
  LessonCardTitleContainer,
  PlayButton,
  LessonCardContainer,
} from './styles';

export interface Lesson {
  id: string;
  idx: number;
  name: string;
  duration: number;
  description: string;
  completed: boolean;
}

interface RouteParams {
  course: Course;
}

const CoursePage: React.FC = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const route = useRoute();
  const routeParams = route.params as RouteParams;
  const { goBack } = useNavigation();

  useEffect(() => {
    async function loadLessons() {
      const response = await api.get(`/courses/${routeParams.course.id}/lessons`);

      const courseLessons = response.data;

      const courseLessonsWithIdx = courseLessons.map((lesson, idx) => ({
        ...lesson,
        idx,
        completed: idx <= 1,
      }));

      setLessons(courseLessonsWithIdx);
    }

    loadLessons();
  }, [routeParams.course.id]);

  return (
    <Container>
      <Header>
        <HeaderBackButton onPress={() => goBack()}>
          <Icon name="arrow-left" size={20} color="#FF6680" />
        </HeaderBackButton>
        <Image source={logoImg} />
        <HeaderFavorite>
          <Icon name="heart" size={20} color="#FF6680" />
        </HeaderFavorite>
      </Header>

      <Content>
        <ContentHeader>
          <ContentHeaderTitle>{routeParams.course.name}</ContentHeaderTitle>
          <ContentHeaderText>{routeParams.course.lessons.length !== 1 ? `${routeParams.course.lessons.length} aulas` : `${routeParams.course.lessons.length} aula`}</ContentHeaderText>
        </ContentHeader>

        {lessons.length === 0 ? <EmptyLessonsText>Nenhuma aula disponível</EmptyLessonsText> : (
          <LessonsList
            data={lessons}
            keyExtractor={(lesson) => lesson.id}
            contentContainerStyle={{ alignItems: 'center' }}
            renderItem={({ item: lesson }) => (
              <LessonCardContainer>
                <LessonCard>
                  <LessonCardTitleContainer>
                    <LessonCardTitle>{lesson.name}</LessonCardTitle>
                  </LessonCardTitleContainer>
                  <LessonCardInfo>
                    <LessonCardStatsContainer>
                      <LessonCardStatsText>{`Aula ${lesson.idx + 1}`}</LessonCardStatsText>
                      <LessonCardStatsText>{`${lesson.duration} min`}</LessonCardStatsText>
                    </LessonCardStatsContainer>
                    {lesson.completed && (
                      <LessonCardCompleted>
                        <LessonCardCompletedText>Completo!</LessonCardCompletedText>
                      </LessonCardCompleted>
                    )}
                  </LessonCardInfo>
                </LessonCard>
                <PlayButton completed={lesson.completed}>
                  <Icon name="play-circle" size={36} color="#FFF" />
                </PlayButton>
              </LessonCardContainer>
            )}
          />
        )}

      </Content>
    </Container>
  );
};

export default CoursePage;
