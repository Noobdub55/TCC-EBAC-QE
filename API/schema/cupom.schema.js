module.exports = {
    type: "object",

    properties: {

        id: {
            type: "number"
        },

        code: {
            type: "string"
        },

        amount: {
            type: "string"
        },

        discount_type: {
            type: "string"
        },

        description: {
            type: "string"
        }

    },

    required: [
        "id",
        "code",
        "amount",
        "discount_type"
    ]
}