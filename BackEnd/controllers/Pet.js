const productModel = require('../models/Product')
const petModel = require('../models/Pet')

const petController = {
    addPet : async(req , res) =>{
        try {
            const newpet = new petModel({
                price : req.body.price , 
                breed : req.body.breed ,
                age : req.body.age ,
                gender : req.body.gender
            })
            const newproduct = new productModel({
                name: req.body.name,
                description: req.body.description,
                id: newpet._id,
                product_type: req.body.product_type,
            })
            if(req.file){
                newproduct.image_url = req.file.path
            }
            await newpet.save()
            await newproduct.save()
            res.status(200).json(newproduct)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    readAllPet : async(req , res) =>{
        try {
            const allPet = await productModel.aggregate([
                {
                    $lookup: {
                        from: 'pets',
                        localField: 'id',
                        foreignField: '_id',
                        as: 'petData'
                    }
                },
                {
                    $unwind : '$petData'
                }
            ])
            res.status(200).json(allPet)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    readPet : async(req , res)=>{
        try {
            const _idProduct = req.params._id;
            const product = await productModel.findById(_idProduct).lean()
            const _idPet = product.id
            const pet = await petModel.findById(_idPet).lean()
            const petData = {
                Product : product,
                Pet : {
                    price : pet.price,
                    breed : pet.breed,
                    age : pet.age,
                    gender : pet.gender
                }
            }
            res.status(200).json(petData);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deletePet : async(req,res)=>{
        try {
            const id = req.params._id
            const product = await productModel.findById(id)
            const idPet = product.id
            await petModel.findByIdAndDelete(idPet)
            await productModel.findByIdAndDelete(id)
            res.status(200).json("Xóa thành công")
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updatePet: async (req, res) => {
        try {
            const productId = req.params._id;
            const product = await productModel.findById(productId)
            const petId = product.id
            const updatedPetData = req.body.pet;
            const updatedProductData = req.body.product;
            const updatedProduct = await productModel.findByIdAndUpdate(
                productId,
                updatedProductData,
                { new: true, runValidators: true }
            );
            const updatedPet = await petModel.findByIdAndUpdate(
                petId,
                updatedPetData,
                { new: true, runValidators: true }
            );
            if (!updatedProduct || !updatedPet) {
                return res.status(404).json({ error: "Product hoặc Pet không tồn tại" });
            }

            res.status(200).json({ updatedProduct, updatedPet });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = petController