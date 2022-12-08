import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import onError from '../../../utils/error';
import { getAllProducts } from '../../../controller/productController';


const handler = nc({ onError });

dbConnect();

handler.get(getAllProducts);

export default handler;