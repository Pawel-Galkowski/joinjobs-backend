require('dotenv').config()

module.exports = {
  mongoURI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@chat-vorap.mongodb.net/test?retryWrites=true&w=majority`,
  secretOrKey: process.env.MONGO_SERCRET,
  options: {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  }
}
