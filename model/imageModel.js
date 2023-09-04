import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
    url : {
        type: String
    }
})

const Image = mongoose.models.image || mongoose.model("image", imageSchema);
export default Image;