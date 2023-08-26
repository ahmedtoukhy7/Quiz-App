import { Quiz } from "./quiz.js"

export class Setting {
    constructor(){
        this.categoryEl=document.getElementById('category')
        this.difficultyEl=document.getElementsByName('difficulty')
        this.numberEl=document.getElementById('Number')
        this.startBtn=document.getElementById('startBtn')

        this.startBtn.addEventListener('click',()=>{this.getvalue()})
//console.log(this.difficultyEl)
    }

    async getvalue(){
        let category= this.categoryEl.value
        let difficulty=Array.from(this.difficultyEl).find((ele)=>ele.checked).value
        //console.log(difficulty)
        let number=this.numberEl.value

        let api=`https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}`
        console.log(api)
        let data = await this.getapi(api)
        console.log(data)
        if(data.length >0){
            
           
            $('#setting').fadeOut(500,function(){
                $('#quiz').fadeIn(500)
    
            })

            let quiz= new Quiz(data)
        }
        else{
            document.querySelector('.showw').classList.remove('d-none')
        }
       
    }

    async getapi(api){
        let response= await fetch(api)
        let result= await response.json()
        return result.results

    }


}