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
 */

const express = require('express');
const timeController = require('../controllers/time');

const router = express.Router();

router.get('/time', timeController.getCurrentTime.bind(timeController));

module.exports = router;
