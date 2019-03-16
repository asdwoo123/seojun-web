import { createAction, handleActions } from 'redux-actions';


const text = 'text';

export const setText = createAction(text);

const en = ['COMPANY', 'Philosophy', 'History', 'Organization', 'Location', 'To our customers',
    'SEOJUN ENG is a provider of automated machines to domestic markets as well as global industries since established in 1995.',
    ' We have been growing through consistent self-development and in-depth researches on the basis of faith, creativity and passion.',
    'In addition, we are well known for reliability which is an important factor in business world.',
    'In fact, SEOJUN ENG will be a leading company throughout the world by taking social responsibility and providing customer-oriented service. ',
    'We welcome all of our customer feedback to improve and provide better service.',
    'Thanks for your interest in our business and we will always try harder.', 'Yours faithfully.', 'Established SEOJUN ENG', 'Exported to Thailand & China', 'Exported to Turkey & Thailand',
    'About to extend the business with China,\n' +
    'Germany, Russia, Thailand ad Turkey', 'PRESIDENT', 'Machinery Dep.', 'Electric Dep.', 'Foreign Dep.',
    'Sales Team', 'Trade Team', 'Design Team', 'Production Team', 'QA & QC', '2979 Ezen mechazone, Hagun-ri, Yangchon-eup, Gimpo-si, Gyeonggi-do, South Korea'
];

const ko = ['회사소개', '철학', '역사', '조직', '위치', '여러분에게', '서전 이엔지는 1995 년 창립 이래 국내외 자동화 설비를 제공하는 글로벌 기업입니다.',
' 신앙, 창의력, 열정을 바탕으로 꾸준한 자기 계발과 심층 연구를 통해 성장해 왔습니다.', '또한, 우리는 비즈니스 세계에서 중요한 요소 인 신뢰성으로 잘 알려져 있습니다.',
' 실제로 서전 이엔지는 사회적 책임을 다하고 고객 중심의 서비스를 제공함으로써 전 세계의 선도 기업이 될 것입니다.', '우리는 더 나은 서비스를 개선하고 제공하기 위해 모든 고객 피드백을 환영합니다.',
'우리 사업에 관심을 가져 주셔서 감사 드리며 항상 열심히 노력하겠습니다.', '감사합니다', '서전 이엔지 설립', '태국, 중국 수출 개시', '터키, 태국 수출 개시',
'중국, 독일, 러시아, 태국 그리고 터키로 사업 확장', '대표이사', '기계 부서', '전기 부서', '해외 부서', '영업팀', '무역팀', '디자인팀', '생산팀', '품질 보증 및 품질 관리',
'경기도 김포시 양촌읍 학운리 2979 이젠 메카존 549호'];

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