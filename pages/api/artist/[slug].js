// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { artist } = require('../../artist/data.json') 

export default (req, res) => {

    const art = artist.filter(ar => ar.slug === req.query.slug)

  res.status(200).json(art)
}
