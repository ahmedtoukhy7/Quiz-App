

export class Quiz{
    constructor(data){
        console.log('hi')
        this.index=0
        this.score=0
        this.dataQuiz=data
        this.showQuiz()

        document.getElementById('next').addEventListener('click',()=>{this.nextQues()})
        document.getElementById('tryBtn').addEventListener('click',this.tryAgain)


    }


     shuffle(anwsers) {
        let currentIndex = anwsers.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [anwsers[currentIndex], anwsers[randomIndex]] = [
            anwsers[randomIndex], anwsers[currentIndex]];
        }
      
       
      }

    showQuiz(){
        document.getElementById('current').innerHTML=this.index + 1 
        document.getElementById('totalAmount').innerHTML=this.dataQuiz.length 
        document.getElementById('question').innerHTML=this.dataQuiz[this.index].question
        //let anwsers=this.dataQuiz[this.index].incorrect_answers.concat(this.dataQuiz[this.index].correct_answer)
        let anwsers= [this.dataQuiz[this.index].correct_answer , ...this.dataQuiz[this.index].incorrect_answers ]
        console.log(anwsers)
        this.shuffle(anwsers)
        console.log(anwsers)

        let temp=''
        anwsers.forEach((ele)=>{
            temp+=`
            <label class="form-check-label">
                <input type="radio" class="form-check-input" name="answer" id="q1" value="${ele}">
                ${ele}
              </label>`
        })
        document.getElementById('rowAnswer').innerHTML=temp

    }


    nextQues(){

        let awnsersChoose=document.getElementsByName('answer')
        console.log(awnsersChoose)
        let choose =Array.from(awnsersChoose).find(ele => ele.checked).value
        console.log(choose)
       
        
        //console.log(this.score)
        if(choose == this.dataQuiz[this.index].correct_answer){
            console.log('yees')
            this.score++
            console.log(this.score)
            $('#Correct').fadeIn(500).fadeOut(500)
        }
        else{
            $('#inCorrect').fadeIn(500).fadeOut(500)
        }
        this.index++
        if(this.index < this.dataQuiz.length){
            this.showQuiz()
        }
        else{
            console.log('finshed')
            $('#quiz').fadeOut(500,function(){
                $('#finish').fadeIn(500)
               
            })
            document.getElementById('score').innerHTML=this.score
        }
    }

    tryAgain(){
        $('#finish').fadeOut(500,function(){
            $('#setting').fadeIn(500)})
    }
}