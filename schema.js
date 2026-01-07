const Joi = require('joi');
const listingschema = Joi.object({
    listing:Joi.object({
        title:Joi.string().required(),
        description: Joi.string().allow("").optional(),
        location:Joi.string().required(),
        price:Joi.number().required().min(0),
        image:Joi.string().allow("",null),
        country: Joi.string().required(),
        category: Joi.string().valid(
            "Trending",
            "Rooms",
            "Iconic cities",
            "Mountains",
            "Pools",
            "Hotels",
            "Villas",
            "Beaches",
            "Farms",
            "Arctic"
            ).optional(),
        })
});

module.exports={listingschema};

module.exports.ReviewSchema=Joi.object({
    review:Joi.object({
        rating:Joi.number().required(),
        comment:Joi.string().required()
    }).required(),
})
