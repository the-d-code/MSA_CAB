const Product = require('../models/Product');
const Category = require('../models/Category');

module.exports = {

    addProduct:async(req,res)=>{
        try{
            const {name,price,quantity,categoryID,status} = req.body;
            const image = req.file.filename;
            console.log(image);
            const category = await Category.findById(categoryID);

            if(!category){
                res.status(400).json({
                    success:false,
                    message:"Category not found",
                });
            }else if(!name){
                res.status(400).json({
                    success:false,
                    message:"Name is required",
                });
            }else if(!price){
                res.status(400).json({
                    success:false,
                    message:"Price is required",
                });
            }else if(!quantity){
                res.status(400).json({
                    success:false,
                    message:"Quantity is required",
                });
            }else{
                const productData = await Product.insertMany({
                    name,
                    price,
                    quantity,
                    image,
                    categoryID,
                    status
                });
                res.status(200).json({
                    success:true,
                    message:"Product added successfully",
                    payload:{product : productData},
                });
            }
        }catch(error){
            res.status(500).json({
                success:false,
                message:"Internal server error",
                error:error.message
            });
        }
    },

    getProduct:async(req,res)=>{
        try{
            const productData = await Product.find();
            if(productData.length === 0){
                res.status(400).json({
                    success:false,
                    message:"Product not found",
                
                });
            }else{
                res.status(200).json({
                    success:true,
                    message:"Product found successfully",
                    payload:{product : productData},
                });
            }
        }catch(error){
            res.status(500).json({
                success:false,
                message:"Internal server error",               
            });
        }

    },

    updateProduct:async(req,res)=>{
        try{
            const productID = req.params.id;
            const {name,price,quantity,categoryID,status} = req.body;
            const image = req.file.filename;
            const category = await Category.findById(categoryID);

            const newProduct={
                name: name,
                price: price,
                quantity: quantity,
                image: image,
                categoryID: categoryID,
                status: status,
            };

            if(!category){
                res.status(400).json({
                    success:false,
                    message:"Category not found",
                });
            }else if(!name){
                res.status(400).json({
                    success:false,
                    message:"Name is required",
                });
            }else if(!price){
                res.status(400).json({
                    success:false,
                    message:"Price is required",
                });
            }else if(!quantity){
                res.status(400).json({
                    success:false,
                    message:"Quantity is required",
                });
            }else if(!image){
                res.status(400).json({
                    success:false,
                    message:"Image is required",
                });
            }else{
                const productData = await Product.findOneAndUpdate({_id:productID},newProduct,{new:true});
                res.status(200).json({
                    success:true,
                    message:"Product updated successfully",
                    payload:{product : productData},
                });
            }
        }catch(error){
            res.status(500).json({
                success:false,
                message:"Internal server error",               
            });
        }
    },

    deleteProduct:async(req,res)=>{
        try{
            const productID = req.params.id;
            const product = await Product.deleteOne({_id:productID});

            if(!product.deletedCount === 0){
                res.status(400).json({
                    success:false,
                    message:"Product not found",
                });
            }else{
                res.status(200).json({
                    success:true,
                    message:"Product deleted successfully",
                    payload:{product : product},
                });
            }
        }catch(error){
            res.status(500).json({
                success:false,
                message:"Internal server error",               
            });
        }
    },


};