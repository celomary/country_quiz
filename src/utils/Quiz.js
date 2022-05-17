export default class Quiz {
    constructor(data, numberOfQuestion=4)
    {
        this.data = data;
        this.numberOfQuestion = numberOfQuestion;
        this.choosenQuestions = [];
        this.correctAnswer = null;
    }
    static getRandomNumber(start, end)
    {
        return Math.floor(Math.random() * end + start);
    }
    generate(){
        for (let i = 0; i < this.numberOfQuestion; i++)
            this.choosenQuestions.push(this.data[Quiz.getRandomNumber(0, this.data.length)]);
        this.correctAnswer = this.choosenQuestions[Quiz.getRandomNumber(0, this.numberOfQuestion)];
    }
}
