/* eslint-disable prettier/prettier */
import BookModel from '../models/BookModel';

//add book
export const addBook = async (body) => {
  const data = await BookModel.create(body);
  return data;
};

//get book
export const getBook = async () => {
  const data = await BookModel.find().sort({ updatedAt: -1 });
  return data;
};
//get book by id
export const getBookById = async (id) => {
  const data = await BookModel.findById(id);
  return data;
};

//update book by id
export const updateBookById = async (id, body) => {
  const data = await BookModel.findByIdAndUpdate(id, body, { new: true });
  return data;
};

//delete book by id
export const deleteBookById = async (id) => {
  const data = await BookModel.findByIdAndDelete(id);
  return data;
};

//search book
export const searchBook = async (bookName) => {
  try {
    const data = await BookModel.find({
      $or: [{ title: { $regex: bookName, $options: 'i' } }]
    });
    return data;
  } catch (err) {
    return 'Problem Occured';
  }
};