import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import ClusterModal from "./ClusterModal";
import { analysisData } from "@/data/analysisData"; // استيراد الداتا

type Cluster = {
  name: string;
  number_of_comments: number;
  negative_percentage: number;
  positive_percentage: number;
  neutral_percentage: number;
  most_common_sentiment: string;
  example_comments: string[];
};

const UserClusters = () => {
  const [selectedCluster, setSelectedCluster] = useState<Cluster | null>(null);

  // استخدم الداتا المستوردة
  const clusters = analysisData.clusters;

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-white font-arabic">
          مجموعات المستخدمين
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clusters.map((cluster, idx) => (
            <Card
              key={idx}
              className="bg-slate-800 border border-slate-700 text-white shadow-md hover:bg-slate-700/80 transition-colors backdrop-blur-sm p-6 cursor-pointer"
              onClick={() => setSelectedCluster(cluster)}
            >
              <CardHeader className="pb-3 ">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold flex items-center gap-2 text-white">
                    {/* يمكنك وضع إيموجي أو رمز حسب نوع المجموعة إذا أردت */}
                    <span className="text-2xl">👥</span>
                    {cluster.name}
                  </CardTitle>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  الشعور الغالب: {cluster.most_common_sentiment}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400">
                      عدد التعليقات
                    </span>
                    <span className="font-semibold text-cyan-400">
                      {cluster.number_of_comments.toLocaleString("ar")}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">إيجابي</span>
                      <span className="text-green-400">
                        {cluster.positive_percentage}%
                      </span>
                    </div>
                    <Progress
                      value={cluster.positive_percentage}
                      className="h-2 bg-slate-700"
                    />

                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">محايد</span>
                      <span className="text-gray-400">
                        {cluster.neutral_percentage}%
                      </span>
                    </div>
                    <Progress
                      value={cluster.neutral_percentage}
                      className="h-2 bg-slate-700"
                    />

                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">سلبي</span>
                      <span className="text-red-400">
                        {cluster.negative_percentage}%
                      </span>
                    </div>
                    <Progress
                      value={cluster.negative_percentage}
                      className="h-2 bg-slate-700"
                    />
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-4 border-slate-600 text-white hover:bg-cyan-600 hover:text-white transition-colors bg-slate-900"
                  >
                    عرض التفاصيل
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ClusterModal
        cluster={selectedCluster}
        onClose={() => setSelectedCluster(null)}
      />
    </>
  );
};

export default UserClusters;
