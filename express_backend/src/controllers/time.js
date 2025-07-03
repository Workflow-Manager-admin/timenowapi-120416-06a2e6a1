 /**
  * Controller for the current time endpoint.
  */
 
 // PUBLIC_INTERFACE
 class TimeController {
   constructor() {
     this.timeService = require('../services/time');
   }
   /**
    * Returns the current server time in ISO-8601 format as JSON.
    * @param {import('express').Request} req
    * @param {import('express').Response} res
    * @returns {void}
    */
   getCurrentTime(req, res) {
     const timeObj = this.timeService.getCurrentTime();
     res.status(200).json(timeObj);
   }
 
   /**
    * Sets the server current time to a given ISO-8601 string sent as { time: string } in the POST body.
    * @param {import('express').Request} req
    * @param {import('express').Response} res
    * @returns {void}
    */
   // PUBLIC_INTERFACE
   setTime(req, res) {
     const { time } = req.body;
     if (!time) {
       return res.status(400).json({ error: 'Missing time field in request body.' });
     }
     try {
       const result = this.timeService.setCurrentTime(time);
       res.status(200).json(result);
     } catch (e) {
       res.status(400).json({ error: e.message || 'Invalid time format.' });
     }
   }
 
   /**
    * Resets custom time and reverts to system time (for demonstration/extension).
    * Not part of the user task, but useful for extensions/tests.
    */
   resetTime(req, res) {
     this.timeService.resetTime();
     res.status(204).send();
   }
 }
 
 module.exports = new TimeController();
