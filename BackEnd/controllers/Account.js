const productModel = require('../models/Product')
const accountModel = require('../models/Account')
const cartModel = require('../models/CartItem')

const accountController = {
    register : async(req , res) =>{
        try {
            const newCart = new cartModel()
            const newAccount = new accountModel({
                fullname: req.body.fullname,
                email: req.body.email,
                phone_number: req.body.phone_number,
                username: req.body.username,
                password: req.body.password,
                cart_id: newCart._id,
                address: req.body.address
            })
            await newCart.save()
            await newAccount.save()
            res.status(200).json(newAccount)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    Login : async(req , res) =>{
        const account = await accountModel.findOne({
            username : req.body.username
        })
        if(account.password === req.body.password){
            res.status(200).json(account)
        }
        else
            res.status(500).json('Đăng nhập thất bại')
    },
    countAccount : async(req , res) =>{
        try {
            const countAccount =await accountModel.find().count()
            res.status(200).json(countAccount)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    addProductToCart : async(req , res) =>{
        try {
            const id = req.params._id
            // const account = await accountModel.aggregate([
            //     {
            //         $match : {
            //             _id : id
            //         }
            //     },
            //     {
            //         $lookup: {
            //             from: 'cartitems',
            //             localField: 'cart_id',
            //             foreignField: '_id',
            //             as: 'cartData'
            //         }
            //     }
            // ])
            const account = await accountModel.findById(id)
            const cart = await cartModel.findById(account.cart_id)
            cart.product_id.push(req.body.product)
            await cart.save()
            res.status(200).json(cart)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    cartContainFood : async(req , res) =>{
        try {
            const id = req.params._id
            // const account = await accountModel.findById(id).then(accounts => {
            //     return accountModel.aggregate([
            //         {
            //             $match : {
            //                 _id : accounts._id
            //             }
            //         },
            //         {
            //             $lookup : {
            //                 from: 'cartitems',
            //                 localField: 'cart_id',
            //                 foreignField: '_id',
            //                 as: 'cartData'
            //             }
            //         },
            //         {
            //             $lookup : {
            //                 from : 'products' ,
            //                 localField : 'cartData.product_id' ,
            //                 foreignField : '_id' ,
            //                 as : 'productData'
            //             }
            //         }
            //     ])
            // })
            const account = await accountModel.findById(id).populate('cart_id')
            let products = account.cart_id.product_id
            const detailedProduct = await productModel.aggregate([
                {
                    $match : {
                        _id : {$in : products}
                    }
                } ,
                {
                    $lookup : {
                        from : "foods" ,
                        localField : "id" ,
                        foreignField : "_id" ,
                        as : "foodData"
                    }
                } ,
                {
                    $lookup : {
                        from : "flavours" ,
                        localField : "foodData.flavour_id" ,
                        foreignField : "_id" ,
                        as : "flavourData"
                    }
                } ,
                {
                    $lookup : {
                        from : "sizes" ,
                        localField : "foodData.size_id" ,
                        foreignField : "_id" ,
                        as : "sizeData"
                    }
                } ,
                {
                    $unwind : "$foodData"
                }
            ])
            res.status(200).json(detailedProduct)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    cartContainPet: async (req, res) => {
        try {
            const id = req.params._id
            const account = await accountModel.findById(id).populate('cart_id')
            let products = account.cart_id.product_id
            const detailedProduct = await productModel.aggregate([
                {
                    $match: {
                        _id: { $in: products }
                    }
                },
                {
                    $lookup: {
                        from: "pets",
                        localField: "id",
                        foreignField: "_id",
                        as: "petData"
                    }
                },
                {
                    $unwind: "$petData"
                }
            ])
            res.status(200).json(detailedProduct)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    cartContainAccessory: async (req, res) => {
        try {
            const id = req.params._id
            const account = await accountModel.findById(id).populate('cart_id')
            let products = account.cart_id.product_id
            const detailedProduct = await productModel.aggregate([
                {
                    $match: {
                        _id: { $in: products }
                    }
                },
                {
                    $lookup: {
                        from: "accessories",
                        localField: "id",
                        foreignField: "_id",
                        as: "accessoryData"
                    }
                },
                {
                    $lookup: {
                        from: "colors",
                        localField: "accessoryData.color_id",
                        foreignField: "_id",
                        as: "colorData"
                    }
                },
                {
                    $lookup: {
                        from: "sizes",
                        localField: "accessoryData.size_id",
                        foreignField: "_id",
                        as: "sizeData"
                    }
                },
                {
                    $unwind: "$accessoryData"
                }
            ])
            res.status(200).json(detailedProduct)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteProductInCart : async(req,res)=>{
        try {
            const id = req.params._id;
            const deleteProduct = req.body.product_id;
            const account = await accountModel.findById(id).populate('cart_id');

            const updatedProduct = account.cart_id.product_id.filter(
                product => product.toString() !== deleteProduct
            );

            account.cart_id.product_id = updatedProduct;

            await account.cart_id.save();

            res.status(200).json('Xóa sản phẩm khỏi giỏ hàng thành công');
        } catch (error) {
            res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa sản phẩm khỏi giỏ hàng' });
        }
    },
    deleteAllProductsInCart: async (req, res) => {
        try {
            const id = req.params._id;
            const account = await accountModel.findById(id).populate('cart_id');

            account.cart_id.product_id = [];

            await account.cart_id.save();

            res.status(200).json('Xóa tất cả sản phẩm khỏi giỏ hàng thành công');
        } catch (error) {
            res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa sản phẩm khỏi giỏ hàng' });
        }
    }
}

module.exports = accountController