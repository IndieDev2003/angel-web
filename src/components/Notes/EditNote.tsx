import { useRef } from "react";

function EditNote() {
  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  function onSubmitHandler(e: any) {
    e.preventDefault();
    const data = {
      title: titleRef.current?.value,
      text: textRef.current?.value,
    };
    console.log(data);
  }
  return (
    <div className="h-screen w-screen flex flex-col p-4 edit-notes">
      <h2 className="text-2xl text-white my-2">New/Edit Note</h2>
      <form onSubmit={onSubmitHandler} className="flex h-6/7 flex-col gap-2">
        <div className="flex flex-col p-2 backdrop-blur-xs bg-pink-50/10 rounded-lg">
          <label htmlFor="title">Note Title</label>
          <input
            ref={titleRef}
            required
            type="text"
            placeholder="title for note.."
            className="p-2 rounded-lg border border-white"
            name="title"
          />
        </div>
        <div className="flex flex-col p-2 backdrop-blur-xs h-full border-white/30 rounded-lg border">
          <label htmlFor="note">Note Text</label>
          <textarea
            ref={textRef}
            required
            name="note"
            className=" p-1 border h-full border-white/20 rounded-lg"
            rows={12}
            id=""
          ></textarea>
        </div>

        <div className="flex flex-row gap-2 w-full justify-end">
          <button type="submit" className="bg-blue-500/60">
            Save
          </button>
          <button className="bg-red-400/60">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditNote;
