import React, { useState } from 'react';

const Subscribe: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', isError: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // The form will submit to Mailchimp directly
    // We'll handle the response via the hidden response divs
    const form = e.target as HTMLFormElement;
    form.submit();
    
    // Reset form after submission
    form.reset();
    setMessage({ text: 'Thank you for subscribing!', isError: false });
    setIsSubmitting(false);
  };

  return (
    <div className="pt-0 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-american-blue font-western mb-6">
            SUBSCRIBE
          </h1>
          <div className="h-1 w-24 bg-bold-red mx-auto mb-8"></div>
          <p className="text-2xl text-gray-700 font-western italic">
            Stay Updated with the Latest News & Releases
          </p>
        </div>

        {/* Mailchimp Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-american-blue">
          <div id="mc_embed_signup">
            <form 
              action="https://brokenspokesproductions.us10.list-manage.com/subscribe/post?u=20f44c25ad85930e5b6db5bc9&amp;id=7c8d58bf50&amp;f_id=000fc1e3f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
              onSubmit={handleSubmit}
            >
              <div id="mc_embed_signup_scroll">
                <div className="indicates-required mb-4">
                  <span className="text-red-500">*</span> indicates required
                </div>
                
                <div className="mc-field-group mb-4">
                  <label htmlFor="mce-EMAIL" className="block text-gray-700 font-western mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="EMAIL" 
                    className="required email w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-bold-red focus:border-transparent" 
                    id="mce-EMAIL"
                    required 
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="mc-field-group">
                    <label htmlFor="mce-FNAME" className="block text-gray-700 font-western mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="FNAME" 
                      className="required text w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-bold-red focus:border-transparent" 
                      id="mce-FNAME"
                      required 
                    />
                  </div>

                  <div className="mc-field-group">
                    <label htmlFor="mce-LNAME" className="block text-gray-700 font-western mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="LNAME" 
                      className="required text w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-bold-red focus:border-transparent" 
                      id="mce-LNAME"
                      required 
                    />
                  </div>
                </div>

                <div className="mc-field-group mb-4">
                  <label htmlFor="mce-MMERGE3" className="block text-gray-700 font-western mb-1">
                    State <span className="text-red-500">*</span>
                  </label>
                  <select 
                    name="MMERGE3" 
                    className="required w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-bold-red focus:border-transparent" 
                    id="mce-MMERGE3"
                    required
                  >
                    <option value="">Select a state...</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New Hampshire">New Hampshire</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Washington">Washington</option>
                    <option value="Washington D.C.">Washington D.C.</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
                  </select>
                </div>


                <div id="mce-responses" className="mb-4">
                  <div id="mce-error-response" className="hidden text-red-600 mb-2"></div>
                  <div id="mce-success-response" className="hidden text-green-600 mb-2"></div>
                </div>

                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_20f44c25ad85930e5b6db5bc9_7c8d58bf50" tabIndex={-1} defaultValue="" />
                </div>

                <div className="mt-6">
                  <button 
                    type="submit" 
                    className="w-full bg-bold-red text-white font-bold font-western text-lg py-3 px-6 rounded hover:bg-red-700 transition-colors duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Subscribing...' : 'SUBSCRIBE'}
                  </button>
                  {message.text && (
                    <div className={`mt-4 p-3 rounded ${message.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                      {message.text}
                    </div>
                  )}
                  {/* Mailchimp response messages */}
                  <div id="mce-error-response" style={{ display: 'none' }}></div>
                  <div id="mce-success-response" style={{ display: 'none' }}></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
