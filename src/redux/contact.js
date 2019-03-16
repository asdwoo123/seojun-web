import { createAction, handleActions } from 'redux-actions';


const text = 'text';

export const setText = createAction(text);

const en = ['Contact', 'Inquiry', 'Market position', 'Leading position in auto assembly markets', 'Headquarters', '47-3, Majeon-dong, Seo-gu, Incheon, South Korea',
'Office', '2979 Ezen mechazone, Hagun-ri, Yangchon-eup, Gimpo-si, Gyeonggi-do, South Korea', 'Tay Phone / Fax', 'Established', 'Writer', 'Subject',
'E-mail', 'Content', 'Upload', 'Terms', 'Purpose of Use of Personal Information\n' +
    'Your personal information will be used to provide more accurate service use, \n' +
    'and it will never used any other purpose other than the stated terms and conditions .\n' +
    'Or to any third party without their consent does not provide member  information.\n', 'I have read the agreement', 'send'];

const ko = ['연락처', '문의' ,'시장 지위', '자동차 조립 시장 주도', '본사', '인천 서구 마전동 47-3', '사무실', '경기도 김포시 양촌읍 학운리 이젠 메카존 2979', '핸드폰 / 팩스', '설립',
'이름', '제목', '이메일', '내용', '업로드', '약관', '개인 정보 이용 목적 \n'+
    '귀하의 개인 정보는 보다 정확한 서비스 사용을 제공하는 데 사용됩니다. \n'+
    '명시된 이용 약관 이외의 목적을 결코 사용하지 않습니다. \n'+
    '또는 동의없이 제 3 자에게 회원 정보를 제공하지 않습니다.', '나는 약관을 읽었으며 동의합니다',  '전송'];

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