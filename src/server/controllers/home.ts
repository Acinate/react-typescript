import {Response, Request} from 'express';

export const get = (req: Request, res: Response) => {
    res.status(200).json({message: "Welcome to Express-Typescript!"});
};