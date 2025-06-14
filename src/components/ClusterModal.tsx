import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

interface Cluster {
  name: string;
  number_of_comments: number;
  negative_percentage: number;
  positive_percentage: number;
  neutral_percentage: number;
  most_common_sentiment: string;
  example_comments: string[];
}

interface ClusterModalProps {
  cluster: Cluster | null;
  onClose: () => void;
}

const ClusterModal: React.FC<ClusterModalProps> = ({ cluster, onClose }) => {
  if (!cluster) return null;

  return (
    <Dialog open={!!cluster} onOpenChange={onClose}>
      <DialogContent className="max-w-lg w-full bg-slate-800 border-slate-700 text-white rounded-xl shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-3 text-white">
            <span className="text-2xl">👥</span>
            {cluster.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Description */}
          <p className="text-slate-300 text-base">
            الشعور الغالب:{" "}
            <span className="font-bold">{cluster.most_common_sentiment}</span>
          </p>

          {/* Stats */}
          <Card className="bg-slate-800 border border-slate-700 text-white shadow">
            <CardContent className="p-4">
              <div className="flex justify-between mb-2">
                <span className="text-slate-300">عدد التعليقات</span>
                <span className="font-bold text-cyan-400">
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
            </CardContent>
          </Card>

          {/* Sample Comments */}
          <div>
            <h3 className="font-semibold mb-2 text-base text-white">
              عينة من التعليقات
            </h3>
            <div className="space-y-2">
              {cluster.example_comments.map((comment, idx) => (
                <Card
                  key={idx}
                  className="bg-slate-700 border border-slate-600 text-white shadow"
                >
                  <CardContent className="p-3">
                    <p className="text-sm leading-relaxed text-slate-200">
                      {comment}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ClusterModal;
