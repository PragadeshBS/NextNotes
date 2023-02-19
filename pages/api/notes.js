import Note from "@/models/Note";
import connectDb from "@/utils/connectDb";

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({}).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: notes });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

const createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json({ success: true, data: note });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

const deleteNote = async (req, res) => {
  try {
    console.log(req.query.id);
    const note = await Note.deleteOne({ _id: req.query.id });
    res.status(201).json({ success: true, data: note });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export default async function handler(req, res) {
  await connectDb();
  switch (req.method) {
    case "GET":
      return getNotes(req, res);
    case "POST":
      return createNote(req, res);
    case "DELETE":
      return deleteNote(req, res);
    default:
      return res
        .status(405)
        .json({ message: `Method ${req.method} not allowed` });
  }
}
