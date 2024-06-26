const light = document.querySelector("#light")
const dark =  document.querySelector(`#dark`)
const button = document.querySelector(`button`)
const styleMode = localStorage.getItem(`styleMode`)
const paths = document.querySelectorAll("svg > path")
const test = document.querySelector(".didj__logo > a")
button.addEventListener("click", darkAge)
function darkAge() {
    document.body.classList.toggle(`darkBody`)
    if (document.body.className === `darkBody`){
        for (let i = 0; i < paths.length; i++ ){
            paths[i].setAttribute('fill','white')
        }
        light.classList.remove('mama')
        dark.classList.add('mama')
        localStorage.setItem(`styleMode`,`dark`)
    }
    else{
        for (let i = 0; i < paths.length; i++ ){
            paths[i].setAttribute('fill','black')
        }
        dark.classList.remove('mama')
        light.classList.add('mama')
        localStorage.setItem(`styleMode`,null)
    }
}
function getRandomColor() {
    let color = Math.floor(Math.random() * 247)
    if (color >= 47){
        return color;
    }
    else {
        return 47;
    }
}
test.style.filter = `drop-shadow(0 0 25px rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()}))`
setInterval(()=>{
     test.style.filter = `drop-shadow(0 0 25px rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()}))`
     },1000
 );



if (styleMode === `dark`){
    darkAge()
}
// function getRandomColor() {
//     const letters = '0123456789ABCDEF'
//     let color = '#'
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)]
//     }
//     return color;
// }











// // выбираем тип блока; имя; класс; родительский блок, если нужен
// function block(typeBlock,nameBlock,classBlock,parentBlock){
//     nameBlock = document.createElement(typeBlock);
//     nameBlock.className = classBlock;
//     let searchParentBlock = document.querySelector(parentBlock);
//     if (searchParentBlock == null ){
//         document.body.append(nameBlock);
//     }
//     else {
//         searchParentBlock.append(nameBlock);
//     }
// }
// function text(typeText,nameText, parentText, textT, classText){ //сделать условия для класса или его отсутсвие
//     let searchParentText = document.querySelector(parentText)
//     nameText = document.createElement(typeText)
//     nameText.innerHTML = `${textT}`
//     if (classText === undefined){
//         searchParentText.append(nameText)
//     }
//     else{
//         nameText.className = classText
//         searchParentText.append(nameText)
//     }
// }
// //верхняя часть блока
// block("div","article__text","article__text")
// //header
// block("header","titleDidj","titleDidj",".article__text")
// //logo
// block("div","didj__logo","didj__logo",".titleDidj")
// text("div","logo",`.didj__logo`,`<svg xmlns="http://www.w3.org/2000/svg" width="250" height="33" viewBox="0 0 250 33" fill="none">                <path d="M9.87795 33H0V19.4118H0.592677C14.975 19.2953 14.8564 13.8212 14.8564 0H52.1951V19.4118H60.0579V26.0118L60.1764 33H50.259V27.1765H9.87795V33ZM40.3415 19.4118V7.76471H24.7344C24.7344 12.8506 23.8651 16.6165 22.2846 19.4118H40.3415Z" fill="black"/>                <path d="M76.4161 27.1765H62.5475V0H74.401V16.7718L97.2783 0H111.542V27.1765H99.6885V10.1329L76.4161 27.1765Z" fill="black"/>               <path d="M123.436 33H113.558V19.4118H114.15C128.533 19.2953 128.414 13.8212 128.414 0H165.753V19.4118H173.616V26.0118L173.734 33H163.817V27.1765H123.436V33ZM153.899 19.4118V7.76471H138.292C138.292 12.8506 137.423 16.6165 135.842 19.4118H153.899Z" fill="black"/>                <path d="M190.416 27.1765H174.137L196.462 10.8318L181.645 0H197.923L206.142 6.01765V0H217.995V6.01765L226.214 0H242.493L227.676 10.8318L250 27.1765H233.721L219.536 16.8106L217.995 17.9365V27.1765H206.142V17.9365L204.601 16.8106L190.416 27.1765Z" fill="black"/> </svg>`)
// //name artist
// text("p","artist__name",".titleDidj","Даша Дьячкова","artist__name text__shadow")
// //Заголовок
// text("h1","article__title",".titleDidj","Почему нужно быть</br>добрее просто так?","article__title text__shadow")
// //Цитата
// block("blockquote","blockquote","blockquote",".article__text")
// text("p","blockquoteP",".blockquote",'Моё человечество</br>спит у меня на руке.</br>Его голова</br>у меня на груди улегается,</br>и я, прижимаясь</br> к его беззащитной щеке,</br>щекой понимаю —</br>оно в темноте улыбается.</br> <u>Е. Евтушенко</u>')
// //Текст
// block("section","section","section",".article__text")
// text("p","sectionP",".section",`<p>Хорошие люди живут хорошо, а плохие — плохо. Каждый получает по заслугам. Мир — предсказуемое место, а каждый поступок имеет справедливое последствие. Старуха осталась у разбитого корыта за свою алчность, а поп за желанием сохранить свои финансы в результате оказался обманутым балдой и выжил из ума — так ведь?</p>
// <p>Люди склонны верить, что мир по определению держит справедливость, которая всем управляет и человека обязательно настигнет карма. 
//    Такой вредный социально-психологический феномен называется верой в справедливый мир. Вредный, потому что не всегда у человеческих поступков есть объективная причина, а какое-то следствие есть всегда. Но как можно понять к чему приведёт человеческий поступок? Как оценить поступок — когда он хороший, а когда плохой? Когда добрый, а когда злой?</p>
// <p>Вообще в современной культуре на религиозной основе сформирован такой взгляд на мир, в котором, по заветам, вполне конкретное зло всегда является антагонистом вполне конкретного добра, которое обязательно победит зло. Но в разных культурах моральные принципы, на которых основаны субъективные определения добра и зла, очевидно такие же разные. В объективном понимании первичных субъективных категорий — добро и зло всегда противоположно. Но они же живут вместе, поэтому я предлагаю читателю взглянуть на понятие Добра шире, чем антитеза зла: Добро, как вера в себя и в людей, как честность перед совестью, как бесконечное тепло, которое ты готов отдать бескорыстно, даже не подразумевая, что существует холод, а просто так — за любовь, ведь этот бумеранг никогда не поймет, куда именно ему лететь, если его не направит человек.</p>
// <p>Конечно, удобно думать, что плохие накажутся, а хорошие наградятся, пусть и не в этой жизни. Человечество склонно упрощать реальность, чтобы не испытывать когнитивного диссонанса и самозащищаться. Вера в справедливый мир помогает людям найти логику в ситуациях, когда причин плохого нет, чтобы уверовать в собственную неуязвимость и считать, что наказания заслуживают другие, плохие люди. Но жертва не виновата в насилии, люди с положительным ВИЧ-статусом не наркоманы с отсутствием силы воли, а бездомные не ленивые алкоголики. Мир несправедлив и понимание этого делает его справедливее — не всем хватает помощи, ресурсы не распределены равномерно, а чтобы компенсировать эту несправедливость каждому нужно взять миссию по спасению мира на себя и быть добрее. Просто так, чтобы достигать справедливости в неидеальном мире. Но тем и прекрасен закат, что после обязательно наступит рассвет.</p>
// <p>Ничего не имеет смысла вне маленького голубого водородного шара, который четыре с половиной миллиарда лет крутится в вакууме вокруг других водородных шаров, зато имеет на нём, поэтому нужно быть добрее к ближнему и дальнему друг другу, чтобы сохранить этот смысл в лучшем из миров (ведь всё-таки только он нам пока доступен). </p>
// <p>«Жизнь несправедлива и закончится всё равно, что бы там ни показывали ни рассказывали в кино. И даже, если черных полос в ней действительно больше, важно, что кто-то из нас — человек хороший» <u>Вася Обломов</u></p>
// `)
