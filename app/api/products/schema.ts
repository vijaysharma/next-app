import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  price: z.string()
});

export default schema;
