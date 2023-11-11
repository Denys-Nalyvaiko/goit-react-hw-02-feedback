export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <ul>
    <li>
      <button type="button" onClick={onLeaveFeedback}>
        Good
      </button>
    </li>
    <li>
      <button type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>
    </li>
    <li>
      <button type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </li>
  </ul>
);
