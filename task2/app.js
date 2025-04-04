const data = [
    {id:'1',
    title:"interaktiv oyrenme",
    description:"Uşaqların marağını artıran interaktiv dərslərimiz praktiki layihələr və oyunlar vasitəsilə öyrənmə prosesini əyləncəli və dinamik hala gətirir bilikləri əyləncə ilə birləşdirir."
    },

    {id:'2',
    title:"Təcrübəli Müəllimlər",
    description:"Müxtəlif sahələrdə geniş təcrübəyə malik peşəkar müəllimlərimiz, uşaqlara müasir texnologiyalarla tanış olma imkanı təqdim edərək, öyrənmələrini daha dərin və faydalı edir."
    },
    
    {id:'3',
    title:"Fərdi Yanaşma",
    description:"Hər bir uşağın öyrənmə sürətinə uyğun fərdi yanaşma tətbiq edərək, onların unikal bacarıq və maraqlarını inkişaf etdirmək üçün xüsusi proqramlar hazırlayırıq."
    }


]

const Container = document.getElementById("cardContainer");

const newbutton = document.getElementById("newbutton");

const showdata = () => {
    data.forEach((element,index) => {
        Container.innerHTML += `<div class="card">
                <div class="number">${index + 1}</div>
                <div>
                <h2>${element.title}</h2>
                <p>${element.description}</p>
                </div>
            </div>`;
        
    });

}
showdata();

newbutton.onclick = () => {
    const title = prompt("enter title");
    const description = prompt("enter title");

    const newdata = {
        id:"asfgv",
        title:title,
        description:description,
    };
    data.unshift(newdata);
    showdata();
    
}