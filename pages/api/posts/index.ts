import { NextApiRequest, NextApiResponse } from 'next';
import posts from './data';

export type Iposts = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

function postsHandler(req: NextApiRequest, res: NextApiResponse<Iposts[]>) {
    res.status(200).json(posts);
}

export default postsHandler;
