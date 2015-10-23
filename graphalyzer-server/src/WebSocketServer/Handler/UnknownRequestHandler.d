module WebSocketServer.Handler.UnknownRequestHandler;

import WebSocketServer.Handler.HandlerInterface, vibe.http.websockets;

/************************************************
 * Handler for informing the client that the server did not reconize the
 * 			request type.
 * Authors: Richard White, rwhite22@iastate.edu
 * Date: October 23, 2015
 ***********************************************/
class UnknownRequestHandler : HandlerInterface {
    void handle(string payload, scope WebSocket socket)
    {
    	import std.json, vibe.data.json;
        Json[string] errorMsg;
        import WebSocketServer.Server;
        errorMsg["message_id"] = generateMessageID();
        errorMsg["sender_id"] = "Server";
        import std.datetime;
        errorMsg["time"] = core.stdc.time.time(null);
        errorMsg["request"] = "error";
        errorMsg["status"] = "error";
        errorMsg["error"] = "Unknown request type";
        errorMsg["payload"] = payload;
        errorMsg["message"] = "";
        socket.send(serializeToJsonString(errorMsg));
    }
}