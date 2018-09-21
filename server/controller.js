module.exports = {
  getAll: (req, res) => {
    const db = req.app.get('db')
    db.read_products()
      .then(inventory => {
        return res.status(200).json(inventory)
      })
      .catch(err => {
        res.status(500).json('yikes.')
        console.log('error:', err)
      })
  },

  create: (req, res) => {
    const db = req.app.get('db')
    const { img, product_name, product_price } = req.body
    db.create_product([img, product_name, product_price])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).json('yikes.')
        console.log('error:', err)
      })
  },

  removeProduct: (req, res) => {
    const db = req.app.get('db')
    db.delete_product([req.params.id.charAt(0), req.params.id.charAt(0)]).then(inventory => {
      return res.status(200).json(inventory)
    })
  },
}
