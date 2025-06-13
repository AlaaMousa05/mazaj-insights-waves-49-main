import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Brain, Zap, Globe, Play } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-navy wave-bg">
      <header className=" w-full z-30 border-b border-slate-800 bg-slate-900/70 backdrop-blur-md shadow-lg transition-all">
        <div className="container mx-auto flex items-center justify-between py-2 px-4">
          {/* Logo */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <img
              src="public/logoMazaj-removebg-preview.png"
              className="w-24 h-auto"
              alt="Mazaj Logo"
            />
          </div>
          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-gradient-wave hover:opacity-90 text-white px-10 py-3 text-lg rounded-full shadow-xl font-arabic transition-all"
            onClick={() => navigate("/dashboard")}
          >
            <Play className="w-4 h-4 ml-2" />
            ابدأ التحليل
          </Button>
        </div>
      </header>{" "}
      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="relative mb-12 animate-fade-in-up">
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-wave p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-navy flex items-center justify-center">
                  <MessageCircle className="w-16 h-16 text-white" />
                </div>
              </div>
              {/* Floating circles */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-violet/20 rounded-full animate-wave-float"></div>
              <div
                className="absolute -bottom-2 -left-6 w-6 h-6 bg-azure/20 rounded-full animate-wave-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-8 -left-8 w-4 h-4 bg-violet/30 rounded-full animate-wave-float"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>

          {/* Main Title */}
          <h1
            className="text-6xl md:text-8xl font-bold mb-8 font-arabic animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="gradient-text">مِزاج</span>
          </h1>

          {/* Tagline */}
          <p
            className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-arabic animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            من همسات الجمهور... نصنع وعيًا
            <br />
            من المزاج نرسم صورة الواقع
          </p>

          {/* Mission */}
          <div
            className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-violet/20 animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            <p className="text-lg text-slate-200 leading-relaxed font-arabic">
              منصة ذكية لتحليل المشاعر في المحتوى العربي على وسائل التواصل
              الاجتماعي. نستخدم الذكاء الاصطناعي لفهم مزاج الجمهور وتجميع
              المستخدمين حسب المشاعر والمواضيع.
            </p>
          </div>
          <div className="flex justify-center my-10">
            <input
              type="text"
              placeholder="ابحث هنا..."
              className="w-full max-w-xl px-8 py-5 text-2xl rounded-full bg-slate-800/70 text-white placeholder-slate-400 border border-blue-400 focus:outline-none focus:ring-2 focus:ring-violet-400 font-arabic shadow-lg transition-all"
              // onChange={handleSearch}
            />
          </div>
          {/* CTA */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "1.2s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-wave hover:opacity-90 text-white px-12 py-4 text-xl rounded-full shadow-2xl shadow-violet/25 font-arabic"
              onClick={() => navigate("/dashboard")}
            >
              <Play className="w-5 h-5 ml-2" />
              ابدأ التحليل
            </Button>
          </div>

          {/* Features */}
          <div
            className="grid md:grid-cols-3 gap-6 mt-20 animate-fade-in-up"
            style={{ animationDelay: "1.5s" }}
          >
            <Card className="bg-slate-800/40 backdrop-blur-sm border-violet/20 p-6 hover:bg-slate-800/60 transition-all">
              <Brain className="w-8 h-8 text-violet-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2 font-arabic">
                تحليل ذكي
              </h3>
              <p className="text-slate-400 text-sm font-arabic">
                خوارزميات متقدمة لفهم المشاعر العربية
              </p>
            </Card>
            <Card className="bg-slate-800/40 backdrop-blur-sm border-azure/20 p-6 hover:bg-slate-800/60 transition-all">
              <Zap className="w-8 h-8 text-azure-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2 font-arabic">
                معالجة فورية
              </h3>
              <p className="text-slate-400 text-sm font-arabic">
                نتائج سريعة ودقيقة في الوقت الفعلي
              </p>
            </Card>
            <Card className="bg-slate-800/40 backdrop-blur-sm border-violet/20 p-6 hover:bg-slate-800/60 transition-all">
              <Globe className="w-8 h-8 text-violet-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2 font-arabic">
                تغطية شاملة
              </h3>
              <p className="text-slate-400 text-sm font-arabic">
                تحليل عبر جميع منصات التواصل
              </p>
            </Card>
          </div>
        </div>
      </main>
      {/* Background Blur Circles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-violet/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-azure/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet/3 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
