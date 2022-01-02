const { flashSale } = require('../models/flashSale')

const createFlashSale = async (req, res, next) => {
    try {
        console.log("call to createFlashSale")
        const newFlashSale = req.body;
        // console.log(newProduct)
        const FlashSale = new flashSale(newFlashSale);
        await FlashSale.save();
        res.status(200).send(FlashSale)
    } catch (err) {
        res.status(500).json({ error: err })
        console.log(err)
    }

}

const index = async (req, res) => {
    const flashSale = await flashSale.find({})
    return res.status(200).json({ flashSale })
}
module.exports = {
    index,
    createFlashSale
}