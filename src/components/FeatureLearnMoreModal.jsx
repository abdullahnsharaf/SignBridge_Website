import { motion, AnimatePresence } from "framer-motion";
import {
  X, Shield, Camera, Zap, Sun, ScanLine, Brain, Target, Database, Cpu, Info,
  ExternalLink, Type, Globe, CheckCircle, MessageSquare, Star, ChevronDown,
  Volume2, Play, Clock, Bookmark, Download, Search, SlidersHorizontal, MoreVertical, ArrowRight,
  Settings, Moon, Monitor, Check,
} from "lucide-react";
import { useEffect, useState } from "react";

/* ── Hand landmarks ── */
function HandLandmarks() {
  const points = [
    { x: 50, y: 90 },
    { x: 35, y: 75 }, { x: 25, y: 60 }, { x: 20, y: 45 }, { x: 18, y: 30 },
    { x: 40, y: 60 }, { x: 38, y: 40 }, { x: 36, y: 25 }, { x: 35, y: 12 },
    { x: 50, y: 58 }, { x: 50, y: 35 }, { x: 50, y: 18 }, { x: 50, y: 5 },
    { x: 60, y: 60 }, { x: 62, y: 38 }, { x: 64, y: 22 }, { x: 65, y: 10 },
    { x: 70, y: 65 }, { x: 73, y: 50 }, { x: 75, y: 38 }, { x: 77, y: 28 },
  ];
  const connections = [
    [0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],
    [0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],
    [0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17],
  ];
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
      {connections.map(([a, b], i) => (
        <motion.line key={i} x1={points[a].x} y1={points[a].y} x2={points[b].x} y2={points[b].y}
          stroke="#A78BFA" strokeWidth="0.6" opacity="0.85"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: i * 0.04 }} />
      ))}
      {points.map((p, i) => (
        <motion.circle key={i} cx={p.x} cy={p.y} r="1.2" fill="#C4B5FD"
          animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, delay: i * 0.05, repeat: Infinity, repeatDelay: 1 }}
          style={{ filter: "drop-shadow(0 0 3px #A78BFA)" }} />
      ))}
    </svg>
  );
}

function PipelineArrow() {
  return (
    <div className="flex-shrink-0 flex items-center justify-center px-2 mt-12">
      <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
        <path d="M2 7H22M22 7L17 2M22 7L17 12" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function DashedArrow({ isRTL, color = "#2DBFA0" }) {
  return (
    <div className={`flex-shrink-0 flex items-center justify-center px-3 ${isRTL ? "scale-x-[-1]" : ""}`}>
      <svg width="50" height="14" viewBox="0 0 50 14" fill="none">
        <line x1="2" y1="7" x2="42" y2="7" stroke={color} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.8" />
        <path d="M40 3L48 7L40 11" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  );
}

function PipelineStep({ label, sublabel, children, isRTL }) {
  return (
    <div className="flex-1 min-w-[120px]">
      <div className={`text-center mb-3 ${isRTL ? "font-arabic" : ""}`}>
        <p className="text-white text-xs font-bold mb-1">{label}</p>
        <p className="text-white/50 text-[10px]">{sublabel}</p>
      </div>
      <div className="bg-bg/80 border border-primary/25 rounded-xl p-3 h-44 flex items-center justify-center relative overflow-hidden">{children}</div>
    </div>
  );
}

function CNNCube() {
  return (
    <div className="relative w-20 h-20">
      {[0, 1, 2].map((i) => (
        <motion.div key={i} className="absolute border border-primary/60 rounded"
          style={{ width: "60px", height: "60px", left: `${i * 6}px`, top: `${i * 6}px`,
            background: `linear-gradient(135deg, rgba(108,61,232,${0.4 - i * 0.1}), rgba(108,61,232,${0.1 - i * 0.03}))` }}
          animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}>
          <div className="grid grid-cols-4 grid-rows-4 w-full h-full">
            {Array.from({ length: 16 }).map((_, k) => <div key={k} className="border border-primary/20" />)}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function LSTMNodes() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="flex justify-around mb-1 px-1">
        {["h₍ₜ₋₁₎", "hₜ", "h₍ₜ₊₁₎"].map((label, i) => <span key={i} className="text-primary text-[8px] font-mono">{label}</span>)}
      </div>
      <div className="flex justify-around items-center mb-2">
        {[0,1,2].map((i) => (
          <motion.div key={i} className="w-7 h-7 rounded-full border-2 border-primary/60 flex items-center justify-center"
            style={{ background: "rgba(108,61,232,0.2)", boxShadow: "0 0 8px rgba(108,61,232,0.4)" }}
            animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}>
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-around -my-1">
        {[0,1,2].map((i) => (
          <svg key={i} width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path d="M4 1V13M4 13L1 10M4 13L7 10" stroke="#A78BFA" strokeWidth="1" strokeLinecap="round" />
          </svg>
        ))}
      </div>
      <div className="flex justify-around items-center">
        {[0,1,2].map((i) => <div key={i} className="w-4 h-4 rounded-full border border-primary/40 bg-primary/10" />)}
      </div>
    </div>
  );
}

function RecognitionOutput({ text }) {
  return (
    <div className="text-center">
      <motion.p className="text-primary text-2xl font-bold mb-3"
        animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}
        style={{ textShadow: "0 0 15px rgba(108,61,232,0.6)" }}>"{text}"</motion.p>
      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
        className="w-9 h-9 rounded-full border-2 border-primary/60 mx-auto flex items-center justify-center"
        style={{ background: "rgba(108,61,232,0.2)", boxShadow: "0 0 12px rgba(108,61,232,0.5)" }}>
        <Check size={16} className="text-primary" strokeWidth={2.5} />
      </motion.div>
    </div>
  );
}

function HandInput() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <span className="text-7xl">🤟</span>
      <div className="absolute inset-0 opacity-60"><HandLandmarks /></div>
    </div>
  );
}

function SignDetectedBox() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {[
        { top: "8px", left: "8px", borderL: true, borderT: true },
        { top: "8px", right: "8px", borderR: true, borderT: true },
        { bottom: "8px", left: "8px", borderL: true, borderB: true },
        { bottom: "8px", right: "8px", borderR: true, borderB: true },
      ].map((c, i) => (
        <div key={i} className="absolute w-4 h-4" style={{
          ...c,
          borderLeft: c.borderL ? "2.5px solid #2DBFA0" : "none",
          borderRight: c.borderR ? "2.5px solid #2DBFA0" : "none",
          borderTop: c.borderT ? "2.5px solid #2DBFA0" : "none",
          borderBottom: c.borderB ? "2.5px solid #2DBFA0" : "none",
        }} />
      ))}
      <span className="text-6xl">🤟</span>
    </div>
  );
}

function TealAIBrain() {
  return (
    <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2.5, repeat: Infinity }}
      className="flex items-center justify-center" style={{ filter: "drop-shadow(0 0 12px rgba(45,191,160,0.6))" }}>
      <Brain size={64} className="text-secondary" strokeWidth={1.5} />
    </motion.div>
  );
}

function TextOutputBox({ text, language }) {
  return (
    <div className="text-center w-full">
      <motion.p className="text-white text-2xl font-bold mb-4"
        animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }}>{text}</motion.p>
      <div className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg border border-secondary/30 bg-secondary/5 mx-auto w-fit">
        <span className="text-white/70 text-xs font-medium">{language}</span>
        <ChevronDown size={12} className="text-white/50" />
      </div>
    </div>
  );
}

function OrangeDashedArrow({ isRTL }) {
  return (
    <div className={`flex-shrink-0 flex items-center justify-center px-3 ${isRTL ? "scale-x-[-1]" : ""}`}>
      <svg width="50" height="14" viewBox="0 0 50 14" fill="none">
        <line x1="2" y1="7" x2="42" y2="7" stroke="#FB923C" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.8" />
        <path d="M40 3L48 7L40 11" stroke="#FB923C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  );
}

function SpeechTextInput() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-16 h-16 rounded-xl border-2 border-orange-400/50 flex items-center justify-center" style={{ boxShadow: "0 0 12px rgba(251,146,60,0.3)" }}>
        <Type size={28} className="text-orange-400" strokeWidth={2} />
      </div>
    </div>
  );
}

function SpeechWaveform({ small = false }) {
  const count = small ? 18 : 50;
  return (
    <div className={`flex items-center justify-center gap-[2px] ${small ? "h-12" : "h-14"} w-full`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div key={i} className="w-[2px] rounded-full bg-orange-400"
          style={{ boxShadow: "0 0 4px rgba(251,146,60,0.5)" }}
          animate={{
            height: [
              `${4 + Math.sin(i * 0.5) * 8}px`,
              `${10 + Math.sin(i * 0.5 + 1) * 18}px`,
              `${4 + Math.sin(i * 0.5) * 8}px`,
            ],
          }}
          transition={{ duration: 0.8 + (i % 4) * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.04 }} />
      ))}
    </div>
  );
}

function SpeechPlayCircle() {
  return (
    <div className="flex items-center justify-center">
      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}
        className="w-16 h-16 rounded-full border-2 border-orange-400/60 flex items-center justify-center"
        style={{ background: "rgba(251,146,60,0.15)", boxShadow: "0 0 20px rgba(251,146,60,0.5)" }}>
        <Play size={26} className="text-orange-400 ml-1" fill="currentColor" />
      </motion.div>
    </div>
  );
}

function VoiceSettingsPanel({ data, isRTL, lang }) {
  const [speed, setSpeed] = useState(1.0);
  return (
    <div className="bg-bg/60 border border-orange-400/15 rounded-2xl p-5">
      <h3 className={`text-orange-400 text-base font-bold mb-4 ${lang === "ar" ? "font-arabic" : ""} ${isRTL ? "text-right" : "text-left"}`}>{data.voiceSettingsTitle}</h3>
      <div className={`flex items-center gap-4 mb-5 ${isRTL ? "flex-row-reverse" : ""}`}>
        <button className="w-11 h-11 rounded-full border-2 border-orange-400/60 flex items-center justify-center shrink-0 hover:bg-orange-400/10 transition-colors" style={{ background: "rgba(251,146,60,0.15)" }}>
          <Play size={16} className="text-orange-400 ml-0.5" fill="currentColor" />
        </button>
        <div className="flex-1"><SpeechWaveform /></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={isRTL ? "text-right" : "text-left"}>
          <label className={`block text-white/70 text-xs font-semibold mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>{data.voiceLabel}</label>
          <button className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg border border-white/10 bg-bg/80 text-white text-sm hover:border-orange-400/30 transition-colors ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className={lang === "ar" ? "font-arabic" : ""}>{data.voiceValue}</span>
            <ChevronDown size={14} className="text-white/50" />
          </button>
        </div>
        <div className={isRTL ? "text-right" : "text-left"}>
          <label className={`block text-white/70 text-xs font-semibold mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>{data.speedLabel}</label>
          <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            <input type="range" min="0.5" max="2" step="0.1" value={speed} onChange={(e) => setSpeed(parseFloat(e.target.value))}
              className="flex-1 h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-400"
              style={{ background: `linear-gradient(to right, #FB923C 0%, #FB923C ${(speed - 0.5) / 1.5 * 100}%, rgba(255,255,255,0.1) ${(speed - 0.5) / 1.5 * 100}%, rgba(255,255,255,0.1) 100%)` }} />
            <span className="text-white text-xs font-semibold w-10 text-center">{speed.toFixed(1)}x</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const featureContent = {
  detection: {
    en: { icon: <Camera size={32} />, title: "Real-time Detection", subtitle: "Detects hand gestures instantly using your camera with high accuracy and low latency.", type: "detection",
      previewLabel: "Live Detection Preview", detectingLabel: "Detecting...", activeLabel: "Real-time tracking active", detailsTitle: "Key Details",
      details: [
        { icon: <ScanLine size={20} />, title: "Advanced Computer Vision", desc: "Powered by MediaPipe to detect and track hand landmarks with precision." },
        { icon: <Zap size={20} />, title: "Real-time Performance", desc: "Optimized for fast processing to deliver smooth and instant results." },
        { icon: <Sun size={20} />, title: "Adaptive to Environments", desc: "Works reliably under different lighting conditions and backgrounds." },
      ],
      bottomTitle: "Your privacy is important.", bottomDesc: "All processing happens securely with no video data stored.",
      bottomBtn: "Learn more about privacy", bottomIcon: <Shield size={20} />, themeColor: "purple" },
    ar: { icon: <Camera size={32} />, title: "الكشف في الوقت الفعلي", subtitle: "يكتشف حركات اليد في الوقت الفعلي باستخدام كاميرا الجهاز بدقة عالية وزمن استجابة منخفض.", type: "detection",
      previewLabel: "معاينة الكشف المباشر", detectingLabel: "جاري الكشف...", activeLabel: "التتبع في الوقت الفعلي نشط", detailsTitle: "المزايا الرئيسية",
      details: [
        { icon: <ScanLine size={20} />, title: "رؤية حاسوبية متقدمة", desc: "يستخدم MediaPipe لتحديد وتتبع معالم اليد بدقة عالية." },
        { icon: <Zap size={20} />, title: "أداء في الوقت الفعلي", desc: "محسّن لمعالجة سريعة لتقديم نتائج فورية وسلسة." },
        { icon: <Sun size={20} />, title: "يتكيف مع بيئات مختلفة", desc: "يعمل بثبات في ظروف إضاءة وخلفيات متنوعة." },
      ],
      bottomTitle: "خصوصيتك مهمة.", bottomDesc: "جميع المعالجة تتم بشكل آمن على جهازك ولا يتم تخزين أي بيانات فيديو.",
      bottomBtn: "تعرف على المزيد حول الخصوصية", bottomIcon: <Shield size={20} />, themeColor: "purple" },
  },
  ai: {
    en: { icon: <Brain size={32} />, title: "AI-Powered Recognition", subtitle: "Our advanced AI model understands sign language gestures and recognizes their meaning with high accuracy.", type: "pipeline",
      pipelineTitle: "How it works",
      pipeline: [
        { label: "Input", sublabel: "Hand Gesture", content: "hand" },
        { label: "Feature Extraction", sublabel: "CNN", content: "cnn" },
        { label: "Sequence Learning", sublabel: "LSTM", content: "lstm" },
        { label: "Recognition Output", sublabel: "Meaning", content: "output", outputText: "Hello" },
      ],
      modelBoxTitle: "Model: YOLOv8 + CNN + LSTM", modelBoxDesc: "Trained on a large dataset of sign language gestures to ensure accuracy, speed, and real-world performance.",
      detailsTitle: "Key Details",
      details: [
        { icon: <Brain size={20} />, title: "Deep Learning Models", desc: "Combines YOLOv8 for detection, CNN for feature extraction, and LSTM for sequence understanding." },
        { icon: <Target size={20} />, title: "High Accuracy", desc: "Achieves high recognition accuracy across different users and environments." },
        { icon: <Database size={20} />, title: "Trained on Rich Dataset", desc: "Model trained on thousands of gestures and real-world variations." },
        { icon: <Zap size={20} />, title: "Fast & Efficient", desc: "Optimized for real-time recognition without compromising performance." },
      ],
      bottomTitle: "AI continuously improves", bottomDesc: "The model gets better over time as more data and user interactions are added.",
      bottomBtn: "View model details", bottomIcon: <Info size={20} />, themeColor: "purple" },
    ar: { icon: <Brain size={32} />, title: "التعرّف المدعوم بالذكاء الاصطناعي", subtitle: "نموذج ذكاء اصطناعي متقدم يفهم لغة الإشارة ويتعرّف على معانيها بدقة عالية.", type: "pipeline",
      pipelineTitle: "كيف يعمل؟",
      pipeline: [
        { label: "المدخلات", sublabel: "إيماءة اليد", content: "hand" },
        { label: "استخراج الميزات", sublabel: "شبكة CNN", content: "cnn" },
        { label: "تعلم التسلسل", sublabel: "شبكة LSTM", content: "lstm" },
        { label: "ناتج التعرف", sublabel: "المعنى", content: "output", outputText: "مرحبا" },
      ],
      modelBoxTitle: "YOLOv8 + CNN + LSTM", modelBoxDesc: "تم تدريب النموذج على مجموعة بيانات ضخمة من إشارات اللغة لضمان الدقة والسرعة والأداء العالي في العالم الحقيقي.",
      detailsTitle: "المزايا الرئيسية",
      details: [
        { icon: <Brain size={20} />, title: "نماذج تعلم عميق متقدمة", desc: "يجمع بين YOLOv8 للكشف، و CNN لاستخراج الميزات، و LSTM لفهم تسلسل الإشارات." },
        { icon: <Target size={20} />, title: "دقة عالية", desc: "يحقق دقة تعرف عالية على اختلاف المستخدمين والإضاءة والبيئات." },
        { icon: <Database size={20} />, title: "مدرّب على بيانات غنية", desc: "تم تدريب النموذج على ألاف الإشارات ومتغيرات من العالم الحقيقي." },
        { icon: <Zap size={20} />, title: "سريع وفعال", desc: "أداء فوري في الوقت الحقيقي دون التأثير على جودة النتائج." },
      ],
      bottomTitle: "يتحسّن بشكل مستمر", bottomDesc: "يتعلّم النموذج باستمرار ويصبح أكثر دقة مع إضافة بيانات جديدة وتفاعل المستخدمين.",
      bottomBtn: "عرض تفاصيل النموذج", bottomIcon: <Info size={20} />, themeColor: "purple" },
  },
  text: {
    en: { icon: <Type size={32} />, title: "Text Conversion", subtitle: "Recognized signs are converted into clear and readable text instantly.", type: "textflow",
      flowTitle: "How it looks",
      flowSteps: [
        { label: "1. Sign Detected", content: "sign" },
        { label: "2. AI Recognition", content: "brain" },
        { label: "3. Text Output", content: "text", outputText: "I love you", language: "English" },
      ],
      noteBoxTitle: "Instant and Accurate", noteBoxDesc: "Our system converts gestures into text in real-time, ensuring fast and accurate communication.",
      noteIcon: <MessageSquare size={20} />, detailsTitle: "Key Details",
      details: [
        { icon: <Type size={20} />, title: "Real-time Conversion", desc: "Converts recognized gestures into text instantly with minimal delay." },
        { icon: <Globe size={20} />, title: "Multi-language Support", desc: "Supports multiple languages for text output to match user preferences." },
        { icon: <CheckCircle size={20} />, title: "Clear & Readable", desc: "Provides clean, structured and easy-to-read text for better understanding." },
      ],
      bottomTitle: "Perfect for Everyone", bottomDesc: "Helps bridge communication gaps and makes conversations easier for all.",
      bottomBtn: "See examples", bottomIcon: <Star size={20} fill="currentColor" />, themeColor: "teal" },
    ar: { icon: <Type size={32} />, title: "تحويل النص", subtitle: "يتم تحويل الإشارات المعروفة إلى نص واضح ومقروء فوراً وبأقل تأخير.", type: "textflow",
      flowTitle: "كيف يعمل؟",
      flowSteps: [
        { label: "1. اكتشاف الإشارة", content: "sign" },
        { label: "2. التعرف بالذكاء الاصطناعي", content: "brain" },
        { label: "3. إخراج النص", content: "text", outputText: "أحبك", language: "العربية" },
      ],
      noteBoxTitle: "فوري ودقيق", noteBoxDesc: "يحوّل نظامنا الإشارات إلى نص في الوقت الفعلي، مما يضمن تواصلاً سريعاً ودقيقاً.",
      noteIcon: <MessageSquare size={20} />, detailsTitle: "المزايا الرئيسية",
      details: [
        { icon: <Type size={20} />, title: "تحويل فوري", desc: "يحوّل الإشارات المعروفة إلى نص فوراً وبأقل تأخير ممكن." },
        { icon: <Globe size={20} />, title: "دعم متعدد اللغات", desc: "يدعم عدة لغات لإخراج النص حسب تفضيلات المستخدم." },
        { icon: <CheckCircle size={20} />, title: "نص واضح وسهل القراءة", desc: "يوفر نصاً منظماً وواضحاً وسهل القراءة لسهولة الفهم والتواصل." },
      ],
      bottomTitle: "مناسب للجميع", bottomDesc: "يساعد على سدّ فجوة التواصل ويجعل المحادثات أسهل للجميع.",
      bottomBtn: "عرض أمثلة", bottomIcon: <Star size={20} fill="currentColor" />, themeColor: "teal" },
  },
  speech: {
    en: { icon: <Volume2 size={32} />, title: "Text to Speech", subtitle: "Converts written text into natural speech to facilitate communication and enhance interaction smoothly.", type: "speech",
      flowTitle: "How it works?",
      flowSteps: [
        { label: "1. Enter text", caption: "Type or paste your text", content: "input" },
        { label: "2. Convert to speech", caption: "Our AI converts the text into speech", content: "wave" },
        { label: "3. Get natural speech", caption: "Natural speech is ready", content: "play" },
      ],
      voiceSettingsTitle: "Voice Settings", voiceLabel: "Voice", voiceValue: "Female – Natural", speedLabel: "Speech Speed",
      detailsTitle: "Key Benefits",
      details: [
        { icon: <Volume2 size={20} />, title: "Natural Sound", desc: "AI-powered voices deliver a more human-like and natural experience." },
        { icon: <Globe size={20} />, title: "Multi-language Support", desc: "Support for multiple languages to meet the needs of different users." },
        { icon: <Zap size={20} />, title: "Fast & Efficient", desc: "Converts text to speech instantly and with high accuracy." },
        { icon: <CheckCircle size={20} />, title: "Clear & Easy to Understand", desc: "Provides clear and easy to understand speech to improve comprehension and communication." },
      ],
      bottomTitle: "Clear, natural, and fluent", bottomDesc: "Converts text into clear, natural speech for a better and more inclusive communication experience.",
      bottomBtn: "View Example", bottomIcon: <Shield size={20} />, themeColor: "orange" },
    ar: { icon: <Volume2 size={32} />, title: "تحويل النص إلى كلام", subtitle: "يحوّل النص المُعرَّف عليه إلى كلام طبيعي للمساعدة في تحسين التواصل بسلاسة.", type: "speech",
      flowTitle: "كيف يعمل؟",
      flowSteps: [
        { label: "1. نص مُعرَّف عليه", caption: "أحتاج إلى مساعدة", content: "input" },
        { label: "2. تحويل إلى كلام", caption: "", content: "wave" },
        { label: "3. كلام طبيعي", caption: "جاري التشغيل...", content: "play" },
      ],
      voiceSettingsTitle: "معاينة الصوت", voiceLabel: "الصوت", voiceValue: "أنثى – طبيعي", speedLabel: "سرعة الكلام",
      detailsTitle: "المزايا الرئيسية",
      details: [
        { icon: <Volume2 size={20} />, title: "صوت طبيعي", desc: "أصوات مدعومة بالذكاء الاصطناعي لتجربة أكثر إنسانية وطبيعية." },
        { icon: <Globe size={20} />, title: "دعم متعدد اللغات", desc: "يتحدث بعدة لغات لتناسب مختلف المستخدمين." },
        { icon: <Zap size={20} />, title: "تشغيل فوري", desc: "يحوّل ويُنطق النص فوراً وبأقل تأخير." },
        { icon: <CheckCircle size={20} />, title: "واضح وسهل الفهم", desc: "يوفر كلاماً واضحاً وسهل الفهم لتحسين التواصل والاستيعاب." },
      ],
      bottomTitle: "واضح، طبيعي وفوري", bottomDesc: "يحوّل النص إلى كلام واضح وطبيعي في لحظات.",
      bottomBtn: "عرض مثال", bottomIcon: <Shield size={20} />, themeColor: "orange" },
  },
  history: {
    en: { icon: <Clock size={32} />, title: "History & Logging", subtitle: "Keeps a history of recognized signs, texts, and audio for easy review and tracking.", type: "history",
      previewTitle: "History Preview", searchPlaceholder: "Search history...",
      cols: { time: "TIME", sign: "DETECTED SIGN", text: "TEXT OUTPUT", audio: "AUDIO" },
      rows: [
        { time: "Today, 10:30 AM", sign: "🤟", text: "I need help" },
        { time: "Today, 10:25 AM", sign: "✌️", text: "Thank you" },
        { time: "Today, 10:20 AM", sign: "👌", text: "Where are you?" },
        { time: "Today, 10:15 AM", sign: "👍", text: "Good" },
        { time: "Today, 10:10 AM", sign: "✋", text: "Hello" },
      ],
      viewAll: "View all history", detailsTitle: "Key Details",
      details: [
        { icon: <Clock size={20} />, title: "Save & Review", desc: "All recognized signs, text, and audio are saved automatically for future reference." },
        { icon: <Bookmark size={20} />, title: "Easy Tracking", desc: "Track your communication history over time and monitor your progress." },
        { icon: <Download size={20} />, title: "Privacy First", desc: "Your data is stored securely on your device and is never shared without consent." },
      ],
      bottomTitle: "Your data stays with you", bottomDesc: "All history is stored locally on your device for your privacy and security.",
      bottomBtn: "Privacy details", bottomIcon: <Shield size={20} />, themeColor: "purple" },
    ar: { icon: <Clock size={32} />, title: "السجل والتاريخ", subtitle: "يحتفظ بسجل الإشارات والنصوص والصوتيات المعروفة لمراجعتها وتتبعها بسهولة.", type: "history",
      previewTitle: "معاينة السجل", searchPlaceholder: "البحث في السجل...",
      cols: { time: "الوقت", sign: "الإشارة المكتشفة", text: "النص الناتج", audio: "الصوت" },
      rows: [
        { time: "اليوم، 10:30 ص", sign: "🤟", text: "أحتاج مساعدة" },
        { time: "اليوم، 10:25 ص", sign: "✌️", text: "شكراً لك" },
        { time: "اليوم، 10:20 ص", sign: "👌", text: "أين أنت؟" },
        { time: "اليوم، 10:15 ص", sign: "👍", text: "جيد" },
        { time: "اليوم، 10:10 ص", sign: "✋", text: "مرحباً" },
      ],
      viewAll: "عرض كل السجل", detailsTitle: "المزايا الرئيسية",
      details: [
        { icon: <Clock size={20} />, title: "حفظ ومراجعة", desc: "يتم حفظ جميع الإشارات والنصوص والصوتيات تلقائياً للمرجوع إليها لاحقاً." },
        { icon: <Bookmark size={20} />, title: "تتبع سهل", desc: "تتبع سجل تواصلك عبر الوقت ومراقبة تقدمك بسهولة." },
        { icon: <Download size={20} />, title: "خصوصيتك أولاً", desc: "يتم تخزين بياناتك بأمان على جهازك ولا تتم مشاركتها دون موافقتك." },
      ],
      bottomTitle: "بياناتك آمنة لديك", bottomDesc: "جميع البيانات محفوظة محلياً على جهازك لضمان الخصوصية والأمان.",
      bottomBtn: "تفاصيل الخصوصية", bottomIcon: <Shield size={20} />, themeColor: "purple" },
  },

  /* ─────────── CUSTOMIZABLE SETTINGS ─────────── */
  settings: {
    en: {
      icon: <Settings size={32} />,
      title: "Customizable Settings",
      subtitle: "Adjust preferences to personalize your experience and improve communication accuracy.",
      type: "settings",
      previewTitle: "Settings Preview",
      rows: {
        language: { icon: <Globe size={20} />, title: "Language", caption: "Choose your preferred language", value: "English" },
        voice: { icon: <Volume2 size={20} />, title: "Voice Output", caption: "Select voice and adjust speed", value: "Female (Natural)", speedLabel: "Speed" },
        sensitivity: { icon: <Target size={20} />, title: "Detection Sensitivity", caption: "Adjust how sensitive the system is to hand movements", level: "High" },
        textSize: { icon: <Type size={20} />, title: "Text Size", caption: "Adjust text size for better readability" },
        theme: { icon: <Moon size={20} />, title: "Theme", caption: "Choose your preferred theme", light: "Light", dark: "Dark", system: "System" },
        autoSpeak: { icon: <MessageSquare size={20} />, title: "Auto Speak", caption: "Automatically speak text output" },
      },
      detailsTitle: "Key Details",
      details: [
        { icon: <Globe size={20} />, title: "Multi-language Support", desc: "Communicate in multiple languages for a seamless experience." },
        { icon: <Volume2 size={20} />, title: "Voice Customization", desc: "Choose from different voices and adjust speed to your preference." },
        { icon: <Target size={20} />, title: "Smart Sensitivity", desc: "Fine-tune detection sensitivity for accurate recognition in any environment." },
        { icon: <Type size={20} />, title: "Readable for Everyone", desc: "Adjust text size to ensure clear visibility and comfortable reading." },
        { icon: <Shield size={20} />, title: "Personal & Private", desc: "All settings are saved only on your device and never shared." },
      ],
      bottomTitle: "Your experience, your way",
      bottomDesc: "Customize every detail to match your needs and communicate effortlessly.",
      bottomBtn: "Apply Settings",
      bottomIcon: <Check size={20} />,
      themeColor: "purple",
    },
    ar: {
      icon: <Settings size={32} />,
      title: "إعدادات قابلة للتخصيص",
      subtitle: "اضبط تفضيلاتك لتخصيص تجربتك وتحسين دقة التواصل.",
      type: "settings",
      previewTitle: "معاينة الإعدادات",
      rows: {
        language: { icon: <Globe size={20} />, title: "اللغة", caption: "اختر لغتك المفضلة", value: "العربية" },
        voice: { icon: <Volume2 size={20} />, title: "إخراج الصوت", caption: "اختر الصوت واضبط السرعة", value: "أنثى (طبيعي)", speedLabel: "السرعة" },
        sensitivity: { icon: <Target size={20} />, title: "حساسية الكشف", caption: "اضبط مدى حساسية النظام لحركات اليد", level: "عالية" },
        textSize: { icon: <Type size={20} />, title: "حجم النص", caption: "اضبط حجم النص لقراءة أفضل" },
        theme: { icon: <Moon size={20} />, title: "المظهر", caption: "اختر المظهر المفضل لديك", light: "فاتح", dark: "داكن", system: "النظام" },
        autoSpeak: { icon: <MessageSquare size={20} />, title: "التحدث التلقائي", caption: "تحويل النص إلى كلام تلقائياً" },
      },
      detailsTitle: "مزايا رئيسية",
      details: [
        { icon: <Globe size={20} />, title: "دعم متعدد اللغات", desc: "تواصل بلغات متعددة بسهولة لتجربة سلسة." },
        { icon: <Volume2 size={20} />, title: "تخصيص الصوت", desc: "اختر من بين أصوات مختلفة واضبط السرعة حسب تفضيلك." },
        { icon: <Target size={20} />, title: "حساسية ذكية", desc: "كشف دقيق لحركات اليد في أي بيئة للحصول على أداء أفضل." },
        { icon: <Type size={20} />, title: "مقروء للجميع", desc: "اضبط حجم النص لتحسين الرؤية وتوفير قراءة مريحة." },
        { icon: <Shield size={20} />, title: "شخصي وخاص", desc: "جميع الإعدادات محفوظة فقط على جهازك ولا تتم مشاركتها أبداً." },
      ],
      bottomTitle: "تجربتك، طريقتك",
      bottomDesc: "خصص كل التفاصيل لتناسب احتياجاتك وتواصل بسهولة وراحة.",
      bottomBtn: "تطبيق الإعدادات",
      bottomIcon: <Check size={20} />,
      themeColor: "purple",
    },
  },
};

const THEMES = {
  purple: { borderClass: "border-primary/20", iconBg: "bg-primary/15", iconBorder: "border-primary/40", iconText: "text-primary", glowOuter: "0 0 60px rgba(108,61,232,0.25)", ring: "rgba(108,61,232,0.5)" },
  teal:   { borderClass: "border-secondary/20", iconBg: "bg-secondary/15", iconBorder: "border-secondary/40", iconText: "text-secondary", glowOuter: "0 0 60px rgba(45,191,160,0.2)", ring: "rgba(45,191,160,0.5)" },
  orange: { borderClass: "border-orange-400/20", iconBg: "bg-orange-400/15", iconBorder: "border-orange-400/40", iconText: "text-orange-400", glowOuter: "0 0 60px rgba(251,146,60,0.2)", ring: "rgba(251,146,60,0.5)" },
};

export default function FeatureLearnMoreModal({ featureId, lang, onClose }) {
  const isRTL = lang === "ar";
  const data = featureContent[featureId]?.[lang];
  useEffect(() => {
    if (data) { document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = ""; }; }
  }, [data]);
  if (!data) return null;
  const theme = THEMES[data.themeColor] || THEMES.purple;

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto" onClick={onClose}>
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()} dir={isRTL ? "rtl" : "ltr"}
          className={`relative w-full max-w-6xl my-auto bg-card/95 backdrop-blur-xl border ${theme.borderClass} rounded-3xl p-6 md:p-10 shadow-2xl`}
          style={{ boxShadow: theme.glowOuter }}>

          <button onClick={onClose}
            className={`absolute top-5 ${isRTL ? "left-5" : "right-5"} w-11 h-11 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 z-10`}>
            <X size={20} />
          </button>

          <div className={`flex items-start gap-5 mb-8 ${isRTL ? "flex-row-reverse" : ""}`}>
            <div className={`w-20 h-20 rounded-full ${theme.iconBg} border-2 ${theme.iconBorder} flex items-center justify-center ${theme.iconText} shrink-0`} style={{ boxShadow: `0 0 30px ${theme.ring}` }}>
              {data.icon}
            </div>
            <div className={`flex-1 pt-1 ${isRTL ? "text-right" : "text-left"}`}>
              <h2 className={`text-3xl md:text-4xl font-extrabold text-white mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>{data.title}</h2>
              <p className={`text-white/60 text-sm md:text-base leading-relaxed max-w-2xl ${lang === "ar" ? "font-arabic" : ""}`}>{data.subtitle}</p>
            </div>
          </div>

          {data.type === "detection" && <DetectionLayout data={data} isRTL={isRTL} lang={lang} />}
          {data.type === "pipeline" && <PipelineLayout data={data} isRTL={isRTL} lang={lang} />}
          {data.type === "textflow" && <TextFlowLayout data={data} isRTL={isRTL} lang={lang} />}
          {data.type === "speech" && <SpeechLayout data={data} isRTL={isRTL} lang={lang} />}
          {data.type === "history" && <HistoryLayout data={data} isRTL={isRTL} lang={lang} />}
          {data.type === "settings" && <SettingsLayout data={data} isRTL={isRTL} lang={lang} />}

          <div className="bg-bg/60 border border-white/10 rounded-2xl p-5 mt-6">
            <div className={`flex flex-col md:flex-row items-center gap-4 ${isRTL ? "md:flex-row-reverse" : ""}`}>
              <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0" style={{ boxShadow: "0 0 15px rgba(108,61,232,0.3)" }}>
                {data.bottomIcon}
              </div>
              <div className={`flex-1 text-center ${isRTL ? "md:text-right" : "md:text-left"}`}>
                <h4 className={`text-primary text-base font-bold mb-1 ${lang === "ar" ? "font-arabic" : ""}`}>{data.bottomTitle}</h4>
                <p className={`text-white/55 text-xs leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>{data.bottomDesc}</p>
              </div>
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/40 bg-primary/10 hover:bg-primary/20 text-primary font-semibold text-xs transition-colors shrink-0 ${lang === "ar" ? "font-arabic" : ""}`}>
                {data.type === "settings" ? <Settings size={14} /> : <ExternalLink size={14} />}
                {data.bottomBtn}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function DetectionLayout({ data, isRTL, lang }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-bg/60 border border-white/10 rounded-2xl p-5">
        <div className={`flex items-center justify-between mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 ${isRTL ? "flex-row-reverse" : ""}`}>
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className={`text-primary text-[11px] font-semibold ${lang === "ar" ? "font-arabic" : ""}`}>{data.previewLabel}</span>
          </div>
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 ${isRTL ? "flex-row-reverse" : ""}`}>
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className={`text-secondary text-[11px] font-semibold ${lang === "ar" ? "font-arabic" : ""}`}>{data.detectingLabel}</span>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center" style={{ background: "radial-gradient(circle at 30% 50%, rgba(108,61,232,0.25), transparent 60%), #0a0a18" }}>
          <div className="relative w-56 h-56">
            <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 border-2 border-primary rounded-2xl" style={{ boxShadow: "0 0 20px rgba(108,61,232,0.5)" }} />
            <div className="absolute inset-2"><HandLandmarks /></div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full bg-bg border border-white/15 ${isRTL ? "flex-row-reverse" : ""}`}>
            <Zap size={14} className="text-primary" fill="currentColor" />
            <span className={`text-white text-xs font-semibold ${lang === "ar" ? "font-arabic" : ""}`}>{data.activeLabel}</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className={`text-white text-xl font-bold mb-4 ${lang === "ar" ? "font-arabic" : ""} ${isRTL ? "text-right" : "text-left"}`}>{data.detailsTitle}</h3>
        <div className="flex flex-col gap-3">
          {data.details.map((item, i) => <DetailItem key={i} item={item} isRTL={isRTL} lang={lang} index={i} themeColor="purple" />)}
        </div>
      </div>
    </div>
  );
}

function PipelineLayout({ data, isRTL, lang }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6">
      <div className="bg-bg/60 border border-white/10 rounded-2xl p-5 md:p-6">
        <h3 className={`text-white text-lg font-bold mb-5 ${lang === "ar" ? "font-arabic" : ""} ${isRTL ? "text-right" : "text-left"}`}>{data.pipelineTitle}</h3>
        <div className={`flex items-stretch overflow-x-auto pb-2 ${isRTL ? "flex-row-reverse" : ""}`}>
          {data.pipeline.map((step, i) => {
            const last = i === data.pipeline.length - 1;
            return (
              <div key={i} className={`flex items-stretch ${isRTL ? "flex-row-reverse" : ""}`}>
                <PipelineStep label={step.label} sublabel={step.sublabel} isRTL={isRTL}>
                  {step.content === "hand" && <HandInput />}
                  {step.content === "cnn" && <CNNCube />}
                  {step.content === "lstm" && <LSTMNodes />}
                  {step.content === "output" && <RecognitionOutput text={step.outputText} />}
                </PipelineStep>
                {!last && <PipelineArrow />}
              </div>
            );
          })}
        </div>
        <div className={`mt-6 bg-bg/80 border border-primary/20 rounded-xl p-4 flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0" style={{ boxShadow: "0 0 12px rgba(108,61,232,0.3)" }}>
            <Cpu size={20} />
          </div>
          <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
            <h4 className={`text-white text-sm font-bold mb-1 ${lang === "ar" ? "font-arabic" : ""}`}>{data.modelBoxTitle}</h4>
            <p className={`text-white/55 text-xs leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>{data.modelBoxDesc}</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className={`text-white text-lg font-bold mb-4 ${lang === "ar" ? "font-arabic" : ""} ${isRTL ? "text-right" : "text-left"}`}>{data.detailsTitle}</h3>
        <div className="flex flex-col gap-3">
          {data.details.map((item, i) => <DetailItem key={i} item={item} isRTL={isRTL} lang={lang} index={i} themeColor="purple" />)}
        </div>
      </div>
    </div>
  );
}

function TextFlowLayout({ data, isRTL, lang }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
      <div className="bg-bg/60 border border-white/10 rounded-2xl p-5 md:p-6">
        <h3 className={`text-secondary text-lg font-bold mb-6 ${lang === "ar" ? "font-arabic" : ""} ${isRTL ? "text-right" : "text-left"}`}>{data.flowTitle}</h3>
        <div className={`flex items-stretch overflow-x-auto pb-2 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
          {data.flowSteps.map((step, i) => {
            const last = i === data.flowSteps.length - 1;
            return (
              <div key={i} className={`flex items-stretch ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="flex-1 min-w-[140px]">
                  <p className={`text-white text-xs font-semibold text-center mb-3 ${lang === "ar" ? "font-arabic" : ""}`}>{step.label}</p>
                  <div className="bg-bg/80 border border-secondary/30 rounded-xl p-4 h-44 flex items-center justify-center relative">
                    {step.content === "sign" && <SignDetectedBox />}
                    {step.content === "brain" && <TealAIBrain />}
                    {step.content === "text" && <TextOutputBox text={step.outputText} language={step.language} />}
                  </div>
                </div>
                {!last && <DashedArrow isRTL={isRTL} color="#2DBFA0" />}
              </div>
            );
          })}
        </div>
        <div className={`bg-bg/80 border border-secondary/20 rounded-xl p-4 flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className="w-12 h-12 rounded-full bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary shrink-0" style={{ boxShadow: "0 0 12px rgba(45,191,160,0.3)" }}>
            {data.noteIcon}
          </div>
          <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
            <h4 className={`text-white text-sm font-bold mb-1 ${lang === "ar" ? "font-arabic" : ""}`}>{data.noteBoxTitle}</h4>
            <p className={`text-white/55 text-xs leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>{data.noteBoxDesc}</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className={`text-white text-lg font-bold mb-4 ${lang === "ar" ? "font-arabic" : ""} ${isRTL ? "text-right" : "text-left"}`}>{data.detailsTitle}</h3>
        <div className="flex flex-col gap-3">
          {data.details.map((item, i) => <DetailItem key={i} item={item} isRTL={isRTL} lang={lang} index={i} themeColor="teal" />)}
        </div>
      </div>
    </div>
  );
}

function SpeechLayout({ data, isRTL, lang }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
      <div className="flex flex-col gap-5">
        <div className="bg-bg/60 border border-white/10 rounded-2xl p-5 md:p-6">
          <h3 className={`text-orange-400 text-lg font-bold mb-6 ${lang === "ar" ? "font-arabic" : ""} ${isRTL ? "text-right" : "text-left"}`}>{data.flowTitle}</h3>
          <div className={`flex items-stretch overflow-x-auto pb-2 ${isRTL ? "flex-row-reverse" : ""}`}>
            {data.flowSteps.map((step, i) => {
              const last = i === data.flowSteps.length - 1;
              return (
                <div key={i} className={`flex items-stretch ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="flex-1 min-w-[140px]">
                    <p className={`text-white text-xs font-semibold text-center mb-3 ${lang === "ar" ? "font-arabic" : ""}`}>{step.label}</p>
                    <div className="bg-bg/80 border border-orange-400/25 rounded-xl p-4 min-h-[120px] flex items-center justify-center relative">
                      {step.content === "input" && <SpeechTextInput />}
                      {step.content === "wave" && <SpeechWaveform small />}
                      {step.content === "play" && <SpeechPlayCircle />}
                    </div>
                    <p className={`text-white/55 text-[10px] text-center mt-2 leading-tight ${lang === "ar" ? "font-arabic" : ""}`}>{step.caption}</p>
                  </div>
                  {!last && <OrangeDashedArrow isRTL={isRTL} />}
                </div>
              );
            })}
          </div>
        </div>
        <VoiceSettingsPanel data={data} isRTL={isRTL} lang={lang} />
      </div>
      <div>
        <h3 className={`text-white text-lg font-bold mb-4 ${lang === "ar" ? "font-arabic" : ""} ${isRTL ? "text-right" : "text-left"}`}>{data.detailsTitle}</h3>
        <div className="flex flex-col gap-3">
          {data.details.map((item, i) => <DetailItem key={i} item={item} isRTL={isRTL} lang={lang} index={i} themeColor="orange" />)}
        </div>
      </div>
    </div>
  );
}

function HistoryLayout({ data, isRTL, lang }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6">
      <div className="bg-bg/60 border border-white/10 rounded-2xl p-5 md:p-6">
        <div className={`flex items-center justify-between gap-3 mb-5 flex-wrap ${isRTL ? "flex-row-reverse" : ""}`}>
          <h3 className={`text-primary text-lg font-bold ${lang === "ar" ? "font-arabic" : ""}`}>{data.previewTitle}</h3>
          <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-bg/80 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Search size={14} className="text-white/40" />
              <input type="text" placeholder={data.searchPlaceholder}
                className={`bg-transparent border-none outline-none text-white/80 text-xs placeholder:text-white/40 w-32 ${lang === "ar" ? "font-arabic text-right" : ""}`} />
            </div>
            <button className="w-9 h-9 rounded-lg border border-white/10 bg-bg/80 flex items-center justify-center text-white/60 hover:text-white hover:border-white/25 transition-colors">
              <SlidersHorizontal size={14} />
            </button>
          </div>
        </div>
        <div className="bg-bg/80 border border-white/8 rounded-xl overflow-hidden">
          <div className="grid grid-cols-[1.3fr_1fr_1.4fr_0.8fr] gap-2 px-4 py-3 border-b border-white/8">
            <span className={`text-white/40 text-[10px] font-bold uppercase tracking-wider ${lang === "ar" ? "font-arabic" : ""}`}>{data.cols.time}</span>
            <span className={`text-white/40 text-[10px] font-bold uppercase tracking-wider text-center ${lang === "ar" ? "font-arabic" : ""}`}>{data.cols.sign}</span>
            <span className={`text-white/40 text-[10px] font-bold uppercase tracking-wider text-center ${lang === "ar" ? "font-arabic" : ""}`}>{data.cols.text}</span>
            <span className={`text-white/40 text-[10px] font-bold uppercase tracking-wider text-center ${lang === "ar" ? "font-arabic" : ""}`}>{data.cols.audio}</span>
          </div>
          {data.rows.map((row, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="grid grid-cols-[1.3fr_1fr_1.4fr_0.8fr] gap-2 items-center px-4 py-3 border-b border-white/5 last:border-b-0 hover:bg-primary/5 transition-colors">
              <span className={`text-white/70 text-xs ${lang === "ar" ? "font-arabic" : ""}`}>{row.time}</span>
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 rounded-lg border border-primary/25 bg-primary/8 flex items-center justify-center">
                  <span className="text-xl">{row.sign}</span>
                </div>
              </div>
              <span className={`text-white text-sm font-medium text-center ${lang === "ar" ? "font-arabic" : ""}`}>{row.text}</span>
              <div className="flex items-center justify-center gap-2">
                <button className="w-8 h-8 rounded-full border-2 border-primary/50 bg-primary/15 flex items-center justify-center hover:bg-primary/25 transition-colors" style={{ boxShadow: "0 0 8px rgba(108,61,232,0.3)" }}>
                  <Play size={11} className="text-primary ml-0.5" fill="currentColor" />
                </button>
                <button className="text-white/40 hover:text-white/80 transition-colors">
                  <MoreVertical size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <button className={`mt-5 mx-auto flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all ${lang === "ar" ? "font-arabic flex-row-reverse" : ""}`}>
          <span>{data.viewAll}</span>
          <ArrowRight size={14} className={isRTL ? "rotate-180" : ""} />
        </button>
      </div>
      <div>
        <h3 className={`text-white text-lg font-bold mb-4 ${lang === "ar" ? "font-arabic" : ""} ${isRTL ? "text-right" : "text-left"}`}>{data.detailsTitle}</h3>
        <div className="flex flex-col gap-3">
          {data.details.map((item, i) => <DetailItem key={i} item={item} isRTL={isRTL} lang={lang} index={i} themeColor="purple" />)}
        </div>
      </div>
    </div>
  );
}

/* ── SETTINGS LAYOUT ── */
function SettingsLayout({ data, isRTL, lang }) {
  const [voiceSpeed, setVoiceSpeed] = useState(1.0);
  const [textSize, setTextSize] = useState("md");
  const [theme, setTheme] = useState("dark");
  const [autoSpeak, setAutoSpeak] = useState(true);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
      {/* LEFT: Settings Preview */}
      <div className="bg-bg/60 border border-white/10 rounded-2xl p-5 md:p-6">
        <h3 className={`text-primary text-lg font-bold mb-5 ${lang === "ar" ? "font-arabic" : ""} ${isRTL ? "text-right" : "text-left"}`}>
          {data.previewTitle}
        </h3>

        <div className="flex flex-col gap-3">
          {/* LANGUAGE ROW */}
          <SettingRow item={data.rows.language} isRTL={isRTL} lang={lang}>
            <button className={`flex items-center justify-between gap-2 px-3 py-2 rounded-lg border border-white/10 bg-bg/80 text-white text-sm hover:border-primary/30 transition-colors min-w-[140px] ${isRTL ? "flex-row-reverse" : ""}`}>
              <span className={lang === "ar" ? "font-arabic" : ""}>{data.rows.language.value}</span>
              <ChevronDown size={14} className="text-white/50" />
            </button>
          </SettingRow>

          {/* VOICE OUTPUT ROW with speed slider */}
          <SettingRow item={data.rows.voice} isRTL={isRTL} lang={lang} stacked>
            <div className="flex flex-col gap-3 w-full">
              <button className={`self-end flex items-center justify-between gap-2 px-3 py-2 rounded-lg border border-white/10 bg-bg/80 text-white text-sm hover:border-primary/30 transition-colors min-w-[140px] ${isRTL ? "flex-row-reverse self-start" : ""}`}>
                <span className={lang === "ar" ? "font-arabic" : ""}>{data.rows.voice.value}</span>
                <ChevronDown size={14} className="text-white/50" />
              </button>
              <div>
                <div className={`flex items-center justify-between mb-1 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <span className={`text-white/60 text-xs ${lang === "ar" ? "font-arabic" : ""}`}>{data.rows.voice.speedLabel}</span>
                  <span className="text-white text-xs font-semibold">{voiceSpeed.toFixed(1)}x</span>
                </div>
                <input type="range" min="0.5" max="2" step="0.1" value={voiceSpeed}
                  onChange={(e) => setVoiceSpeed(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                  style={{ background: `linear-gradient(${isRTL ? "to left" : "to right"}, #6C3DE8 0%, #6C3DE8 ${(voiceSpeed - 0.5) / 1.5 * 100}%, rgba(255,255,255,0.1) ${(voiceSpeed - 0.5) / 1.5 * 100}%, rgba(255,255,255,0.1) 100%)` }} />
              </div>
            </div>
          </SettingRow>

          {/* DETECTION SENSITIVITY */}
          <SettingRow item={data.rows.sensitivity} isRTL={isRTL} lang={lang}>
            <div className={`flex flex-col items-end gap-1 ${isRTL ? "items-start" : ""}`}>
              <div className={`flex gap-1.5 ${isRTL ? "flex-row-reverse" : ""}`}>
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className={`w-7 h-6 rounded ${i <= 4 ? "bg-primary" : "bg-white/10"}`} style={{ boxShadow: i <= 4 ? "0 0 8px rgba(108,61,232,0.5)" : "none" }} />
                ))}
              </div>
              <span className={`text-white/70 text-xs font-semibold ${lang === "ar" ? "font-arabic" : ""}`}>{data.rows.sensitivity.level}</span>
            </div>
          </SettingRow>

          {/* TEXT SIZE */}
          <SettingRow item={data.rows.textSize} isRTL={isRTL} lang={lang}>
            <div className={`flex gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              {[
                { id: "sm", size: "text-xs" },
                { id: "md", size: "text-base" },
                { id: "lg", size: "text-xl" },
              ].map((s) => (
                <button key={s.id} onClick={() => setTextSize(s.id)}
                  className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center font-bold transition-all ${
                    textSize === s.id ? "border-primary bg-primary/15 text-primary" : "border-white/10 bg-bg/80 text-white/60 hover:border-white/25"
                  }`}
                  style={textSize === s.id ? { boxShadow: "0 0 12px rgba(108,61,232,0.4)" } : {}}>
                  <span className={s.size}>A</span>
                </button>
              ))}
            </div>
          </SettingRow>

          {/* THEME */}
          <SettingRow item={data.rows.theme} isRTL={isRTL} lang={lang}>
            <div className={`flex gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              {[
                { id: "light", icon: <Sun size={16} />, label: data.rows.theme.light },
                { id: "dark", icon: <Moon size={16} />, label: data.rows.theme.dark },
                { id: "system", icon: <Monitor size={16} />, label: data.rows.theme.system },
              ].map((t) => (
                <button key={t.id} onClick={() => setTheme(t.id)}
                  className={`w-16 h-14 rounded-lg border-2 flex flex-col items-center justify-center gap-0.5 transition-all ${
                    theme === t.id ? "border-primary bg-primary/15 text-primary" : "border-white/10 bg-bg/80 text-white/60 hover:border-white/25"
                  }`}
                  style={theme === t.id ? { boxShadow: "0 0 12px rgba(108,61,232,0.4)" } : {}}>
                  {t.icon}
                  <span className={`text-[9px] font-semibold ${lang === "ar" ? "font-arabic" : ""}`}>{t.label}</span>
                </button>
              ))}
            </div>
          </SettingRow>

          {/* AUTO SPEAK TOGGLE */}
          <SettingRow item={data.rows.autoSpeak} isRTL={isRTL} lang={lang}>
            <button onClick={() => setAutoSpeak(!autoSpeak)}
              className={`relative w-14 h-7 rounded-full transition-colors ${autoSpeak ? "bg-primary" : "bg-white/15"}`}
              style={autoSpeak ? { boxShadow: "0 0 12px rgba(108,61,232,0.5)" } : {}}>
              <motion.div
                animate={{ x: autoSpeak ? (isRTL ? -28 : 28) : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md"
              />
            </button>
          </SettingRow>
        </div>
      </div>

      {/* RIGHT: Key Details (5 items) */}
      <div>
        <h3 className={`text-white text-lg font-bold mb-4 ${lang === "ar" ? "font-arabic" : ""} ${isRTL ? "text-right" : "text-left"}`}>
          {data.detailsTitle}
        </h3>
        <div className="flex flex-col gap-3">
          {data.details.map((item, i) => <DetailItem key={i} item={item} isRTL={isRTL} lang={lang} index={i} themeColor="purple" />)}
        </div>
      </div>
    </div>
  );
}

/* Setting row with icon + label/caption + control */
function SettingRow({ item, isRTL, lang, children, stacked = false }) {
  return (
    <div className={`bg-bg/80 border border-white/8 rounded-xl p-4 flex ${stacked ? "flex-col gap-4" : "items-center"} gap-4 ${isRTL && !stacked ? "flex-row-reverse" : ""}`}>
      <div className={`flex items-center gap-3 ${stacked ? "w-full" : "flex-1"} ${isRTL ? "flex-row-reverse" : ""}`}>
        <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0" style={{ boxShadow: "0 0 10px rgba(108,61,232,0.3)" }}>
          {item.icon}
        </div>
        <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
          <h4 className={`text-white text-sm font-bold ${lang === "ar" ? "font-arabic" : ""}`}>{item.title}</h4>
          <p className={`text-white/50 text-[11px] ${lang === "ar" ? "font-arabic" : ""}`}>{item.caption}</p>
        </div>
      </div>
      <div className={stacked ? "w-full" : "shrink-0"}>{children}</div>
    </div>
  );
}

function DetailItem({ item, isRTL, lang, index, themeColor = "purple" }) {
  const config = {
    purple: { iconBg: "bg-primary/15", iconBorder: "border-primary/30", iconText: "text-primary", borderHover: "hover:border-primary/30", glow: "0 0 12px rgba(108,61,232,0.3)" },
    teal:   { iconBg: "bg-secondary/15", iconBorder: "border-secondary/30", iconText: "text-secondary", borderHover: "hover:border-secondary/35", glow: "0 0 12px rgba(45,191,160,0.3)" },
    orange: { iconBg: "bg-orange-400/15", iconBorder: "border-orange-400/30", iconText: "text-orange-400", borderHover: "hover:border-orange-400/35", glow: "0 0 12px rgba(251,146,60,0.3)" },
  }[themeColor];

  return (
    <motion.div initial={{ opacity: 0, x: isRTL ? 20 : -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.08 }}
      className={`bg-bg/60 border border-white/10 ${config.borderHover} rounded-xl p-4 flex items-start gap-3 transition-colors ${isRTL ? "flex-row-reverse" : ""}`}>
      <div className={`w-11 h-11 rounded-full ${config.iconBg} ${config.iconBorder} ${config.iconText} border flex items-center justify-center shrink-0`} style={{ boxShadow: config.glow }}>
        {item.icon}
      </div>
      <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
        <h4 className={`text-white text-sm font-bold mb-1 ${lang === "ar" ? "font-arabic" : ""}`}>{item.title}</h4>
        <p className={`text-white/55 text-xs leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>{item.desc}</p>
      </div>
    </motion.div>
  );
}