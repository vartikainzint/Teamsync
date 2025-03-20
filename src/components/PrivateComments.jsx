import React, { useState } from 'react';
import { Smile, CheckCircle, PlusCircle } from 'lucide-react'; // Optional icon package

const PrivateComments = () => {
  const [privateComment, setPrivateComment] = useState('');
  const [privateComments, setPrivateComments] = useState([]);

  // Function to add comment on Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && privateComment.trim() !== '') {
      setPrivateComments([...privateComments, privateComment]);
      setPrivateComment('');
    }
  };

  return (
    <div className=" px-4 py-3 bg-gray">
      {/* Displaying private comments */}
      {privateComments.length > 0 && (
        <div className="space-y-2 mb-3">
          {privateComments.map((comment, index) => (
            <div
              key={index}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-xl inline-block max-w-[80%]"
            >
              {comment}
            </div>
          ))}
        </div>
      )}

      {/* Input field with icons */}
      <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 bg-gray-800 text-white">
        <input
          type="text"
          placeholder="Write private comment..."
          value={privateComment}
          onChange={(e) => setPrivateComment(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 bg-transparent focus:outline-none placeholder-gray-500 text-white-800"
        />

        {/* Right icons */}
        <div className="flex items-center gap-2">
          <button type="button" className="hover:bg-gray-200 rounded-full p-1">
            <Smile className="w-5 h-5 text-gray-600" />
          </button>
          <button type="button" className="hover:bg-gray-200 rounded-full p-1">
            <CheckCircle className="w-5 h-5 text-gray-600" />
          </button>
          <button type="button" className="hover:bg-gray-200 rounded-full p-1">
            <PlusCircle className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateComments;
