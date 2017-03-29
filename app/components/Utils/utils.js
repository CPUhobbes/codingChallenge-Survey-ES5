var axios = require('axios');

module.exports = {
    getResults() {
         return axios.get('../api/questions')
        .then((response)=>{
            return response;
        });
    },
    getQuestion(){
        return axios.get('../api/avaliableQuestions')
        .then((response)=>{
            return response.data;
        });
 
    },
    submitAnswer(id){
        return axios.put('../api/questions/updateAnswer', {answerId: id})
        .then((response) =>{
            return response;
        });
    },
    submitQuestion(question){
        return axios.post('../api/questions/', question)
        .then((response) =>{
            return response;
        });
    },
    deleteQuestion(question){
        return axios.delete('../api/questions/', {data:{questionId:question}})
        .then((response) =>{
            return response;
        });
    },
    updateIp(question){
        return axios.post('../api/questions/ipAddress/', {data:{questionId:question}})
        .then((response) =>{
            return response;
        });
    }
}