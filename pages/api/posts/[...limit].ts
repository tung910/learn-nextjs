/* eslint-disable react-hooks/rules-of-hooks */
import { NextApiRequest, NextApiResponse } from 'next';


type Props = {}

async function handler(req: NextApiRequest, res: NextApiResponse<Props>) {

    console.log(req.query);

    res.status(200).json({});
}

export default handler