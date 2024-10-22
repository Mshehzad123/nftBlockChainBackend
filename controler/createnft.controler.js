import CreateNft from "../models/create.model.js";
// import fs from 'fs';
// import path from 'path';

// const CreateNfts = async (req, res) => {
//     try {
//         const { profile, nft } = req.files; // Destructure files from Multer
//         if (!profile || !nft) {
//             return res.status(400).send("Both profile and NFT files are required.");
//         }

//         // Define the path where the files will be saved
//         const uploadsDir = path.join(process.cwd(), 'uploads');

//         // Ensure the uploads directory exists
//         if (!fs.existsSync(uploadsDir)) {
//             fs.mkdirSync(uploadsDir, { recursive: true }); // Create the directory if it doesn't exist
//         }

//         // Save the files to the uploads directory
//         const profilePath = path.join(uploadsDir, profile[0].originalname);
//         const nftPath = path.join(uploadsDir, nft[0].originalname);
//         fs.writeFileSync(profilePath, profile[0].buffer);
//         fs.writeFileSync(nftPath, nft[0].buffer);

//         // Create a new NFT object with the form data and file paths
//         const newNft = new CreateNft({
//             itemTitle: req.body.itemTitle,
//             descriptionForItem: req.body.descriptionForItem,
//             yourUsername: req.body.yourUsername,
//             priceOfItem: req.body.priceOfItem,
//             royalties: req.body.royalties,
//             profile: `/uploads/${profile[0].originalname}`,  // Store the relative path for the profile image
//             nft: `/uploads/${nft[0].originalname}`           // Store the relative path for the NFT image
//         });

//         const result = await newNft.save();
//         res.status(201).send("NFT created successfully");
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//         res.status(400).send(error.message || "Error creating NFT");
//     }
// };


// export default { CreateNfts, getCreatedNft };


import fs from 'fs'; // Use the default fs module
import path from 'path';

const CreateNfts = async (req, res) => {
    try {
        const { profile, nft } = req.files;
        if (!profile || !nft) {
            return res.status(400).send("Both profile and NFT files are required.");
        }

        const uploadsDir = path.join(process.cwd(), 'uploads');

        // Use fs.existsSync from the default fs module
        if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, { recursive: true }); // Synchronous way to create the directory
        }

        const profilePath = path.join(uploadsDir, profile[0].originalname);
        const nftPath = path.join(uploadsDir, nft[0].originalname);
        fs.writeFileSync(profilePath, profile[0].buffer); // Synchronous write
        fs.writeFileSync(nftPath, nft[0].buffer); // Synchronous write

        const newNft = new CreateNft({
            itemTitle: req.body.itemTitle,
            descriptionForItem: req.body.descriptionForItem,
            yourUsername: req.body.yourUsername,
            priceOfItem: req.body.priceOfItem,
            royalties: req.body.royalties,
            profile: `/uploads/${profile[0].originalname}`,
            nft: `/uploads/${nft[0].originalname}`,
        });

        const result = await newNft.save();
        res.status(201).send("NFT created successfully");
        console.log(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message || "Error creating NFT");
    }
};
const getCreatedNft = async (req, res) => {
    try {
        const nftItems = await CreateNft.find();
        res.status(200).json(nftItems);
        console.log(nftItems);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
};


export default { CreateNfts, getCreatedNft };
