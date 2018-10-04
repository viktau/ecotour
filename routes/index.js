var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Головна' });
});
router.get('/countries', function(req, res, next) {
    var countries_list = [{
            country_img: "/images/Avstriya.jpg",
            country_alt: "Австрія",
            country_dsc: "Австрия — лакомый кусочек для любителей насыщенного отдыха. Это одна из самых интересных и красивых стран Центральной Европы. Не зря ее называют страной альпийских вершин, лугов, горных озер и прохладных лесов — здесь просто невозможно отвести взгляд от красот, которые вдохновляют и окрыляют! Австрия — страна контрастов, и как бы вы не любили отдыхать — вы все равно найдете здесь для себя что-то интересное."
        },
        {
            country_img: "https://joinup.ua/content/uploads/2014/01/egypt1.png",
            country_alt: "Египет",
            country_dsc: "Египет — одно из самых популярных направлений среди украинцев. Уже который год наши соотечественники колесят по этой дивной стране и отдыхают на берегу Красного моря — кажется, что о Египте уже известно все. Но нет! Туроператор Join UP! откроет для вас Египет заново! Вы увидите его таким, каким никогда не видели прежде! Смените пассивный отдых на пляже на череду незабываемых впечатлений от нового Египта! Join UP! против шаблонов, зато за качественный, интересный и неповторимый отдых. Поэтому в Египте туроператор нашел самые удивительные места для развлечений и предлагает открыть новые грани такой знакомой, но все же неизведанной страны."
        },

        {
            country_img: "https://joinup.ua/content/uploads/2015/03/ssha.jpg",
            country_alt: "США",
            country_dsc: "США — это страна большого природного и культурного наследия, грандиозных возможностей и высочайшего уровня развития. Простираясь от Атлантического океана до Тихого, она предлагает великое множество вариантов путешествия от осмотра разнообразных исторических и культурных достопримечательностей до спокойного и комфортного отдыха на роскошных пляжах Флориды или Гавайских островов."
        },

        {
            country_img: "https://joinup.ua/content/uploads/2015/03/germaniya.jpg",
            country_alt: "Германия",
            country_dsc: "Побывав в Германии, вы точно перестанете опаздывать и будете всегда помнить, где вы положили вещи: ключи, телефон, пульт, тапочки – больше не потеряются. Ведь Германия просто заряжает педантизмом и аккуратностью, упорядоченный стиль жизни и работы здесь в порядке вещей. И в этом ее прелесть! Хотя, не вся Германия такая. Вспомните настоящих немецких болельщиков! Их просто не оттащить от прямо таки гипнотического созерцания матчей любимых команд, после которых следует бурное и безудержное празднование!"

        }
    ];

    res.render('countries', { title: 'Країни', countries_list: countries_list });
});
router.get('/tours', function(req, res, next) {
    var tours_list = [{
            tours_country: "Єгипит",
            tours_date: "21.07.2018",
            tours_price: "300$"
        },
        {
            tours_country: "Франція",
            tours_date: "30.07.2018",
            tours_price: "500$"
        },
        {
            tours_country: "Іспанія",
            tours_date: "30.08 .2018",
            tours_price: "600 $"
        },
        {
            tours_country: "Кенія",
            tours_date: "04.08 .2018",
            tours_price: "1200 $"
        },
        {
            tours_country: "Австрія",
            tours_date: "08.08 .2018",
            tours_price: "900 $"
        },
        {
            tours_country: "CША",
            tours_date: "01.08 .2018",
            tours_price: "1300 $"
        },
        {
            tours_country: "Канада",
            tours_date: "20.07 .2018",
            tours_price: "600 $"
        },
        {
            tours_country: "Китай",
            tours_date: "21.07 .2018",
            tours_price: "1050 $"
        },
        {
            tours_country: "Хорватія ",
            tours_date: "25.07 .2018",
            tours_price: "400 $"
        },
        {
            tours_country: "Італія ",
            tours_date: "09.09 .2018",
            tours_price: "600 $"
        }
    ];
    res.render('tours', { title: 'Тури', tours_list: tours_list });
});
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Контакти' });
});
router.post('/contact', function(req, res, next) {
    console.log('Отримано повідомлення :' + req.body.email);
    res.render('contact-success', { title: 'Контакти' });
});
router.get('/homemade', function(req, res, next) {
    res.render('homemade', { title: 'ДЗ' });
});
router.post('/homemade', function(req, res, next) {
    console.log('Отримано повідомлення :' + req.body.email);
    res.render('contact-success', { title: 'ДЗ' });
});
module.exports = router;