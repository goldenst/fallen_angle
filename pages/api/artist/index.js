// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { artist } = require('../../artist/data.json') 

export default (req, res) => {
  res.status(200).json(artist)
}
