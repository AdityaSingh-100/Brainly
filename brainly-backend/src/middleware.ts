import { NextFunction, Request, Response } from "express";
import jwt, { decode } from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";

export const userMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers["authorization"];

  if (!header) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const decoded = jwt.verify(header as string, JWT_PASSWORD) as {
    id: string;
  };

  if (decoded) {
    req.userId = decoded.id;
    next();
  } else {
    res.status(403).json({ message: "You are not logged in" });
  }
};

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}
// By default, Express's Request object doesn't have a userId property. So if you try to do:
//This code extends the existing Express Request interface to add a custom property userId of type string
// req.userId = "some-user-id";  // ❌ TypeScript error: Property 'userId' does not exist

// Overide the types of the express request objects
