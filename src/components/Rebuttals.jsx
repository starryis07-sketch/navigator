import CoachingModule from "./CoachingModule";

function Rebuttals({ items }) {
  return (
    <CoachingModule
      title="Rebuttals"
      icon="🔄"
      items={items}
      stopMessage="Deliver one rebuttal, then stop and allow the customer to respond before moving to another coaching strategy."
    />
  );
}

export default Rebuttals;