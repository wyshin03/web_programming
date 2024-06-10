// const mongoclient = require('mongodb').MongoClient;
// const ObjId = require('mongodb').ObjectId;
// const url = 'mongodb+srv://wyshin03:1679@cluster0.6ncyvl6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// let mydb;
// mongoclient.connect(url)
//     .then(client => {
//         mydb = client.db('myboard');
//             // mydb.collection('profile').find().toArray().then(result => {
//             //     console.log(result);
//             // })       
//         app.listen(8080, function(){
//             console.log('포트 8080으로 서버 대기중...');
//         });      
// }).catch(err => {
//     console.log(err);
// });

// const express = require('express');
// const app = express();

// //body-parser 라이브러리 추가
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}));
// app.set('view engine', 'ejs');

// app.get('/book', function(req, res){
//     res.send('도서 목록 관련 페이지입니다.');
// })

// app.get('/list', function(req, res){
//     mydb.collection('profile').find().toArray()
//         .then(result => {
//             console.log(result);
//             res.render('list.ejs', { data: result });
//         })
//         .catch(error => {
//             console.error(error);
//             res.status(500).send('데이터를 가져오는 도중 오류가 발생했습니다.');
//         });
// });

// app.get('/index', function(req, res){
//     res.render("index.ejs");
// });

// //'/enter' 요청에 대한 처리 루틴
// app.get('/enter', function(req, res){
//     res.render('enter.ejs');
// });

// //'/save' 요청에 대한 post 방식의 처리 루틴
// app.post('/save', function(req, res){
//     console.log(req.body.title);
//     console.log(req.body.content);
//     console.log(req.body.someDate);
//     //몽고DB에 데이터 저장하기
//     mydb.collection('profile').insertOne(
//         {title : req.body.title, content : req.body.content, date : req.body.someDate}
//     ).then(result => {
//         console.log(result);
//         console.log('데이터 추가 성공');
//     });
//     res.redirect("/list");
// });

// app.post("/delete", function(req, res){
//     console.log(req.body._id);
//     req.body._id = new ObjId(req.body._id);
//     mydb.collection('profile').deleteOne(req.body)
//     .then(result => {
//         console.log('삭제완료');
//         res.status(200).send();
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).send();
//     });
// });

// //'/content'요청에 대한 처리 루틴
// app.get('/content/:id', function(req, res){
//     console.log(req.params.id);
//     req.params.id = new ObjId(req.params.id);
//     mydb
//         .collection("profile")
//         .findOne({_id : req.params.id})
//         .then((result) => {
//             console.log(result);
//             res.render("content.ejs", {data : result});
//         });
// });

// //'/edit' 요청에 대한 처리 루틴
// app.get("/edit/:id", function(req, res) {
//     req.params.id = new ObjId(req.params.id);
//     mydb
//         .collection("profile")
//         .findOne({_id: req.params.id})
//         .then((result) => {
//             console.log(result);
//             res.render("edit.ejs", {data : result});
//         });
// });

// app.post("/edit", function(req, res) {
//     console.log(req.body);
//     req.body.id = new ObjId(req.body.id);
//     mydb
//         .collection("profile")
//         .updateOne({_id : req.body.id}, {$set : {title : req.body.title, content : req.body.content, date : req.body.someDate}})
//         .then((result) => {
//             console.log("수정완료");
//             res.redirect('/list');
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// //정적 파일 라이브러리 추가
// app.use(express.static("public"));

// let cookieParser = require('cookie-parser');

// app.use(cookieParser('wyshin03'));
// app.get('/cookie', function(req, res){
//     let milk = parseInt(req.signedCookies.milk) + 1000;
//     if(isNaN(milk))
//     {
//         milk = 0;
//     }
//     res.cookie("milk", milk, {signed : true});
//     res.send("product : " +milk+"원");
// });

// let session = require('express-session');
// app.use(session({
//     secret : 'swy1009',
//     resave : false,
//     saveUninitialized : true
// }))

// app.get("/session", function(req, res){
//     if(isNaN(req.session.milk)){
//         req.session.milk = 0;
//     }
//     req.session.milk = req.session.milk + 1000;
//     res.send("session : "+req.session.milk + "원");
// });

// app.get("/login", function(req, res){
//     console.log(req.session);
//     if(req.session.user) {
//         console.log('세션 유지');
//         res.render('index.ejs', { user : req.session.user });
//     }else {
//         res.render("login.ejs");
//     }
// });

// app.post("/login", function(req, res){
//     console.log("아이디 : "+req.body.userid);
//     console.log("비밀번호 : "+req.body.userpw);

//     mydb
//         .collection("account")
//         .findOne({userid : req.body.userid})
//         .then((result) => {
//             if(result.userpw == req.body.userpw) {
//                 req.session.user = req.body;
//                 console.log('새로운 로그인');
//                 res.render('index.ejs', { user : req.session.user });
//             }else {
//                 res.render('login.ejs');
//             }
//         });
// });

// app.get("/logout", function(req, res){
//     console.log("로그아웃");
//     req.session.destroy();
//     res.render('index.ejs', { user : null });
// });

// app.get("/signup", function(req, res){
//     res.render("signup.ejs");
// });

// app.post("/signup", function(req, res){
//     console.log(req.body.userid);
//     console.log(req.body.userpw);
//     console.log(req.body.usergroup);
//     console.log(req.body.useremail);

//     mydb
//         .collection("account")
//         .insertOne({
//             userid : req.body.userid,
//             userpw : req.body.userpw,
//             usergroup : req.body.usergroup,
//             useremail : req.body.useremail,
//         })
//         .then((result) => {
//             console.log("회원가입 성공");
//             res.redirect("/");
//         })
//         .catch((err) => {
//             console.error("회원가입 오류", err);
//             res.status(500).send("회원가입 도중 오류가 발생했습니다.");
//         });
// });






const mongoclient = require('mongodb').MongoClient;
const ObjId = require('mongodb').ObjectId;
const url = 'mongodb+srv://wyshin03:1679@cluster0.6ncyvl6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
let mydb;

const express = require('express');
const app = express();

//body-parser 라이브러리 추가
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

// 정적 파일 라이브러리 추가
app.use(express.static("public"));

let cookieParser = require('cookie-parser');
app.use(cookieParser('wyshin03'));

let session = require('express-session');
app.use(session({
    secret : 'swy1009',
    resave : false,
    saveUninitialized : true
}));

console.log("Starting the server...");

mongoclient.connect(url)
    .then(client => {
        console.log("MongoDB connected");
        mydb = client.db('myboard');
        app.listen(8080, function(){
            console.log('Server is listening on port 8080...');
        });
    })
    .catch(err => {
        console.error('MongoDB connection failed:', err);
    });

// 나머지 라우트 설정

app.get('/book', function(req, res){
    res.send('도서 목록 관련 페이지입니다.');
})

app.get('/list', function(req, res){
    mydb.collection('profile').find().toArray()
        .then(result => {
            console.log(result);
            res.render('list.ejs', { data: result });
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('데이터를 가져오는 도중 오류가 발생했습니다.');
        });
});

app.get('/index', function(req, res){
    res.render("index.ejs");
});

app.get('/enter', function(req, res){
    res.render('enter.ejs');
});

app.post('/save', function(req, res){
    console.log(req.body.title);
    console.log(req.body.content);
    console.log(req.body.someDate);
    mydb.collection('profile').insertOne(
        {title : req.body.title, content : req.body.content, date : req.body.someDate}
    ).then(result => {
        console.log(result);
        console.log('데이터 추가 성공');
    });
    res.redirect("/list");
});

app.post("/delete", function(req, res){
    console.log(req.body._id);
    req.body._id = new ObjId(req.body._id);
    mydb.collection('profile').deleteOne(req.body)
    .then(result => {
        console.log('삭제완료');
        res.status(200).send();
    })
    .catch(err => {
        console.log(err);
        res.status(500).send();
    });
});

app.get('/content/:id', function(req, res){
    console.log(req.params.id);
    req.params.id = new ObjId(req.params.id);
    mydb
        .collection("profile")
        .findOne({_id : req.params.id})
        .then((result) => {
            console.log(result);
            res.render("content.ejs", {data : result});
        });
});

app.get("/edit/:id", function(req, res) {
    req.params.id = new ObjId(req.params.id);
    mydb
        .collection("profile")
        .findOne({_id: req.params.id})
        .then((result) => {
            console.log(result);
            res.render("edit.ejs", {data : result});
        });
});

app.post("/edit", function(req, res) {
    console.log(req.body);
    req.body.id = new ObjId(req.body.id);
    mydb
        .collection("profile")
        .updateOne({_id : req.body.id}, {$set : {title : req.body.title, content : req.body.content, date : req.body.someDate}})
        .then((result) => {
            console.log("수정완료");
            res.redirect('/list');
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get("/cookie", function(req, res){
    let milk = parseInt(req.signedCookies.milk) + 1000;
    if(isNaN(milk)) {
        milk = 0;
    }
    res.cookie("milk", milk, {signed : true});
    res.send("product : " + milk + "원");
});

app.get("/session", function(req, res){
    if(isNaN(req.session.milk)){
        req.session.milk = 0;
    }
    req.session.milk = req.session.milk + 1000;
    res.send("session : " + req.session.milk + "원");
});

app.get("/login", function(req, res){
    console.log(req.session);
    if(req.session.user) {
        console.log('세션 유지');
        res.render('index.ejs', { user : req.session.user });
    } else {
        res.render("login.ejs");
    }
});

app.post("/login", function(req, res){
    console.log("아이디 : " + req.body.userid);
    console.log("비밀번호 : " + req.body.userpw);

    mydb
        .collection("account")
        .findOne({userid : req.body.userid})
        .then((result) => {
            if(result.userpw == req.body.userpw) {
                req.session.user = req.body;
                console.log('새로운 로그인');
                res.render('index.ejs', { user : req.session.user });
            } else {
                res.render('login.ejs');
            }
        });
});

app.get("/logout", function(req, res){
    console.log("로그아웃");
    req.session.destroy();
    res.render('index.ejs', { user : null });
});

app.get("/signup", function(req, res){
    res.render("signup.ejs");
});

app.post("/signup", function(req, res){
    console.log(req.body.userid);
    console.log(req.body.userpw);
    console.log(req.body.usergroup);
    console.log(req.body.useremail);

    mydb
        .collection("account")
        .insertOne({
            userid : req.body.userid,
            userpw : req.body.userpw,
            usergroup : req.body.usergroup,
            useremail : req.body.useremail,
        })
        .then((result) => {
            console.log("회원가입 성공");
            res.redirect("/");
        })
        .catch((err) => {
            console.error("회원가입 오류", err);
            res.status(500).send("회원가입 도중 오류가 발생했습니다.");
        });
});
