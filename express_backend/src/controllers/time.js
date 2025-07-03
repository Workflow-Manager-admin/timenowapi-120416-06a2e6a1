/**
 * Controller for the current time endpoint.
 */

// PUBLIC_INTERFACE
class TimeController {
  /**
   * Returns the current server time in ISO-8601 format as JSON.
   * @param {import('express').Request} req 
   * @param {import('express').Response} res 
   * @returns {void}
   */
  getCurrentTime(req, res) {
    // Gather the timeService to obtain the formatted time value
    const timeService = require('../services/time');
    const timeObj = timeService.getCurrentTime();
    res.status(200).json(timeObj);
  }
}

module.exports = new TimeController();
