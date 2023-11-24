import { Request, Response } from "express";
import { userServices } from "../services/user.services";

const createUser = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result =userServices.createUser(data)
        res.status(201).json({
            "success": true,
            "message": "User created successfully!",
            data: result
        })

    } catch (error: any) {
        res.status(500).json({
            "success": false,
            'message': error.message||"something went to wrong"
        })
    }
}
export const userController={
    createUser
}