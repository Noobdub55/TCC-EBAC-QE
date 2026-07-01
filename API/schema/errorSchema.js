module.exports = {
  type: "object",

  properties: {
    code: {
      type: "string"
    },

    message: {
      type: "string"
    },

    data: {
      type: "object",
      properties: {
        status: {
          type: "number"
        }
      },
      required: ["status"]
    }
  },

  required: [
    "code",
    "message",
    "data"
  ]
};