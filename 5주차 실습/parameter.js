function account(userId)
{
    var savedUser = '김영서';
    if(userId == savedUser){
        console.log('반갑습니다 ' +savedUser + '님');
    }
    else{
        console.log('로그인 실패했습니다');
    }
}
account('김영서');