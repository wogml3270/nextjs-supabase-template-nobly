import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = createClient();
  const { data: notes, error: notesError } = await supabase.from("notes").select();

  if (notesError) {
    console.error("data fetch error: ", notesError);
  }

  return (
    <div>
      <h1 className="mb-4 mt-12 text-xl font-bold">Notes</h1>
      <ul>
        {notes?.map((note) => (
          <li className="mb-4 rounded border p-4 text-lg font-bold" key={note.id}>
            {note.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
