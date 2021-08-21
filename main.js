const textbox=document.getElementById("inputtext")
const button=document.getElementById("search")
console.log(button)
button.addEventListener('click',()=>
{
    const uname=textbox.value 
    const xhr=new XMLHttpRequest()
    const url=`https://api.github.com/users/${uname}`
    xhr.open('GET', url)
    xhr.onreadystatechange=()=>{
        if(xhr.readyState==4&&xhr.status==200){
            const udata =JSON.parse(xhr.responseText)
            const image=document.createElement('img')
            const id=document.createElement('id')
            id.innerHTML=udata.id
            const para= document.createElement('p')
            para.className='lead'
            para.innerHTML=`<b> ${udata.login}</b>`
            para.style.textAlign='center'
            image.setAttribute('src',udata.avatar_url)
            console.log(image)
            const container =document.getElementById('image-container')
            container.appendChild(image)
            container.appendChild(id)
            container.appendChild(para)
           
    }
}
    xhr.send()
})
