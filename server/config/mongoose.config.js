const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/moviedb', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('success!')
}).catch((err)=>{
    console.log(err)
})