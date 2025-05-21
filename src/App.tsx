import React, { useState } from 'react';
import { AlertCircle, Link2, FileText, Brain, Shield, Award, Globe2 } from 'lucide-react';

function App() {
  const [input, setInput] = useState('');
  const [inputType, setInputType] = useState<'text' | 'url'>('text');
  const [articleLanguage, setArticleLanguage] = useState<'en' | 'ar' | 'fr'>('en');
  const [result, setResult] = useState<{
    score: number;
    explanation: string;
  } | null>(null);

  const handleAnalyze = () => {
    // Simulated analysis result
    setResult({
      score: 87,
      explanation: "This article appears to be legitimate based on multiple credible sources, consistent reporting patterns, and verifiable facts. The writing style and tone align with professional journalism standards."
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real or Fake? Find the Truth in Seconds
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform analyzes news articles instantly to help you distinguish fact from fiction with confidence.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Shield, title: 'Trusted Analysis', desc: 'Advanced AI algorithms for accurate detection' },
            { icon: Brain, title: 'Smart Detection', desc: 'Real-time processing of news content' },
            { icon: Award, title: 'Expert Validation', desc: 'Built on journalism standards' }
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-sm">
              <feature.icon className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-4">
              <button
                onClick={() => setInputType('text')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  inputType === 'text'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <FileText className="w-5 h-5 mr-2" />
                Article Text
              </button>
              <button
                onClick={() => setInputType('url')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  inputType === 'url'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <Link2 className="w-5 h-5 mr-2" />
                URL Link
              </button>
            </div>
            
            <div className="flex items-center bg-gray-100 rounded-lg p-2">
              <Globe2 className="w-5 h-5 text-gray-500 mr-2" />
              <select
                value={articleLanguage}
                onChange={(e) => setArticleLanguage(e.target.value as 'en' | 'ar' | 'fr')}
                className="bg-transparent border-none focus:ring-0 text-gray-700 cursor-pointer"
              >
                <option value="en">English Article</option>
                <option value="ar">مقال عربي</option>
                <option value="fr">Article Français</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            {inputType === 'text' ? (
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  articleLanguage === 'en' ? "Paste your article text here..." :
                  articleLanguage === 'ar' ? "الصق نص المقال هنا..." :
                  "Collez le texte de l'article ici..."
                }
                className={`w-full h-40 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  articleLanguage === 'ar' ? 'text-right' : 'text-left'
                }`}
                dir={articleLanguage === 'ar' ? 'rtl' : 'ltr'}
              />
            ) : (
              <input
                type="url"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  articleLanguage === 'en' ? "Enter article URL..." :
                  articleLanguage === 'ar' ? "أدخل رابط المقال..." :
                  "Entrez l'URL de l'article..."
                }
                className={`w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  articleLanguage === 'ar' ? 'text-right' : 'text-left'
                }`}
                dir={articleLanguage === 'ar' ? 'rtl' : 'ltr'}
              />
            )}
          </div>

          <button
            onClick={handleAnalyze}
            className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {inputType === 'text' ? 'Analyze Article' : 'Submit Link'}
          </button>
        </div>

        {/* Results Section */}
        {result && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Analysis Results</h2>
              <div className={`px-4 py-2 rounded-full ${
                result.score >= 70 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                <span className="font-semibold">{result.score}% Real</span>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <AlertCircle className={`w-6 h-6 mt-1 ${
                result.score >= 70 ? 'text-green-600' : 'text-red-600'
              }`} />
              <p className="text-gray-700 leading-relaxed">
                {result.explanation}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;