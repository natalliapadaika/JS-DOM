const divForForm = document.querySelector('.for-form'),
      form = divForForm.querySelector('form'),
      input = form.querySelector('input'),
      // button = form.querySelector('button'),
      divForPl = document.querySelector('.for-pl'),
      divForPr = document.querySelector('.for-pr');

      console.log(input);
      console.log(form);

   

    let url = '';

    const renderImages = (array) =>{

      array.forEach(element => {
        divForPr.insertAdjacentHTML('afterbegin', `<img src="${element.snippet.thumbnails.default.url}" alt="pr" id="${element.id.videoId}">`)
        
      });

    }

    const renderVideo = (videoId) => {
      divForPl.insertAdjacentHTML('afterbegin', `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>` )
    }

    const getData = async (url) => {
      divForPl.textContent='';
      divForPr.textContent='';
      const res = await fetch (url); 
      const data = await res.json();

      const items = data.items
      console.log(items)

        renderVideo(items[0].id.videoId)
        renderImages(items)
      
      // return data
    }

   form.addEventListener ('submit', (e) => {
    e.preventDefault();

   
      try {
         if(input.value){
        console.log(input.value);
        url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBjn67aal9_TNO5Q3Rkgv1LEWIL4hoTVlU&q=${input.value}&type=video`
        }

    input.value = '';

      getData(url)
      

      } catch (error) {
        console.log(error);
      }
       
   })


   divForPr.addEventListener('click', (e) =>{

    if(e.target.matches('img')){
    const video = e.target.getAttribute('id')
    divForPl.textContent = '';
    renderVideo(video)
        
  }
 
   } )



