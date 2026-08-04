import image_cropped_circle_image__8__2 from '@/imports/cropped_circle_image__8_-2.png'
import image_cropped_circle_image__8__1 from '@/imports/cropped_circle_image__8_-1.png'
import image_cropped_circle_image__7__1 from '@/imports/cropped_circle_image__7_-1.png'
import image_cropped_circle_image__8_ from '@/imports/cropped_circle_image__8_.png'
import image_cropped_circle_image__4__8 from '@/imports/cropped_circle_image__4_-8.png'
import image_cropped_circle_image__4__7 from '@/imports/cropped_circle_image__4_-7.png'
import image_cropped_circle_image__4__6 from '@/imports/cropped_circle_image__4_-6.png'
import image_cropped_circle_image__7_ from '@/imports/cropped_circle_image__7_.png'
import image_cropped_circle_image__4__5 from '@/imports/cropped_circle_image__4_-5.png'
import image_cropped_circle_image__6_ from '@/imports/cropped_circle_image__6_.png'
import image_cropped_circle_image__5_ from '@/imports/cropped_circle_image__5_.png'
import image_cropped_circle_image__4__4 from '@/imports/cropped_circle_image__4_-4.png'
import image_cropped_circle_image__4__3 from '@/imports/cropped_circle_image__4_-3.png'
import image_cropped_circle_image__4__2 from '@/imports/cropped_circle_image__4_-2.png'
import image_cropped_circle_image__4_ from '@/imports/cropped_circle_image__4_.png'
import image_images__11_ from '@/imports/images__11_.jfif'
import image_c622dfef_dcfc_4478_98d3_be10a0d1b704_removalai_preview from '@/imports/c622dfef-dcfc-4478-98d3-be10a0d1b704_removalai_preview.png'
import image_5a39b444_2011_47bb_9b85_31434046bb7d_removalai_preview from '@/imports/5a39b444-2011-47bb-9b85-31434046bb7d_removalai_preview.png'
import { useState, useEffect, useRef } from "react";
import {
  createBrowserRouter, RouterProvider, Link, Outlet,
  useNavigate, useSearchParams, useOutletContext, useParams,
  useLocation,
} from "react-router";
import {
  Search, Download, Star, Menu, X,
  CheckCircle, Eye, EyeOff, Trash2, Edit3,
  Plus, MessageCircle, Upload,
  Globe, Mail, Phone, ChevronRight,
  GraduationCap, FileText, BookOpen,
  FlaskConical, Leaf, BookMarked,
  Layers, Key, LogOut, BarChart3,
  Info, Clock, Package, ArrowRight,
  Shield, FileDown, Send,
  MapPin, ExternalLink, ChevronLeft,
  HelpCircle, AlertCircle, CreditCard, FileQuestion, Bug,
  Headphones, Zap,
} from "lucide-react";

import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

import uafLogo      from "@/imports/b2ae3213-6403-4416-9276-625c6925f75e_removalai_preview-3.png";
import dirLogo      from "@/imports/5dfa0e76-f3fb-4592-b4a0-400f557fbb08_removalai_preview-1.png";
import campusPhoto  from "@/imports/image.png";

// ─── Types ────────────────────────────────────────────────────────────────────
type ResourceType = "free" | "paid";
type Category =
  | "Undergraduate Entry Test"
  | "Postgraduate Entry Test"
  | "Past Papers"
  | "Student Utilities";
type FileFormat = "PDF" | "PPT" | "ZIP" | "PDF+PPT" | "DOCX";

interface Resource {
  id: number;
  title: string;
  category: Category;
  subject: string;
  degree: string;
  format: FileFormat;
  type: ResourceType;
  price?: number;
  driveUrl?: string;
  thumbnail: string;
  rating: number;
  reviews: number;
  downloads: number;
  description: string;
  highlights?: string[];
  iconKey: string;
  featured?: boolean;
  isNew?: boolean;
}

const CAT_CONFIG: Record<Category, {
  num: string; color: string; bg: string; Icon: React.ElementType; short: string;
}> = {
  "Undergraduate Entry Test": { num: "01", color: "#1E3D2F", bg: "#E6EFE9", Icon: GraduationCap, short: "Entry Test"   },
  "Postgraduate Entry Test":  { num: "02", color: "#1E2F5A", bg: "#E6EAF5", Icon: BookOpen,       short: "Postgrad"    },
  "Past Papers":              { num: "03", color: "#6B3500", bg: "#F5E9DC", Icon: FileText,        short: "Past Papers" },
  "Student Utilities":        { num: "04", color: "#3D1E6B", bg: "#EDE6F5", Icon: Layers,          short: "Utilities"  },
};

const ICON_MAP: Record<string, React.ElementType> = {
  BookOpen, FileText, FlaskConical, Leaf, BookMarked,
  Layers, GraduationCap, FileDown,
};

const US = (id: string, w = 480, h = 280) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=75`;

const SEED: Resource[] = [
  {
    id: 1, title: "UAF Entry Test Complete Pack 2025 — Pre-Medical",
    category: "Undergraduate Entry Test", subject: "Biology + Chemistry + Physics",
    degree: "BS Agriculture / DVM", format: "PDF+PPT", type: "free",
    driveUrl: "https://drive.google.com/",
    thumbnail: US("1532187863486-abf9dbad1b69"),
    rating: 4.8, reviews: 312, downloads: 12400,
    description: "Full Pre-Medical entry test pack aligned with UAF ETEA pattern 2025. Covers all major topics with 800+ MCQs and verified answer keys. Prepared by top-scoring UAF alumni and reviewed by current faculty members.",
    highlights: ["800+ MCQs with explanations", "Topic-wise chapterization", "2018–2024 solved past papers", "Formula & concept sheets", "10 full-length mock tests", "Answer keys verified by faculty"],
    iconKey: "GraduationCap", featured: true, isNew: false,
  },
  {
    id: 2, title: "Pre-Engineering Entry Test Master Pack",
    category: "Undergraduate Entry Test", subject: "Physics + Maths + Chemistry",
    degree: "BS Agriculture Engineering", format: "PDF", type: "paid", price: 499,
    thumbnail: US("1635070041078-e363dbe005cb"),
    rating: 4.9, reviews: 208, downloads: 6820,
    description: "High-yield solved MCQs, formula sheets and model papers for Pre-Engineering UAF entry test.",
    highlights: ["1200+ solved MCQs", "Formula condensed sheets", "5 full mock tests", "Gmail delivery within 15 min", "Video solution links"],
    iconKey: "BookOpen", featured: true, isNew: false,
  },
  {
    id: 3, title: "ICS — Computer Science Entry Test Pack",
    category: "Undergraduate Entry Test", subject: "Computer Science + Maths",
    degree: "BS IT / CS", format: "PDF", type: "free",
    driveUrl: "https://drive.google.com/",
    thumbnail: US("1517694712202-14dd9538aa97"),
    rating: 4.6, reviews: 97, downloads: 4200,
    description: "Complete ICS entry test pack covering algorithms, data structures and mathematics for UAF admission.",
    highlights: ["600+ MCQs", "Programming fundamentals", "Digital logic basics", "Maths formula sheet"],
    iconKey: "Layers", featured: false, isNew: true,
  },
  {
    id: 4, title: "MScAgri / MPhil Entry Test Preparation Bundle",
    category: "Postgraduate Entry Test", subject: "Agriculture Sciences",
    degree: "MScAgri / MPhil", format: "PDF+PPT", type: "paid", price: 699,
    thumbnail: US("1574943320219-553eb213f72d"),
    rating: 4.7, reviews: 143, downloads: 3100,
    description: "Comprehensive MScAgri and MPhil entry test pack covering all agri subjects with GAT pattern alignment.",
    highlights: ["GAT-Subject pattern aligned", "800+ agri MCQs", "Research methodology chapter", "Gmail delivery", "Crop science section"],
    iconKey: "Leaf", featured: true, isNew: false,
  },
  {
    id: 5, title: "Postgraduate Chemistry Entry Test Pack",
    category: "Postgraduate Entry Test", subject: "Organic & Inorganic Chemistry",
    degree: "MScChem / PhD", format: "PDF", type: "paid", price: 599,
    thumbnail: US("1532187863486-abf9dbad1b69"),
    rating: 4.5, reviews: 88, downloads: 1980,
    description: "High-yield PG chemistry MCQs and theory notes for UAF postgraduate admissions.",
    highlights: ["Spectroscopy chapter", "Reaction mechanisms", "500+ MCQs", "Past 5 years solved"],
    iconKey: "FlaskConical", featured: false, isNew: false,
  },
  {
    id: 6, title: "GAT General (NTS) Complete Preparation Pack",
    category: "Postgraduate Entry Test", subject: "GAT General — All Subjects",
    degree: "MPhil / PhD (All Departments)", format: "PDF", type: "paid", price: 799,
    thumbnail: US("1434030216411-0b793f4b4173"),
    rating: 4.9, reviews: 351, downloads: 9800,
    description: "Most comprehensive GAT General pack — Quantitative, Analytical, Verbal with 10 full mock tests.",
    highlights: ["10 full mock tests", "Section-wise strategy", "2000+ MCQs", "Previous years solved", "English verbal section"],
    iconKey: "BookOpen", featured: true, isNew: false,
  },
  {
    id: 7, title: "Agronomy Mid-Term Past Papers Bundle 2024",
    category: "Past Papers", subject: "Agronomy",
    degree: "BS Agriculture Semester 5–6", format: "PDF", type: "free",
    driveUrl: "https://drive.google.com/",
    thumbnail: US("1464226184884-fa280b87c399"),
    rating: 4.7, reviews: 189, downloads: 8900,
    description: "Complete mid-term past paper set for Agronomy — Semesters 3–6, verified by senior UAF students.",
    highlights: ["Semester-wise sorted", "Verified by seniors", "2020–2024 coverage", "Includes answer hints"],
    iconKey: "FileText", featured: false, isNew: false,
  },
  {
    id: 8, title: "DVM Final-Term Past Papers — Complete Archive",
    category: "Past Papers", subject: "Veterinary Science",
    degree: "DVM Semesters 1–8", format: "ZIP", type: "paid", price: 349,
    thumbnail: US("1559757148-5c350d0d3c56"),
    rating: 4.8, reviews: 267, downloads: 5400,
    description: "Complete DVM final-term archive — all 8 semesters, 2018–2024, sorted by subject and year.",
    highlights: ["All 8 semesters", "Subject-wise sorted", "2018–2024", "Instant Gmail delivery"],
    iconKey: "BookMarked", featured: true, isNew: false,
  },
  {
    id: 9, title: "Biochemistry Final-Term Notes + Past Papers",
    category: "Past Papers", subject: "Biochemistry",
    degree: "BS Agriculture Semester 3–4", format: "PDF", type: "free",
    driveUrl: "https://drive.google.com/",
    thumbnail: US("1530026405186-ed1f139313f8"),
    rating: 4.6, reviews: 134, downloads: 6200,
    description: "Comprehensive biochemistry notes and 5-year final-term past papers, verified by UAF students.",
    highlights: ["Topic summaries", "Exam-style questions", "2019–2024 papers", "Metabolic pathway diagrams"],
    iconKey: "FlaskConical", featured: false, isNew: true,
  },
  {
    id: 10, title: "Soil Science Mid-Term Past Papers 2024",
    category: "Past Papers", subject: "Soil Science",
    degree: "BS Agriculture Semester 3–4", format: "PDF", type: "free",
    driveUrl: "https://drive.google.com/",
    thumbnail: US("1416879595882-3373a0480b5b"),
    rating: 4.5, reviews: 78, downloads: 3300,
    description: "Soil Science mid-term past papers for semesters 3–4, sourced from UAF students 2024.",
    highlights: ["Semester 3 & 4", "2021–2024 papers", "Verified source"],
    iconKey: "Leaf", featured: false, isNew: false,
  },
  {
    id: 11, title: "UAF Admission Form & Application Templates Pack",
    category: "Student Utilities", subject: "Admission Paperwork",
    degree: "All Programs", format: "DOCX", type: "free",
    driveUrl: "https://drive.google.com/",
    thumbnail: US("1450101499163-c8848c66ca85"),
    rating: 4.4, reviews: 56, downloads: 7800,
    description: "Complete set of UAF admission forms, NOC templates, scholarship applications and transfer letters.",
    highlights: ["Admission forms", "Scholarship templates", "NOC & bonafide formats", "Editable DOCX", "Hostel application forms"],
    iconKey: "FileText", featured: false, isNew: false,
  },
  {
    id: 12, title: "UAF Campus Guide 2025 — Hostel, Departments & Contacts",
    category: "Student Utilities", subject: "Campus Information",
    degree: "All Students", format: "PDF", type: "free",
    driveUrl: "https://drive.google.com/",
    thumbnail: US("1562774053-701939374585"),
    rating: 4.3, reviews: 42, downloads: 4100,
    description: "Comprehensive campus guide covering all departments, hostel blocks, mess timings, and contacts.",
    highlights: ["Department contacts", "Hostel block map", "Mess schedule", "Emergency numbers", "Library hours"],
    iconKey: "Layers", featured: false, isNew: true,
  },
  {
    id: 13, title: "Research Proposal Template — MPhil/PhD",
    category: "Student Utilities", subject: "Academic Writing",
    degree: "MPhil / PhD Candidates", format: "DOCX", type: "free",
    driveUrl: "https://drive.google.com/",
    thumbnail: US("1455390582262-044cdead277a"),
    rating: 4.6, reviews: 89, downloads: 3200,
    description: "Standard research proposal template following UAF graduate school formatting requirements.",
    highlights: ["UAF format compliant", "Literature review section", "Methodology outline", "Bibliography style guide"],
    iconKey: "FileDown", featured: false, isNew: false,
  },
];

const CATEGORIES: Category[] = [
  "Undergraduate Entry Test",
  "Postgraduate Entry Test",
  "Past Papers",
  "Student Utilities",
];

const fmt = (n: number) => n >= 1000 ? (n / 1000).toFixed(1) + "k" : String(n);
const serif: React.CSSProperties = { fontFamily: "'DM Serif Display', serif" };
const mono:  React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };

// ─── Page transition wrapper ──────────────────────────────────────────────────
function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = requestAnimationFrame(() => { requestAnimationFrame(() => setVisible(true)); });
    return () => cancelAnimationFrame(t);
  }, [location.pathname, location.search]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(6px)",
        transition: "opacity 0.22s ease, transform 0.22s ease",
      }}
    >
      {children}
    </div>
  );
}

// ─── Support Modal ────────────────────────────────────────────────────────────
const ISSUE_TYPES = [
  { value: "payment",    label: "Payment / Order Issue",   Icon: CreditCard,    color: "#B8820A" },
  { value: "delivery",   label: "Delivery Problem",        Icon: FileDown,      color: "#1E2F5A" },
  { value: "material",   label: "Material Request",        Icon: FileQuestion,  color: "#1E3D2F" },
  { value: "technical",  label: "Technical Problem",       Icon: Bug,           color: "#6B3500" },
  { value: "other",      label: "General Enquiry",         Icon: HelpCircle,    color: "#3D1E6B" },
];

function SupportModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<"type" | "form" | "done">("type");
  const [issueType, setIssueType] = useState("");
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", message: "" });
  const [errs, setErrs] = useState<Record<string, string>>({});
  const sf = (k: string, v: string) => { setForm(f => ({ ...f, [k]: v })); setErrs(e => ({ ...e, [k]: "" })); };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())              e.name = "Required";
    if (!form.email.trim())             e.email = "Required";
    if (!/^03\d{9}$/.test(form.whatsapp)) e.whatsapp = "Format: 03XXXXXXXXX";
    if (!form.message.trim())           e.message = "Please describe the issue";
    setErrs(e);
    return !Object.keys(e).length;
  };

  const selected = ISSUE_TYPES.find(t => t.value === issueType);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden border border-[#DDD8CE]">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#0C3220] to-[#1A3D2A] px-6 py-5 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20">
              <Headphones className="w-5 h-5 text-[#D4A017]" />
            </div>
            <div>
              <h2 className="text-white text-base font-normal" style={serif}>Student Support</h2>
              <p className="text-white/45 text-[10px] mt-0.5" style={mono}>UAF Digital Bank Help Desk</p>
            </div>
          </div>
          <button onClick={onClose} className="flex-shrink-0 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Step indicator */}
        {step !== "done" && (
          <div className="flex items-center px-6 py-3 border-b border-[#F0EDE6] gap-2">
            {[{ k: "type", l: "Issue Type" }, { k: "form", l: "Details" }].map(({ k, l }, i) => (
              <div key={k} className="flex items-center gap-2">
                {i > 0 && <div className={`w-8 h-px ${step === "form" ? "bg-[#1E3D2F]" : "bg-[#DDD8CE]"}`} />}
                <div className="flex items-center gap-1.5">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    (step === "type" && k === "type") || (step === "form" && (k === "type" || k === "form"))
                      ? "bg-[#1E3D2F] text-white"
                      : "bg-[#F0EDE6] text-[#6B6057]"}`}
                    style={mono}>{i + 1}</div>
                  <span className={`text-xs font-medium ${step === k ? "text-[#1E3D2F]" : "text-[#6B6057]"}`}>{l}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 1: Issue type selection */}
        {step === "type" && (
          <div className="p-5">
            <p className="text-sm text-[#6B6057] mb-4">What can we help you with?</p>
            <div className="space-y-2">
              {ISSUE_TYPES.map(({ value, label, Icon, color }) => (
                <button key={value} onClick={() => setIssueType(value)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all ${
                    issueType === value
                      ? "border-[#1E3D2F] bg-[#E6EFE9]"
                      : "border-[#DDD8CE] bg-white hover:border-[#1E3D2F]/40 hover:bg-[#F7F5F0]"
                  }`}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: color + "18" }}>
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                  <span className="text-sm font-medium text-[#1A2520]">{label}</span>
                  {issueType === value && <CheckCircle className="w-4 h-4 text-[#1E3D2F] ml-auto flex-shrink-0" />}
                </button>
              ))}
            </div>
            <button onClick={() => { if (issueType) setStep("form"); }}
              disabled={!issueType}
              className="mt-4 w-full bg-[#0C3220] hover:bg-[#0a2819] disabled:opacity-35 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 2: Form */}
        {step === "form" && (
          <div className="p-5">
            {selected && (
              <div className="flex items-center gap-2 bg-[#F7F5F0] border border-[#DDD8CE] rounded-xl px-3.5 py-2.5 mb-4">
                <selected.Icon className="w-4 h-4 flex-shrink-0" style={{ color: selected.color }} />
                <span className="text-sm font-medium text-[#1A2520]">{selected.label}</span>
                <button onClick={() => setStep("type")} className="ml-auto text-xs text-[#6B6057] underline">Change</button>
              </div>
            )}
            <div className="space-y-3">
              {[
                { k: "name",     l: "Your Name",        p: "Muhammad Ali",       t: "text"  },
                { k: "email",    l: "Email Address",     p: "yourname@gmail.com", t: "email" },
                { k: "whatsapp", l: "WhatsApp Number",   p: "03001234567",        t: "tel"   },
              ].map(({ k, l, p, t }) => (
                <div key={k}>
                  <label className="block text-xs font-semibold text-[#1A2520] mb-1.5">{l} <span className="text-red-400">*</span></label>
                  <input type={t} placeholder={p} value={(form as any)[k]} onChange={e => sf(k, e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errs[k] ? "border-red-300 bg-red-50 focus:ring-red-200" : "border-[#DDD8CE] focus:border-[#1E3D2F] focus:ring-[#1E3D2F]/10"}`} />
                  {errs[k] && <p className="text-xs text-red-400 mt-1">{errs[k]}</p>}
                </div>
              ))}
              <div>
                <label className="block text-xs font-semibold text-[#1A2520] mb-1.5">Describe your issue <span className="text-red-400">*</span></label>
                <textarea rows={3} placeholder="Please describe your issue in detail…"
                  value={form.message} onChange={e => sf("message", e.target.value)}
                  className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 resize-none transition-all ${
                    errs.message ? "border-red-300 bg-red-50" : "border-[#DDD8CE] focus:border-[#1E3D2F] focus:ring-[#1E3D2F]/10"}`} />
                {errs.message && <p className="text-xs text-red-400 mt-1">{errs.message}</p>}
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-3.5 py-2.5 mt-3 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
              <p className="text-xs text-amber-800">Our team responds within <strong>1–3 hours</strong> via WhatsApp.</p>
            </div>
            <div className="flex gap-2 mt-4">
              <button onClick={() => setStep("type")} className="px-4 py-2.5 border border-[#DDD8CE] rounded-xl text-sm text-[#6B6057] hover:bg-[#F7F5F0]">← Back</button>
              <button onClick={() => { if (validate()) setStep("done"); }}
                className="flex-1 bg-[#0C3220] hover:bg-[#0a2819] text-white font-semibold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
                <Send className="w-4 h-4" /> Submit Request
              </button>
            </div>
          </div>
        )}

        {/* Done */}
        {step === "done" && (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-[#E6EFE9] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-[#1E3D2F]" />
            </div>
            <h3 className="text-xl font-normal text-[#1A2520] mb-2" style={serif}>Request Submitted</h3>
            <p className="text-sm text-[#6B6057] mb-1">Thanks, <strong>{form.name}</strong>!</p>
            <p className="text-sm text-[#6B6057] mb-5">{"We'll contact you on WhatsApp within 1–3 hours."}</p>
            <div className="flex gap-2">
              <a href={`https://wa.me/923001234567?text=Hi%2C+I+submitted+a+${encodeURIComponent(selected?.label || "support")}+request`}
                target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl text-sm hover:bg-[#1da851] transition-colors">
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
              <button onClick={onClose} className="flex-1 border border-[#DDD8CE] py-3 rounded-xl text-sm text-[#6B6057] hover:bg-[#F7F5F0]">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Stars({ r, sm }: { r: number; sm?: boolean }) {
  const sz = sm ? "w-3 h-3" : "w-4 h-4";
  return (
    <span className="inline-flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} className={`${sz} ${i <= Math.round(r) ? "fill-[#B8820A] text-[#B8820A]" : "text-[#DDD8CE]"}`} />
      ))}
    </span>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <ImageWithFallback src={image_cropped_circle_image__4__4} alt="UAF" className="w-5 h-5 object-contain opacity-50 flex-shrink-0" />
      <h2 className="text-xl font-normal text-[#1A2520] flex-shrink-0 whitespace-nowrap" style={serif}>{title}</h2>
      <div className="flex-1 h-px bg-[#DDD8CE]" />
    </div>
  );
}

function FallbackCover({ res }: { res: Resource }) {
  const cfg = CAT_CONFIG[res.category];
  const Ic  = ICON_MAP[res.iconKey] || FileText;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 select-none"
      style={{ backgroundColor: cfg.bg }}>
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
        style={{ backgroundColor: cfg.color + "18" }}>
        <Ic className="w-6 h-6" style={{ color: cfg.color }} />
      </div>
      <div className="text-center">
        <div className="text-[9px] font-bold uppercase tracking-[0.22em]" style={{ ...mono, color: cfg.color + "88" }}>{cfg.short}</div>
        <div className="text-[10px] font-bold uppercase tracking-widest mt-0.5" style={{ ...mono, color: cfg.color + "66" }}>{res.format}</div>
      </div>
    </div>
  );
}

// ─── Access Modal ─────────────────────────────────────────────────────────────
function AccessModal({ res, onClose }: { res: Resource; onClose: () => void }) {
  const [step, setStep] = useState<"info" | "pay" | "done">("info");
  const [form, setForm] = useState({ name: "", email: "", wa: "", method: "JazzCash" });
  const [errs, setErrs] = useState<Record<string, string>>({});
  const sf = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!/^[^\s@]+@gmail\.com$/.test(form.email)) e.email = "Valid Gmail required";
    if (!/^03\d{9}$/.test(form.wa)) e.wa = "Format: 03XXXXXXXXX";
    setErrs(e); return !Object.keys(e).length;
  };

  const PAY: Record<string, string> = { JazzCash: "0300-1234567", EasyPaisa: "0333-7654321", Bank: "MCB 1234-5678901" };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-[#DDD8CE] overflow-hidden">
        <div className="bg-[#0C3220] px-6 py-5 flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="text-[10px] text-[#D4A017] uppercase tracking-widest mb-1 font-semibold" style={mono}>Premium · {res.format}</div>
            <h3 className="text-white text-base font-normal leading-snug line-clamp-2" style={serif}>{res.title}</h3>
          </div>
          <button onClick={onClose} className="flex-shrink-0 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {step === "info" && (
          <div className="p-6">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-normal text-[#1A2520]" style={serif}>Rs. {res.price?.toLocaleString()}</span>
              <span className="text-sm text-[#6B6057]">one-time</span>
            </div>
            {res.highlights && (
              <div className="space-y-2 mb-4">
                {res.highlights.slice(0, 5).map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-[#1A2520]">
                    <CheckCircle className="w-4 h-4 text-[#1E3D2F] flex-shrink-0 mt-0.5" />{h}
                  </div>
                ))}
              </div>
            )}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 mb-5 flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800">Delivered to Gmail within <strong>10–15 minutes</strong> after payment.</p>
            </div>
            <button onClick={() => setStep("pay")}
              className="w-full bg-[#0C3220] hover:bg-[#0a2819] text-white font-semibold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
              Proceed to Payment <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {step === "pay" && (
          <div className="p-6">
            <div className="space-y-3 mb-5">
              {[
                { k: "name",  l: "Full Name",      p: "Muhammad Ali Khan",  t: "text"  },
                { k: "email", l: "Gmail Address",   p: "yourname@gmail.com", t: "email" },
                { k: "wa",    l: "WhatsApp Number", p: "03001234567",        t: "tel"   },
              ].map(({ k, l, p, t }) => (
                <div key={k}>
                  <label className="block text-xs font-semibold text-[#1A2520] mb-1.5">{l} <span className="text-red-400">*</span></label>
                  <input type={t} placeholder={p} value={(form as any)[k]} onChange={e => sf(k, e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all ${errs[k] ? "border-red-300 bg-red-50" : "border-[#DDD8CE] focus:border-[#1E3D2F] focus:ring-[#1E3D2F]/10"}`} />
                  {errs[k] && <p className="text-xs text-red-400 mt-1">{errs[k]}</p>}
                </div>
              ))}
              <div>
                <label className="block text-xs font-semibold text-[#1A2520] mb-2">Payment Method</label>
                <div className="grid grid-cols-3 gap-2 mb-2.5">
                  {["JazzCash", "EasyPaisa", "Bank"].map(m => (
                    <button key={m} onClick={() => sf("method", m)}
                      className={`border rounded-xl py-2.5 text-xs font-semibold transition-all ${form.method === m ? "border-[#1E3D2F] bg-[#E6EFE9] text-[#1E3D2F]" : "border-[#DDD8CE] text-[#6B6057]"}`}>
                      {m}
                    </button>
                  ))}
                </div>
                <div className="bg-[#F7F5F0] border border-[#DDD8CE] rounded-xl px-4 py-3 text-xs text-[#6B6057]">
                  Send <strong className="text-[#1A2520]">Rs. {res.price?.toLocaleString()}</strong> to <span style={mono} className="text-[#1A2520]">{PAY[form.method]}</span>
                  <div className="mt-1">Ref: <span style={mono}>UAF-{res.id}</span></div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setStep("info")} className="px-4 py-2.5 border border-[#DDD8CE] rounded-xl text-sm text-[#6B6057] hover:bg-[#F7F5F0]">← Back</button>
              <button onClick={() => { if (validate()) setStep("done"); }}
                className="flex-1 bg-[#0C3220] hover:bg-[#0a2819] text-white font-semibold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
                <CheckCircle className="w-4 h-4" /> Confirm Order
              </button>
            </div>
          </div>
        )}

        {step === "done" && (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-[#E6EFE9] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-[#1E3D2F]" />
            </div>
            <h3 className="text-xl font-normal text-[#1A2520] mb-2" style={serif}>Order Confirmed</h3>
            <p className="text-sm text-[#6B6057] mb-4">Sent to <strong>{form.email}</strong> within 10–15 min.</p>
            <div className="bg-[#F7F5F0] border border-[#DDD8CE] rounded-xl p-3 font-mono text-sm text-[#6B6057] mb-6">
              Ref: UAF-{res.id}-{Date.now().toString().slice(-6)}
            </div>
            <div className="flex gap-2">
              <a href={`https://wa.me/923001234567?text=Order+UAF-${res.id}`} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl text-sm hover:bg-[#1da851] transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <button onClick={onClose} className="flex-1 border border-[#DDD8CE] py-3 rounded-xl text-sm text-[#6B6057] hover:bg-[#F7F5F0]">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Resource Card ────────────────────────────────────────────────────────────
function ResourceCard({ res, onAccess }: { res: Resource; onAccess: (r: Resource) => void }) {
  const cfg = CAT_CONFIG[res.category];
  return (
    <article className="bg-white border border-[#DDD8CE] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#B8820A]/50 transition-all duration-200 flex flex-col group">
      <Link to={`/resource/${res.id}`} className="block">
        <div className="relative h-40 flex-shrink-0 overflow-hidden bg-[#EAE7DF]">
          {res.thumbnail
            ? <ImageWithFallback src={res.thumbnail} alt={res.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            : <FallbackCover res={res} />
          }
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3">
            {res.type === "free"
              ? <span className="text-[11px] font-bold bg-[#1E3D2F] text-white px-2.5 py-1 rounded-full" style={mono}>FREE</span>
              : <span className="text-[11px] font-bold bg-[#B8820A] text-white px-2.5 py-1 rounded-full" style={mono}>PREMIUM</span>
            }
          </div>
          <div className="absolute bottom-3 right-3">
            <span className="text-[10px] font-bold bg-black/60 text-white px-2 py-0.5 rounded-full" style={mono}>{res.format}</span>
          </div>
          {res.isNew && <div className="absolute top-3 right-3"><span className="text-[10px] font-bold bg-rose-500 text-white px-2 py-0.5 rounded-full">NEW</span></div>}
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: cfg.color }} />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B6057]" style={mono}>{cfg.short}</span>
        </div>
        <Link to={`/resource/${res.id}`}>
          <h3 className="font-semibold text-[#1A2520] text-[14px] leading-snug line-clamp-2 hover:text-[#1E3D2F] transition-colors" style={serif}>{res.title}</h3>
        </Link>
        <div className="text-xs text-[#6B6057] flex items-center gap-1.5">
          <GraduationCap className="w-3 h-3 flex-shrink-0" />
          <span className="truncate">{res.degree}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Stars r={res.rating} sm />
          <span className="text-xs font-medium text-[#6B6057]">{res.rating}</span>
          <span className="text-xs text-[#6B6057]/50">({res.reviews})</span>
          <span className="ml-auto text-xs text-[#6B6057] flex items-center gap-1" style={mono}>
            <Download className="w-3 h-3" />{fmt(res.downloads)}
          </span>
        </div>
        <div className="mt-auto pt-3 border-t border-[#F0EDE6]">
          {res.type === "free" ? (
            <a href={res.driveUrl || "#"} target="_blank" rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 bg-[#1E3D2F] hover:bg-[#152d22] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors">
              <FileDown className="w-4 h-4" /> Download Free
            </a>
          ) : (
            <div className="space-y-1.5">
              <div className="text-center text-base font-semibold text-[#1A2520]" style={serif}>Rs. {res.price?.toLocaleString()}</div>
              <button onClick={() => onAccess(res)}
                className="flex w-full items-center justify-center gap-2 bg-[#B8820A] hover:bg-[#9a6d08] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors">
                Get Access <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
function TopNav() {
  const [mob, setMob]         = useState(false);
  const [support, setSupport] = useState(false);
  const location              = useLocation();

  useEffect(() => { setMob(false); }, [location.pathname, location.search]);

  const NAV = [
    { label: "Home",        to: "/"                            },
    { label: "Entry Tests", to: "/?c=Undergraduate+Entry+Test" },
    { label: "Postgrad",    to: "/?c=Postgraduate+Entry+Test"  },
    { label: "Past Papers", to: "/?c=Past+Papers"              },
    { label: "Utilities",   to: "/?c=Student+Utilities"        },
    { label: "Submit",      to: "/upload"                      },
  ];

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/" && !location.search;
    return location.pathname + location.search === to || location.search === to.slice(1);
  };

  return (
    <>
      <header className="bg-[#0C3220] sticky top-0 z-40 shadow-lg">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#D4A017] to-transparent" />
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
              <div className="relative w-8 h-8 flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden group-hover:bg-white/15 transition-colors">
                  <ImageWithFallback src={image_cropped_circle_image__4__8} alt="UAF" className="w-full h-full object-contain p-0.5" />
                </div>
              </div>
              <div className="hidden sm:block leading-tight">
                <div className="text-white text-[13px] font-semibold tracking-[-0.01em]" style={serif}>UAF Digital Bank</div>
                <div className="text-white/30 text-[8px] uppercase tracking-[0.3em]" style={mono}>Academic Repository</div>
              </div>
            </Link>

            <div className="hidden lg:block w-px h-4 bg-white/15 mx-1" />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5 flex-1 overflow-hidden">
              {NAV.map(({ label, to }) => (
                <Link key={label} to={to}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    isActive(to)
                      ? "bg-white/15 text-white"
                      : "text-white/55 hover:text-white hover:bg-white/8"
                  }`}>
                  {label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="ml-auto flex items-center gap-1.5">
              {/* Support button */}
              <button onClick={() => setSupport(true)}
                className="flex items-center gap-1.5 bg-white/8 hover:bg-white/15 border border-white/15 hover:border-white/25 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all">
                <HelpCircle className="w-3.5 h-3.5 text-[#D4A017]" />
                <span className="hidden sm:inline">Support</span>
              </button>

              {/* Admin icon */}
              <Link to="/admin" className="p-1.5 text-white/30 hover:text-white/60 hover:bg-white/8 rounded-lg transition-colors hidden sm:flex">
                <Key className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile menu */}
              <button onClick={() => setMob(!mob)}
                className="lg:hidden p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                {mob ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu panel */}
          {mob && (
            <div className="lg:hidden border-t border-white/8 py-2 pb-3">
              <div className="grid grid-cols-2 gap-0.5 mb-2">
                {NAV.map(({ label, to }) => (
                  <Link key={label} to={to} onClick={() => setMob(false)}
                    className={`flex items-center px-3 py-2.5 text-sm rounded-lg transition-colors ${
                      isActive(to) ? "bg-white/15 text-white font-semibold" : "text-white/65 hover:text-white hover:bg-white/10"}`}>
                    {label}
                  </Link>
                ))}
              </div>
              <div className="flex gap-2 px-1 pt-2 border-t border-white/8">
                <button onClick={() => { setMob(false); setSupport(true); }}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#D4A017]/15 border border-[#D4A017]/30 text-[#D4A017] text-xs font-semibold py-2.5 rounded-lg">
                  <HelpCircle className="w-4 h-4" /> Get Support
                </button>
                <Link to="/admin" onClick={() => setMob(false)}
                  className="flex items-center justify-center gap-2 border border-white/15 text-white/40 text-xs px-3 py-2.5 rounded-lg">
                  <Key className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
      {support && <SupportModal onClose={() => setSupport(false)} />}
    </>
  );
}

// ─── Hero — compact with campus photo background ──────────────────────────────
function HeroSection() {
  const [q, setQ] = useState("");
  const nav = useNavigate();
  const [sp] = useSearchParams();

  useEffect(() => {
    const s = sp.get("s") || "";
    setQ(s);
  }, [sp]);

  const TAGS = [
    { label: "Pre-Medical",     to: "/?c=Undergraduate+Entry+Test" },
    { label: "Pre-Engineering", to: "/?c=Undergraduate+Entry+Test" },
    { label: "GAT / MPhil",     to: "/?c=Postgraduate+Entry+Test"  },
    { label: "Past Papers",     to: "/?c=Past+Papers"              },
    { label: "Free Only",       to: "/?f=free"                     },
  ];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (q.trim()) nav(`/?s=${encodeURIComponent(q.trim())}`);
    else nav("/");
  };

  return (
    <section className="relative overflow-hidden">
      <ImageWithFallback src={campusPhoto} alt="UAF Campus Building"
        className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#081A0E]/80 via-[#0C3220]/68 to-[#0C3220]/90" />

      <div className="relative max-w-3xl mx-auto px-4 pt-9 pb-11 md:pt-11 md:pb-14 text-center bg-[#0000000a] bg-[#00000000]">
        {/* Identity strip */}
        <div className="inline-flex items-center gap-2.5 bg-white/8 border border-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6 bg-[#ffffff17] bg-[#ffffff24]">
          <ImageWithFallback src={image_cropped_circle_image__8__1} alt="UAF" className="w-8 h-8 object-contain flex-shrink-0 opacity-70" />
          <span className="text-white/65 text-[11px] uppercase tracking-[0.2em]" style={mono}>University of Agriculture, Faisalabad</span>
          <ImageWithFallback src={image_cropped_circle_image__4__5} alt="" className="w-8 h-8 object-contain flex-shrink-0 opacity-70" />
        </div>

        <h1 className="text-white text-[2.1rem] md:text-[2.8rem] font-normal mb-2.5 leading-[1.1] tracking-[-0.02em]" style={serif}>
          Your Academic<br className="hidden sm:block" /> Resource Hub
        </h1>
        <p className="text-white/45 text-sm md:text-[15px] mb-7 max-w-sm mx-auto leading-relaxed">
          Free past papers, entry test packs &amp; study guides for every UAF program.
        </p>

        {/* Search bar */}
        <form onSubmit={submit}
          className="relative flex rounded-xl overflow-hidden shadow-2xl max-w-lg mx-auto mb-5 border border-white/20 bg-white/8 backdrop-blur-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/35 pointer-events-none" />
          <input type="text" value={q} onChange={e => setQ(e.target.value)}
            placeholder="Search notes, past papers, entry test packs…"
            className="flex-1 pl-10 pr-4 py-3.5 text-sm text-white placeholder-white/35 focus:outline-none bg-transparent min-w-0" />
          <button type="submit"
            className="bg-[#D4A017] hover:bg-[#bb8d11] text-[#0C3220] px-5 flex items-center gap-1.5 text-sm font-bold transition-colors flex-shrink-0 border-l border-white/10">
            Search
          </button>
        </form>

        {/* Quick-filter pills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {TAGS.map(({ label, to }) => (
            <Link key={label} to={to}
              className="text-[11px] px-3.5 py-1.5 rounded-full border border-white/18 bg-white/6 text-white/60 hover:bg-[#D4A017]/18 hover:border-[#D4A017]/45 hover:text-[#D4A017] transition-all backdrop-blur-sm"
              style={mono}>
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#F7F5F0] to-transparent" />
    </section>
  );
}

// ─── Hub Cards ────────────────────────────────────────────────────────────────
function HubCards({ resources }: { resources: Resource[] }) {
  const [sp] = useSearchParams();
  const activeCat = sp.get("c") || "";

  const HUBS: { cat: Category; desc: string; img: string }[] = [
    { cat: "Undergraduate Entry Test",
      desc: "Pre-Medical, Pre-Engineering & ICS MCQ packs.",
      img: US("1434030216411-0b793f4b4173", 600, 400) },
    { cat: "Postgraduate Entry Test",
      desc: "GAT General/Subject, MScAgri, MPhil & PhD bundles.",
      img: US("1574943320219-553eb213f72d", 600, 400) },
    { cat: "Past Papers",
      desc: "Mid-term and final-term papers — 2018 to 2026.",
      img: US("1456513080510-7bf3a84b82f8", 600, 400) },
    { cat: "Student Utilities",
      desc: "Admission forms, NOC templates, campus guides.",
      img: US("1562774053-701939374585", 600, 400) },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 pt-8 pb-6">
      <SectionHeader title="Browse Collections" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {HUBS.map(({ cat, desc, img }) => {
          const cfg   = CAT_CONFIG[cat];
          const Ic    = cfg.Icon;
          const count = resources.filter(r => r.category === cat).length;
          const active = activeCat === cat;
          return (
            <Link key={cat} to={`/?c=${encodeURIComponent(cat)}`}
              className={`group rounded-xl overflow-hidden border transition-all flex flex-col ${
                active
                  ? "border-[#B8820A] shadow-md ring-2 ring-[#B8820A]/20"
                  : "border-[#DDD8CE] hover:shadow-md hover:border-[#B8820A]/40"
              }`}>
              <div className="relative h-28 overflow-hidden flex-shrink-0" style={{ backgroundColor: cfg.bg }}>
                <ImageWithFallback src={img} alt={cat}
                  className="w-full h-full object-cover opacity-80 transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: cfg.color }}>
                    <Ic className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-white text-[9px] font-bold uppercase tracking-wider" style={mono}>{cfg.num}</span>
                </div>
                {active && (
                  <div className="absolute top-2 right-2">
                    <div className="w-5 h-5 rounded-full bg-[#B8820A] flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  </div>
                )}
              </div>
              <div className="bg-white flex-1 p-3 flex flex-col gap-1">
                <h3 className="font-semibold text-[#1A2520] text-xs leading-snug group-hover:text-[#1E3D2F] transition-colors" style={serif}>{cat}</h3>
                <p className="text-[11px] text-[#6B6057] leading-snug flex-1 line-clamp-2">{desc}</p>
                <div className="flex items-center justify-between pt-1.5 border-t border-[#F0EDE6] mt-1">
                  <span className="text-[10px] text-[#6B6057]" style={mono}>{count} items</span>
                  <ChevronRight className={`w-3 h-3 transition-colors ${active ? "text-[#B8820A]" : "text-[#1E3D2F]"}`} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// ─── Resource Grid ────────────────────────────────────────────────────────────
function ResourceGrid({ resources, onAccess }: { resources: Resource[]; onAccess: (r: Resource) => void }) {
  const [sp]   = useSearchParams();
  const [sort, setSort] = useState("featured");
  const s   = sp.get("s") || "";
  const cat = sp.get("c") || "";
  const f   = sp.get("f") || "";

  const list = resources.filter(r => {
    if (s && !r.title.toLowerCase().includes(s.toLowerCase()) && !r.subject.toLowerCase().includes(s.toLowerCase())) return false;
    if (cat && r.category !== cat) return false;
    if (f === "free" && r.type !== "free") return false;
    if (f === "paid" && r.type !== "paid") return false;
    return true;
  }).sort((a, b) => {
    if (sort === "downloads") return b.downloads - a.downloads;
    if (sort === "rating")    return b.rating - a.rating;
    if (sort === "price-lo")  return (a.price || 0) - (b.price || 0);
    if (sort === "price-hi")  return (b.price || 0) - (a.price || 0);
    if (sort === "newest")    return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  const cfg = cat ? CAT_CONFIG[cat as Category] : null;

  return (
    <div className="max-w-6xl mx-auto px-4 pb-14">
      {/* Category header when filtered */}
      {cfg && (
        <div className="flex items-center gap-3 mb-5 pb-5 border-b border-[#DDD8CE]">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: cfg.color }}>
            <cfg.Icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-normal text-[#1A2520]" style={serif}>{cat}</h2>
            <p className="text-xs text-[#6B6057]" style={mono}>{list.length} resources found</p>
          </div>
          <Link to="/" className="ml-auto text-xs text-[#6B6057] hover:text-[#1E3D2F] flex items-center gap-1 transition-colors">
            <X className="w-3 h-3" /> Clear filter
          </Link>
        </div>
      )}

      {!cfg && (
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
          <div className="flex items-baseline gap-2">
            <h2 className="text-lg font-normal text-[#1A2520]" style={serif}>
              {s ? `Results for "${s}"` : f === "free" ? "Free Resources" : f === "paid" ? "Premium Packs" : "All Resources"}
            </h2>
            <span className="text-sm text-[#6B6057]" style={mono}>{list.length}</span>
          </div>
          {s && (
            <Link to="/" className="text-xs text-[#6B6057] hover:text-[#1E3D2F] flex items-center gap-1 sm:ml-auto transition-colors">
              <X className="w-3 h-3" /> Clear search
            </Link>
          )}
        </div>
      )}

      {/* Filter + sort row */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <div className="flex flex-wrap gap-1.5 flex-1">
          {[
            { l: "All", to: "/" }, { l: "Free", to: "/?f=free" }, { l: "Premium", to: "/?f=paid" },
            ...CATEGORIES.map(c => ({ l: CAT_CONFIG[c].short, to: `/?c=${encodeURIComponent(c)}` })),
          ].map(({ l, to }) => {
            const active =
              (l === "All"     && !s && !cat && !f) ||
              (l === "Free"    && f === "free")      ||
              (l === "Premium" && f === "paid")      ||
              CATEGORIES.some(c => CAT_CONFIG[c].short === l && c === cat);
            return (
              <Link key={l} to={to}
                className={`text-xs px-3.5 py-1.5 rounded-full border font-medium transition-all ${active
                  ? "bg-[#1E3D2F] text-white border-[#1E3D2F]"
                  : "bg-white text-[#6B6057] border-[#DDD8CE] hover:border-[#1E3D2F]/50 hover:text-[#1E3D2F]"}`}>
                {l}
              </Link>
            );
          })}
        </div>
        <select value={sort} onChange={e => setSort(e.target.value)}
          className="border border-[#DDD8CE] rounded-lg px-3 py-1.5 text-xs bg-white text-[#1A2520] focus:outline-none cursor-pointer ml-auto">
          <option value="featured">Featured</option>
          <option value="downloads">Most Downloaded</option>
          <option value="rating">Top Rated</option>
          <option value="newest">Newest</option>
          <option value="price-lo">Price ↑</option>
          <option value="price-hi">Price ↓</option>
        </select>
      </div>

      {list.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-[#DDD8CE]">
          <Search className="w-10 h-10 mx-auto text-[#DDD8CE] mb-4" />
          <p className="text-[#6B6057] font-medium text-lg" style={serif}>No resources found</p>
          <p className="text-sm text-[#6B6057]/60 mt-2">Try different keywords or browse a category</p>
          <Link to="/" className="inline-block mt-4 text-sm text-[#1E3D2F] underline underline-offset-2">View all</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {list.map(r => <ResourceCard key={r.id} res={r} onAccess={onAccess} />)}
        </div>
      )}
    </div>
  );
}

// ─── Store Page ───────────────────────────────────────────────────────────────
function StorePage({ resources }: { resources: Resource[] }) {
  const [modal, setModal] = useState<Resource | null>(null);
  const [sp] = useSearchParams();
  const isFiltered = !!(sp.get("s") || sp.get("c") || sp.get("f"));

  return (
    <>
      <HeroSection />
      <div className="bg-[#F7F5F0]">
        {!isFiltered && <div className="border-b border-[#DDD8CE]"><HubCards resources={resources} /></div>}
        {isFiltered && (
          <div className="max-w-6xl mx-auto px-4">
            <HubCards resources={resources} />
          </div>
        )}
        <div className="pt-4">
          {!isFiltered && <div className="max-w-6xl mx-auto px-4 pb-2"><SectionHeader title="All Resources" /></div>}
          <ResourceGrid resources={resources} onAccess={setModal} />
        </div>
      </div>
      {modal && <AccessModal res={modal} onClose={() => setModal(null)} />}
    </>
  );
}

// ─── Resource Detail Page ─────────────────────────────────────────────────────
function ResourceDetailPage({ resources }: { resources: Resource[] }) {
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const res = resources.find(r => r.id === Number(id));

  if (!res) return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#F7F5F0]">
      <div className="text-center">
        <p className="text-[#6B6057] text-lg mb-4" style={serif}>Resource not found</p>
        <Link to="/" className="text-[#1E3D2F] underline">← Back to store</Link>
      </div>
    </div>
  );

  const cfg = CAT_CONFIG[res.category];
  const Ic  = ICON_MAP[res.iconKey] || FileText;
  const related = resources.filter(r => r.category === res.category && r.id !== res.id).slice(0, 4);

  return (
    <div className="bg-[#F7F5F0] min-h-screen">
      <div className="relative h-52 md:h-64 overflow-hidden bg-[#EAE7DF]">
        {res.thumbnail
          ? <ImageWithFallback src={res.thumbnail} alt={res.title} className="w-full h-full object-cover" />
          : <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: cfg.bg }}><Ic className="w-20 h-20 opacity-15" style={{ color: cfg.color }} /></div>
        }
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C3220]/80 via-[#0C3220]/25 to-transparent" />
        <div className="absolute top-4 left-4">
          <Link to="/" className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-medium px-3 py-2 rounded-xl hover:bg-white/25 transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" /> Back
          </Link>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          {res.type === "free"
            ? <span className="text-xs font-bold bg-[#1E3D2F] text-white px-3 py-1 rounded-full" style={mono}>FREE</span>
            : <span className="text-xs font-bold bg-[#B8820A] text-white px-3 py-1 rounded-full" style={mono}>PREMIUM</span>
          }
          <span className="text-xs font-bold bg-black/50 text-white px-2.5 py-1 rounded-full" style={mono}>{res.format}</span>
          {res.isNew && <span className="text-xs font-bold bg-rose-500 text-white px-2.5 py-1 rounded-full">NEW</span>}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-7">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded flex items-center justify-center" style={{ backgroundColor: cfg.color }}>
                <Ic className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ ...mono, color: cfg.color }}>{res.category}</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-normal text-[#1A2520] leading-snug" style={serif}>{res.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B6057] pb-4 border-b border-[#DDD8CE]">
              <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4" />{res.degree}</span>
              <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" />{res.subject}</span>
              <span className="flex items-center gap-1.5">
                <Stars r={res.rating} sm />
                <strong className="text-[#1A2520]">{res.rating}</strong>
                <span className="text-[#6B6057]/60">({res.reviews})</span>
              </span>
              <span className="flex items-center gap-1" style={mono}><Download className="w-4 h-4" />{fmt(res.downloads)} downloads</span>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#1A2520] mb-2" style={serif}>About This Resource</h2>
              <p className="text-sm text-[#6B6057] leading-relaxed">{res.description}</p>
            </div>

            {res.highlights && res.highlights.length > 0 && (
              <div>
                <h2 className="text-base font-semibold text-[#1A2520] mb-3" style={serif}>{"What's Included"}</h2>
                <div className="grid sm:grid-cols-2 gap-2">
                  {res.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-white border border-[#DDD8CE] rounded-xl px-3.5 py-3 text-sm text-[#1A2520]">
                      <CheckCircle className="w-4 h-4 text-[#1E3D2F] flex-shrink-0 mt-0.5" />{h}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {related.length > 0 && (
              <div className="pt-4 border-t border-[#DDD8CE]">
                <h2 className="text-base font-semibold text-[#1A2520] mb-4" style={serif}>Related Resources</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {related.map(r => {
                    const rc = CAT_CONFIG[r.category];
                    return (
                      <Link key={r.id} to={`/resource/${r.id}`}
                        className="flex items-center gap-3 bg-white border border-[#DDD8CE] rounded-xl p-3 hover:border-[#B8820A]/40 hover:shadow-sm transition-all group">
                        <div className="w-12 h-12 rounded-lg flex-shrink-0 overflow-hidden" style={{ backgroundColor: rc.bg }}>
                          {r.thumbnail
                            ? <ImageWithFallback src={r.thumbnail} alt="" className="w-full h-full object-cover" />
                            : <rc.Icon className="w-6 h-6 m-auto" style={{ color: rc.color }} />
                          }
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-[#1A2520] line-clamp-2 group-hover:text-[#1E3D2F] transition-colors" style={serif}>{r.title}</div>
                          <div className="text-xs text-[#6B6057] mt-0.5">{r.type === "free" ? "Free" : `Rs. ${r.price?.toLocaleString()}`} · {r.format}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#DDD8CE] flex-shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Sticky purchase sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-[#DDD8CE] rounded-2xl overflow-hidden sticky top-20 shadow-sm">
              <div className="bg-[#0C3220] px-5 py-4">
                <div className="text-[10px] text-[#D4A017] uppercase tracking-widest mb-1" style={mono}>{cfg.short}</div>
                <div className="text-2xl font-normal text-white" style={serif}>
                  {res.type === "free" ? "Free Download" : `Rs. ${res.price?.toLocaleString()}`}
                </div>
              </div>
              <div className="p-5 space-y-3">
                {res.type === "free" ? (
                  <a href={res.driveUrl || "#"} target="_blank" rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 bg-[#1E3D2F] hover:bg-[#152d22] text-white font-semibold py-3.5 rounded-xl transition-colors">
                    <FileDown className="w-4 h-4" /> Download Now
                  </a>
                ) : (
                  <button onClick={() => setModal(true)}
                    className="flex w-full items-center justify-center gap-2 bg-[#B8820A] hover:bg-[#9a6d08] text-white font-semibold py-3.5 rounded-xl transition-colors">
                    Get Access <ArrowRight className="w-4 h-4" />
                  </button>
                )}
                <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold py-3 rounded-xl text-sm transition-colors">
                  <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
                </a>
                <div className="pt-2 border-t border-[#F0EDE6] space-y-2.5 text-sm text-[#6B6057]">
                  {[
                    { l: "Format",   v: res.format },
                    { l: "Program",  v: res.degree },
                    { l: "Delivery", v: res.type === "free" ? "Instant (Google Drive)" : "Gmail within 15 min" },
                  ].map(({ l, v }) => (
                    <div key={l} className="flex items-start justify-between gap-2">
                      <span className="text-[#6B6057]/70">{l}</span>
                      <span className="text-[#1A2520] font-medium text-right text-xs">{v}</span>
                    </div>
                  ))}
                </div>
                {res.type === "paid" && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 flex gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0 text-amber-600 mt-0.5" />
                    <span>Sent to Gmail within <strong>10–15 minutes</strong> after payment.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {modal && <AccessModal res={res} onClose={() => setModal(false)} />}
    </div>
  );
}

// ─── Contact Page ─────────────────────────────────────────────────────────────
function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const sf = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div className="bg-[#F7F5F0] min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-[#6B6057] mb-6">
          <Link to="/" className="hover:text-[#1E3D2F] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1E3D2F] font-semibold">Contact Us</span>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-[#DDD8CE] shadow-sm">
              <div className="h-36 overflow-hidden">
                <ImageWithFallback src={campusPhoto} alt="UAF Campus" className="w-full h-full object-cover" />
              </div>
              <div className="bg-[#0C3220] px-4 py-3 flex items-center gap-2.5">
                <ImageWithFallback src={uafLogo} alt="UAF" className="w-8 h-8 object-contain flex-shrink-0" />
                <div>
                  <div className="text-white text-sm font-normal" style={serif}>UAF Digital Bank</div>
                  <div className="text-white/40 text-[9px] uppercase tracking-wider" style={mono}>Faisalabad, Pakistan</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#DDD8CE] rounded-2xl p-5 space-y-4">
              <h3 className="font-normal text-[#1A2520] text-base" style={serif}>Get in Touch</h3>
              {[
                { Icon: MessageCircle, l: "WhatsApp", v: "+92 300 1234567", href: "https://wa.me/923001234567", c: "#25D366" },
                { Icon: Mail,          l: "Email",    v: "uafdigitalbank@gmail.com", href: "mailto:uafdigitalbank@gmail.com", c: "#1E3D2F" },
                { Icon: Phone,         l: "Phone",    v: "041-9200161", href: "tel:0419200161", c: "#1E2F5A" },
                { Icon: MapPin,        l: "Location", v: "University of Agriculture, Faisalabad", href: "#", c: "#6B3500" },
              ].map(({ Icon, l, v, href, c }) => (
                <a key={l} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: c + "15" }}>
                    <Icon className="w-4 h-4" style={{ color: c }} />
                  </div>
                  <div>
                    <div className="text-xs text-[#6B6057]">{l}</div>
                    <div className="text-sm font-medium text-[#1A2520] group-hover:text-[#1E3D2F] transition-colors">{v}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-white border border-[#DDD8CE] rounded-2xl p-5">
              <h3 className="font-normal text-[#1A2520] text-sm mb-3 flex items-center gap-2" style={serif}>
                <Clock className="w-4 h-4 text-[#1E3D2F]" /> Support Hours
              </h3>
              {[["Mon – Fri", "9:00 AM – 10:00 PM"], ["Sat – Sun", "10:00 AM – 8:00 PM"]].map(([d, t]) => (
                <div key={d} className="flex justify-between text-sm py-1.5 border-b border-[#F7F5F0] last:border-0">
                  <span className="text-[#6B6057]">{d}</span>
                  <span className="font-medium text-[#1A2520]">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            {sent ? (
              <div className="bg-white border border-[#DDD8CE] rounded-2xl p-10 text-center flex flex-col items-center justify-center min-h-64">
                <div className="w-16 h-16 bg-[#E6EFE9] rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-[#1E3D2F]" />
                </div>
                <h3 className="text-xl font-normal text-[#1A2520] mb-2" style={serif}>Message Sent</h3>
                <p className="text-sm text-[#6B6057] mb-6">{"We'll get back to you within 24 hours."}</p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="text-sm text-[#1E3D2F] underline underline-offset-2">Send another message</button>
              </div>
            ) : (
              <div className="bg-white border border-[#DDD8CE] rounded-2xl overflow-hidden shadow-sm">
                <div className="border-b border-[#F0EDE6] px-6 py-4">
                  <h2 className="text-xl font-normal text-[#1A2520]" style={serif}>Send a Message</h2>
                  <p className="text-xs text-[#6B6057] mt-0.5">For orders, material requests, or questions — we respond within a few hours.</p>
                </div>
                <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="p-6 grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1A2520] mb-1.5">Full Name <span className="text-red-400">*</span></label>
                    <input required type="text" placeholder="Your name" value={form.name} onChange={e => sf("name", e.target.value)}
                      className="w-full border border-[#DDD8CE] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#1E3D2F] focus:ring-2 focus:ring-[#1E3D2F]/10" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A2520] mb-1.5">Email <span className="text-red-400">*</span></label>
                    <input required type="email" placeholder="yourname@gmail.com" value={form.email} onChange={e => sf("email", e.target.value)}
                      className="w-full border border-[#DDD8CE] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#1E3D2F] focus:ring-2 focus:ring-[#1E3D2F]/10" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-[#1A2520] mb-1.5">Subject <span className="text-red-400">*</span></label>
                    <select required value={form.subject} onChange={e => sf("subject", e.target.value)}
                      className="w-full border border-[#DDD8CE] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#1E3D2F] bg-white text-[#1A2520] cursor-pointer">
                      <option value="">Select a subject…</option>
                      <option>Order / Payment Issue</option>
                      <option>Material Request</option>
                      <option>Upload / Submission Query</option>
                      <option>Technical Problem</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-[#1A2520] mb-1.5">Message <span className="text-red-400">*</span></label>
                    <textarea required rows={5} placeholder="Describe your question or request…" value={form.message} onChange={e => sf("message", e.target.value)}
                      className="w-full border border-[#DDD8CE] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#1E3D2F] focus:ring-2 focus:ring-[#1E3D2F]/10 resize-none" />
                  </div>
                  <div className="sm:col-span-2 flex gap-3">
                    <button type="submit"
                      className="flex-1 bg-[#0C3220] hover:bg-[#0a2819] text-white font-semibold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                    <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-5 py-3.5 rounded-xl text-sm transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Privacy Policy Page ──────────────────────────────────────────────────────
function PrivacyPage() {
  const sections = [
    { title: "Information We Collect", content: "When you purchase a resource or submit material, we collect your name, Gmail address, and WhatsApp number. This information is used solely to deliver the purchased material and provide customer support." },
    { title: "How We Use Your Information", content: "Your personal details are used exclusively to deliver purchased material, send order confirmations, and respond to support enquiries. We do not use your information for marketing without your explicit consent." },
    { title: "Payment Information", content: "UAF Digital Bank does not store payment details. Payments are made directly to our mobile wallet accounts (JazzCash, EasyPaisa) or bank account. We verify payments manually. No credentials pass through our systems." },
    { title: "Information Sharing", content: "We do not sell, rent, or trade your personal information. Your data is shared only with team members directly involved in order fulfilment." },
    { title: "Data Retention", content: "Order records including your name, email, and reference number are retained for up to 12 months to resolve delivery disputes. You may request deletion at any time." },
    { title: "Cookies & Local Storage", content: "This website may use browser local storage to remember your preferences. No third-party analytics or advertising cookies are used." },
    { title: "Student-Submitted Content", content: "When you submit notes through the Submit page, you confirm the material is from a legitimate university examination shared for educational purposes only." },
    { title: "Changes to This Policy", content: "We may update this Privacy Policy occasionally. Continued use of the platform after changes constitutes acceptance of the revised policy." },
    { title: "Contact", content: "For privacy-related questions or data deletion requests, contact us at uafdigitalbank@gmail.com or via WhatsApp at +92 300 1234567. We will respond within 48 hours." },
  ];

  return (
    <div className="bg-[#F7F5F0] min-h-screen py-10">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-[#6B6057] mb-6">
          <Link to="/" className="hover:text-[#1E3D2F] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1E3D2F] font-semibold">Privacy Policy</span>
        </div>

        <div className="bg-[#0C3220] rounded-2xl p-6 mb-6 flex items-center gap-4 relative overflow-hidden">
          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.07]">
            <Shield className="w-28 h-28 text-white" />
          </div>
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-[#D4A017]" />
          </div>
          <div>
            <h1 className="text-white text-2xl font-normal" style={serif}>Privacy Policy</h1>
            <p className="text-white/50 text-xs mt-1" style={mono}>Last updated: July 2026 · UAF Digital Bank</p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-start gap-3">
          <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 leading-relaxed">UAF Digital Bank is a student-run academic resource platform. We are committed to protecting your privacy.</p>
        </div>

        <div className="space-y-4">
          {sections.map((s, i) => (
            <div key={i} className="bg-white border border-[#DDD8CE] rounded-2xl p-6">
              <h2 className="text-base font-semibold text-[#1A2520] mb-3 flex items-center gap-2" style={serif}>
                <span className="text-xs font-bold text-[#6B6057] w-6 h-6 rounded-full border border-[#DDD8CE] flex items-center justify-center flex-shrink-0" style={mono}>{i + 1}</span>
                {s.title}
              </h2>
              <p className="text-sm text-[#6B6057] leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-[#6B6057]">
          Questions?{" "}
          <Link to="/contact" className="text-[#1E3D2F] underline underline-offset-2">Contact us</Link> or message on{" "}
          <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="text-[#25D366] underline underline-offset-2">WhatsApp</a>.
        </div>
      </div>
    </div>
  );
}

// ─── Admin Page ───────────────────────────────────────────────────────────────
const ADMIN_PASS = "uaf@118730";

function AdminPage({ store }: { store: Store }) {
  const [unlocked, setUnlocked] = useState(false);
  const [pass, setPass] = useState(""); const [showPw, setShowPw] = useState(false); const [errPw, setErrPw] = useState(false);
  const [tab, setTab] = useState<"list" | "add" | "stats">("list");
  const [editId, setEditId] = useState<number | null>(null); const [delConf, setDelConf] = useState<number | null>(null); const [saved, setSaved] = useState(false);

  const blank = (): Omit<Resource, "id"> => ({
    title: "", category: "Undergraduate Entry Test", subject: "", degree: "",
    format: "PDF", type: "free", driveUrl: "", thumbnail: "",
    rating: 4.5, reviews: 0, downloads: 0, description: "", highlights: [], iconKey: "FileText", featured: false, isNew: true,
  });
  const [form, setForm] = useState<Omit<Resource, "id">>(blank());
  const sf = (k: string, v: any) => setForm(f => ({ ...f, [k]: v }));

  const login = () => { if (pass === ADMIN_PASS) { setUnlocked(true); setErrPw(false); } else setErrPw(true); };
  const save = () => {
    if (editId !== null) store.updateRes({ ...form, id: editId });
    else store.addRes({ ...form, id: Date.now() });
    setForm(blank()); setEditId(null); setTab("list");
    setSaved(true); setTimeout(() => setSaved(false), 3000);
  };

  if (!unlocked) return (
    <div className="min-h-[70vh] flex items-center justify-center p-4 bg-[#F7F5F0]">
      <div className="bg-white rounded-2xl border border-[#DDD8CE] shadow-xl p-8 w-full max-w-sm">
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-[#0C3220] rounded-2xl flex items-center justify-center overflow-hidden p-1.5 mx-auto mb-3">
            <ImageWithFallback src={uafLogo} alt="UAF" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-xl font-normal text-[#1A2520]" style={serif}>Developer Portal</h2>
          <p className="text-xs text-[#6B6057] mt-1">Authorized personnel only</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#1A2520] mb-1.5">Admin Passcode</label>
            <div className="relative">
              <input type={showPw ? "text" : "password"} placeholder="Enter passcode" value={pass}
                onChange={e => { setPass(e.target.value); setErrPw(false); }} onKeyDown={e => e.key === "Enter" && login()}
                className={`w-full border rounded-xl px-3 py-3 pr-10 text-sm focus:outline-none focus:ring-2 transition-all ${errPw ? "border-red-300 bg-red-50" : "border-[#DDD8CE] focus:border-[#1E3D2F] focus:ring-[#1E3D2F]/10"}`} />
              <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6057]">
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errPw && <p className="text-xs text-red-400 mt-1.5">Incorrect passcode.</p>}
          </div>
          <button onClick={login} className="w-full bg-[#0C3220] hover:bg-[#0a2819] text-white font-semibold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
            <Key className="w-4 h-4" /> Unlock Portal
          </button>
        </div>
        <div className="mt-4 text-center">
          <Link to="/" className="text-xs text-[#6B6057] hover:text-[#1A2520]">← Back to Store</Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-7 bg-[#F7F5F0] min-h-screen">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0C3220] rounded-xl flex items-center justify-center overflow-hidden p-1">
            <ImageWithFallback src={uafLogo} alt="UAF" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-xl font-normal text-[#1A2520]" style={serif}>Admin Dashboard</h1>
            <p className="text-xs text-[#6B6057]">UAF Digital Bank — Resource Management</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {saved && <div className="flex items-center gap-1.5 text-xs text-[#1E3D2F] bg-[#E6EFE9] border border-[#1E3D2F]/20 rounded-xl px-3 py-1.5"><CheckCircle className="w-3.5 h-3.5" /> Saved</div>}
          <button onClick={() => setUnlocked(false)} className="flex items-center gap-1.5 text-xs text-[#6B6057] border border-[#DDD8CE] px-3 py-2 rounded-lg hover:bg-[#F7F5F0] transition-colors"><LogOut className="w-3.5 h-3.5" /> Logout</button>
          <Link to="/" className="flex items-center gap-1.5 text-xs bg-[#0C3220] text-white px-3 py-2 rounded-lg hover:bg-[#0a2819] transition-colors"><Globe className="w-3.5 h-3.5" /> View Store</Link>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { l: "Total Resources",  v: store.resources.length,                                    c: "#1E3D2F" },
          { l: "Free Resources",   v: store.resources.filter(r => r.type === "free").length,     c: "#1E6B3F" },
          { l: "Premium Packs",    v: store.resources.filter(r => r.type === "paid").length,     c: "#B8820A" },
          { l: "Total Downloads",  v: fmt(store.resources.reduce((s, r) => s + r.downloads, 0)), c: "#1E2F5A" },
        ].map(({ l, v, c }) => (
          <div key={l} className="bg-white border border-[#DDD8CE] rounded-xl p-4">
            <div className="text-2xl font-normal" style={{ ...serif, color: c }}>{v}</div>
            <div className="text-xs text-[#6B6057] mt-1">{l}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-1 bg-[#F0EDE6] rounded-xl p-1 w-fit mb-5">
        {([["list","Resources",Package], ["add", editId !== null ? "Edit" : "Add", Plus], ["stats","Analytics",BarChart3]] as const).map(([id, label, Ic]) => (
          <button key={id} onClick={() => setTab(id as any)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab === id ? "bg-[#0C3220] text-white shadow-sm" : "text-[#6B6057] hover:text-[#1A2520]"}`}>
            <Ic className="w-3.5 h-3.5" />{label}
          </button>
        ))}
      </div>

      {tab === "list" && (
        <div className="bg-white border border-[#DDD8CE] rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#F0EDE6]">
            <h3 className="font-semibold text-[#1A2520] text-sm">All Resources ({store.resources.length})</h3>
            <button onClick={() => { setEditId(null); setForm(blank()); setTab("add"); }}
              className="flex items-center gap-1.5 bg-[#0C3220] text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-[#0a2819] transition-colors">
              <Plus className="w-3.5 h-3.5" /> Add New
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#F7F5F0] text-[10px] uppercase tracking-widest text-[#6B6057] border-b border-[#F0EDE6]">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold">Resource</th>
                  <th className="px-4 py-3 text-left font-semibold hidden md:table-cell">Category</th>
                  <th className="px-4 py-3 text-left font-semibold hidden sm:table-cell">Type</th>
                  <th className="px-4 py-3 text-left font-semibold hidden lg:table-cell">Downloads</th>
                  <th className="px-4 py-3 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F7F5F0]">
                {store.resources.map(r => {
                  const cfg = CAT_CONFIG[r.category];
                  return (
                    <tr key={r.id} className="hover:bg-[#F7F5F0] transition-colors">
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl flex-shrink-0 overflow-hidden" style={{ backgroundColor: cfg.bg }}>
                            {r.thumbnail
                              ? <ImageWithFallback src={r.thumbnail} alt="" className="w-full h-full object-cover" />
                              : <cfg.Icon className="w-5 h-5 m-auto" style={{ color: cfg.color }} />
                            }
                          </div>
                          <div className="min-w-0">
                            <div className="font-medium text-[#1A2520] text-sm truncate max-w-[180px]">{r.title}</div>
                            <div className="text-xs text-[#6B6057]" style={mono}>{r.format} · {r.subject}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs text-[#6B6057] hidden md:table-cell">{cfg.short}</td>
                      <td className="px-4 py-3 hidden sm:table-cell">
                        {r.type === "free"
                          ? <span className="text-[10px] font-bold bg-[#E6EFE9] text-[#1E3D2F] px-2 py-1 rounded-full">FREE</span>
                          : <span className="text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-2 py-1 rounded-full">PAID</span>
                        }
                      </td>
                      <td className="px-4 py-3 text-xs text-[#6B6057] hidden lg:table-cell" style={mono}>{fmt(r.downloads)}</td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center gap-1.5 justify-end">
                          <Link to={`/resource/${r.id}`} className="p-1.5 text-[#6B6057] hover:text-[#1E3D2F] hover:bg-[#E6EFE9] rounded-lg transition-colors">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Link>
                          <button onClick={() => { setForm({ ...r }); setEditId(r.id); setTab("add"); }}
                            className="p-1.5 text-[#6B6057] hover:text-[#1E3D2F] hover:bg-[#E6EFE9] rounded-lg transition-colors">
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          {delConf === r.id
                            ? <div className="flex gap-1">
                                <button onClick={() => { store.deleteRes(r.id); setDelConf(null); }} className="text-[10px] font-bold bg-red-500 text-white px-2 py-1 rounded-lg">Delete</button>
                                <button onClick={() => setDelConf(null)} className="text-[10px] text-[#6B6057] px-2 py-1 rounded-lg hover:bg-[#F0EDE6]">Cancel</button>
                              </div>
                            : <button onClick={() => setDelConf(r.id)} className="p-1.5 text-[#6B6057] hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                          }
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === "add" && (
        <div className="bg-white border border-[#DDD8CE] rounded-2xl overflow-hidden">
          <div className="border-b border-[#F0EDE6] px-6 py-4 flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0C3220] rounded-xl flex items-center justify-center"><Plus className="w-4 h-4 text-white" /></div>
            <span className="font-normal text-[#1A2520] text-base" style={serif}>{editId !== null ? "Edit Resource" : "Add New Resource"}</span>
          </div>
          <div className="p-6 grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-[#1A2520] mb-1.5">Resource Title <span className="text-red-400">*</span></label>
              <input type="text" placeholder="e.g. UAF Entry Test Complete Pack 2025" value={form.title} onChange={e => sf("title", e.target.value)}
                className="w-full border border-[#DDD8CE] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#1E3D2F] focus:ring-2 focus:ring-[#1E3D2F]/10" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1A2520] mb-1.5">Category</label>
              <select value={form.category} onChange={e => sf("category", e.target.value)}
                className="w-full border border-[#DDD8CE] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#1E3D2F] bg-white text-[#1A2520] cursor-pointer">
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1A2520] mb-1.5">File Format</label>
              <select value={form.format} onChange={e => sf("format", e.target.value)}
                className="w-full border border-[#DDD8CE] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#1E3D2F] bg-white text-[#1A2520] cursor-pointer" style={mono}>
                {(["PDF","PPT","ZIP","PDF+PPT","DOCX"] as FileFormat[]).map(f => <option key={f}>{f}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1A2520] mb-1.5">Type</label>
              <div className="flex gap-2">
                {(["free","paid"] as ResourceType[]).map(t => (
                  <button key={t} onClick={() => sf("type", t)}
                    className={`flex-1 py-3 rounded-xl text-sm font-semibold border transition-colors ${form.type === t ? (t === "free" ? "bg-[#1E3D2F] text-white border-[#1E3D2F]" : "bg-[#B8820A] text-white border-[#B8820A]") : "border-[#DDD8CE] text-[#6B6057] hover:bg-[#F7F5F0]"}`}>
                    {t === "free" ? "Free" : "Paid"}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1A2520] mb-1.5">Price (Rs.)</label>
              <input type="number" placeholder="e.g. 499" disabled={form.type === "free"} value={form.price || ""} onChange={e => sf("price", Number(e.target.value))}
                className={`w-full border border-[#DDD8CE] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#1E3D2F] ${form.type === "free" ? "bg-[#F7F5F0] text-[#6B6057] cursor-not-allowed" : "bg-white"}`} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1A2520] mb-1.5">Subject(s)</label>
              <input type="text" placeholder="e.g. Biology + Chemistry" value={form.subject} onChange={e => sf("subject", e.target.value)}
                className="w-full border border-[#DDD8CE] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#1E3D2F]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1A2520] mb-1.5">Degree Program</label>
              <input type="text" placeholder="e.g. BS Agriculture / DVM" value={form.degree} onChange={e => sf("degree", e.target.value)}
                className="w-full border border-[#DDD8CE] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#1E3D2F]" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-[#1A2520] mb-1.5">Google Drive / Reference URL</label>
              <input type="url" placeholder="https://drive.google.com/…" value={form.driveUrl || ""} onChange={e => sf("driveUrl", e.target.value)}
                className="w-full border border-[#DDD8CE] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#1E3D2F]" style={mono} />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-[#1A2520] mb-1.5">Thumbnail URL</label>
              <input type="url" placeholder="https://example.com/cover.jpg" value={form.thumbnail || ""} onChange={e => sf("thumbnail", e.target.value)}
                className="w-full border border-[#DDD8CE] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#1E3D2F]" style={mono} />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-[#1A2520] mb-1.5">Description</label>
              <textarea rows={2} value={form.description} onChange={e => sf("description", e.target.value)}
                className="w-full border border-[#DDD8CE] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#1E3D2F] resize-none" />
            </div>
            <div className="sm:col-span-2 flex items-center gap-6">
              {[["featured","Featured"], ["isNew","Mark as New"]].map(([k, l]) => (
                <label key={k} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={!!(form as any)[k]} onChange={e => sf(k, e.target.checked)} className="accent-[#1E3D2F] w-4 h-4" />
                  <span className="text-sm font-medium text-[#1A2520]">{l}</span>
                </label>
              ))}
            </div>
            <div className="sm:col-span-2 flex gap-2 pt-4 border-t border-[#F0EDE6]">
              {editId !== null && (
                <button onClick={() => { setEditId(null); setForm(blank()); }} className="px-5 py-3 border border-[#DDD8CE] rounded-xl text-sm text-[#6B6057] hover:bg-[#F7F5F0]">Cancel</button>
              )}
              <button onClick={save} disabled={!form.title}
                className="flex-1 bg-[#0C3220] hover:bg-[#0a2819] disabled:opacity-40 text-white font-semibold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
                <Upload className="w-4 h-4" />{editId !== null ? "Update Resource" : "Publish Resource"}
              </button>
            </div>
          </div>
        </div>
      )}

      {tab === "stats" && (
        <div className="bg-white border border-[#DDD8CE] rounded-2xl p-5">
          <h3 className="font-normal text-[#1A2520] mb-5 text-lg flex items-center gap-2" style={serif}>
            <BarChart3 className="w-4 h-4 text-[#1E3D2F]" /> Downloads by Category
          </h3>
          <div className="space-y-4">
            {CATEGORIES.map(cat => {
              const total = store.resources.filter(r => r.category === cat).reduce((s, r) => s + r.downloads, 0);
              const max   = Math.max(...CATEGORIES.map(c => store.resources.filter(r => r.category === c).reduce((s, r) => s + r.downloads, 0)));
              const cfg   = CAT_CONFIG[cat];
              return (
                <div key={cat}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-[#1A2520]">{cat}</span>
                    <span className="text-[#6B6057]" style={mono}>{fmt(total)}</span>
                  </div>
                  <div className="w-full h-2 bg-[#F0EDE6] rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: `${max > 0 ? (total / max) * 100 : 0}%`, backgroundColor: cfg.color }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Upload Page ──────────────────────────────────────────────────────────────
function UploadPage() {
  const [form, setForm] = useState({ name: "", agNo: "", email: "", subject: "", degree: "", category: "Past Papers", testType: "Mid-Term", agreed: false });
  const [file, setFile] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sf = (k: string, v: string | boolean) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div className="bg-[#F7F5F0] min-h-screen py-10">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-7">
          <div className="flex items-center gap-2 text-sm text-[#6B6057] mb-3">
            <Link to="/" className="hover:text-[#1E3D2F]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#1E3D2F] font-semibold">Submit Material</span>
          </div>
          <h1 className="text-2xl font-normal text-[#1A2520] mb-1" style={serif}>Submit Notes or Past Papers</h1>
          <p className="text-sm text-[#6B6057]">Help fellow UAF students. Reviewed before publishing.</p>
        </div>

        {submitted ? (
          <div className="bg-white border border-[#DDD8CE] rounded-2xl p-10 text-center">
            <div className="w-14 h-14 bg-[#E6EFE9] rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-7 h-7 text-[#1E3D2F]" /></div>
            <h3 className="text-xl font-normal text-[#1A2520] mb-2" style={serif}>Submission Received</h3>
            <p className="text-sm text-[#6B6057] mb-4">Thank you, <strong>{form.name || "Student"}</strong>. Reviewed within 3–5 days.</p>
            <div className="flex gap-2 justify-center">
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-[#1da851] transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
              <Link to="/" className="inline-flex items-center gap-2 border border-[#DDD8CE] text-[#6B6057] text-sm px-5 py-3 rounded-xl hover:bg-[#F7F5F0]">← Back</Link>
            </div>
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); if (form.agreed && file) setSubmitted(true); }}
            className="bg-white border border-[#DDD8CE] rounded-2xl overflow-hidden shadow-sm">
            <div className="border-b border-[#F0EDE6] px-6 py-4 flex items-center gap-3">
              <div className="w-9 h-9 bg-[#0C3220] rounded-xl flex items-center justify-center overflow-hidden p-1">
                <ImageWithFallback src={uafLogo} alt="UAF" className="w-full h-full object-contain" />
              </div>
              <span className="font-normal text-[#1A2520] text-base" style={serif}>Student Material Submission</span>
            </div>
            <div className="p-6 grid sm:grid-cols-2 gap-4">
              {[
                { k: "name",    l: "Full Name",        p: "Muhammad Ali Khan",   t: "text",  req: true  },
                { k: "agNo",    l: "AG No. / Roll No.", p: "2021-ag-1234",       t: "text",  req: true  },
                { k: "email",   l: "Email Address",     p: "yourname@gmail.com",  t: "email", req: false },
                { k: "subject", l: "Subject",           p: "e.g. Biochemistry",   t: "text",  req: true  },
                { k: "degree",  l: "Degree / Program",  p: "e.g. BS Agriculture", t: "text",  req: false },
              ].map(({ k, l, p, t, req }) => (
                <div key={k}>
                  <label className="block text-sm font-semibold text-[#1A2520] mb-1.5">{l}{req && <span className="text-red-400"> *</span>}</label>
                  <input required={req} type={t} placeholder={p} value={(form as any)[k]} onChange={e => sf(k, e.target.value)}
                    className="w-full border border-[#DDD8CE] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#1E3D2F] focus:ring-2 focus:ring-[#1E3D2F]/10" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold text-[#1A2520] mb-1.5">Category</label>
                <select value={form.category} onChange={e => sf("category", e.target.value)}
                  className="w-full border border-[#DDD8CE] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#1E3D2F] bg-white text-[#1A2520] cursor-pointer">
                  {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A2520] mb-1.5">Exam Type</label>
                <select value={form.testType} onChange={e => sf("testType", e.target.value)}
                  className="w-full border border-[#DDD8CE] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#1E3D2F] bg-white text-[#1A2520] cursor-pointer">
                  {["Entry Test","Mid-Term","Final-Term","Notes","Other"].map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-[#1A2520] mb-1.5">File Upload (PDF only) <span className="text-red-400">*</span></label>
                <div onDragEnter={() => setDragging(true)} onDragLeave={() => setDragging(false)} onDragOver={e => e.preventDefault()}
                  onDrop={e => { e.preventDefault(); setDragging(false); const f = e.dataTransfer.files[0]; if (f) setFile(f.name); }}
                  onClick={() => document.getElementById("fu-inp")?.click()}
                  className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${dragging ? "border-[#1E3D2F] bg-[#E6EFE9]" : file ? "border-[#1E3D2F] bg-[#E6EFE9]/50" : "border-[#DDD8CE] bg-[#F7F5F0] hover:border-[#1E3D2F]"}`}>
                  <input id="fu-inp" type="file" accept=".pdf" className="sr-only" onChange={e => setFile(e.target.files?.[0]?.name || null)} />
                  {file ? (
                    <div className="flex items-center justify-center gap-3 text-[#1E3D2F]">
                      <CheckCircle className="w-5 h-5" />
                      <div className="text-left"><div className="font-semibold text-sm">{file}</div><div className="text-xs text-[#6B6057] mt-0.5">Click to change</div></div>
                    </div>
                  ) : (
                    <><Upload className="w-7 h-7 mx-auto mb-2 text-[#6B6057]" /><div className="text-sm font-medium text-[#6B6057] mb-0.5">Drag &amp; drop PDF, or click to browse</div><div className="text-xs text-[#6B6057]/60">Maximum 20 MB</div></>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2 bg-[#F7F5F0] border border-[#DDD8CE] rounded-xl p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input required type="checkbox" checked={form.agreed} onChange={e => sf("agreed", e.target.checked)} className="accent-[#1E3D2F] w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#6B6057] leading-relaxed">I confirm this material is from a university examination and shared for educational purposes only.</span>
                </label>
              </div>
              <div className="sm:col-span-2">
                <button type="submit" disabled={!form.agreed || !file}
                  className="w-full bg-[#0C3220] hover:bg-[#0a2819] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
                  <Upload className="w-4 h-4" /> Submit for Review
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#091A10] text-[#6B6057]">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#D4A017] to-transparent" />
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden p-1">
              <ImageWithFallback src={image_cropped_circle_image__8__2} alt="UAF" className="w-full h-full object-contain" />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden p-1">
              <ImageWithFallback src={image_cropped_circle_image__4__7} alt="Directorate" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-white text-sm font-normal" style={serif}>UAF Digital Bank</div>
              <div className="text-[9px] text-[#D4A017]/50 uppercase tracking-wider mt-0.5" style={mono}>Faisalabad, Pakistan</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-5 max-w-xs">{"Pakistan's trusted academic resource bank for UAF students — free past papers, entry test packs and study utilities."}</p>
          <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors">
            <MessageCircle className="w-4 h-4" /> WhatsApp Support
          </a>
        </div>

        <div>
          <h4 className="text-white text-[10px] uppercase tracking-widest mb-4 font-semibold" style={mono}>Repository</h4>
          <ul className="space-y-3 text-sm">
            {[
              ["All Resources",     "/"                              ],
              ["Undergrad Tests",   "/?c=Undergraduate+Entry+Test"   ],
              ["Postgrad Tests",    "/?c=Postgraduate+Entry+Test"    ],
              ["Past Papers",       "/?c=Past+Papers"                ],
              ["Student Utilities", "/?c=Student+Utilities"          ],
              ["Free Only",         "/?f=free"                       ],
              ["Submit Material",   "/upload"                        ],
            ].map(([l, t]) => (
              <li key={l}><Link to={t} className="hover:text-white transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-[10px] uppercase tracking-widest mb-4 font-semibold" style={mono}>Information</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li className="pt-1 border-t border-white/5">
              <Link to="/admin" className="flex items-center gap-1.5 text-[#D4A017]/50 hover:text-[#D4A017] transition-colors">
                <Key className="w-3.5 h-3.5" /> Developer Portal
              </Link>
            </li>
          </ul>
          <div className="mt-5 flex flex-col gap-2.5 text-sm">
            <a href="tel:0419200161" className="flex items-center gap-2 hover:text-white transition-colors"><Phone className="w-3.5 h-3.5 text-[#D4A017]/40" /> 041-9200161</a>
            <a href="mailto:uafdigitalbank@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail className="w-3.5 h-3.5 text-[#D4A017]/40" /> uafdigitalbank@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 px-4 py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-xs text-[#6B6057]/40">© {new Date().getFullYear()} UAF Digital Bank — Not affiliated with UAF administration.</span>
          <div className="flex items-center gap-4 text-xs text-[#6B6057]/30">
            <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Secure</span>
            <span style={mono} className="text-[#D4A017]/25">v3.2</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Store & Router ───────────────────────────────────────────────────────────
function useStore() {
  const [resources, setResources] = useState<Resource[]>(SEED);
  return {
    resources,
    addRes:    (r: Resource) => setResources(x => [r, ...x]),
    deleteRes: (id: number)  => setResources(x => x.filter(r => r.id !== id)),
    updateRes: (r: Resource) => setResources(x => x.map(e => e.id === r.id ? r : e)),
  };
}
type Store = ReturnType<typeof useStore>;

function RootLayout() {
  const store = useStore();
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      <TopNav />
      <main className="flex-1">
        <PageTransition>
          <Outlet context={store} />
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}

function StoreWrapper()  { const s = useOutletContext<Store>(); return <StorePage resources={s.resources} />; }
function AdminWrapper()  { const s = useOutletContext<Store>(); return <AdminPage store={s} />; }
function DetailWrapper() { const s = useOutletContext<Store>(); return <ResourceDetailPage resources={s.resources} />; }

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true,          element: <StoreWrapper />  },
      { path: "admin",        element: <AdminWrapper />  },
      { path: "upload",       element: <UploadPage />    },
      { path: "contact",      element: <ContactPage />   },
      { path: "privacy",      element: <PrivacyPage />   },
      { path: "resource/:id", element: <DetailWrapper /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
