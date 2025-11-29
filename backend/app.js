const express = require('express');
const app = express();
const prisma = require('./prisma');
const auth = require('./auth');
app.use(express.json());
app.use(auth.verifyToken);
app.get('/api/surf-camps', async (req, res) => {
  const surfCamps = await prisma.surfCamp.findMany();
  res.json(surfCamps);
});
app.get('/api/surf-camps/:id', async (req, res) => {
  const id = req.params.id;
  const surfCamp = await prisma.surfCamp.findUnique({ where: { id: Number(id) } });
  if (!surfCamp) return res.status(404).json({ error: 'Surf camp not found' });
  res.json(surfCamp);
});
app.post('/api/surf-camps', async (req, res) => {
  const { name, location, price, photos, amenities } = req.body;
  const surfCamp = await prisma.surfCamp.create({
    data: { name, location, price, photos, amenities },
  });
  res.json(surfCamp);
});
app.put('/api/surf-camps/:id', async (req, res) => {
  const id = req.params.id;
  const { name, location, price, photos, amenities } = req.body;
  const surfCamp = await prisma.surfCamp.update({
    where: { id: Number(id) },
    data: { name, location, price, photos, amenities },
  });
  res.json(surfCamp);
});
app.delete('/api/surf-camps/:id', async (req, res) => {
  const id = req.params.id;
  await prisma.surfCamp.delete({ where: { id: Number(id) } });
  res.json({ message: 'Surf camp deleted' });
});
app.post('/api/bookings', async (req, res) => {
  const { surfCampId, userId, startDate, endDate } = req.body;
  const booking = await prisma.booking.create({
    data: { surfCampId, userId, startDate, endDate },
  });
  res.json(booking);
});
app.get('/api/reviews', async (req, res) => {
  const surfCampId = req.query.surfCampId;
  const reviews = await prisma.review.findMany({
    where: { surfCampId: Number(surfCampId) },
  });
  res.json(reviews);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});