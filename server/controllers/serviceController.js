const Services = require("../models/Services");

exports.createService = async (req, res) => {
    const  {secure_url} = req.file;
  const service = await Services.create(
    { ...req.body, photo: secure_url },
  )
  res.status(201).json({ service })
};


exports.getServices = async (req,res) => {
    const services = await Services.find()
    res.status(200).json({services});
};

exports.getService = async (req, res) => {
    const {id} = res.params;
    const service = await Service.findById(id).populate("services");
    res.status(200).json({service});
};

exports.updateService = async (req, res) =>{
    const  { nameservice, photo, descriptionservice} = req.body;
    const {id} = req.params;
    const service = Service.findByIdAndUpdate (id, { nameservice, photo, descriptionservice})
    res.status(200).json({service});
};

exports.deleteService = async (req, res) => {
    const { id } = req.params;
    await Service.findByIdAndDelete(id);
    res.status(200).json({mesaje: "Service eleiminado"})
}