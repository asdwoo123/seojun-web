import { createAction, handleActions } from 'redux-actions';


const text = 'text';

export const setText = createAction(text);

const en = ['Used Market', 'BuyAndSell', 'Register', 'No', 'Writer', 'Subject', 'Date', 'Writer', 'Subject', 'Password', 'Content', 'Upload', 'Submit'];

const ko = ['중고장터', '사고팔기', '등록', '번호', '글쓴이', '제목', '날짜', '글쓴이', '제목', '비밀번호', '내용', '업로드', '전송'];

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