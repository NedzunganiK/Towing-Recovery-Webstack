import Service from '../models/serviceModel.js';

// Get all services
export const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new service
export const createService = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const service = new Service({ name, description, price });
    const createdService = await service.save();
    res.status(201).json(createdService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

