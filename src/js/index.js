const top_list = document.querySelectorAll('.p-top-list')
const lista_oculta = document.querySelector('.list-oculta')

top_list.forEach(element => 
{
    element.addEventListener("click", (evt) =>
    {   

        if(evt.target.style.fontWeight == 900)
        {
            evt.target.style.fontWeight = 400;
            evt.target.nextElementSibling.style.display = "none";
        }
        else
        {
            evt.target.style.fontWeight = 900;
            if(window.getComputedStyle(evt.target.nextElementSibling, null).getPropertyValue("display")) 
            {
                evt.target.nextElementSibling.style.display = "block";
            }
        }
    })
    
});
