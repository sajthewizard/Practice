

//To load the categories
const loadCategories=async ()=>{
    const res=await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data=await res.json();
   showcategories(data.categories)
}

const showcategories=(data)=>{
    const categoryList=document.getElementById('categories')
    data.forEach(item=>{
        console.log(item)
        
        const category=document.createElement('div');
        category.classList=" m-8";
        category.innerHTML=`
        <button class="btn w-[150px] h-[60px] rounded text-bold font-xl" onclick="lagaCategory('${item.category}')">
        <img src="${item.category_icon}" class="h-[40px]"/>
        ${item.category}
        </button>`;

        categoryList.appendChild(category)
    })
}



//Load upon Categories


const lagaCategory=async (name)=>{
    const res =await fetch(`https://openapi.programming-hero.com/api/peddy/category/${name}`);
const data=await res.json();
showPets(data.data)
    
}
//liking for pets

const liked=async(id)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`);
    const data = await res.json();
    likedpets(data)
}



//showcase the liked pets

const likedpets=(like)=>{
    console.log(like.petData)
    const liked=document.getElementById('likedpics');
    
    const showkoro=document.createElement('div')
    showkoro.classList="h-[200px]"
    showkoro.innerHTML=`
    <img class="m-3 w-60" src="${like.petData.image}" />`;

    liked.appendChild(showkoro)


}

//For Loading All the pets

const loadAllPets=async()=>{
const res =await fetch('https://openapi.programming-hero.com/api/peddy/pets');
const data=await res.json();
showPets(data.pets)
}
// append the pet infos
const showPets=(data)=>{
    const showpets=document.getElementById('showpets');
    showpets.innerHTML=``;
    data.forEach(item=>{
        
        const pet=document.createElement('div');
        pet.classList="m-2 border rounded h-[480px] w-[450px]";
        pet.innerHTML=`
         <figure class="flex justify-center">
    <img class="object-cover h-[250px] w-[420px] p-1"
      src="${item.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${item.pet_name}</h2>
    <p>Breed: ${item.breed? item.breed:"Not Available"}</p>
    <p>Birth: ${item.date_of_birth?item.date_of_birth: "Not Available" }</p>
    <p>Gender: ${item.gender?item.gender: "Not Available" } </p>
    <p>Price: ${item.price?item.price: "Not Available" } </p>
    <div class=" flex justify-between">
      <button class="btn  w-30" onclick="liked(${item.petId})">
      <img class="bg-white h-[30px]" src="https://static.vecteezy.com/system/resources/thumbnails/000/423/558/small/Multimedia__287_29.jpg" />
      </button>
    <button class="btn  w-30">Adopt</button>
    <button class="btn btn-primary w-30" onclick="my_modal_5.showModal()">Details</button>
    </div>
  </div>
  `;

        showpets.appendChild(pet)
    })
}




loadCategories();
loadAllPets();