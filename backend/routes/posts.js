// it will manage all routes
import express from 'express';
// getting routes function from ..container/posts.js
import {getposts , createPost} from '../controllers/posts.js';





// initialize router
const router = express.Router();


// router method and function calling
router.get('/', getposts);

router.get('/',createPost)






// exporting router
export default router ;