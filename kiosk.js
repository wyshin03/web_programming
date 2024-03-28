const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question('커피를 선택하세요 : ', function(coffee){
    switch(coffee)
    {
        case '아메리카노':
            console.log("아메리카노 주문 완료");
            break;
        case '카페라떼':
            console.log("카페라떼 주문 완료");
            break;
        case '연유라떼':
            console.log("연유라떼 주문 완료");
            break;
        case '헤이즐넛':
            console.log("헤이즐넛 주문 완료");
            break;
        default:
            console.log("메뉴 없음");
            break;
    }
    rl.close();
})