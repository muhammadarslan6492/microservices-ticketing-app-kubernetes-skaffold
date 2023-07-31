import express from 'express';
import { currentUser } from '../middlewares/current-user';

const router = express.Router();

// router.get('/api/users/currentuser', currentUser, (req, res) => {
//   res.send({ currentUser: req.currentUser || null });
// });

router.get('/api/users/currentuser', (req, res) => {
  res.send({ message: 'muhammad arsalan is the current user' });
});

export { router as currentUserRouter };
