import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistic } from 'components/Statistic/Statistic';

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
  <>
    <h1>{title}</h1>
    <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
    <Statistic
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      positivePercentage={positivePercentage}
    />
  </>
);
