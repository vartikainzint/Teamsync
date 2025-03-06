const EmailForm = ({ onClose }) => {
    return (
      <div className="email-form">
        <h2>New Email</h2>
        <input type="text" placeholder="To" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message"></textarea>
        
        <button onClick={onClose}>Close</button>
        <button>Send</button>
      </div>
    );
  };
  
  export default EmailForm;
  