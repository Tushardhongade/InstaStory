var arr=[
    {dp:"https://images.pexels.com/photos/15763882/pexels-photo-15763882/free-photo-of-portrait-of-brunette-woman-on-a-square.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",story:"https://images.pexels.com/photos/15763878/pexels-photo-15763878/free-photo-of-portrait-of-brunette-woman-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {dp:"https://images.pexels.com/photos/24375110/pexels-photo-24375110/free-photo-of-people-in-shirts-on-street-at-night.jpeg?auto=compress&cs=tinysrgb&w=600",story:"https://images.pexels.com/photos/24032239/pexels-photo-24032239/free-photo-of-a-young-man-and-woman-posing-on-a-street-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {dp:"https://images.pexels.com/photos/24389641/pexels-photo-24389641/free-photo-of-couple-posing-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",story:"https://images.pexels.com/photos/24032227/pexels-photo-24032227/free-photo-of-couple-in-white-tank-tops-looking-each-other.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {dp:"https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",story:"https://images.pexels.com/photos/24235246/pexels-photo-24235246/free-photo-of-portrait-of-women.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}

    
]
var storiyan = document.querySelector("#storiyan")
var clutter=""
arr.forEach(function(elem,index){
    clutter += `<div id="story">
                    <img id="${index}" src="${elem.dp}" alt="">
                </div>`
})

storiyan.innerHTML = clutter

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full").style.display = "block";
    document.querySelector("#full").style.backgroundImage = `url(${arr[dets.target.id].story})`
     
    setTimeout(function(){
        document.querySelector("#full").style.display = "none";
    
    },2000);
});

