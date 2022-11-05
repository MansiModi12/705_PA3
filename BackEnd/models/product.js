var mongoose=require("mongoose")

var productSchema=mongoose.Schema({
    name:{type:String,required:true},
    // image:{type:String},
    // images:[{type:String}],
    brand:{type:String},
    price:{type:Number},
    // category:{type:mongoose.Schema.Types.ObjectId,ref:'Category',required:true},
    countInStock:{type:Number,required:true,min:0,max:255}
    // dateCreated:{type:Date,default:Date.now}
})

module.exports=mongoose.model('Product',productSchema);