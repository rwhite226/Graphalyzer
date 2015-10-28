module WebSocketServer.Handler.JsonParseErrorHandler;

import WebSocketServer.Handler.HandlerInterface, vibe.http.websockets;

/************************************************
 * Handler for informing client of malformated json message.
 * Authors: Richard White, rwhite22@iastate.edu
 * Date: October 23, 2015
 ***********************************************/
class JsonParseErrorHandler : HandlerInterface {
    override void handle(string payload, scope WebSocket socket)
    {
    	import std.json, vibe.data.json;
        Json[string] errorMsg;
        errorMsg["message_id"] = generateMessageID(16);
        errorMsg["sender_id"] = "Server";
        import std.datetime;
        errorMsg["time"] = core.stdc.time.time(null);
        errorMsg["request"] = "error";
        errorMsg["status"] = "error";
        errorMsg["error"] = payload;
        errorMsg["payload"] = "";
        errorMsg["message"] = "";
        socket.send(serializeToJsonString(errorMsg));
        clean();
    }
    
    void clean() {
    	foreach(number; 0..2) {
    		import core.memory;
    		GC.minimize();
    		GC.collect();
    	}
    }
}