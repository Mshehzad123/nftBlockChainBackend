import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  itemTitle: String,
  descriptionForItem: String,
  yourUsername: String,
  priceOfItem: String, // Changed 'number' to 'Number'
  royalties: String,   // Changed 'number' to 'Number'
  file: Buffer         // File can be stored as Buffer for binary data
});

const CreateNft = mongoose.model('CreateNft', userSchema);

export default CreateNft;
