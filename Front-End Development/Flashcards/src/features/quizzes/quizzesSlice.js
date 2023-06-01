import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/topicsSlice';

export const addQuizThunk = (quiz) => {
    return (dispatch) => {
        dispatch(addQuiz(quiz));
        dispatch(addQuizId({topicId: quiz.topicId, quizId: quiz.id}));
    }
}

const quizzes = createSlice({
    name: 'quizzes',
    initialState: { quizzes: {} },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardIds: action.payload.cardIds
            }
        }
    }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const addQuiz = quizzes.actions.addQuiz;
export default quizzes.reducer;