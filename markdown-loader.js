const { validate } = require("schema-utils")
const { marked } = require('marked')

const schema = {
  type: 'object',
  properties: {
    html: {
      type: 'boolean'
    },
    langPrefix: {
      type: 'string'
    },
    linkify: {
      type: 'boolean'
    }
  }
}

module.exports = function (data) {
  validate(schema, this.getOptions())
  console.log(marked.parse(data))
  return marked.parse(data)
}


