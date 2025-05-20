module.exports = {
    home: (req,res)=> {
        res.render('home')
    },
    addProduct: (req,res) => {
        res.render('addProduct')
    },
    productDetail: (req,res) => {
        res.render('productoDetail')
    },
    register: (req,res) => {
        res.render('register')
    },
}