import Note from "@/models/Note";
import connectDb from "@/utils/connectDb";

const deleteNote = async (req, res) => {
  try {
    const note = await Note.deleteOne({ _id: req.query.id });
    res.status(201).json({ success: true, data: note });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};

export default async function handler(req, res) {
  await connectDb();
  switch (req.method) {
    case "DELETE":
      return deleteNote(req, res);
    default:
      return res
        .status(405)
        .json({ message: `Method ${req.method} not allowed` });
  }
}
