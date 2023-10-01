const arrayInfoForParents = [
  actual = {nameTab: 'Актуальная Информация', 
   name: 'Оказываем услуги для всех возрастов',
   descripshions: 'Мы предоставляем дополнительные образовательные услуги для детей и взрослых. Образовательно-развлекательный Центр  – это коллектив профессионалов: педагогов, психологов, воспитателей, имеющих большой опыт практической работы и преподавательской деятельности, психологического консультирования, проведения тематических тренингов. Центр создал комфортные условия для успешного обучения дошкольников, младших школьников, консультирования старшеклассников, подготовки к централизованному тестированию и помощи студентам и выпускникам.'
 }, 
 earlierDevelopment = {
   nameTab: 'для малышей',
   name: 'СТУДИЯ РАННЕГО РАЗВИТИЯ',
   descripshions: 'Студия раннего развития — это место, в котором дети могут раскрыть свои таланты и развиваться в любых направлениях. А наши преподаватели делают этот процесс максимально комфортным и интересным.  Забота и любовь родителей – главное, что нужно детям. А занятия с профессионалами в нашей студии станут отличным дополнением и помогут преумножить таланты ребенка.'
   }, 
   
 tutor = {
   nameTab: 'для школьников и выпускников',
   name: 'ЛИЧНЫЙ РЕПЕТИТОР', 
   descripshions: 'У нас есть репетиторы по всем предметам школьной программы с 1 по 11 класс. Мы осуществляем помощь ученикам начальной школы, средней школы, а также помогаем выпускникам подготовиться к ЦТ, экзаменам и подтянуть школьную программу.'
 
 }
 ]


 window.addEventListener("DOMContentLoaded", () => {
// console.log(arrayInfoForParents[0]);

  // const tabs = Array.from(document.querySelectorAll('.nav-link')),
  
  const tabsWrapper = document.querySelector('.nav-tabs');
    console.log(tabsWrapper);




arrayInfoForParents.forEach (el =>{
  
  // console.log(el.nameTab)
  const li = document.createElement('li');
  li.classList.add('nav-item');
  tabsWrapper.append(li);
  li.innerHTML = `<a class ="nav-link">${el.nameTab}</a>`
 
});

const tabs = Array.from(document.querySelectorAll('.nav-link'));
console.log(tabs);

tabs[0].classList.add('active');

arrayInfoForParents.forEach(el =>{

  const div = document.createElement('div');
  div.classList.add('info-item')
  document.querySelector('.container').append(div);
  div.innerHTML =`<h2>${el.name}</h2><p>${el.descripshions}</p>`
});

const  infoBlocks = document.querySelectorAll('.info-item');
infoBlocks[0].classList.add('active');


  tabsWrapper.addEventListener('click', (e) => {
    if (e.target.matches('.nav-link')) {
      // console.log(e.target);
      
      tabs.forEach((tab) => tab.classList.remove('active'));
      e.target.classList.add('active');
      const activeIndex = tabs.indexOf(e.target);
      // console.log(activeIndex);
      infoBlocks.forEach(block => block.classList.remove('active'));
      infoBlocks[activeIndex].classList.add('active')

    }
  });
});
