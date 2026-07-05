import CoachingModule from "./CoachingModule";

function Analogies({ items }) {
  return (
    <CoachingModule
      title="Analogies"
      icon="💡"
      items={items}
      stopMessage="Use one analogy, then pause and let the customer respond before continuing."
    />
  );
}

export default Analogies;