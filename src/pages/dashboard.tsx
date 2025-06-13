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
import MoodBubble from "@/components/MoodBubble";
const Dashboard = () => {
  const clusters = [
    {
      id: 0,
      count: 2619,
      emotions: { neutral: 0.61, negative: 0.25, positive: 0.14 },
      dominant: "محايد",
    },
    {
      id: 1,
      count: 829,
      emotions: { negative: 0.58, neutral: 0.23, positive: 0.19 },
      dominant: "سلبي",
    },
    {
      id: 2,
      count: 1736,
      emotions: { negative: 0.84, positive: 0.09, neutral: 0.07 },
      dominant: "سلبي",
    },
    {
      id: 3,
      count: 2652,
      emotions: { neutral: 0.55, negative: 0.28, positive: 0.16 },
      dominant: "محايد",
    },
    {
      id: 4,
      count: 1682,
      emotions: { neutral: 0.48, negative: 0.32, positive: 0.21 },
      dominant: "محايد",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-navy">
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
            onClick={() => navigate("/")}
          >
            <House className="w-4 h-4 ml-2" />
            الصفحة الرئيسية
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Dashboard Header */}
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
                <p className="text-2xl font-bold text-white">٤٢.٣ك</p>
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
                <p className="text-2xl font-bold text-white">٧</p>
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
                <p className="text-2xl font-bold text-white">٧٨٪</p>
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
            المدن المشاركة
          </h3>
          <div className="flex flex-wrap gap-3 font-arabic text-slate-200">
            <span className="bg-violet-500/20 px-3 py-1 rounded-full">
              الرياض
            </span>
            <span className="bg-violet-500/20 px-3 py-1 rounded-full">جدة</span>
            <span className="bg-violet-500/20 px-3 py-1 rounded-full">
              الدمام
            </span>
            <span className="bg-violet-500/20 px-3 py-1 rounded-full">مكة</span>
            <span className="bg-violet-500/20 px-3 py-1 rounded-full">
              المدينة
            </span>
            {/* أضف أو عدل المدن حسب الحاجة */}
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
          </div>

          {/* Mood Clusters */}
          <div className="lg:col-span-2">
            {/* <Card className="bg-slate-800/40 backdrop-blur-sm border-azure/20 p-6">
              <h3 className="text-lg font-semibold text-white mb-6 font-arabic">
                مجموعات المزاج
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4  gap-6">
                <MoodBubble color="bg-green-400" label="سعادة" percent="٤٢٪" />
                <MoodBubble
                  color="bg-blue-400"
                  label="أمل"
                  percent="٢٨٪"
                  delay="0.5s"
                />
                <MoodBubble
                  color="bg-yellow-400"
                  label="قلق"
                  percent="١٥٪"
                  delay="1s"
                />
                <MoodBubble
                  color="bg-orange-400"
                  label="غضب"
                  percent="٨٪"
                  delay="1.5s"
                />
                <MoodBubble
                  color="bg-red-400"
                  label="حزن"
                  percent="٥٪"
                  delay="2s"
                />
                <MoodBubble
                  color="bg-slate-400"
                  label="محايد"
                  percent="٢٪"
                  delay="2.5s"
                />{" "}
                <MoodBubble color="bg-green-400" label="دعم" percent="٣٥٪" />
                <MoodBubble
                  color="bg-blue-400"
                  label="تمكين"
                  percent="٢٥٪"
                  delay="0.5s"
                />
                <MoodBubble
                  color="bg-yellow-400"
                  label="إلهام"
                  percent="١٥٪"
                  delay="1s"
                />
                <MoodBubble
                  color="bg-orange-400"
                  label="تحدي"
                  percent="١٠٪"
                  delay="1.5s"
                />
                <MoodBubble
                  color="bg-violet-400"
                  label="تفاؤل"
                  percent="٥٪"
                  delay="3s"
                />
                <MoodBubble
                  color="bg-pink-400"
                  label="فخر"
                  percent="٤٪"
                  delay="3.5s"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4"></div>
            </Card> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clusters.map((cluster) => (
                <Card
                  key={cluster.id}
                  className="bg-slate-800/40 p-6 rounded-2xl shadow-md"
                >
                  <h4 className="text-lg font-bold text-white mb-2 font-arabic">
                    المجموعة {cluster.id + 1}
                  </h4>
                  <p className="text-slate-300 font-arabic mb-2">
                    عدد التعليقات:{" "}
                    <span className="font-bold">{cluster.count}</span>
                  </p>
                  <div className="flex gap-2 mb-2">
                    <span className="bg-slate-700 px-2 py-1 rounded text-xs text-white font-arabic">
                      محايد: {(cluster.emotions.neutral * 100).toFixed(1)}%
                    </span>
                    <span className="bg-red-700/70 px-2 py-1 rounded text-xs text-white font-arabic">
                      سلبي: {(cluster.emotions.negative * 100).toFixed(1)}%
                    </span>
                    <span className="bg-green-700/70 px-2 py-1 rounded text-xs text-white font-arabic">
                      إيجابي: {(cluster.emotions.positive * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-azure-400 text-white font-arabic text-sm">
                      الشعور الغالب: <b>{cluster.dominant}</b>
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Trending Posts & Word Cloud */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Trending Posts */}
          <Card className="bg-slate-800/40 backdrop-blur-sm border-violet/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-6 font-arabic">
              منشورات مؤثرة
            </h3>
            <div className="space-y-4">
              {[
                {
                  text: "عمل المرأة دليل على قوتها واستقلالها.",
                  mood: "positive",
                  engagement: "٣٢٠",
                },
                {
                  text: "من حق كل امرأة أن تسعى وراء أحلامها دون قيود.",
                  mood: "positive",
                  engagement: "٢١٠",
                },
                {
                  text: "خروج المرأة للعمل سبب في تفكك الأسرة.",
                  mood: "neutral",
                  engagement: "١٨٧",
                },
              ].map((post, idx) => (
                <div
                  key={idx}
                  className="border border-slate-700 rounded-lg p-4 hover:border-violet/30 transition-colors"
                >
                  <p className="text-white mb-2 font-arabic">{post.text}</p>
                  <div className="flex justify-between items-center">
                    <Badge
                      variant={
                        post.mood === "positive" ? "default" : "secondary"
                      }
                      className={
                        post.mood === "positive"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-slate-500/20 text-red-400"
                      }
                    >
                      {post.mood === "positive" ? "إيجابي" : "معارض"}
                    </Badge>
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <Heart className="w-4 h-4" />
                      {post.engagement}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Word Cloud */}
          <Card className="bg-slate-800/40 backdrop-blur-sm border-azure/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-6 font-arabic">
              الكلمات المتداولة
            </h3>
            <div className="flex flex-wrap gap-3 justify-center items-center h-64">
              {[
                { word: "أمل", size: "text-3xl", color: "text-green-400" },
                { word: "سعادة", size: "text-2xl", color: "text-blue-400" },
                { word: "مستقبل", size: "text-xl", color: "text-violet-400" },
                { word: "تفاؤل", size: "text-lg", color: "text-azure-400" },
                { word: "إنجاز", size: "text-xl", color: "text-green-400" },
                { word: "نجاح", size: "text-lg", color: "text-yellow-400" },
                { word: "تطوير", size: "text-base", color: "text-slate-400" },
                { word: "تقدم", size: "text-lg", color: "text-violet-400" },
              ].map((item, idx) => (
                <span
                  key={idx}
                  className={`${item.size} ${item.color} font-bold font-arabic animate-pulse-glow hover:scale-110 transition-transform cursor-pointer`}
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  {item.word}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
