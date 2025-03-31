import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Request... ${req.method} ${req.url}`);
    next();
  }
}
// This middleware logs the HTTP method and URL of incoming requests.
// It implements the NestMiddleware interface, which requires a use method.
// The use method takes three parameters: req (the request object), res (the response object), and next (a function to call the next middleware in the stack).
// The middleware logs the request method and URL to the console and then calls next() to pass control to the next middleware or route handler.
// If you want to add more functionality, such as logging the request body or headers, you can modify the use method accordingly.
//     const task = this.getTaskById(id); // Finds the task by ID
//     if (!task) {
//       throw new Error(`Task with ID ${id} not found`); // Throws an error if not found
//     }
//     task.title = title; // Updates the title
//     task.description = description; // Updates the description
//     return task; // Returns the updated task
//   }
//
