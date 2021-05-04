// Lista di dieci immagini che si caricano dopo il Load della pagina

const arrImages = [
    {
        name: 'Immagine 1',
        src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
    },
    {
        name: 'Immagine 2',
        src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
    },
    {
        name: 'Immagine 3',
        src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
    },
    {
        name: 'Immagine 4',
       src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
    },
    {
        name: 'Immagine 5',
        src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
    },
    {
        name: 'Immagine 6',
        src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
    },
    {
        name: 'Immagine 7',
        src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
    }
    ];

export const carica = () => {  

    const img = document.createElement("img");
    img.src = 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg';
    document.getElementById("main").appendChild(img);
    img.classList.add("load");
    }

    arrImages.forEach(carica);

  
