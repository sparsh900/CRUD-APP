
const mongoose= require('mongoose')

const productSchema= mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
		type: String,
		required: true
	},
})


module.exports={
    productSchema: productSchema,
}

