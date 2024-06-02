import React from 'react';

const FAQ = () => {
  return (
    <section className="h-fit py-8 md:px-8">
      <p className="title-class mb-2 text-center md:text-left">FAQ</p>
      <p className="heading-class mb-8 text-center md:text-left">Frequently Asked <br /> Questions</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: 'The best financial accounting app ever!', text: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.', bgColor: 'bg-customOrange', textColor: 'text-white' },
          { title: 'The best financial accounting app ever!', text: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.', bgColor: '', textColor: '' },
          { title: 'The best financial accounting app ever!', text: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.', bgColor: '', textColor: '' },
          { title: 'The best financial accounting app ever!', text: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.', bgColor: 'bg-customOrange', textColor: 'text-white' },
          { title: 'The best financial accounting app ever!', text: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.', bgColor: 'bg-customOrange', textColor: 'text-white' },
          { title: 'The best financial accounting app ever!', text: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.', bgColor: '', textColor: '' },
        ].map((item, index) => (
          <div key={index} className={`flex flex-col p-6 w-fit ${item.bgColor} flex-shrink-0 rounded-md`}>
            <p className={`faqtitle-class ${item.textColor}`}>{item.title}</p>
            <p className={`faqtext-class ${item.textColor}`}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
