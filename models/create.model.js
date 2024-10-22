import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  itemTitle: { type: String, required: true }, // Required field
  descriptionForItem: { type: String, required: true }, // Required field
  yourUsername: { type: String, required: true }, // Required field
  priceOfItem: { type: String, required: true }, // Required field
  royalties: { type: String, required: true }, // Required field
  profile: String, // Store the file path or URL
  nft: String, // Store the file path or URL
  createdAt: { type: Date, default: Date.now }, // Explicit createdAt field
  updatedAt: { type: Date, default: Date.now } // Explicit updatedAt field
}, { 
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } // Enable automatic timestamp management
});

const CreateNft = mongoose.model('CreateNft', userSchema);

export default CreateNft;
