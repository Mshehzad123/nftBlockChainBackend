import CreateNft from "../models/create.model.js";

const CreateNfts = async (req, res) => {
    try {
        const file = req.file; // Assuming Multer is handling the file upload
        if (!file) {
            return res.status(400).send("No file uploaded.");
        }

        // Create a new NFT object with the form data and file buffer
        const nft = new CreateNft({
            itemTitle: req.body.itemTitle,
            descriptionForItem: req.body.descriptionForItem,
            yourUsername: req.body.yourUsername,
            priceOfItem: req.body.priceOfItem,
            royalties: req.body.royalties,
            file: file.buffer // Store file as Buffer
        });

        console.log("NFT Data: ", nft);
        const result = await nft.save();
        res.status(201).send("NFT created successfully");
        console.log(result);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message || "Error creating NFT");
    }
};

export default CreateNfts;
