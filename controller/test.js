const mongoose = require('mongoose');
const Test = require('../models/Test');

exports.addTest = async(req, res) => {
    try {
        const {university, questions} = req.body;
        console.log(university, questions)
        const newTest = new Test({
            university, questions
        })
        newTest.save();
        res.json("Test Added")
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

exports.viewTest = async(req, res) => {
    try {
        const test = await Test.find();
        res.json(test);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

exports.findTest = async(req, res) => {
    try {
        const {university} = req.body;
        const test = await Test.find({university: university});
        res.json(test);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}