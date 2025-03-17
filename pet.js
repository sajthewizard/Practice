

//To load the categories
const loadCategories=async ()=>{
    const res=await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data=await res.json();
   showcategories(data.categories)
}

const showcategories=(data)=>{
    const categoryList=document.getElementById('categories')
    data.forEach(item=>{
        
        const category=document.createElement('div');
        category.classList=" m-8";
        category.innerHTML=`
        <button class="btn w-[150px] h-[60px] rounded text-bold font-xl">
        <img src="${item.category_icon}" class="h-[40px]"/>
        ${item.category}
        </button>`;

        categoryList.appendChild(category)
    })
}




loadCategories();