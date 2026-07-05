import CoachingModule from "./CoachingModule";

function TieDowns({ items }) {
  return (
    <CoachingModule
      title="Tie Downs"
      icon="💬"
      items={items}
      stopMessage="Ask one tie-down question, then stop and allow the customer to respond before moving to another coaching strategy."
    />
  );
}

export default TieDowns;