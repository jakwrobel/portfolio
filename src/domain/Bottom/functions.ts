const scrollToTheTop = ()=>{
    if (window.document.documentElement.scrollTop>0){
        let scrollInterval = setInterval(()=>{
            window.document.documentElement.scrollTop-=50
            if(window.document.documentElement.scrollTop<5){
                clearInterval(scrollInterval)
            }
        },5)
    }
}

export default{
    scrollToTheTop
}