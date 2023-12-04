const BloodGroup = require("../models/BloodGroup");

module.exports = {

    addBloodgroup: async (req, res) => {
        try {
            const { name } = req.body;
            if (!name) {
                res.status(400).json({
                    success: false,
                    message: "Blood Group Name filed is required",
                });
            } else {
                const newBloodgroup = new BloodGroup({ name });
                const bloodgroup = await BloodGroup.findOne({ name: name });
                if (!bloodgroup) {
                    const bloodgroupData = await newBloodgroup.save();
                    res.status(201).json({
                        success: true,
                        message: "BlodGorup created successfully",
                        data: bloodgroupData,
                    });
                } else {
                    res.status(400).json({
                        success: false,
                        message: "Bloodgroup already exists",
                    });
                }
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Internal server error",
                payload: {},
            });
        }
    },

    getBloodgroup: async (req, res) => {
        try {
            const bloodgroupData = await BloodGroup.find();
            if (bloodgroupData.length === 0) {
                res.status(400).json({
                    success: false,
                    message: "BloodGroups not found",
                    payload: {},
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: "BloodGroups get successfully",
                    data: bloodgroupData,
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Internal server error",
                payload: {},
            });
        }
    },

    updateBloodgroup: async (req, res) => {
        try {
            const bloodgroupID = req.params.id;
            const { name } = req.body;
            const newBloodgroup = {
                name: name,
            };
            if (!name) {
                res.status(400).json({
                    success: false,
                    message: "Blood Group Name filed is requird",
                    payload: {},
                });
            } else {
                const bloodgroupName = await BloodGroup.findOne({ name: name });
                if (!bloodgroupName) {
                    const bloodgroupData = await BloodGroup.findOneAndUpdate(
                        { _id: bloodgroupID },
                        newBloodgroup,
                        {
                            new: true,
                        }
                    );
                    res.status(201).json({
                        success: true,
                        message: "BloodGroup Updated successfully",
                        payload: { bloodgroup: bloodgroupData },
                    });
                } else {
                    res.status(400).json({
                        success: false,
                        message: "Blood Group allredy exist",
                        payload: {},
                    });
                }
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Internal server error",
                payload: {},
            });
        }
    },

    deleteBloodGroupRecord: async (req, res) => {
        try {
            const bloodGroupId = req.params.id;
            const bloodGroup = await BloodGroup.deleteOne({ _id: bloodGroupId })
            if (bloodGroup.deletedCount === 0) {
                res.status(400).json({
                    success: false,
                    message: "Blood Group not delete",
                    payload: {}
                });
            } else {
                res.status(201).json({
                    success: true,
                    message: "Blood Group deleted successfully",
                    payload: { deletedCount: bloodGroup.deletedCount }
                });
            }
        } catch (error) {
            res.status(500).json({
                success: true,
                message: "Internal server error",
                payload: {}
            })
        }
    },

    // addDay: async (req, res) => {
    //     const { day } = req.body;
    
    //     // Convert the day to lowercase for case insensitivity
    //     const lowercaseDay = day.toUpperCase();
    
    //     try {
    //       // Check if the day already exists in the database
    //       const existingDay = await Days.findOne({ day: lowercaseDay });
    
    //       if (existingDay) {
    //         return res.status(400).json({
    //           success: false,
    //           message: "Day already exists",
    //           data: { day: existingDay },
    //         });
    //       } else if (!day) {
    //         return res.status(400).json({
    //           success: false,
    //           message: "Day is required",
    //         });
    //       } else {
    //         // Create a new day record
    //         const newDay = new Days({ day: lowercaseDay });
    //         await newDay.save();
    
    //         return res.status(201).json({
    //           success: true,
    //           message: "Day added successfully",
    //           data: newDay,
    //         });
    //       }
    //     } catch (error) {
    //       return res.status(500).json({
    //         success: false,
    //         message: "Internal server error",
    //       });
    //     }
    //   },

};

