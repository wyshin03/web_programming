var userName = '임법준';
var userPW = '1111';

function account(userId, userPW)
{
    console.log(userId);
    console.log(userPW);
    var savedName = '임법준';
    var savedPW = '1111';

    if(userId == savedName) {
        if(userPW == savedPW) {
            console.log('반갑습니다 ' + userId + '님');
        }
    }
}
account(userName, userPW);