import { useState } from 'react';
import HeroImage from '../../../assets/heroImage.jpg'
interface Tab {
  id: number;
  label: string;
  title: string;
  description: string;
  buttonType: 'hero' | 'normal';
  buttonText?: string;
  image: string;
}

const ToolsCraftStory = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: Tab[] = [
    {
      id: 1,
      label: 'Edit pages',
      title: 'Tools to craft your story',
      description:
        'Seamlessly design and refine your memory book. Save, edit, and preview with ease.',
      buttonType: 'hero',
      image: HeroImage
    },
    {
      id: 2,
      label: 'Customize layout',
      title: 'Customize layout',
      description:
        'Choose the perfect arrangement for your photos and memories. Create a unique visual story.',
      buttonType: 'normal',
      buttonText: 'View layouts',
      image: HeroImage
    },
    {
      id: 3,
      label: 'Add captions',
      title: 'Add captions',
      description:
        'Write meaningful captions with AI assistance. Tell your story beautifully.',
      buttonType: 'normal',
      buttonText: 'Add captions',
      image: HeroImage
    },
  ];

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gray-500 text-xs sm:text-sm font-medium tracking-wider uppercase mb-3">
            Create
          </p>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3">
            Tools to craft your story
          </h1>

          <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Seamlessly design and refine your memory book. Save, edit, and preview with ease.
          </p>

          {/* Hero Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="border border-gray-900 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-white transition">
              Save
            </button>

            <button className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-gray-900 hover:gap-3 transition-all group">
              Preview
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Tabs + Content */}
        <div className="mt-16 sm:mt-20">

          {/* Tabs */}
          <div className="flex justify-center">
            <div className="flex gap-8 border-b border-gray-200">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative pb-3 text-sm sm:text-base font-medium transition ${
                    activeTab === index
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {tab.label}

                  <span
                    className={`absolute left-0 -bottom-[1px] h-[2px] bg-gray-900 transition-all duration-300 ${
                      activeTab === index ? 'w-full' : 'w-0'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Text */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
                {tabs[activeTab].title}
              </h2>

              <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0">
                {tabs[activeTab].description}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex justify-center lg:justify-start gap-3">
                {tabs[activeTab].buttonType === 'hero' ? (
                  <>
                    <button className="border border-gray-900 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-white transition">
                      Font
                    </button>

                    <button className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold hover:gap-3 transition-all group">
                      Theme
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </>
                ) : (
                  <button className="border border-gray-900 px-7 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-white transition">
                    {tabs[activeTab].buttonText}
                  </button>
                )}
              </div>
            </div>

           {/* Image */}
<div className="order-1 lg:order-2 w-full max-w-sm mx-auto lg:max-w-md">
  <div className="w-full aspect-square sm:aspect-[4/3] lg:aspect-square rounded-xl overflow-hidden shadow-sm bg-gray-100">
    <img
      src={tabs[activeTab].image}
      alt={tabs[activeTab].label}
      className="w-full h-full object-cover"
    />
  </div>
</div>


          </div>
        </div>

      </div>
    </section>
  );
};

export default ToolsCraftStory;
