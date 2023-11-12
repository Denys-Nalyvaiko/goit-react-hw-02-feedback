import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistic } from 'components/Statistic/Statistic';
import { Container, Title } from './Section.styled';

export const Section = ({
  title,
  total,
  positivePercentage,
  options,
  onLeaveFeedback,
}) => {
  const { good, neutral, bad } = options;
  return (
    <Container>
      <Title>{title}</Title>
      <FeedbackOptions
        options={Object.keys(options)}
        onLeaveFeedback={onLeaveFeedback}
      />
      <Statistic
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </Container>
  );
};
