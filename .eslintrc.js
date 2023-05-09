module.exports = { 
    env: {
   //코드검사를 브라우저 환경에서 동작하는 전역개념들, 
   //nodejs환경에서 동작하는 전역개념들을 
   //모두 코드검사를 할것인지를 설정하는 부분
       browser: true,
       node: true
   },
   extends: [ //코드 검사 규칙 가져오기
       // vue
       //'plugin:vue/vue3-essential', //Lv1
       'plugin:vue/vue3-strongly-recommended', //Lv2
       //'plugin:vue/vue3-recommended', //Lv3

       // js
       'eslint:recomended'
   ],
   parserOptions:{ //기본적인 코드를 분석할 수 있는 분석기 지정
       parser: 'babel-eslint'
   },
   rules:{ //코드작성 규칙들을 지정

   }
}