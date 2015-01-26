/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
  return {type:'Goldfish', brand:'Pepperidge Farm', flavor:'Cheddar', count:2000}; //Modify ONLY this line
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here

function MessageLog(user) {
	var sentMessage = new Array(5);  // the max size of array is 5 according to the instructions
	var sentCount = 0;	
	var receivedCount = 0;
	var lastReceivedMessageText;
	
	this.user = user;
	this.logMessage = function (messageText, direction) {
		// create a copy of the messageText sent in for use in
		// function getLastReceivedMessageText
		
		lastReceivedMessageText = messageText;
		
		if (direction==0) {
			// shift all messages in sentMessage array to the right
			// i.e. 0 becomes 1, 1 becomes 2, 2 becomes 3, 3 becomes 4, and
			// 4 is shifted out of array
			
			for (var i=4;i>0;i--) {
					sentMessage[i] = sentMessage[i-1];		
			}
			
		   // now put the message sent to position 0 of the array, i.e.
		   // most recent
		   
			sentMessage[0] = messageText;
			
			sentCount = sentCount + 1;	
		} else if (direction==1) {
			receivedCount = receivedCount + 1;
		}
	
	}
	this.getSentMessage = function (n) {
		return sentMessage[n];
	}
	this.totalSent = function () {
		return sentCount.toString();
	}
	this.totalReceived = function () {
		return receivedCount;
	}
	this.totalMessageCount = function () {
		var totalCount = sentCount + recievedCount;
		
		return totalCount;
	}
	this.getLastReceivedMessageText = function () {
		return lastReceivedMessageText;
	}
}

//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here

MessageLog.prototype.lastReceivedMessage = function() {
	return this.getLastReceivedMessageText();
}

//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here

// create myLog

this.myLog = new MessageLog('Tester');

// add messages to myLog

this.myLog.logMessage('foo', 1);
this.myLog.logMessage('bar', 1);
this.myLog.logMessage('baz', 1);
