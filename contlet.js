let _month = [2,3,7];
let _study = ['피그마','리액트','뷰']
let _name =  ['홍길동','나훈아','조명섭']


const myword0 = `저는 ${_month[0]}개월간의 ${_study[0]} 공부를 한 ${_name[0]}입니다.`;
const myword1 = `저는 ${_month[1]}개월간의 ${_study[1]} 공부를 한 ${_name[1]}입니다.`;
const myword2 = `저는 ${_month[2]}개월간의 ${_study[2]} 공부를 한 ${_name[2]}입니다.`;

//console.log(myword0,myword1,myword2)

// 저는 2개월간의 피그마 공부를 한 홍길동입니다.
// 저는 3개월간의 뷰 공부를 한 나훈아입니다.
// 저는 7개월간의 리액트 공부를 한 조명섭입니다.

const myarr = [
                ["네이버","http://www.naver.com"],
                ["다음","http://www.daum.net"],
                ["구글","http://www.google.com"]
            ]
console.log("첫번째 배열",myarr[0], typeof myarr[0],
            "첫번째배열의 첫번째값",myarr[0][0], typeof myarr[0][0] );

console.log(`<a href='${myarr[0][1]}'>${myarr[0][0]}</>`)
console.log(`<a href='${myarr[1][1]}'>${myarr[1][0]}</>`)
console.log(`<a href='${myarr[2][1]}'>${myarr[2][0]}</>`)



const myarrobj = {
    _month : [2,3,7],
    _study : ['피그마','리액트','뷰'],
    _name :  ['홍길동','나훈아','조명섭']
}

console.log(myarrobj._study[0])


const gnb={
    d1:{
        text : "회사소개",
        href : "./company.html"
    }, 
    d2 :[
        {
            text : "회사소개",
            href : "./company.html"
        },
        {
            text : "회사소개",
            href : "./company.html"
        }
    ]  
}

console.log(`<a href="${gnb.d2[0].href}">${gnb.d2[0].text}</a>`)