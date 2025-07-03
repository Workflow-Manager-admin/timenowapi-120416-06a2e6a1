 /**
  * Service for time operations.
  */
 
 // PUBLIC_INTERFACE
 class TimeService {
   constructor() {
     // Holds the custom time if set. Null means system time is used.
     this._customTimeISO = null;
   }
 
   /**
    * Returns the current server time or the last set time in { time: string } shape.
    * @returns {{ time: string }}
    */
   getCurrentTime() {
     if (this._customTimeISO) {
       return { time: this._customTimeISO };
     }
     return { time: new Date().toISOString() };
   }
 
   /**
    * Sets the current server time. Stores ISO-8601 string.
    * @param {string} isoTime - Time string in ISO-8601 format.
    * @returns {{ time: string }}
    */
   setCurrentTime(isoTime) {
     const parsed = new Date(isoTime);
     if (isNaN(parsed.getTime())) {
       // Invalid date
       throw new Error('Invalid time format: must be ISO-8601 string');
     }
     this._customTimeISO = parsed.toISOString();
     return { time: this._customTimeISO };
   }
 
   /**
    * Resets the time to the system time (clears custom time).
    */
   resetTime() {
     this._customTimeISO = null;
   }
 }
 
 module.exports = new TimeService();
