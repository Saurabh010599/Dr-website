import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, RotateCcw, Calendar, Phone } from 'lucide-react';
import { DOSHA_QUIZ, CLINIC_INFO } from '../data/ayurvedaData';

interface DoshaAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookWithDosha: (doshaRecommendation: string) => void;
}

export const DoshaAssessmentModal: React.FC<DoshaAssessmentModalProps> = ({
  isOpen,
  onClose,
  onBookWithDosha,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [resultDosha, setResultDosha] = useState<'vata' | 'pitta' | 'kapha' | null>(null);

  if (!isOpen) return null;

  const handleSelectOption = (dosha: 'vata' | 'pitta' | 'kapha') => {
    const updatedAnswers = [...answers, dosha];
    setAnswers(updatedAnswers);

    if (currentQuestion < DOSHA_QUIZ.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate dominant dosha
      const counts: Record<string, number> = { vata: 0, pitta: 0, kapha: 0 };
      updatedAnswers.forEach((d) => {
        counts[d] = (counts[d] || 0) + 1;
      });

      let dominant: 'vata' | 'pitta' | 'kapha' = 'vata';
      let maxCount = -1;
      Object.entries(counts).forEach(([k, v]) => {
        if (v > maxCount) {
          maxCount = v;
          dominant = k as 'vata' | 'pitta' | 'kapha';
        }
      });
      setResultDosha(dominant);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResultDosha(null);
  };

  const doshaInsights = {
    vata: {
      name: 'Vata Dominant (Air & Space Principle)',
      sanskrit: 'वात प्रधान प्रकृती',
      characteristics: 'Creative, intuitive, quick, but prone to anxiety, sleep disturbances, dry skin, and joint or back pain.',
      recommendedTreatments: 'Shirodhara, Kati Basti, Medicated Oil Abhyanga, and Deep Restorative Panchkarma.',
      primaryHerb: 'Ashwagandha, Bala, Dashamoola, and Warm Sesame/Ksheerabala Oils.',
      color: 'text-amber-800 bg-amber-50 border-amber-200',
    },
    pitta: {
      name: 'Pitta Dominant (Fire & Water Principle)',
      sanskrit: 'पित्त प्रधान प्रकृती',
      characteristics: 'Sharp intellect, passionate, strong metabolic fire, but prone to acidity, skin allergies, inflammation, and irritability.',
      recommendedTreatments: 'Virechana Karma, Takradhara, Blood Purifying Detox, and Cooling Herbal Lepams.',
      primaryHerb: 'Brahmi, Shatavari, Manjistha, and Medicated Ghee (Ghrita).',
      color: 'text-rose-800 bg-rose-50 border-rose-200',
    },
    kapha: {
      name: 'Kapha Dominant (Earth & Water Principle)',
      sanskrit: 'कफ प्रधान प्रकृती',
      characteristics: 'Calm, grounded, compassionate, with steady endurance, but prone to weight gain, slow digestion, chest congestion, and lethargy.',
      recommendedTreatments: 'Vamana Karma, Udwarthana (Herbal Powder Exfoliation), and Stimulating Deep Detox.',
      primaryHerb: 'Guggulu, Triphala, Pippali, and Ginger-Sunthi Decoctions.',
      color: 'text-emerald-800 bg-emerald-50 border-emerald-200',
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#2D6A4F]/20 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#0F2E22] via-[#1B4332] to-[#2D6A4F] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#DFBE7A]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif-ayur leading-tight">
                Ayurvedic Prakriti Assessment
              </h3>
              <p className="text-xs text-[#DFBE7A] font-hindi">
                आपली त्रिदोष प्रकृती ओळखा — वात, पित्त किंवा कफ
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {!resultDosha ? (
            <div>
              {/* Question Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs text-gray-500 font-semibold mb-2">
                  <span>Question {currentQuestion + 1} of {DOSHA_QUIZ.length}</span>
                  <span>{Math.round(((currentQuestion + 1) / DOSHA_QUIZ.length) * 100)}% Complete</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#C5A059] to-[#2D6A4F] transition-all duration-300 rounded-full"
                    style={{ width: `${((currentQuestion + 1) / DOSHA_QUIZ.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Headline */}
              <h4 className="text-lg font-bold font-serif-ayur text-[#0F2E22] mb-6">
                {DOSHA_QUIZ[currentQuestion].question}
              </h4>

              {/* Options */}
              <div className="space-y-3">
                {DOSHA_QUIZ[currentQuestion].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt.dosha)}
                    className="w-full p-4 rounded-xl text-left text-xs sm:text-sm font-medium text-gray-800 bg-[#FAF7F2] hover:bg-[#E8F5E9] border border-[#2D6A4F]/15 hover:border-[#2D6A4F] transition-all flex items-center justify-between group shadow-xs hover:shadow-md"
                  >
                    <span className="leading-snug pr-4">{opt.text}</span>
                    <ArrowRight className="w-4 h-4 text-[#2D6A4F] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="space-y-5 animate-in fade-in zoom-in duration-300">
              <div className={`p-5 rounded-2xl border ${doshaInsights[resultDosha].color}`}>
                <div className="text-xs uppercase font-mono tracking-widest text-[#2D6A4F] font-bold mb-1">
                  Your Dominant Constitutional Archetype
                </div>
                <h4 className="text-xl font-bold font-serif-ayur text-[#0F2E22] mb-1">
                  {doshaInsights[resultDosha].name}
                </h4>
                <p className="text-xs font-hindi text-[#2D6A4F] mb-3">
                  {doshaInsights[resultDosha].sanskrit}
                </p>
                <p className="text-xs leading-relaxed text-gray-700">
                  {doshaInsights[resultDosha].characteristics}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-gray-200">
                <h5 className="text-xs font-bold text-[#0F2E22] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F]" />
                  <span>Recommended Ayurvedic Regimen:</span>
                </h5>
                <p className="text-xs text-gray-700 leading-relaxed font-light mb-2">
                  {doshaInsights[resultDosha].recommendedTreatments}
                </p>
                <div className="text-[11px] text-gray-600">
                  <strong>Key Classical Herbs:</strong> {doshaInsights[resultDosha].primaryHerb}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onBookWithDosha(doshaInsights[resultDosha].name);
                  }}
                  className="w-full sm:flex-1 py-3 rounded-xl bg-gradient-to-r from-[#0F2E22] to-[#2D6A4F] text-white text-xs font-bold uppercase tracking-wider hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#DFBE7A]" />
                  <span>Book Consultation for this Dosha</span>
                </button>

                <button
                  onClick={resetQuiz}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
