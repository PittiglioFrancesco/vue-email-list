const app = new Vue(
    {
        el: '#app',
        data: {
            mail: '',
            mailArray: []
        },
        mounted(){
            for (let i = 0; i < 10; i++){
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(result => {
                    this.mail = result.data.response;
                    this.mailArray.push(this.mail);
                });
            }      
        }
    }
)