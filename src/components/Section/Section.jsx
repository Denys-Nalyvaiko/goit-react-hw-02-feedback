import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistic } from 'components/Statistic/Statistic';
import { Container, Title } from './Section.styled';

export const Section = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  options,
  onLeaveFeedback,
}) => (
  <Container>
    <Title>{title}</Title>
    <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
    <Statistic
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      positivePercentage={positivePercentage}
    />
  </Container>
);
