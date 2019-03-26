const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name!'
  },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
  tags: [String]
});

storeSchema.pre('save', function (next) {
  if (!this.isModified('name')) {
    return next(); // skip it and stop this function from running
  }
  this.slug = slug(this.name);
  next();

  // TODO we need to make the slugs more unique for resilience
})

module.exports = mongoose.model('Store', storeSchema);