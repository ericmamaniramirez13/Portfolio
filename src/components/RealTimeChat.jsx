import { onSnapshot, query, orderBy, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { db } from "../FireBaseDB"; // Assuming your db export is correctly configured here
import "./RealTimeChat.css"; // Make sure this path is correct

const RealTimeChat = () => {
  const [alias, setAlias] = useState("");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const realTimeChatScrollRef = useRef(null);

  // Effect for setting up the Firestore listener
  useEffect(() => {
    console.log("RealTimeChat: Mounting and setting up Firestore listener.");
    // Query to get comments, ordered by server timestamp
    const q = query(collection(db, "comments"), orderBy("timestamp"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        console.log("RealTimeChat: Snapshot received, updating comments.");
        setComments(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      },
      (error) => {
        // Log any errors from the listener
        console.error("RealTimeChat: Firestore listener error:", error);
        // Optionally, set an error state here to display a message to the user
      }
    );

    // Cleanup function to unsubscribe when the component unmounts
    return () => {
      console.log("RealTimeChat: Unmounting and unsubscribing from Firestore listener.");
      unsubscribe();
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  const sendComment = async (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    try {
      await addDoc(collection(db, "comments"), {
        text: newComment,
        timestamp: serverTimestamp(), // Use Firestore server timestamp
        alias: alias.trim() === "" ? "Unknown" : alias.trim(), // Ensure alias is not empty or provide default
      });
      setNewComment(""); // Clear the input field
      console.log("RealTimeChat: Comment sent successfully.");
    } catch (error) {
      console.error("RealTimeChat: Error sending comment:", error);
      // Optionally, inform the user that their comment failed to send
    }
  };

  // Effect for scrolling to the bottom of the chat history
  useEffect(() => {
    if (realTimeChatScrollRef.current) {
      realTimeChatScrollRef.current.scrollTop =
        realTimeChatScrollRef.current.scrollHeight;
    }
  }, [comments]); // Run this effect when the 'comments' array changes

  return (
    <div id="real-time-chat-container">
      <div className="real-time-chat-history" ref={realTimeChatScrollRef}>
        {comments.map((c) => (
          <div key={c.id} className="comment-entry"> {/* Added a class for styling individual comments */}
            <span className="comment-alias" style={{ fontSize: "10px" }}> {/* Added a class for alias styling */}
              {c.alias}
            </span>
            {`: ${c.text}`}
            {/* Optionally display formatted timestamp - requires date utility like date-fns or moment.js */}
            {/* c.timestamp && <span className="comment-timestamp">{new Date(c.timestamp.toDate()).toLocaleTimeString()}</span> */}
          </div>
        ))}
      </div>
      <form onSubmit={sendComment} className="real-time-chat-form"> {/* Added a class for form styling */}
        <input
          id="chat-alias"
          type="text"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          placeholder="Name/Alias"
          className="chat-input"
        />
        <input
          id="real-chat-comment"
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Leave a Comment!"
          className="chat-input"
        />
        <button type="submit" className="chat-button">Send</button>
      </form>
    </div>
  );
};

export default RealTimeChat;