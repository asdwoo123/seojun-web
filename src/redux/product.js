import { createAction, handleActions } from 'redux-actions';


const text = 'text';

export const setText = createAction(text);

const en = ['Product' ,'Assembly Line', 'Inspection Line', 'MORE'];

const ko = ['제품' ,'조립 라인', '검사 라인', '더보기'];

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