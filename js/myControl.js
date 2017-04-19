app.controller('myControl',function($scope){
    $scope.logo = 'images/Book-Shop-Logo.png';
    $scope.menu = ['Home','About','Contact','Offers'];
    $scope.bannerHo = 'BookShop Exclusive Book Shop';
    $scope.bannerTw = 'Bookshowcase view and Read your favourit books';
    $scope.books =[
        {
            cover: 'images/book-one.jpg',
            title: 'Asyn Android Program',
            author: 'Holder',
            published : new Date('2012','08','18'),
            price: '40',
            like: 0,
            dislike: 0
        },
        {
            cover: 'images/book-two.jpg',
            title: 'Android Recipes',
            author: 'Jeff Fresion',
            published : new Date('2011','10','28'),
            price: '10',
            like: 0,
            dislike: 0
        },
        {
            cover: 'images/book-three.jpg',
            title: 'Android Recipes Problem',
            author: 'Dave Smith',
            published : new Date('2010','07','16'),
            price: '80',
            like: 0,
            dislike: 0
        },
        {
            cover: 'images/book-four.jpg',
            title: 'Intro to Android',
            author: 'Joseph',
            published : new Date('2009','02','30'),
            price: '90',
            like: 0,
            dislike: 0
        },
        {
            cover: 'images/book-five.jpg',
            title: 'HTML5 iPhone Web App',
            author: 'Alvin Crespe',
            published : new Date('2013','04','22'),
            price: '60',
            like: 0,
            dislike: 0
        },
        {
            cover: 'images/book-six.jpg',
            title: 'Web Application Dev Yii',
            author: 'Mark Safrenew',
            published : new Date('2014','09','16'),
            price: '9',
            like: 0,
            dislike: 0
        },
        {
            cover: 'images/book-seven.jpg',
            title: 'Web Application Dev R',
            author: 'Chris Beeley',
            published : new Date('2012','01','16'),
            price: '80',
            like: 0,
            dislike: 0
        },
        {
            cover: 'images/book-eight.jpg',
            title: 'Web Application Dev',
            author: 'Mark Safrenew',
            published : new Date('2010','10','04'),
            price: '90',
            like: 0,
            dislike: 0
        },
        {
            cover: 'images/book-nine.jpg',
            title: 'HTML 5 Web Dev',
            author: 'J M Gustafson',
            published : new Date('2011','12','09'),
            price: '100',
            like: 0,
            dislike: 0
        },
        {
            cover: 'images/book-ten.jpg',
            title: 'Sociket IO',
            author: 'Rohit Rai',
            published : new Date('2013','05','21'),
            price: '200',
            like: 0,
            dislike: 0
        }
    ]
    $scope.addlike = function(index){
        $scope.books[index].like += 1;
    };
    $scope.sublike = function(index){
        $scope.books[index].dislike += 1;
    };
    $scope.cart = 0;
    $scope.addCart = function(inc){
        $scope.cart += 1;
    };
    $scope.footone = ['About','Contact','Policy','Terms'];
    $scope.foottwo = ['Product','Portfolio','Blog','Support'];
    $scope.footthr = ['Cooking','Software','Novels','Story'];
    $scope.footfou = ['Facebook','Twitter','Google+','Linkedin'];

})