import { createSlice } from '@reduxjs/toolkit';
import { Comments, Comment } from '../helpers/Comments';

type AddCommentType = {
  type: string,
  payload: {
    id: string;
    comment: Comment
  }
};

const initialState: { comments: Array<Comments> } = {
  comments: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: AddCommentType) => {
      const hasComments = state.comments.some(({ id }) => id === action.payload.id);
      if (hasComments) {
        const productComments = state.comments.find(({ id }) => id === action.payload.id);
        productComments?.comments.push(action.payload.comment);
      } else {
        const commentObj: Comments = {
          id: action.payload.id,
          comments: [action.payload.comment],
        };
        state.comments.push(commentObj);
      }
    },
  },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
