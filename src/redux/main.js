import { createAction, handleActions } from 'redux-actions';


const text = 'text';

export const setText = createAction(text);

const en = ['HOME'];

const ko = ['처음'];

const initialState = {
    text: en
};

export default handleActions({
    [text]: (state, action) => {
        const locale = action.payload;
        let data;
        switch (locale) {
            case 'en':
                data = en;
                break;
            case 'ko':
                data = ko;
                break;
            default:
                data = en;
                break;
        }
        return {
            ...state,
            text: data
        }
    }
}, initialState);