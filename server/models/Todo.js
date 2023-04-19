const mongoose = require("mongoose");

const TotoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: "coming",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Todo", TotoSchema);
