import { createSlice } from '@reduxjs/toolkit';

const topics = createSlice({
    name: 'topics',
    initialState: { topics: {} },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            }
        },
        addQuizId: (state, action) => {
            /*console.log(action.payload);
            console.log(JSON.parse(JSON.stringify(state)));
            console.log(JSON.parse(JSON.stringify(state.topics)));
            console.log(JSON.parse(JSON.stringify(state.topics[topicId])));*/
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
        }
    }
});

export const selectTopics = (state) => state.topics.topics;
export const addTopic = topics.actions.addTopic;
export const addQuizId = topics.actions.addQuizId;
export default topics.reducer;