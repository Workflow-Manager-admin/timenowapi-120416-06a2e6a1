/**
 * Service for time operations.
 */

// PUBLIC_INTERFACE
class TimeService {
  /**
   * Returns the current server time formatted as ISO-8601 in an object.
   * @returns {{ time: string }}
   */
  getCurrentTime() {
    return { time: new Date().toISOString() };
  }
}

module.exports = new TimeService();
