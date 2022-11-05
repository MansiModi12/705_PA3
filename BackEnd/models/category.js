var mongoose=require("mongoose");

var categorySchema=mongoose.Schema({
    name:{type:String,required:true}
},'CATEGORY')

module.exports=mongoose.model('Category',categorySchema);