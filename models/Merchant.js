import mongoose from "mongoose";

const merchantSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  services: [String],
  priceRange: String,
  image: String
});

const Merchant = mongoose.model("Merchant", merchantSchema);
export default Merchant;
