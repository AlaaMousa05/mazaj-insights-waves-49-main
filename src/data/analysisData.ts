export const analysisData = {
  number_of_comments: 10000,
  number_of_countries: 4,
  countries: ["مصر", "سوريا", "لبنان", "فلسطين"],
  clusters: [
    {
      name: "تركيز اقتصادي",
      number_of_comments: 300,
      negative_percentage: 20.0,
      positive_percentage: 60.0,
      neutral_percentage: 20.0,
      most_common_sentiment: "إيجابي",
      example_comments: [
        "أحببت كيف تم التعامل مع هذا الموضوع!",
        "مبادرة رائعة ومؤثرة.",
        "هذا يعطيني الأمل.",
        "رائع بكل معنى الكلمة!",
        "أحسنتم جميعاً."
      ]
    },
    {
      name: "قلق سياسي",
      number_of_comments: 400,
      negative_percentage: 45.0,
      positive_percentage: 25.0,
      neutral_percentage: 30.0,
      most_common_sentiment: "سلبي",
      example_comments: [
        "هذا غير عادل ومتحيز.",
        "شعرت بخيبة أمل كبيرة.",
        "كيف يمكن أن يحدث هذا؟",
        "هذا يظهر فشلًا واضحًا.",
        "لا توجد أي محاسبة."
      ]
    },
    {
      name: "رد فعل عاطفي",
      number_of_comments: 300,
      negative_percentage: 10.0,
      positive_percentage: 15.0,
      neutral_percentage: 75.0,
      most_common_sentiment: "محايد",
      example_comments: [
        "التقرير نُشر بالأمس.",
        "حدث ذلك الأسبوع الماضي.",
        "شوهد هذا في عدة مناطق.",
        "بعض الناس يوافقون، وبعضهم لا.",
        "من غير الواضح ما سيحدث لاحقًا."
      ]
    },
    {
      name: "تركيز ديني",
      number_of_comments: 200,
      negative_percentage: 30.0,
      positive_percentage: 50.0,
      neutral_percentage: 20.0,
      most_common_sentiment: "إيجابي",
      example_comments: [
        "الدين يدعو للسلام والرحمة.",
        "ما يحدث يخالف تعاليمنا.",
        "يجب أن نتحد على أسس إيمانية.",
        "القيم الدينية ترفض هذا تمامًا.",
        "الله سينصر الحق."
      ]
    },
    {
      name: "تعليق محايد",
      number_of_comments: 100,
      negative_percentage: 5.0,
      positive_percentage: 5.0,
      neutral_percentage: 90.0,
      most_common_sentiment: "محايد",
      example_comments: [
        "الموضوع معقد ويحتاج لدراسة أعمق.",
        "الطرفان يتحملان جزءًا من المسؤولية.",
        "لا يمكن الحكم دون معرفة التفاصيل.",
        "التحليل الموضوعي ضروري هنا.",
        "من الأفضل انتظار نتائج التحقيق."
      ]
    }
  ],
  overall_positive: 3000,
  overall_negative: 4000,
  overall_neutral: 3000,
  common_words: ["عدالة", "حرية", "دعم", "عنف", "سلام", "حقوق", "الناس", "دولي", "إعلام", "حقيقة"]
};