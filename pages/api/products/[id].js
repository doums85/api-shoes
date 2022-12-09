import nc from 'next-connect';

import dbConnect from '../../../config/dbConnect';
import { getOne } from '../../../controller/productController';
import onError from '../../../utils/error';

const handler = nc({ onError });

dbConnect();

handler.get(getOne);

export default handler;
