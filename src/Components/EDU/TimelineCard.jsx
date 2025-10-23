import { useAppContext } from "../../../Hooks/useAppLogic";
import { GraduationCap, BookOpen, Code, Sparkles } from 'lucide-react';

const EducationTimeline = () => {
  const { education, setHoveredIndex , hoveredIndex } = useAppContext();
  const iconMap = {
    GraduationCap,
    BookOpen,
    Code,
    Sparkles
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-transparent"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {education.map((item, index) => (
              < div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}

              >
                {/* Content Card */}
                < div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div
                    className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transition-all duration-500 ${hoveredIndex === index
                      ? 'transform scale-105 shadow-2xl shadow-purple-500/50'
                      : 'shadow-xl'
                      }`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      {/* Logo */}
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} flex-shrink-0`}>
                        <div className="text-white">
                          {iconMap[item.icon] && (() => {
                            const IconComponent = iconMap[item.icon];
                            return <IconComponent className="w-6 h-6 text-white" />;
                          })()}

                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.color} text-black`}>
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-2">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-900 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Decorative Element */}
                    <div className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r ${item.color} transition-all duration-500 ${hoveredIndex === index ? 'w-full' : ''
                      }`}></div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 items-center justify-center z-10">
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} border-4 border-slate-900 transition-all duration-500 ${hoveredIndex === index ? 'scale-150' : ''
                      }`}
                  ></div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div >
    </div >
  );
};

export default EducationTimeline;