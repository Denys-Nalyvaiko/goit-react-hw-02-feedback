import { List, FeedbackButton } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <List>
    {Object.keys(options).map(option => (
      <li key={option}>
        <FeedbackButton
          variant="contained"
          color="secondary"
          type="button"
          onClick={onLeaveFeedback}
        >
          {option[0].toUpperCase() + option.slice(1)}
        </FeedbackButton>
      </li>
    ))}
  </List>
);
