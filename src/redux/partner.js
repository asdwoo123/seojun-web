import { createAction, handleActions } from 'redux-actions';


const text = 'text';

export const setText = createAction(text);

const en = ['Partner', 'Sales Record','Industry', 'Oil-less Bearing', 'Automobile Parts (Air Cleaner & Manifold)',
    'Automobile Parts (Tire Core)', 'Cosmetic Vessels', 'Automobile Parts (Canister)'];

const ko = ['파트너' ,'판매 기록', '산업', '무급유', '자동차 부품 (공기 청정기 및 매니 폴드)',
    '자동차 부품 (타이어 코어)', '화장품 용기', '자동차 부품 (캐니스터)'];

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