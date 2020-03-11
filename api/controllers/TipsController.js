/**
 * TipsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  upvote: async function (req, res) {
    var tipId = req.param('tipId');
    var tip = await Tip.findOne({id: tipId});

    if(!tip) {
      return res.json({code: 404, message: 'Tip not found'});
    }

    var updatedTip = await Tip.updateOne({ id: tipId })
    .set({
      upvotes: tip.upvotes + 1,
    });

    return res.json(updatedTip);
  }
};
