var num = 10;
if(num > 10) {
    console.log('입력값은 10보다 큽니다.');
}

if(num < 10) {
    console.log('입력값은 10보다 작습니다.');
}

else {
    console.log('입력값은 10과 같습니다.');
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('프로그래밍 언어를 입력하시오: ',function(data){
    console.log('가장 좋아하는 언어는' + data + '입니다.');
    rl.close();
})