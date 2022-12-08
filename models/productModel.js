import mongoose from "mongoose";

let stringRequire = {type:String, require: true}

const productSchema = mongoose.Schema({
  brand: stringRequire,
  name: stringRequire,
  code: stringRequire,
  product_quantity: {type:Number, require: true},
  price: {type:Number, require: true},
  description: stringRequire,
  weight: {type:Number, require: true},
  picture_1: stringRequire,
  picture_2: stringRequire,
  picture_3: stringRequire,
  madein: stringRequire,
  firme: stringRequire,
  material: stringRequire,
  production: stringRequire,
  category: stringRequire,
  sub_category: stringRequire,
  season: stringRequire,
  color: stringRequire,
  bicolors: stringRequire,
  genre: stringRequire,
  productname: stringRequire,
  model: [{
    model_id: {type:Number, require: true},
    barcode: {type:Number, require: true},
    model_size: stringRequire,
    model_quantity: {type:Number, require: true},
  }]
});

export default mongoose.models.Product || mongoose.model('Product', productSchema)