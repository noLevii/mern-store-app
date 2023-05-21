const router = require("express").Router();
const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")(
  "sk_test_51JnzVTElpBU7rwJYKNeSa6TNfOw07B5MnuPWNPkSl1N5hsiUMYjyNTbhaAS10fVPHzszHLvYuJepcTDqsz4EW6FA00mpqTySLS"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "mxn",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
