import exepress from 'express';
import { json } from 'body-parser';

const app = exepress();

app.use(json());

app.listen(3000, () => {
  console.log('app running on 3000');
});
