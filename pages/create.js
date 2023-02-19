import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/notes", {
        title,
        content,
      })
      .then((res) => {
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1 className="font-medium text-2xl">Create a note</h1>
      <form>
        <div className="my-3">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="my-3">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <button
            className="block mx-auto bg-blue-600 text-white p-3 rounded-md"
            onClick={(e) => handleSubmit(e)}
          >
            Create
          </button>
        </div>
      </form>
      <Link
        href="/"
        className="font-medium text-blue-900 dark:text-blue-500 hover:underline"
      >
        Go back
      </Link>
    </div>
  );
}
