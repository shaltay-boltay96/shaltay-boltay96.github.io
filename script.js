var persons = [
    {
        type: 'dance',
        name: 'Барышников Михаил Николаевич',
        sex: 'boy',
        style: 'classic',
        is_alone: 'yes',
        image: 'barishnikov.jpg',
        desc: 'Михаил Николаевич Барышников — легендарный советский и американский артист балета, балетмейстер, актёр. В начале карьеры проявил железный характер и упорство, чтобы доказать всем, что достоин лучших ролей.'
    },
    {
        type: 'dance',
        name: 'Майя Плисецкая',
        sex: 'girl',
        style: 'classic',
        is_alone: 'no',
        image: 'maya.jpg',
        desc: 'Майя Михайловна Плисецкая — легендарная артистка балета, прима-балерина Большого театра в 1948—1990 годах. Переняв лучшие традиции балетной школы, она создала свой собственный стиль, отличающийся изяществом, графичностью, остротой и законченностью жеста.'
    },
    {
        type: 'dance',
        name: 'Майкл Флэтли',
        sex: 'boy',
        style: 'classic',
        is_alone: 'no',
        image: 'michael.jpg',
        desc: 'Майкл Райан Флэтли — американо-ирландский танцор, хореограф. Дважды становился рекордсменом Книги Гиннеса как самый быстрый танцор чечетки в мире. Сумел окружить себя великолепной командой танцоров, с которыми устраивает легендарные танцевальные шоу Lord of the Dance и Feet of Flames.'
    },
    {
        type: 'dance',
        name: 'Марта Грэм',
        sex: 'girl',
        style: 'classic',
        is_alone: 'yes',
        image: 'michael.jpg',
        desc: 'Марта Грэм — американская танцовщица и хореограф, создательница труппы, школы и танцевальной техники своего имени; родоначальница стиля модерн. Она до сих пор волнует сердца людей своим неповторимым, самобытным стилем.'
    },
    {
        type: 'dance',
        name: 'Майкл Джексон',
        sex: 'boy',
        style: 'modern',
        is_alone: 'yes',
        image: 'michael.jpg',
        desc: 'Майкл Джексон — американский певец, автор песен, танцор, хореограф. Его стиль танца невозможно спутать ни с чьим другим! А «лунная походка» стала настоящим культом в мире хореографии.'
    },
    {
        type: 'dance',
        name: 'Бейонсе',
        sex: 'girl',
        style: 'modern',
        is_alone: 'no',
        image: 'byonce.gif',
        desc: 'Бейонсе — американская певица в стиле R’n’B, актриса, танцовщица. При всей простоте, ее танцы невероятно зажигательны и продуманы до мелочей. Ее окружение ни раз отмечало, что репетируя танец, она работает на износ. Хореография Бейонсе стала ее фирменным стилем, узнаваемым во всем мире.'
    },
    {
        type: 'dance',
        name: 'Мадонна',
        sex: 'girl',
        style: 'modern',
        is_alone: 'yes',
        image: 'madonna.jpg',
        desc: 'Мадонна— американская певица, автор-исполнитель, танцовщица. Она с самого детства занималась балетом. Получив классические азы, она создала свой собственный неповторимый стиль танца, в котором помимо отточенных движений царит шикарная импровизация. Сильное влияние на её хореографию оказал модерн и постмодерн.'
    },
    {
        type: 'dance',
        name: 'Хоакин Кортес',
        sex: 'boy',
        style: 'modern',
        is_alone: 'no',
        image: 'cortez.jpg',
        desc: 'Хоакин Кортес — танцор фламенко, хореограф, актёр. Он популяризировал искусство фламенко, которое до него было принадлежностью узкого круга любителей. Но Кортес пропагандирует не фламенко в его чистом, рафинированном виде. Его индивидуальный стиль – в сочетании фламенко с классическим балетом, современным танцем, джазом.'
    },
    {
        type: 'draw',
        name: 'Клод Моне',
        sex: 'boy',
        style: 'пейзаж',
        is_alone: null,
        image: 'mone.jpg',
        desc: 'Клод Моне — французский живописец, один из основателей импрессионизма. Он создал новую технику живописи — дробными мазками. В течение 5 лет Моне изучает эффекты света и его отражений. Лишь взглянув на его полотна, чувствуешь эти волшебные цвета. Сказочные, но такие реальные. '
    },
    {
        type: 'draw',
        name: 'Тропинин Василий Андреевич',
        sex: 'boy',
        style: 'портрет',
        is_alone: null,
        image: 'tropinin.jpg',
        desc: 'Василий Андреевич Тропинин — русский живописец, мастер романтического и реалистического портретов. Он старался подчеркнуть внутренний мир тех, кого изображал. Также Тропинин пытался не показывать явную социальную принадлежность людей, чтобы видели человека с его мыслями и чувствами, а не его статус. '
    },
    {
        type: 'draw',
        name: 'Левитан Исаак Ильич',
        sex: 'boy',
        style: 'натюрморт',
        is_alone: null,
        image: 'levitan.jpg',
        desc: 'Исаак Ильич Левитан — русский художник, мастер натюрморта и «пейзажа настроения». Прошел тяжелый путь от нищеты до признания. Современники отмечали, что благодаря таланту, творчество давалось ему легко, но он всегда работал много, упорно и самоотверженно. В своих работах стремился передать психологизм через детали быта и природу.'
    },
    {
        type: 'draw',
        name: 'Фрида Кало',
        sex: 'girl',
        style: 'портрет',
        is_alone: null,
        image: 'frida.jpg',
        desc: 'Фрида Кало— мексиканская художница, наиболее известная автопортретами. Несмотря на полную боли и страданий жизнь, всегда сохраняла внутренний оптимизм и уверенность в своих силах. Она создала свой неповторимый стиль, опираясь на родную культуру. В работах Фриды Кало очень сильное влияние народного мексиканского искусства.'
    },
    {
        type: 'draw',
        name: 'Роза Бонёр',
        sex: 'girl',
        style: 'пейзаж',
        is_alone: null,
        image: 'boner.jpg',
        desc: ''
    },
    {
        type: 'draw',
        name: 'Мэри Мозер',
        sex: 'girl',
        style: 'натюрморт',
        is_alone: null,
        image: 'mozer.jpg',
        desc: ''
    },
    {
        type: 'english',
        name: 'Василий Тредиаковский',
        sex: null,
        style: 'grammar',
        is_alone: null,
        image: 'trediakovsky.jpg',
        desc: ''
    },
    {
        type: 'english',
        name: 'Константин Бальмонт',
        sex: null,
        style: 'translate',
        is_alone: null,
        image: 'balmond.jpg',
        desc: ''
    },
    {
        type: 'english',
        name: 'Дмитрий Пучков',
        sex: null,
        style: 'newbie',
        is_alone: null,
        image: 'puchkov.jpg',
        desc: ''
    },
];

var questions = [
    {
        text: 'Ваш ребенок:',
        field: 'sex',
        answers: [
            {
                text: 'Мальчик',
                value: 'boy'
            },
            {
                text: 'Девочка',
                value: 'girl'
            }
        ],
        step: 1,
        type: 'draw'
    },
    {
        text: 'Ваш ребенок:',
        field: 'sex',
        answers: [
            {
                text: 'Мальчик',
                value: 'boy'
            },
            {
                text: 'Девочка',
                value: 'girl'
            }
        ],
        step: 1,
        type: 'dance'
    },
    {
        text: 'Изучая английский язык, ваш ребенок:',
        field: 'style',
        answers: [
            {
                text: 'Больше всего внимания уделяет грамматике',
                value: 'grammar'
            },
            {
                text: 'Великолепно переводит',
                value: 'translate'
            },
            {
                text: 'Изучает, но не основательно',
                value: 'newbie'
            }
        ],
        step: 1,
        type: 'english'
    },
    {
        text: 'Какое направление предпочитает ваш ребенок?',
        field: 'style',
        answers: [
            {
                text: 'Классическое',
                value: 'classic'
            },
            {
                text: 'Современное',
                value: 'modern'
            }
        ],
        step: 2,
        type: 'dance'
    },
    {
        text: 'Как предпочитает танцевать ваш ребенок?',
        field: 'is_alone',
        answers: [
            {
                text: 'Один',
                value: 'yes'
            },
            {
                text: 'В коллективе',
                value: 'no'
            }
        ],
        step: 3,
        type: 'dance'
    },
    {
        text: 'В каком жанре предпочитает рисовать ваш ребенок?',
        field: 'style',
        answers: [
            {
                text: 'Пейзаж',
                value: 'пейзаж'
            },
            {
                text: 'Портрет',
                value: 'портрет'
            },
            {
                text: 'Натюрморт',
                value: 'натюрморт'
            }
        ],
        step: 2,
        type: 'draw'
    },
];

function cleanPersons(persons, field, value) {
    for (var i = persons.length-1; i >= 0; i--){
        if (persons[i][field] !== value){
            persons.splice(i, 1);
        }
    }
    persons.sort();
    return persons;
}

function getAnswer(persons, btn){
    var field = $(btn).data('field');
    var value = $(btn).data('value');
    return cleanPersons(persons, field, value);
}

function buttonGenerate(field, value, step, type, text) {
    return '<button class="waves-effect waves-light btn-large" data-field="' + field + '" data-value="' + value + '" data-step="' + step + '" data-type="' + type + '">' + text + '</button>'
}

function nextQuestion(type, step){
    for (var i = 0; i < questions.length; i++){
        if (questions[i].type === type && questions[i].step === step+1){
            $('#question').html(questions[i].text);
            $('#buttons').html('');
            for (var a = 0; a < questions[i].answers.length; a++){
                $('#buttons').append(buttonGenerate(questions[i].field, questions[i].answers[a].value, questions[i].step , questions[i].type , questions[i].answers[a].text));
            }
            addOnClick();
            return true;
        }
    }
}

function showResult(person) {
    var word, invite;
    if (person.type === 'draw'){
        word = 'живописи';
        invite = 'художественное направление';
    } else if (person.type === 'dance'){
        word = 'танцев';
        invite = 'танцевальное направление';
    } else if (person.type === 'english'){
        word = 'иностранных языков';
        invite = 'направление разговорного английского';
    }
    $('.block').html('<div class="container"><h1 class="btn-floating btn-large pulse"><i class="material-icons">check_circle</i></h1><h1>Тест пройден!</h1><h3>В мире ' + word + ' ваш ребенок &mdash; ' + person.name + '</h3><h6>' + person.desc + '</h6><h4>Приглашаем вас в городской летний лагерь на ' + invite + '. Подробности <a href="https://vk.com/sidelnastene.lager?w=wall-164553200_78%2Fall">по ссылке</a>.</h4><p id="desc"><img src="img/' + person.image + '" alt="' + person.name + '"></p></div>');
}

function addOnClick(){
    $('button').click(function () {
        console.log(getAnswer(persons, this));
        if(nextQuestion($(this).data('type'), $(this).data('step')) === undefined){
            showResult(persons[0]);
        }
    });
}

addOnClick();