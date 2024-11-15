const mongoose = require("mongoose");

const AtmMasterSchema = mongoose.Schema(
    {

        atmId: {
            type: String,
            required: [true, "Enter the Atm ID"]
        },
        mspName: {
            type: String,
            required: [true, "Enter the msp Name"]
        },
         routeName:{
            type:String,
            required:[true,"Enter the Route Name"]
         },
         bankName:{
            type:String,
            required:[true,"Enter the Bank Name"]
         },
         routeCode:{
            type:String,
            required:[true,"Enter the Route Code"]
         },
         bagFloor:{
            type:String,
            required:[true,"Enter the Bag Floor"]
         },
         bagRack:{
            type:String,
            required:[true,"Enter the Bag Rack"]
         },
         bagColor:{
            type:String,
            required:[true,"Enter the Bag Color"]
         }

    },
    {
        timestamps: true
    }

)
const AtmMasterDetails = mongoose.model('AtmMasterSchema', AtmMasterSchema);

module.exports = AtmMasterDetails