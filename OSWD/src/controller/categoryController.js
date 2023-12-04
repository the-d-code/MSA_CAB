const Category = require("../models/Category");

module.exports = {

    addCategory: async (req, res) => {
        try {
            const { name, status } = req.body;
            if (!name) {
                res.status(400).json({
                    success: false,
                    message: "Category name filed is required",
                });
            } else {
                const newCategory = new Category({ name });
                const category = await Category.findOne({ name: name });
                if (!category) {
                    const categoryData = await newCategory.save();
                    res.status(201).json({
                        success: true,
                        message: "Category created successfully",
                        data: categoryData,
                    });
                } else {
                    res.status(400).json({
                        success: false,
                        message: "Category already exists",
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

    getCategory: async (req, res) => {
        try {
            const categoryData = await Category.find();

            if (categoryData.length === 0) {
                res.status(400).json({
                    success: false,
                    message: "Category not found",
                    payload: {},
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: "Category get successfully",
                    data: categoryData,
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Internal server error",
                payload: {},
            })
        }

    },

    updateCategory: async (req, res) => {
        try {
            const categoryID = req.params.id;
            const { name, status } = req.body;
            const newCategory = {
                name: name,
                status: status,
            };
            if (!name) {
                res.status(400).json({
                    success: false,
                    message: "Category name filed is required",
                });
            } else {
                const category = await Category.findOne({ _id: categoryID });
                if (!category) {
                    res.status(400).json({
                        success: false,
                        message: "Category not found",
                    });
                } else {
                    const categoryData = await Category.findByIdAndUpdate(
                        { _id: categoryID },
                        newCategory,
                        { new: true }
                    );
                    res.status(200).json({
                        success: true,
                        message: "Category updated successfully",
                        data: categoryData,
                    });
                }

            }

        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Internal server error",
                payload: {},
            })
        }

    },

    deleteCategory: async (req, res) => {
        try {
            const categoryID = req.params.id;
            const category = await Category.findOne({ _id: categoryID });
            if (!category) {
                res.status(400).json({
                    success: false,
                    message: "Category not found",
                });
            } else {
                const categoryData = await Category.findByIdAndDelete({ _id: categoryID });
                res.status(200).json({
                    success: true,
                    message: "Category deleted successfully",
                    data: categoryData,
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Internal server error",
                payload: {},
            })
        }
    },

    uclcCategory: async (req, res) => {
        const { name, status } = req.body;

        //convert name to uppercase
        const LowercaseName = name.toUpperCase();

        try {
            const existingName = await Category.findOne({ name: LowercaseName });
            if (existingName) {
                res.status(400).json({
                    success: false,
                    message: "Category already exists",
                    payload: {},
                });
            } else if (!name) {
                res.status(400).json({
                    success: false,
                    message: "Category name filed is required",
                    payload: {},
                });
            } else {

                const newCategory = new Category({ name: LowercaseName, status: status });
                await newCategory.save();

                res.status(201).json({
                    success: true,
                    message: "Category created successfully",
                    payload: {category: newCategory},
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
};