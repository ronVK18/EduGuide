import * as React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useUser } from '@clerk/clerk-react';

 const VideoCall = () => {
    const user=useUser()
    function randomID(len:any) {
        let result = '';
        if (result) return result;
        let chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',maxPos=chars.length,i

        for (i = 0; i < len; i++) {
          result += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return result;
      }

    let myMeeting = async (element) => {
        // generate Kit Token
         const appID = 1169076084;
         const serverSecret = "f33098b9c9beb862c86aa75ab50face4";
         const roomID = "12345";
         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));
   
       
        // Create instance object from Kit Token.
         const zp = ZegoUIKitPrebuilt.create(kitToken);
         // start the call
         zp.joinRoom({
           container: element,
           sharedLinks: [
             {
               name: 'Personal link',
               url:
                window.location.protocol + '//' + 
                window.location.host + window.location.pathname +
                 '?roomID=' +
                 roomID,
             },
           ],
           scenario: {
             mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
           },
         });
   
       
     };

   return (
    <div
  className="myCallContainer"
  ref={myMeeting}
  style={{ width: '100vw', height: '100vh'}}
></div>
   )
 }
 
 export default VideoCall