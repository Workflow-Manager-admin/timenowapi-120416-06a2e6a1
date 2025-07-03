/**
 * @swagger
 * /api/time:
 *   get:
 *     summary: Get the current server time
 *     description: Returns the current time in ISO-8601 format.
 *     tags:
 *       - Time
 *     responses:
 *       200:
 *         description: Current server time
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 time:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-05-05T12:34:56.789Z"
 *
 * /api/time/set:
 *   post:
 *     summary: Set the current server time
 *     description: Sets the current server time manually by providing a time string (in ISO-8601 format). Future GET requests to /api/time will return the set time. This is stored only in server memory.
 *     tags:
 *       - Time
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - time
 *             properties:
 *               time:
 *                 type: string
 *                 format: date-time
 *                 description: The new current time in ISO-8601 format.
 *                 example: "2024-05-06T10:00:01.000Z"
 *     responses:
 *       200:
 *         description: The time has been set as the new current time.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 time:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-05-06T10:00:01.000Z"
 *       400:
 *         description: Invalid input or bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Missing time field in request body.
 */

const express = require('express');
const timeController = require('../controllers/time');

const router = express.Router();

router.get('/time', timeController.getCurrentTime.bind(timeController));
router.post('/time/set', timeController.setTime.bind(timeController));

module.exports = router;
