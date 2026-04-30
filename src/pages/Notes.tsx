import bgNotes from "../assets/notes.jpg";
import EditNote from "../components/Notes/EditNote";

function Notes() {
  return (
    <div>
      <img
        src={bgNotes}
        alt="Notes Background"
        className="fixed inset-0 -z-1 object-cover h-screen w-screen"
      />

      <div className="min-h-screen z-20 w-screen">
        <EditNote />
      </div>
    </div>
  );
}

export default Notes;
