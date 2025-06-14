import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import {
  BarChart3,
  TrendingUp,
  MessageCircle,
  Heart,
  House,
  MapPinPlusInside,
} from "lucide-react";
import DoughnutChart from "@/components/ui/charts";
import { analysisData } from "@/data/analysisData";
import UserClusters from "@/components/UserClusters";
const Dashboard = () => {
  const navigate = useNavigate();
  const getWordColor = (word: string) => {
    if (["عدالة", "حقوق", "حرية"].includes(word)) return "text-green-400";
    if (["عنف"].includes(word)) return "text-red-400";
    if (["سلام", "دعم"].includes(word)) return "text-blue-400";
    if (["إعلام", "دولي"].includes(word)) return "text-violet-400";
    if (["حقيقة"].includes(word)) return "text-yellow-400";
    return "text-slate-300";
  };
  const getCircleStyle = (idx: number, total: number) => {
    const angle = (2 * Math.PI * idx) / total;
    const radius = 90 + Math.random() * 30;
    const centerX = 45 + Math.random() * 10;
    const centerY = 45 + Math.random() * 10;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return {
      position: "absolute" as const,
      left: `${x}%`,
      top: `${y}%`,
      transform: `rotate(${Math.random() * 30 - 15}deg) scale(${
        0.9 + Math.random() * 0.6
      })`,
      zIndex: 1,
      opacity: 0.9,
      pointerEvents: "none" as const,
      whiteSpace: "nowrap" as const,
    };
  };

  return (
    <div className="min-h-screen bg-navy">
      <header className=" w-full z-30 border-b border-slate-800 bg-slate-900/70 backdrop-blur-md shadow-lg transition-all">
        <div className="container mx-auto flex items-center justify-between py-2 px-4">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <img
              src="public/logoMazaj-removebg-preview.png"
              className="w-24 h-auto"
              alt="Mazaj Logo"
            />
          </div>

          <Button
            size="lg"
            className="bg-gradient-wave hover:opacity-90 text-white px-10 py-3 text-lg rounded-full shadow-xl font-arabic transition-all"
            onClick={() => navigate("/")}
          >
            <House className="w-4 h-4 ml-2" />
            الصفحة الرئيسية
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2 font-arabic">
            لوحة التحكم
          </h1>
          <p className="text-slate-400 font-arabic">
            تحليل مزاج الجمهور في الوقت الفعلي
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/40 backdrop-blur-sm border-violet/20 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-violet/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {analysisData.number_of_comments.toLocaleString("ar-EG")}
                </p>
                <p className="text-sm text-slate-400 font-arabic">منشور محلل</p>
              </div>
            </div>
          </Card>
          <Card className="bg-slate-800/40 backdrop-blur-sm border-azure/20 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-azure/20 flex items-center justify-center">
                <MapPinPlusInside className="w-6 h-6 text-azure-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {analysisData.countries.length.toLocaleString("ar-EG")}
                </p>
                <p className="text-sm text-slate-400 font-arabic">عدد المدن</p>
              </div>
            </div>
          </Card>
          <Card className="bg-slate-800/40 backdrop-blur-sm border-green-500/20 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {Math.round(
                    (analysisData.overall_positive /
                      (analysisData.overall_positive +
                        analysisData.overall_negative +
                        analysisData.overall_neutral)) *
                      100
                  ).toLocaleString("ar-EG")}
                  ٪
                </p>
                <p className="text-sm text-slate-400 font-arabic">
                  مزاج إيجابي
                </p>
              </div>
            </div>
          </Card>
          <Card className="bg-slate-800/40 backdrop-blur-sm border-orange-500/20 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">٩٢٪</p>
                <p className="text-sm text-slate-400 font-arabic">
                  دقة التحليل
                </p>
              </div>
            </div>
          </Card>
        </div>
        {/* Cities Card */}
        <Card className="bg-slate-800/40 backdrop-blur-sm border-violet/20 p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4 font-arabic">
            المدن المشاركة في التحليل
          </h3>
          <div className="flex flex-wrap gap-3 font-arabic text-slate-200">
            {analysisData.countries.map((city) => (
              <span
                key={city}
                className="bg-violet-500/20 px-3 py-1 rounded-full"
              >
                {city}
              </span>
            ))}
          </div>
        </Card>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sentiment Gauge */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/40 backdrop-blur-sm border-violet/20 p-6">
              <h3 className="text-lg font-semibold text-white mb-6 font-arabic">
                مقياس المزاج العام
              </h3>
              <DoughnutChart />
            </Card>
          </div>{" "}
          <Card className="bg-slate-800/40 backdrop-blur-sm border-azure/20 p-6 lg:col-span-2">
            {" "}
            <h3 className="text-lg font-semibold text-white mb-6 font-arabic">
              الكلمات المتداولة
            </h3>
            <div
              className="grid grid-cols-4 gap-12 p-4"
              style={{ direction: "rtl" }}
            >
              {analysisData.common_words.map((word, idx) => (
                <span
                  key={word}
                  className={`font-bold font-arabic select-none ${getWordColor(
                    word
                  )}`}
                  style={{
                    fontSize: `${1.2 + Math.random()}rem`,
                    transform: `rotate(${Math.random() * 30 - 15}deg)`,
                    opacity: 0.8 + Math.random() * 0.2,
                    marginTop: `${Math.random() * 10}px`,
                    marginBottom: `${Math.random() * 10}px`,
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
          </Card>
        </div>
        <div className="lg:col-span-1">
          <UserClusters />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-8"></div>
      </div>
    </div>
  );
};
export default Dashboard;
