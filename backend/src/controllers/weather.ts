import { Router } from 'express';
const weatherRouter = Router();
import axios from 'axios';

weatherRouter.get('/', async (request, res) => {
  try {
      const response = await axios.get('https://restcountries.com/v3.1/all');

      res.json(response.data);
  } catch (error) {
      res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

export default weatherRouter;