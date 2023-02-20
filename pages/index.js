import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/notes")
      .then((res) => {
        setNotes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`/api/notes/${id}`)
      .then(() => {
        const newNotes = notes.filter((note) => note._id !== id);
        setNotes(newNotes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <p>No. of notes: {notes.length}</p>
      <Link
        href="/create"
        className="font-medium text-blue-900 dark:text-blue-500 hover:underline"
      >
        Add a note
      </Link>
      <div className="my-3 grid grid-cols-3 gap-4">
        {notes.length > 0 &&
          notes.map((note) => (
            <div key={note._id} className="border p-3 rounded">
              <div className="grid grid-cols-2">
                <h1>{note.title}</h1>
                <div className="justify-self-end">
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="cursor-pointer"
                    onClick={() => handleDelete(note._id)}
                  />
                </div>
              </div>
              <p>{note.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
