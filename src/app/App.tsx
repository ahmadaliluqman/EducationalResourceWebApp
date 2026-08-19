import image_cropped_circle_image__12__2 from '@/imports/cropped_circle_image__12_-2.png'
import image_cropped_circle_image__15__2 from '@/imports/cropped_circle_image__15_-2.png'
import image_cropped_circle_image__15__1 from '@/imports/cropped_circle_image__15_-1.png'
import image_cropped_circle_image__15_ from '@/imports/cropped_circle_image__15_.png'
import image_cropped_circle_image__13__3 from '@/imports/cropped_circle_image__13_-3.png'
import image_cropped_circle_image__14__3 from '@/imports/cropped_circle_image__14_-3.png'
import image_cropped_circle_image__14__2 from '@/imports/cropped_circle_image__14_-2.png'
import image_cropped_circle_image__14__1 from '@/imports/cropped_circle_image__14_-1.png'
import image_cropped_circle_image__13__2 from '@/imports/cropped_circle_image__13_-2.png'
import image_cropped_circle_image__13__1 from '@/imports/cropped_circle_image__13_-1.png'
import image_cropped_circle_image__12_ from '@/imports/cropped_circle_image__12_.png'
import image_cropped_circle_image__13_ from '@/imports/cropped_circle_image__13_.png'
import image_Gemini_Generated_Image_2t5plt2t5plt2t5p from '@/imports/Gemini_Generated_Image_2t5plt2t5plt2t5p.jfif'
import image_cropped_circle_image__10__2 from '@/imports/cropped_circle_image__10_-2.png'
import image_cropped_circle_image__10__1 from '@/imports/cropped_circle_image__10_-1.png'
import image_cropped_circle_image__10_ from '@/imports/cropped_circle_image__10_.png'
import image_cropped_circle_image__9_ from '@/imports/cropped_circle_image__9_.png'
import image_higher_education_commission_pakistan_logo_png_seeklogo_275152 from '@/imports/higher-education-commission-pakistan-logo-png_seeklogo-275152.png'
import image_cropped_circle_image__5__1 from '@/imports/cropped_circle_image__5_-1.png'
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
import { useState, useEffect } from "react";
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
  Layers, LogOut, BarChart3,
  Info, Clock, Package, ArrowRight,
  Shield, FileDown, Send,
  MapPin, ExternalLink, ChevronLeft,
  HelpCircle, CreditCard, FileQuestion, Bug,
  Headphones, Zap, Filter, SortAsc,
  BookCopy, Award, Users, TrendingUp,
} from "lucide-react";

import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import uafLogo     from "@/imports/b2ae3213-6403-4416-9276-625c6925f75e_removalai_preview-3.png";
import dirLogo     from "@/imports/5dfa0e76-f3fb-4592-b4a0-400f557fbb08_removalai_preview-1.png";
import campusPhoto from "@/imports/image.png";

// ─── Design tokens ────────────────────────────────────────────────────────────
const G   = "#0E1F42";   // UAF deep navy
const GM  = "#1A3560";   // mid navy
const GL  = "#E8EDF8";   // light navy tint
const GOLD = "#C9A83C";  // UAF gold
const BG  = "#F4F2EE";   // warm white background
const BD  = "#D8D4CC";   // warm border

const serif: React.CSSProperties = { fontFamily: "'DM Serif Display', serif" };
const mono:  React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };

// ─── Types ────────────────────────────────────────────────────────────────────
type ResourceType = "free" | "paid";
type Category =
  | "Undergraduate Entry Test"
  | "Postgraduate Entry Test"
  | "Past Papers"
  | "Student Utilities";
type FileFormat = "PDF" | "PPT" | "ZIP" | "PDF+PPT" | "DOCX";

interface Resource {
  id: number; title: string; category: Category; subject: string; degree: string;
  format: FileFormat; type: ResourceType; price?: number; driveUrl?: string;
  thumbnail: string; rating: number; reviews: number; downloads: number;
  description: string; highlights?: string[]; iconKey: string;
  featured?: boolean; isNew?: boolean;
}

const CAT_CONFIG: Record<Category, { color: string; bg: string; text: string; Icon: React.ElementType; short: string; desc: string }> = {
  "Undergraduate Entry Test": { color: "#0E1F42", bg: "#E8EDF8", text: "#0E1F42", Icon: GraduationCap, short: "Entry Test",   desc: "Pre-Medical, Pre-Engineering & ICS packs" },
  "Postgraduate Entry Test":  { color: "#4A1A6E", bg: "#F0EBF8", text: "#4A1A6E", Icon: BookOpen,       short: "Postgrad",     desc: "GAT, MScAgri, MPhil & PhD bundles" },
  "Past Papers":              { color: "#8B2500", bg: "#F8EDE8", text: "#8B2500", Icon: FileText,        short: "Past Papers",  desc: "Mid-term & final-term 2018–2026" },
  "Student Utilities":        { color: "#1A4D3A", bg: "#E8F5F0", text: "#1A4D3A", Icon: Layers,          short: "Utilities",    desc: "Forms, guides & academic templates" },
};

const ICON_MAP: Record<string, React.ElementType> = {
  BookOpen, FileText, FlaskConical, Leaf, BookMarked, Layers, GraduationCap, FileDown,
};

const US = (id: string, w = 480, h = 280) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=75`;

const SEED: Resource[] = [
  { id: 1, title: "UAF Entry Test Complete Pack 2025 — Pre-Medical", category: "Undergraduate Entry Test", subject: "Biology + Chemistry + Physics", degree: "BS Agriculture / DVM", format: "PDF+PPT", type: "free", driveUrl: "https://drive.google.com/", thumbnail: US("1532187863486-abf9dbad1b69"), rating: 4.8, reviews: 312, downloads: 12400, description: "Full Pre-Medical entry test pack aligned with UAF ETEA pattern 2025. Covers all major topics with 800+ MCQs and verified answer keys.", highlights: ["800+ MCQs with explanations", "Topic-wise chapterization", "2018–2024 solved past papers", "Formula & concept sheets", "10 full-length mock tests", "Answer keys verified by faculty"], iconKey: "GraduationCap", featured: true },
  { id: 2, title: "Pre-Engineering Entry Test Master Pack", category: "Undergraduate Entry Test", subject: "Physics + Maths + Chemistry", degree: "BS Agriculture Engineering", format: "PDF", type: "paid", price: 499, thumbnail: US("1635070041078-e363dbe005cb"), rating: 4.9, reviews: 208, downloads: 6820, description: "High-yield solved MCQs, formula sheets and model papers for Pre-Engineering UAF entry test.", highlights: ["1200+ solved MCQs", "Formula condensed sheets", "5 full mock tests", "Gmail delivery within 15 min"], iconKey: "BookOpen", featured: true },
  { id: 3, title: "ICS — Computer Science Entry Test Pack", category: "Undergraduate Entry Test", subject: "Computer Science + Maths", degree: "BS IT / CS", format: "PDF", type: "free", driveUrl: "https://drive.google.com/", thumbnail: US("1517694712202-14dd9538aa97"), rating: 4.6, reviews: 97, downloads: 4200, description: "Complete ICS entry test pack covering algorithms, data structures and mathematics.", highlights: ["600+ MCQs", "Programming fundamentals", "Maths formula sheet"], iconKey: "Layers", isNew: true },
  { id: 4, title: "MScAgri / MPhil Entry Test Preparation Bundle", category: "Postgraduate Entry Test", subject: "Agriculture Sciences", degree: "MScAgri / MPhil", format: "PDF+PPT", type: "paid", price: 699, thumbnail: US("1574943320219-553eb213f72d"), rating: 4.7, reviews: 143, downloads: 3100, description: "Comprehensive MScAgri and MPhil entry test pack covering all agri subjects with GAT pattern alignment.", highlights: ["GAT-Subject pattern aligned", "800+ agri MCQs", "Research methodology chapter", "Gmail delivery"], iconKey: "Leaf", featured: true },
  { id: 5, title: "Postgraduate Chemistry Entry Test Pack", category: "Postgraduate Entry Test", subject: "Organic & Inorganic Chemistry", degree: "MScChem / PhD", format: "PDF", type: "paid", price: 599, thumbnail: US("1532187863486-abf9dbad1b69"), rating: 4.5, reviews: 88, downloads: 1980, description: "High-yield PG chemistry MCQs and theory notes for UAF postgraduate admissions.", highlights: ["Spectroscopy chapter", "Reaction mechanisms", "500+ MCQs"], iconKey: "FlaskConical" },
  { id: 6, title: "GAT General (NTS) Complete Preparation Pack", category: "Postgraduate Entry Test", subject: "GAT General — All Subjects", degree: "MPhil / PhD (All Departments)", format: "PDF", type: "paid", price: 799, thumbnail: US("1434030216411-0b793f4b4173"), rating: 4.9, reviews: 351, downloads: 9800, description: "Most comprehensive GAT General pack — Quantitative, Analytical, Verbal with 10 full mock tests.", highlights: ["10 full mock tests", "Section-wise strategy", "2000+ MCQs", "Previous years solved"], iconKey: "BookOpen", featured: true },
  { id: 7, title: "Agronomy Mid-Term Past Papers Bundle 2024", category: "Past Papers", subject: "Agronomy", degree: "BS Agriculture Semester 5–6", format: "PDF", type: "free", driveUrl: "https://drive.google.com/", thumbnail: US("1464226184884-fa280b87c399"), rating: 4.7, reviews: 189, downloads: 8900, description: "Complete mid-term past paper set for Agronomy — Semesters 3–6, verified by senior UAF students.", highlights: ["Semester-wise sorted", "2020–2024 coverage", "Includes answer hints"], iconKey: "FileText" },
  { id: 8, title: "DVM Final-Term Past Papers — Complete Archive", category: "Past Papers", subject: "Veterinary Science", degree: "DVM Semesters 1–8", format: "ZIP", type: "paid", price: 349, thumbnail: US("1559757148-5c350d0d3c56"), rating: 4.8, reviews: 267, downloads: 5400, description: "Complete DVM final-term archive — all 8 semesters, 2018–2024, sorted by subject and year.", highlights: ["All 8 semesters", "Subject-wise sorted", "Instant Gmail delivery"], iconKey: "BookMarked", featured: true },
  { id: 9, title: "Biochemistry Final-Term Notes + Past Papers", category: "Past Papers", subject: "Biochemistry", degree: "BS Agriculture Semester 3–4", format: "PDF", type: "free", driveUrl: "https://drive.google.com/", thumbnail: US("1530026405186-ed1f139313f8"), rating: 4.6, reviews: 134, downloads: 6200, description: "Comprehensive biochemistry notes and 5-year final-term past papers.", highlights: ["Topic summaries", "2019–2024 papers", "Metabolic pathway diagrams"], iconKey: "FlaskConical", isNew: true },
  { id: 10, title: "Soil Science Mid-Term Past Papers 2024", category: "Past Papers", subject: "Soil Science", degree: "BS Agriculture Semester 3–4", format: "PDF", type: "free", driveUrl: "https://drive.google.com/", thumbnail: US("1416879595882-3373a0480b5b"), rating: 4.5, reviews: 78, downloads: 3300, description: "Soil Science mid-term past papers for semesters 3–4.", highlights: ["Semester 3 & 4", "2021–2024 papers"], iconKey: "Leaf" },
  { id: 11, title: "UAF Admission Forms & Application Templates Pack", category: "Student Utilities", subject: "Admission Paperwork", degree: "All Programs", format: "DOCX", type: "free", driveUrl: "https://drive.google.com/", thumbnail: US("1450101499163-c8848c66ca85"), rating: 4.4, reviews: 56, downloads: 7800, description: "Complete set of UAF admission forms, NOC templates, scholarship applications and transfer letters.", highlights: ["Admission forms", "Scholarship templates", "NOC & bonafide formats", "Hostel application forms"], iconKey: "FileText" },
  { id: 12, title: "UAF Campus Guide 2025 — Hostel, Departments & Contacts", category: "Student Utilities", subject: "Campus Information", degree: "All Students", format: "PDF", type: "free", driveUrl: "https://drive.google.com/", thumbnail: US("1562774053-701939374585"), rating: 4.3, reviews: 42, downloads: 4100, description: "Comprehensive campus guide covering all departments, hostel blocks, mess timings, and contacts.", highlights: ["Department contacts", "Hostel block map", "Emergency numbers", "Library hours"], iconKey: "Layers", isNew: true },
  { id: 13, title: "Research Proposal Template — MPhil/PhD", category: "Student Utilities", subject: "Academic Writing", degree: "MPhil / PhD Candidates", format: "DOCX", type: "free", driveUrl: "https://drive.google.com/", thumbnail: US("1455390582262-044cdead277a"), rating: 4.6, reviews: 89, downloads: 3200, description: "Standard research proposal template following UAF graduate school formatting requirements.", highlights: ["UAF format compliant", "Literature review section", "Bibliography style guide"], iconKey: "FileDown" },
];

const CATEGORIES: Category[] = ["Undergraduate Entry Test", "Postgraduate Entry Test", "Past Papers", "Student Utilities"];
const fmt = (n: number) => n >= 1000 ? (n / 1000).toFixed(1) + "k" : String(n);

// ─── Scroll to top on route/search change ─────────────────────────────────────
function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname, search]);
  return null;
}

// ─── Page transition ──────────────────────────────────────────────────────────
function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [key, setKey] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => { setKey(k => k + 1); setVisible(true); }, 80);
    return () => clearTimeout(t);
  }, [location.pathname, location.search]);

  return (
    <div key={key} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(8px)",
      transition: "opacity 0.25s ease, transform 0.25s ease",
    }}>
      {children}
    </div>
  );
}

// ─── Stars ────────────────────────────────────────────────────────────────────
function Stars({ r, sm }: { r: number; sm?: boolean }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {[1,2,3,4,5].map(i => (
        <Star key={i} className={`${sm?"w-3 h-3":"w-3.5 h-3.5"} ${i<=Math.round(r)?"fill-[#B8920A] text-[#B8920A]":"text-[#DDD9D0]"}`} />
      ))}
    </span>
  );
}

// ─── Support Modal ────────────────────────────────────────────────────────────
const ISSUE_TYPES = [
  { value: "payment",   label: "Payment / Order Issue",  Icon: CreditCard,   color: "#C9A83C" },
  { value: "delivery",  label: "Delivery Problem",       Icon: FileDown,     color: "#0E1F42" },
  { value: "material",  label: "Material Request",       Icon: FileQuestion, color: "#1A4D3A" },
  { value: "technical", label: "Technical Problem",      Icon: Bug,          color: "#8B2500" },
  { value: "other",     label: "General Enquiry",        Icon: HelpCircle,   color: "#4A1A6E" },
];

function SupportModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<"type"|"form"|"done">("type");
  const [issueType, setIssueType] = useState("");
  const [form, setForm] = useState({ name:"", email:"", whatsapp:"", message:"" });
  const [errs, setErrs] = useState<Record<string,string>>({});
  const sf = (k:string, v:string) => { setForm(f=>({...f,[k]:v})); setErrs(e=>({...e,[k]:""})); };
  const selected = ISSUE_TYPES.find(t=>t.value===issueType);

  const validate = () => {
    const e: Record<string,string> = {};
    if (!form.name.trim())              e.name = "Required";
    if (!form.email.trim())             e.email = "Required";
    if (!/^03\d{9}$/.test(form.whatsapp)) e.whatsapp = "Format: 03XXXXXXXXX";
    if (!form.message.trim())           e.message = "Please describe your issue";
    setErrs(e); return !Object.keys(e).length;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-sm"
      onClick={e=>{if(e.target===e.currentTarget)onClose();}}>
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden border border-[#DDD9D0]"
        style={{animation:"fadeSlideIn 0.2s ease"}}>
        <style>{`@keyframes fadeSlideIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}`}</style>

        <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-[#F0EDE7]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundColor: G}}>
              <Headphones className="w-4 h-4 text-[#C49A00]" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-[#151A16]">Student Support</h2>
              <p className="text-[10px] text-[#605A52]" style={mono}>UAF Digital Bank Help Desk</p>
            </div>
          </div>
          <button onClick={onClose} className="w-7 h-7 rounded-lg flex items-center justify-center text-[#605A52] hover:bg-[#F0EDE7] transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {step==="type" && (
          <div className="p-5">
            <p className="text-xs text-[#605A52] mb-3">Select the type of issue you are facing:</p>
            <div className="space-y-1.5">
              {ISSUE_TYPES.map(({value,label,Icon,color})=>(
                <button key={value} onClick={()=>setIssueType(value)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl border text-left transition-all ${issueType===value?"border-[#0A2318] bg-[#E6EFE9]":"border-[#DDD9D0] hover:border-[#0A2318]/30 hover:bg-[#F7F5F0]"}`}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor:color+"18"}}>
                    <Icon className="w-3.5 h-3.5" style={{color}} />
                  </div>
                  <span className="text-sm text-[#151A16]">{label}</span>
                  {issueType===value && <CheckCircle className="w-4 h-4 text-[#0A2318] ml-auto" />}
                </button>
              ))}
            </div>
            <button onClick={()=>{if(issueType)setStep("form");}} disabled={!issueType}
              className="mt-4 w-full py-3 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-35"
              style={{backgroundColor:G}}>
              Continue →
            </button>
          </div>
        )}

        {step==="form" && (
          <div className="p-5">
            {selected && (
              <div className="flex items-center gap-2 bg-[#F0EDE7] border border-[#DDD9D0] rounded-xl px-3 py-2 mb-4">
                <selected.Icon className="w-3.5 h-3.5 flex-shrink-0" style={{color:selected.color}} />
                <span className="text-xs font-medium text-[#151A16] flex-1">{selected.label}</span>
                <button onClick={()=>setStep("type")} className="text-[11px] text-[#605A52] underline">Change</button>
              </div>
            )}
            <div className="space-y-3">
              {[{k:"name",l:"Your Name",p:"Muhammad Ali",t:"text"},{k:"email",l:"Email",p:"yourname@gmail.com",t:"email"},{k:"whatsapp",l:"WhatsApp No.",p:"03001234567",t:"tel"}].map(({k,l,p,t})=>(
                <div key={k}>
                  <label className="block text-xs font-semibold text-[#151A16] mb-1">{l} <span className="text-red-400">*</span></label>
                  <input type={t} placeholder={p} value={(form as any)[k]} onChange={e=>sf(k,e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all ${errs[k]?"border-red-300 bg-red-50":"border-[#DDD9D0] focus:border-[#0A2318] focus:ring-[#0A2318]/8"}`} />
                  {errs[k] && <p className="text-[11px] text-red-400 mt-1">{errs[k]}</p>}
                </div>
              ))}
              <div>
                <label className="block text-xs font-semibold text-[#151A16] mb-1">Describe your issue <span className="text-red-400">*</span></label>
                <textarea rows={3} value={form.message} onChange={e=>sf("message",e.target.value)} placeholder="Provide details…"
                  className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 resize-none transition-all ${errs.message?"border-red-300 bg-red-50":"border-[#DDD9D0] focus:border-[#0A2318] focus:ring-[#0A2318]/8"}`} />
                {errs.message && <p className="text-[11px] text-red-400 mt-1">{errs.message}</p>}
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 mt-3 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
              <p className="text-[11px] text-amber-800">Response within <strong>1–3 hours</strong> via WhatsApp.</p>
            </div>
            <div className="flex gap-2 mt-4">
              <button onClick={()=>setStep("type")} className="px-4 py-2.5 border border-[#DDD9D0] rounded-xl text-sm text-[#605A52] hover:bg-[#F0EDE7]">← Back</button>
              <button onClick={()=>{if(validate())setStep("done");}}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                style={{backgroundColor:G}}>
                <Send className="w-4 h-4" /> Submit Request
              </button>
            </div>
          </div>
        )}

        {step==="done" && (
          <div className="p-8 text-center">
            <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor:GL}}>
              <CheckCircle className="w-7 h-7" style={{color:GM}} />
            </div>
            <h3 className="text-lg font-normal text-[#151A16] mb-1" style={serif}>Request Submitted</h3>
            <p className="text-sm text-[#605A52] mb-5">{"We'll contact you on WhatsApp within 1–3 hours."}</p>
            <div className="flex gap-2">
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl text-sm hover:bg-[#1da851] transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <button onClick={onClose} className="flex-1 border border-[#DDD9D0] py-3 rounded-xl text-sm text-[#605A52] hover:bg-[#F0EDE7]">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Access Modal ─────────────────────────────────────────────────────────────
function AccessModal({ res, onClose }: { res: Resource; onClose: () => void }) {
  const [step, setStep] = useState<"info"|"pay"|"done">("info");
  const [form, setForm] = useState({ name:"", email:"", wa:"", method:"JazzCash" });
  const [errs, setErrs] = useState<Record<string,string>>({});
  const sf = (k:string, v:string) => setForm(f=>({...f,[k]:v}));
  const validate = () => {
    const e: Record<string,string> = {};
    if (!form.name.trim()) e.name="Required";
    if (!/^[^\s@]+@gmail\.com$/.test(form.email)) e.email="Valid Gmail required";
    if (!/^03\d{9}$/.test(form.wa)) e.wa="Format: 03XXXXXXXXX";
    setErrs(e); return !Object.keys(e).length;
  };
  const PAY: Record<string,string> = { JazzCash:"0300-1234567", EasyPaisa:"0333-7654321", Bank:"MCB 1234-5678901" };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-sm"
      onClick={e=>{if(e.target===e.currentTarget)onClose();}}>
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-[#DDD9D0] overflow-hidden">
        <div className="px-5 py-4 border-b border-[#F0EDE7] flex items-start justify-between gap-3" style={{backgroundColor:G}}>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{...mono,color:GOLD}}>Premium · {res.format}</div>
            <h3 className="text-white text-[15px] font-normal leading-snug line-clamp-2" style={serif}>{res.title}</h3>
          </div>
          <button onClick={onClose} className="flex-shrink-0 w-7 h-7 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {step==="info" && (
          <div className="p-5">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-normal text-[#151A16]" style={serif}>Rs. {res.price?.toLocaleString()}</span>
              <span className="text-sm text-[#605A52]">one-time payment</span>
            </div>
            {res.highlights && (
              <div className="space-y-1.5 mb-4">
                {res.highlights.slice(0,5).map((h,i)=>(
                  <div key={i} className="flex items-start gap-2 text-sm text-[#151A16]">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{color:GM}} />{h}
                  </div>
                ))}
              </div>
            )}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 flex gap-2.5">
              <Clock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800">Delivered to Gmail within <strong>10–15 minutes</strong> after payment.</p>
            </div>
            <button onClick={()=>setStep("pay")} className="w-full py-3 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90" style={{backgroundColor:G}}>
              Proceed to Payment <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {step==="pay" && (
          <div className="p-5 space-y-3">
            {[{k:"name",l:"Full Name",p:"Muhammad Ali Khan",t:"text"},{k:"email",l:"Gmail Address",p:"yourname@gmail.com",t:"email"},{k:"wa",l:"WhatsApp Number",p:"03001234567",t:"tel"}].map(({k,l,p,t})=>(
              <div key={k}>
                <label className="block text-xs font-semibold text-[#151A16] mb-1">{l} <span className="text-red-400">*</span></label>
                <input type={t} placeholder={p} value={(form as any)[k]} onChange={e=>sf(k,e.target.value)}
                  className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all ${errs[k]?"border-red-300 bg-red-50":"border-[#DDD9D0] focus:border-[#0A2318] focus:ring-[#0A2318]/8"}`} />
                {errs[k] && <p className="text-[11px] text-red-400 mt-1">{errs[k]}</p>}
              </div>
            ))}
            <div>
              <label className="block text-xs font-semibold text-[#151A16] mb-2">Payment Method</label>
              <div className="grid grid-cols-3 gap-2 mb-2">
                {["JazzCash","EasyPaisa","Bank"].map(m=>(
                  <button key={m} onClick={()=>sf("method",m)}
                    className={`border rounded-xl py-2 text-xs font-semibold transition-all ${form.method===m?"border-[#0A2318] bg-[#E6EFE9] text-[#0A2318]":"border-[#DDD9D0] text-[#605A52]"}`}>
                    {m}
                  </button>
                ))}
              </div>
              <div className="bg-[#F0EDE7] border border-[#DDD9D0] rounded-xl px-4 py-3 text-xs text-[#605A52]">
                Send <strong className="text-[#151A16]">Rs. {res.price?.toLocaleString()}</strong> to <span style={mono} className="text-[#151A16]">{PAY[form.method]}</span>
                <div className="mt-1">Ref: <span style={mono}>UAF-{res.id}</span></div>
              </div>
            </div>
            <div className="flex gap-2 pt-1">
              <button onClick={()=>setStep("info")} className="px-4 py-2.5 border border-[#DDD9D0] rounded-xl text-sm text-[#605A52] hover:bg-[#F0EDE7]">← Back</button>
              <button onClick={()=>{if(validate())setStep("done");}} className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90" style={{backgroundColor:G}}>
                <CheckCircle className="w-4 h-4" /> Confirm Order
              </button>
            </div>
          </div>
        )}

        {step==="done" && (
          <div className="p-8 text-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor:GL}}>
              <CheckCircle className="w-7 h-7" style={{color:GM}} />
            </div>
            <h3 className="text-xl font-normal text-[#151A16] mb-1" style={serif}>Order Confirmed</h3>
            <p className="text-sm text-[#605A52] mb-5">Sent to <strong>{form.email}</strong> within 10–15 min.</p>
            <div className="flex gap-2">
              <a href={`https://wa.me/923001234567?text=Order+UAF-${res.id}`} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl text-sm hover:bg-[#1da851] transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <button onClick={onClose} className="flex-1 border border-[#DDD9D0] py-3 rounded-xl text-sm text-[#605A52] hover:bg-[#F0EDE7]">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
function TopNav() {
  const [mob, setMob] = useState(false);
  const [support, setSupport] = useState(false);
  const location = useLocation();

  useEffect(()=>{ setMob(false); },[location.pathname, location.search]);

  const NAV = [
    { label: "Home",        to: "/" },
    { label: "Entry Tests", to: "/?c=Undergraduate+Entry+Test" },
    { label: "Postgrad",    to: "/?c=Postgraduate+Entry+Test" },
    { label: "Past Papers", to: "/?c=Past+Papers" },
    { label: "Utilities",   to: "/?c=Student+Utilities" },
    { label: "Submit Notes", to: "/upload" },
    { label: "Contact",     to: "/contact" },
  ];

  const isActive = (to: string) => {
    if (to==="/") return location.pathname==="/" && !location.search;
    const s = to.includes("?") ? to.slice(to.indexOf("?")) : to;
    return location.pathname+location.search===to || location.search===s;
  };

  return (
    <>
      {/* Announcement strip */}
      <div className="hidden sm:flex items-center justify-center gap-6 px-4 py-1.5 text-[11px]" style={{backgroundColor:"#08122E", color:"#C9C4B8"}}>
        <span style={mono} className="font-medium tracking-wide">Admission 2026 — Entry Test Packs Now Available</span>
        <span className="opacity-30">|</span>
        <span style={mono}>90%+ Resources are <strong style={{color:GOLD}}>FREE</strong></span>
        <span className="opacity-30">|</span>
        <Link to="/upload" className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity" style={{...mono, color:GOLD}}>Submit Your Notes</Link>
      </div>

      <header style={{backgroundColor:G}} className="sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 h-[54px]">

            {/* Logo + brand */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
              <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 rounded-lg overflow-hidden bg-white/8 p-0.5">
                <ImageWithFallback src={image_cropped_circle_image__15__1} alt="UAF Logo" className="w-full h-full object-contain opacity-70" />
              </div>
              {/* Mobile/tablet: short name only */}
              <span className="md:hidden text-white text-[12px] font-semibold leading-tight" style={serif}>UAF Notes Hub</span>
              {/* Desktop: full name + subtitle */}
              <div className="hidden md:block">
                <div className="text-white text-[13px] font-semibold leading-tight tracking-tight" style={serif}>UAF Unofficial Digital Library</div>
                <div className="text-white/35 text-[9px] uppercase tracking-[0.3em]" style={mono}>Student Resource Platform</div>
              </div>
            </Link>

            {/* Divider */}
            <div className="hidden lg:block h-5 w-px bg-white/15 mx-2" />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0 flex-1 overflow-hidden">
              {NAV.map(({label,to})=>(
                <Link key={label} to={to}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${isActive(to)?"text-white bg-white/12":"text-white/55 hover:text-white/90 hover:bg-white/6"}`}>
                  {label}
                  {isActive(to) && <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full" style={{backgroundColor:GOLD}} />}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="ml-auto flex items-center gap-2">
              <button onClick={()=>setSupport(true)}
                className="hidden sm:flex items-center gap-1.5 border border-white/20 bg-white/8 hover:bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all">
                <HelpCircle className="w-3.5 h-3.5" style={{color:GOLD}} />
                Support
              </button>
              <Link to="/upload"
                className="hidden md:flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all"
                style={{backgroundColor:GOLD, color:G}}>
                <Upload className="w-3.5 h-3.5" />
                Submit
              </Link>
              <button onClick={()=>setMob(!mob)} className="lg:hidden p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                {mob ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mob && (
            <div className="lg:hidden border-t border-white/10 pb-3 pt-2">
              <div className="grid grid-cols-2 gap-0.5 mb-2">
                {NAV.map(({label,to})=>(
                  <Link key={label} to={to} onClick={()=>setMob(false)}
                    className={`px-3 py-2.5 text-sm rounded-lg transition-colors ${isActive(to)?"bg-white/15 text-white font-semibold":"text-white/65 hover:text-white hover:bg-white/8"}`}>
                    {label}
                  </Link>
                ))}
              </div>
              <div className="flex gap-2 pt-2 border-t border-white/8">
                <button onClick={()=>{setMob(false);setSupport(true);}} className="flex-1 flex items-center justify-center gap-1.5 border border-white/20 text-white/80 text-xs font-semibold py-2.5 rounded-lg">
                  <HelpCircle className="w-3.5 h-3.5" /> Support
                </button>
                <Link to="/upload" onClick={()=>setMob(false)} className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 rounded-lg" style={{backgroundColor:GOLD,color:G}}>
                  <Upload className="w-3.5 h-3.5" /> Submit Notes
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
      {support && <SupportModal onClose={()=>setSupport(false)} />}
    </>
  );
}

// ─── Hero (home only) ─────────────────────────────────────────────────────────
const urdu: React.CSSProperties = { fontFamily: "'Noto Nastaliq Urdu', serif", direction: "rtl" };

function HeroSection() {
  const [q, setQ] = useState("");
  const nav = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (q.trim()) nav(`/?s=${encodeURIComponent(q.trim())}`);
  };

  const STATS = [
    { val: "13+",  label: "Resources" },
    { val: "90%",  label: "Free" },
    { val: "74k+", label: "Downloads" },
    { val: "4",    label: "Departments" },
  ];

  return (
    <section className="relative overflow-hidden" style={{minHeight:"440px"}}>
      {/* Campus photo */}
      <ImageWithFallback src={campusPhoto} alt="UAF Campus"
        className="absolute inset-0 w-full h-full object-cover object-center" />

      {/* Clean neutral overlays — no colour tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/18" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{background:`linear-gradient(90deg, ${GOLD}, ${GOLD}66, transparent 70%)`}} />
      <div className="absolute bottom-12 left-0 right-0 h-px opacity-20" style={{backgroundColor:GOLD}} />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center" style={{minHeight:"440px", paddingTop:"2.5rem", paddingBottom:"4rem"}}>

        {/* ── Official letterhead block ── */}
        <div className="flex items-center gap-4 mb-6">
          {/* Left seal */}
          <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-full bg-white/6 border border-white/18 flex items-center justify-center p-1.5 backdrop-blur-sm">
            <ImageWithFallback src={image_cropped_circle_image__15_} alt="UAF Logo"
              className="w-full h-full object-contain opacity-90" />
          </div>

          {/* Centre: English + Urdu stacked */}
          <div className="flex-1">
            {/* Thin rule above */}
            <div className="h-px mb-2 opacity-30" style={{background:`linear-gradient(90deg, ${GOLD}, transparent)`}} />
            <div className="flex flex-col gap-0.5">
              <span className="text-white/55 text-[9px] uppercase tracking-[0.35em] font-semibold leading-none" style={mono}>
                Unofficial Student Platform · Faisalabad
              </span>
              <span className="text-white text-[11px] md:text-[12px] uppercase tracking-[0.25em] font-bold leading-tight">
                Serving Students of UAF, Faisalabad
              </span>
              <span className="text-[15px] md:text-[18px] leading-tight font-normal" style={{...urdu, color:GOLD}}>مرکزِ مطالعہ برائے طلبہ، جامعہ زرعیہ فیصل آباد</span>
            </div>
            <div className="h-px mt-2 opacity-30" style={{background:`linear-gradient(90deg, ${GOLD}, transparent)`}} />
          </div>

          {/* Right seal */}
          <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-full bg-white/6 border border-white/18 flex items-center justify-center p-1.5 backdrop-blur-sm">
            <ImageWithFallback src={image_cropped_circle_image__12_} alt="UAF Seal"
              className="w-full h-full object-contain opacity-85" />
          </div>
        </div>

        {/* ── Main heading ── */}
        <div className="max-w-2xl mb-2">
          <h1 className="text-white font-normal leading-[1.05] mb-3"
            style={{...serif, fontSize:"clamp(2rem, 5vw, 3.2rem)"}}>
            Student Notes &amp;<br />
            <span style={{color:GOLD}}>Resource Hub</span>
          </h1>
          <p className="text-white/50 text-sm md:text-[15px] leading-relaxed max-w-md">
            Entry test packs, past papers &amp; study utilities for every UAF programme — most available free of charge.
          </p>
        </div>

        {/* ── Stats strip ── */}
        <div className="flex items-stretch gap-0 mb-7 max-w-sm border border-white/12 rounded-xl overflow-hidden backdrop-blur-sm bg-white/5">
          {STATS.map(({val,label},i)=>(
            <div key={label} className={`flex-1 flex flex-col items-center justify-center py-2.5 ${i<STATS.length-1?"border-r border-white/10":""}`}>
              <span className="text-white text-base font-bold leading-none" style={mono}>{val}</span>
              <span className="text-white/40 text-[10px] mt-0.5 uppercase tracking-wider" style={mono}>{label}</span>
            </div>
          ))}
        </div>

        {/* ── Search bar ── */}
        <form onSubmit={submit} className="flex rounded-xl overflow-hidden shadow-2xl max-w-lg border border-white/18 backdrop-blur-md bg-white/8">
          <div className="relative flex-1 flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-white/35 pointer-events-none" />
            <input type="text" value={q} onChange={e=>setQ(e.target.value)}
              placeholder="Search notes, past papers, entry test packs…"
              className="w-full pl-11 pr-4 py-4 text-sm text-white placeholder-white/30 focus:outline-none bg-transparent" />
          </div>
          <button type="submit"
            className="px-6 text-sm font-bold flex-shrink-0 transition-opacity hover:opacity-90"
            style={{backgroundColor:GOLD, color:G}}>
            Search
          </button>
        </form>

        {/* ── Quick-access tags ── */}
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            ["Pre-Medical",   "/?c=Undergraduate+Entry+Test"],
            ["GAT / MPhil",   "/?c=Postgraduate+Entry+Test"],
            ["Past Papers",   "/?c=Past+Papers"],
            ["Free Only",     "/?f=free"],
          ].map(([l,t])=>(
            <Link key={l} to={t}
              className="text-[11px] px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/50 hover:bg-white/14 hover:text-white/90 transition-all"
              style={mono}>
              {l}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom fade to page bg */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#F4F2EE] to-transparent" />
    </section>
  );
}

// ─── Filter/Search page header (replaces hero when filtered) ──────────────────
function FilterPageHeader({ s, cat, f, total }: { s:string; cat:string; f:string; total:number }) {
  const cfg = cat ? CAT_CONFIG[cat as Category] : null;
  const nav = useNavigate();
  const [q, setQ] = useState(s);

  useEffect(()=>setQ(s),[s]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (q.trim()) nav(`/?s=${encodeURIComponent(q.trim())}`);
    else nav("/");
  };

  return (
    <div className="border-b border-[#D8D4CC]" style={{backgroundColor:"#ECEAE5"}}>
      <div className="max-w-7xl mx-auto px-4 py-5 md:py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-[#605A52] mb-4">
          <Link to="/" className="hover:text-[#0A2318] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="font-medium text-[#151A16]">
            {cat ? cat : s ? `Search: "${s}"` : f==="free" ? "Free Resources" : "Premium Packs"}
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex items-start gap-3 flex-1">
            {cfg && (
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundColor:cfg.color}}>
                <cfg.Icon className="w-5 h-5 text-white" />
              </div>
            )}
            {!cfg && (
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#DDD9D0]">
                <Search className="w-5 h-5 text-[#605A52]" />
              </div>
            )}
            <div>
              <h1 className="text-xl md:text-2xl font-normal text-[#151A16]" style={serif}>
                {cat || (s ? `Results for "${s}"` : f==="free" ? "Free Resources" : "Premium Packs")}
              </h1>
              <p className="text-sm text-[#605A52] mt-0.5">
                {cfg ? cfg.desc : ""} <span className="font-medium" style={mono}>{total} resource{total!==1?"s":""} found</span>
              </p>
            </div>
          </div>

          {/* Inline search when in search mode */}
          {s && (
            <form onSubmit={submit} className="flex rounded-xl overflow-hidden border border-[#DDD9D0] bg-white shadow-sm md:max-w-xs w-full">
              <div className="relative flex-1 flex items-center">
                <Search className="absolute left-3 w-4 h-4 text-[#605A52] pointer-events-none" />
                <input type="text" value={q} onChange={e=>setQ(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-sm text-[#151A16] focus:outline-none bg-transparent" />
              </div>
              <button type="submit" className="px-4 text-xs font-bold text-white flex-shrink-0" style={{backgroundColor:G}}>Go</button>
            </form>
          )}

          <Link to="/" className="flex items-center gap-1.5 text-xs text-[#605A52] hover:text-[#0A2318] transition-colors self-end md:self-auto">
            <X className="w-3.5 h-3.5" /> Clear
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Category cards (homepage only) ──────────────────────────────────────────
function CategoryCards({ resources }: { resources: Resource[] }) {
  const CARDS = [
    { cat: "Undergraduate Entry Test" as Category, img: US("1434030216411-0b793f4b4173",600,400) },
    { cat: "Postgraduate Entry Test"  as Category, img: US("1574943320219-553eb213f72d",600,400) },
    { cat: "Past Papers"              as Category, img: US("1456513080510-7bf3a84b82f8",600,400) },
    { cat: "Student Utilities"        as Category, img: US("1562774053-701939374585", 600,400) },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-lg font-normal text-[#151A16]" style={serif}>Browse by Category</h2>
        <div className="flex-1 h-px" style={{backgroundColor:BD}} />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {CARDS.map(({cat,img})=>{
          const cfg = CAT_CONFIG[cat];
          const Ic  = cfg.Icon;
          const count = resources.filter(r=>r.category===cat).length;
          return (
            <Link key={cat} to={`/?c=${encodeURIComponent(cat)}`}
              className="group rounded-xl overflow-hidden border border-[#DDD9D0] bg-white hover:shadow-md hover:border-[#B8920A]/50 transition-all duration-200 flex flex-col">
              {/* Image area */}
              <div className="relative h-24 overflow-hidden flex-shrink-0">
                <ImageWithFallback src={img} alt={cat} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2.5 flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0" style={{backgroundColor:cfg.color}}>
                    <Ic className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="absolute top-2 right-2.5">
                  <span className="text-[9px] font-bold text-white/60 uppercase tracking-wider" style={mono}>{count} files</span>
                </div>
              </div>
              {/* Text area */}
              <div className="p-3 flex flex-col gap-1 flex-1">
                <h3 className="text-xs font-semibold text-[#151A16] leading-snug group-hover:text-[#0A2318] transition-colors" style={serif}>{cat}</h3>
                <p className="text-[11px] text-[#605A52] leading-snug flex-1">{cfg.desc}</p>
                <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-[#F0EDE7]">
                  <span className="text-[10px] font-medium" style={{...mono,color:cfg.color}}>{count} resources</span>
                  <ChevronRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" style={{color:cfg.color}} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// ─── Resource Card — academic document style ──────────────────────────────────
function ResourceCard({ res, onAccess }: { res: Resource; onAccess: (r: Resource) => void }) {
  const cfg = CAT_CONFIG[res.category];
  const Ic  = ICON_MAP[res.iconKey] || FileText;

  return (
    <article className="group bg-white border border-[#DDD9D0] rounded-xl overflow-hidden hover:shadow-md hover:border-[#B8920A]/40 transition-all duration-200 flex flex-col relative"
      style={{borderLeft:`3px solid ${cfg.color}`}}>

      {/* Top: thumbnail strip (shorter, not dominant) */}
      <Link to={`/resource/${res.id}`} className="block">
        <div className="relative h-32 overflow-hidden bg-[#EAE7DF] flex-shrink-0">
          {res.thumbnail
            ? <ImageWithFallback src={res.thumbnail} alt={res.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            : <div className="w-full h-full flex items-center justify-center" style={{backgroundColor:cfg.bg}}>
                <Ic className="w-10 h-10 opacity-30" style={{color:cfg.color}} />
              </div>
          }
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          {/* Badges overlaid on image */}
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
            {res.type==="free"
              ? <span className="text-[10px] font-bold px-2 py-0.5 rounded text-white" style={{backgroundColor:GM,fontFamily:"'JetBrains Mono',monospace"}}>FREE</span>
              : <span className="text-[10px] font-bold px-2 py-0.5 rounded text-white" style={{backgroundColor:GOLD,fontFamily:"'JetBrains Mono',monospace"}}>PREMIUM</span>
            }
            <span className="text-[9px] font-bold bg-black/55 text-white px-1.5 py-0.5 rounded" style={mono}>{res.format}</span>
          </div>
          {res.isNew && <div className="absolute top-2 left-2"><span className="text-[9px] font-bold bg-rose-500 text-white px-2 py-0.5 rounded">NEW</span></div>}
        </div>
      </Link>

      {/* Content */}
      <div className="p-3.5 flex flex-col flex-1 gap-1.5">
        {/* Category label */}
        <div className="flex items-center gap-1.5">
          <Ic className="w-3 h-3 flex-shrink-0" style={{color:cfg.color}} />
          <span className="text-[10px] font-semibold uppercase tracking-wider" style={{...mono,color:cfg.color}}>{cfg.short}</span>
        </div>

        {/* Title */}
        <Link to={`/resource/${res.id}`}>
          <h3 className="text-[13px] font-semibold text-[#151A16] leading-snug line-clamp-2 hover:text-[#0A2318] transition-colors" style={serif}>{res.title}</h3>
        </Link>

        {/* Degree */}
        <p className="text-[11px] text-[#605A52] flex items-center gap-1" style={mono}>
          <GraduationCap className="w-3 h-3 flex-shrink-0" />
          <span className="truncate">{res.degree}</span>
        </p>

        {/* Rating + downloads */}
        <div className="flex items-center gap-1.5">
          <Stars r={res.rating} sm />
          <span className="text-[11px] font-medium text-[#605A52]">{res.rating}</span>
          <span className="ml-auto text-[11px] text-[#605A52] flex items-center gap-0.5" style={mono}>
            <Download className="w-3 h-3" />{fmt(res.downloads)}
          </span>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-2.5 border-t border-[#F0EDE7]">
          {res.type==="free" ? (
            <a href={res.driveUrl||"#"} target="_blank" rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-1.5 text-white text-xs font-semibold py-2.5 rounded-lg transition-opacity hover:opacity-90"
              style={{backgroundColor:GM}}>
              <FileDown className="w-3.5 h-3.5" /> Download Free
            </a>
          ) : (
            <div className="space-y-1.5">
              <div className="text-center text-sm font-bold text-[#151A16]" style={serif}>Rs. {res.price?.toLocaleString()}</div>
              <button onClick={()=>onAccess(res)}
                className="flex w-full items-center justify-center gap-1.5 text-white text-xs font-semibold py-2.5 rounded-lg transition-opacity hover:opacity-90"
                style={{backgroundColor:GOLD}}>
                Get Access <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

// ─── Resource Grid ──────────────────────────────────────────── bg-[#00000000]────────────────
function ResourceGrid({ resources, onAccess }: { resources: Resource[]; onAccess: (r: Resource) => void }) {
  const [sp] = useSearchParams();
  const [sort, setSort] = useState("featured");
  const s   = sp.get("s") || "";
  const cat = sp.get("c") || "";
  const f   = sp.get("f") || "";

  const list = resources.filter(r=>{
    if (s && !r.title.toLowerCase().includes(s.toLowerCase()) && !r.subject.toLowerCase().includes(s.toLowerCase())) return false;
    if (cat && r.category!==cat) return false;
    if (f==="free" && r.type!=="free") return false;
    if (f==="paid" && r.type!=="paid") return false;
    return true;
  }).sort((a,b)=>{
    if (sort==="downloads") return b.downloads-a.downloads;
    if (sort==="rating")    return b.rating-a.rating;
    if (sort==="price-lo")  return (a.price||0)-(b.price||0);
    if (sort==="price-hi")  return (b.price||0)-(a.price||0);
    if (sort==="newest")    return (b.isNew?1:0)-(a.isNew?1:0);
    return (b.featured?1:0)-(a.featured?1:0);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 pb-14">
      {/* Filter + sort bar */}
      <div className="flex flex-wrap items-center gap-2 mb-5 py-3 border-b border-[#DDD9D0]">
        <div className="flex items-center gap-1.5 flex-wrap flex-1">
          {[
            {l:"All",to:"/"},
            {l:"Free",to:"/?f=free"},
            {l:"Premium",to:"/?f=paid"},
            ...CATEGORIES.map(c=>({l:CAT_CONFIG[c].short,to:`/?c=${encodeURIComponent(c)}`})),
          ].map(({l,to})=>{
            const active =
              (l==="All"     && !s&&!cat&&!f)||
              (l==="Free"    && f==="free")||
              (l==="Premium" && f==="paid")||
              CATEGORIES.some(c=>CAT_CONFIG[c].short===l&&c===cat);
            return (
              <Link key={l} to={to}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${active?"text-white shadow-sm":"bg-white text-[#605A52] border border-[#DDD9D0] hover:border-[#0A2318]/40 hover:text-[#0A2318]"}`}
                style={active?{backgroundColor:G}:{}}>
                {l}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-1.5 ml-auto">
          <SortAsc className="w-3.5 h-3.5 text-[#605A52]" />
          <select value={sort} onChange={e=>setSort(e.target.value)}
            className="border border-[#DDD9D0] rounded-lg px-2.5 py-1.5 text-xs bg-white text-[#151A16] focus:outline-none cursor-pointer">
            <option value="featured">Featured</option>
            <option value="downloads">Most Downloaded</option>
            <option value="rating">Top Rated</option>
            <option value="newest">Newest</option>
            <option value="price-lo">Price ↑</option>
            <option value="price-hi">Price ↓</option>
          </select>
        </div>
      </div>

      {list.length===0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-[#D8D4CC]">
          <Search className="w-10 h-10 mx-auto text-[#DDD9D0] mb-3" />
          <p className="text-[#605A52] font-medium text-lg" style={serif}>No resources found</p>
          <p className="text-sm text-[#605A52]/60 mt-1.5">Try different keywords or browse a category</p>
          <Link to="/" className="inline-block mt-4 text-sm underline underline-offset-2" style={{color:GM}}>View all resources</Link>
        </div>
      ) : (
        <>
          <div className="text-xs text-[#605A52] mb-3" style={mono}>{list.length} resource{list.length!==1?"s":""}</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {list.map(r=><ResourceCard key={r.id} res={r} onAccess={onAccess} />)}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Store Page ───────────────────────────────────────────────────────────────
function StorePage({ resources }: { resources: Resource[] }) {
  const [modal, setModal] = useState<Resource|null>(null);
  const [sp] = useSearchParams();
  const s   = sp.get("s") || "";
  const cat = sp.get("c") || "";
  const f   = sp.get("f") || "";
  const isFiltered = !!(s||cat||f);

  const filteredCount = resources.filter(r=>{
    if (s && !r.title.toLowerCase().includes(s.toLowerCase()) && !r.subject.toLowerCase().includes(s.toLowerCase())) return false;
    if (cat && r.category!==cat) return false;
    if (f==="free" && r.type!=="free") return false;
    if (f==="paid" && r.type!=="paid") return false;
    return true;
  }).length;

  return (
    <div style={{backgroundColor:BG}}>
      {/* Hero only on unfiltered home */}
      {!isFiltered && <HeroSection />}

      {/* Contextual header when filtered/searching */}
      {isFiltered && <FilterPageHeader s={s} cat={cat} f={f} total={filteredCount} />}

      {/* Category cards — shown on home, or as compact row when filtered by category */}
      {!isFiltered && (
        <div className="border-b border-[#DDD9D0]">
          <CategoryCards resources={resources} />
        </div>
      )}

      {/* Resources section */}
      <div className={isFiltered ? "pt-6" : "pt-8"}>
        {!isFiltered && (
          <div className="max-w-7xl mx-auto px-4 mb-3">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-normal text-[#151A16]" style={serif}>All Resources</h2>
              <div className="flex-1 h-px" style={{backgroundColor:BD}} />
            </div>
          </div>
        )}
        <ResourceGrid resources={resources} onAccess={setModal} />
      </div>

      {modal && <AccessModal res={modal} onClose={()=>setModal(null)} />}
    </div>
  );
}

// ─── Resource Detail Page ─────────────────────────────────────────────────────
function ResourceDetailPage({ resources }: { resources: Resource[] }) {
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const res = resources.find(r=>r.id===Number(id));

  if (!res) return (
    <div className="min-h-[60vh] flex items-center justify-center" style={{backgroundColor:BG}}>
      <div className="text-center">
        <p className="text-[#605A52] text-lg mb-4" style={serif}>Resource not found</p>
        <Link to="/" className="underline" style={{color:GM}}>← Back to repository</Link>
      </div>
    </div>
  );

  const cfg = CAT_CONFIG[res.category];
  const Ic  = ICON_MAP[res.iconKey] || FileText;
  const related = resources.filter(r=>r.category===res.category&&r.id!==res.id).slice(0,4);

  return (
    <div style={{backgroundColor:BG}} className="min-h-screen">
      {/* Image strip */}
      <div className="relative h-52 md:h-64 overflow-hidden">
        {res.thumbnail
          ? <ImageWithFallback src={res.thumbnail} alt={res.title} className="w-full h-full object-cover" />
          : <div className="w-full h-full flex items-center justify-center" style={{backgroundColor:cfg.bg}}><Ic className="w-20 h-20 opacity-15" style={{color:cfg.color}} /></div>
        }
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2318]/80 to-transparent" />
        <div className="absolute top-4 left-4">
          <Link to="/" className="flex items-center gap-1.5 bg-white/15 border border-white/25 backdrop-blur-sm text-white text-xs font-medium px-3 py-2 rounded-xl hover:bg-white/25 transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" /> Back
          </Link>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          {res.type==="free"
            ? <span className="text-xs font-bold px-2.5 py-1 rounded text-white" style={{...mono,backgroundColor:GM}}>FREE</span>
            : <span className="text-xs font-bold px-2.5 py-1 rounded text-white" style={{...mono,backgroundColor:GOLD}}>PREMIUM</span>
          }
          <span className="text-xs font-bold bg-black/50 text-white px-2 py-1 rounded" style={mono}>{res.format}</span>
          {res.isNew && <span className="text-xs font-bold bg-rose-500 text-white px-2 py-1 rounded">NEW</span>}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-7">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded flex items-center justify-center" style={{backgroundColor:cfg.color}}>
                <Ic className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{...mono,color:cfg.color}}>{res.category}</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-normal text-[#151A16] leading-snug" style={serif}>{res.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#605A52] pb-4 border-b border-[#DDD9D0]">
              <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4" />{res.degree}</span>
              <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" />{res.subject}</span>
              <span className="flex items-center gap-1.5"><Stars r={res.rating} sm /><strong className="text-[#151A16]">{res.rating}</strong><span className="text-[#605A52]/60">({res.reviews})</span></span>
              <span className="flex items-center gap-1" style={mono}><Download className="w-4 h-4" />{fmt(res.downloads)} downloads</span>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#151A16] mb-2" style={serif}>About This Resource</h2>
              <p className="text-sm text-[#605A52] leading-relaxed">{res.description}</p>
            </div>

            {res.highlights && res.highlights.length>0 && (
              <div>
                <h2 className="text-base font-semibold text-[#151A16] mb-3" style={serif}>{"What's Included"}</h2>
                <div className="grid sm:grid-cols-2 gap-2">
                  {res.highlights.map((h,i)=>(
                    <div key={i} className="flex items-start gap-2.5 bg-white border border-[#DDD9D0] rounded-xl px-3.5 py-3 text-sm text-[#151A16]">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{color:GM}} />{h}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {related.length>0 && (
              <div className="pt-4 border-t border-[#DDD9D0]">
                <h2 className="text-base font-semibold text-[#151A16] mb-4" style={serif}>Related Resources</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {related.map(r=>{
                    const rc=CAT_CONFIG[r.category];
                    return (
                      <Link key={r.id} to={`/resource/${r.id}`} className="flex items-center gap-3 bg-white border border-[#DDD9D0] rounded-xl p-3 hover:border-[#B8920A]/40 hover:shadow-sm transition-all group">
                        <div className="w-11 h-11 rounded-lg flex-shrink-0 overflow-hidden" style={{backgroundColor:rc.bg}}>
                          {r.thumbnail ? <ImageWithFallback src={r.thumbnail} alt="" className="w-full h-full object-cover" /> : <rc.Icon className="w-5 h-5 m-auto mt-3" style={{color:rc.color}} />}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-[#151A16] line-clamp-2 group-hover:text-[#0A2318] transition-colors" style={serif}>{r.title}</div>
                          <div className="text-xs text-[#605A52] mt-0.5">{r.type==="free"?"Free":`Rs. ${r.price?.toLocaleString()}`} · {r.format}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#DDD9D0] flex-shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-[#DDD9D0] rounded-2xl overflow-hidden sticky top-20 shadow-sm">
              <div className="px-5 py-4" style={{backgroundColor:G}}>
                <div className="text-[10px] uppercase tracking-widest mb-1" style={{...mono,color:GOLD}}>{cfg.short}</div>
                <div className="text-2xl font-normal text-white" style={serif}>
                  {res.type==="free" ? "Free Download" : `Rs. ${res.price?.toLocaleString()}`}
                </div>
              </div>
              <div className="p-5 space-y-3">
                {res.type==="free" ? (
                  <a href={res.driveUrl||"#"} target="_blank" rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 text-white font-semibold py-3.5 rounded-xl transition-opacity hover:opacity-90"
                    style={{backgroundColor:GM}}>
                    <FileDown className="w-4 h-4" /> Download Now
                  </a>
                ) : (
                  <button onClick={()=>setModal(true)}
                    className="flex w-full items-center justify-center gap-2 text-white font-semibold py-3.5 rounded-xl transition-opacity hover:opacity-90"
                    style={{backgroundColor:GOLD}}>
                    Get Access <ArrowRight className="w-4 h-4" />
                  </button>
                )}
                <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold py-3 rounded-xl text-sm transition-colors">
                  <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
                </a>
                <div className="pt-2 border-t border-[#F0EDE7] space-y-2 text-sm text-[#605A52]">
                  {[{l:"Format",v:res.format},{l:"Program",v:res.degree},{l:"Delivery",v:res.type==="free"?"Instant (Google Drive)":"Gmail within 15 min"}].map(({l,v})=>(
                    <div key={l} className="flex items-start justify-between gap-2">
                      <span className="text-[#605A52]/70">{l}</span>
                      <span className="text-[#151A16] font-medium text-right text-xs">{v}</span>
                    </div>
                  ))}
                </div>
                {res.type==="paid" && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 flex gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0 text-amber-600 mt-0.5" />
                    <span>Sent to Gmail within <strong>10–15 minutes</strong> after payment. 9 AM–10 PM support.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && <AccessModal res={res} onClose={()=>setModal(false)} />}
    </div>
  );
}

// ─── Contact Page ─────────────────────────────────────────────────────────────
function ContactPage() {
  const [form, setForm] = useState({name:"",email:"",subject:"",message:""});
  const [sent, setSent] = useState(false);
  const sf = (k:string,v:string) => setForm(f=>({...f,[k]:v}));

  return (
    <div style={{backgroundColor:BG}} className="min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-2 text-xs text-[#605A52] mb-6">
          <Link to="/" className="hover:text-[#0A2318] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="font-semibold text-[#151A16]">Contact Us</span>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-[#DDD9D0] shadow-sm">
              <div className="h-36 overflow-hidden">
                <ImageWithFallback src={campusPhoto} alt="UAF Campus" className="w-full h-full object-cover" />
              </div>
              <div className="px-4 py-3 flex items-center gap-2.5" style={{backgroundColor:G}}>
                <ImageWithFallback src={image_cropped_circle_image__8__1} alt="UAF" className="w-8 h-8 object-contain flex-shrink-0 opacity-75" />
                <div>
                  <div className="text-white text-sm font-normal" style={serif}>UAF Digital Bank</div>
                  <div className="text-white/40 text-[9px] uppercase tracking-wider" style={mono}>Faisalabad, Pakistan</div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#DDD9D0] rounded-2xl p-5 space-y-3.5">
              <h3 className="font-normal text-[#151A16] text-base" style={serif}>Get in Touch</h3>
              {[
                {Icon:MessageCircle,l:"WhatsApp",v:"+92 300 1234567",href:"https://wa.me/923001234567",c:"#25D366"},
                {Icon:Mail,l:"Email",v:"uafdigitalbank@gmail.com",href:"mailto:uafdigitalbank@gmail.com",c:GM},
                {Icon:Phone,l:"Phone",v:"041-9200161",href:"tel:0419200161",c:"#1A2B5A"},
                {Icon:MapPin,l:"Location",v:"University of Agriculture, Faisalabad",href:"#",c:"#6B3500"},
              ].map(({Icon,l,v,href,c})=>(
                <a key={l} href={href} target={href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor:c+"18"}}>
                    <Icon className="w-4 h-4" style={{color:c}} />
                  </div>
                  <div>
                    <div className="text-xs text-[#605A52]">{l}</div>
                    <div className="text-sm font-medium text-[#151A16] group-hover:text-[#0A2318] transition-colors">{v}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="bg-white border border-[#DDD9D0] rounded-2xl p-5">
              <h3 className="text-sm font-normal text-[#151A16] mb-3 flex items-center gap-2" style={serif}>
                <Clock className="w-4 h-4" style={{color:GM}} /> Support Hours
              </h3>
              {[["Mon – Fri","9:00 AM – 10:00 PM"],["Sat – Sun","10:00 AM – 8:00 PM"]].map(([d,t])=>(
                <div key={d} className="flex justify-between text-sm py-1.5 border-b border-[#F0EDE7] last:border-0">
                  <span className="text-[#605A52]">{d}</span>
                  <span className="font-medium text-[#151A16]">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            {sent ? (
              <div className="bg-white border border-[#DDD9D0] rounded-2xl p-10 text-center min-h-64 flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{backgroundColor:GL}}>
                  <CheckCircle className="w-7 h-7" style={{color:GM}} />
                </div>
                <h3 className="text-xl font-normal text-[#151A16] mb-2" style={serif}>Message Sent</h3>
                <p className="text-sm text-[#605A52] mb-5">{"We'll get back to you within 24 hours."}</p>
                <button onClick={()=>{setSent(false);setForm({name:"",email:"",subject:"",message:""}); }} className="text-sm underline underline-offset-2" style={{color:GM}}>Send another message</button>
              </div>
            ) : (
              <div className="bg-white border border-[#DDD9D0] rounded-2xl overflow-hidden shadow-sm">
                <div className="border-b border-[#F0EDE7] px-6 py-4">
                  <h2 className="text-xl font-normal text-[#151A16]" style={serif}>Send a Message</h2>
                  <p className="text-xs text-[#605A52] mt-0.5">For orders, material requests, or questions — we respond within a few hours.</p>
                </div>
                <form onSubmit={e=>{e.preventDefault();setSent(true);}} className="p-6 grid sm:grid-cols-2 gap-4">
                  {[{k:"name",l:"Full Name",p:"Your name",t:"text",col:1},{k:"email",l:"Email",p:"yourname@gmail.com",t:"email",col:1}].map(({k,l,p,t})=>(
                    <div key={k}>
                      <label className="block text-sm font-semibold text-[#151A16] mb-1.5">{l} <span className="text-red-400">*</span></label>
                      <input required type={t} placeholder={p} value={(form as any)[k]} onChange={e=>sf(k,e.target.value)}
                        className="w-full border border-[#DDD9D0] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0A2318] focus:ring-2 focus:ring-[#0A2318]/8" />
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-[#151A16] mb-1.5">Subject <span className="text-red-400">*</span></label>
                    <select required value={form.subject} onChange={e=>sf("subject",e.target.value)}
                      className="w-full border border-[#DDD9D0] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0A2318] bg-white text-[#151A16] cursor-pointer">
                      <option value="">Select a subject…</option>
                      <option>Order / Payment Issue</option>
                      <option>Material Request</option>
                      <option>Upload / Submission Query</option>
                      <option>Technical Problem</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-[#151A16] mb-1.5">Message <span className="text-red-400">*</span></label>
                    <textarea required rows={5} placeholder="Describe your question…" value={form.message} onChange={e=>sf("message",e.target.value)}
                      className="w-full border border-[#DDD9D0] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0A2318] focus:ring-2 focus:ring-[#0A2318]/8 resize-none" />
                  </div>
                  <div className="sm:col-span-2 flex gap-3">
                    <button type="submit" className="flex-1 text-white font-semibold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-opacity hover:opacity-90" style={{backgroundColor:G}}>
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
    {title:"Information We Collect",content:"When you purchase a resource or submit material, we collect your name, Gmail address, and WhatsApp number. This is used solely for delivery and support."},
    {title:"How We Use Your Information",content:"Your details are used to deliver purchased material, send order confirmations, and respond to support enquiries. We do not market to you without consent."},
    {title:"Payment Information",content:"Payments go directly to our JazzCash/EasyPaisa/bank accounts. No card data passes through our systems. We verify payments manually."},
    {title:"Information Sharing",content:"We do not sell or rent your data. It is shared only with team members involved in order fulfilment, all under confidentiality obligations."},
    {title:"Data Retention",content:"Order records are retained for up to 12 months. You may request deletion by contacting us."},
    {title:"Cookies & Local Storage",content:"We may store preferences locally in your browser. No third-party analytics or advertising cookies are used."},
    {title:"Student-Submitted Content",content:"By submitting material, you confirm it is from a legitimate examination shared for educational purposes. We may remove content that violates this."},
    {title:"Changes to This Policy",content:"We may update this policy occasionally. Continued use after changes constitutes acceptance."},
    {title:"Contact",content:"For privacy questions, email uafdigitalbank@gmail.com or WhatsApp +92 300 1234567. Response within 48 hours."},
  ];

  return (
    <div style={{backgroundColor:BG}} className="min-h-screen py-10">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center gap-2 text-xs text-[#605A52] mb-6">
          <Link to="/" className="hover:text-[#0A2318] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="font-semibold text-[#151A16]">Privacy Policy</span>
        </div>
        <div className="rounded-2xl p-6 mb-6 flex items-center gap-4 relative overflow-hidden" style={{backgroundColor:G}}>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.06]"><Shield className="w-28 h-28 text-white" /></div>
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0"><Shield className="w-6 h-6" style={{color:GOLD}} /></div>
          <div>
            <h1 className="text-white text-2xl font-normal" style={serif}>Privacy Policy</h1>
            <p className="text-white/40 text-xs mt-1" style={mono}>Last updated: July 2026 · UAF Digital Bank</p>
          </div>
        </div>
        <div className="space-y-3">
          {sections.map((s,i)=>(
            <div key={i} className="bg-white border border-[#DDD9D0] rounded-xl p-5">
              <h2 className="text-sm font-semibold text-[#151A16] mb-2 flex items-center gap-2" style={serif}>
                <span className="text-[10px] font-bold text-[#605A52] w-5 h-5 rounded-full border border-[#DDD9D0] flex items-center justify-center flex-shrink-0" style={mono}>{i+1}</span>
                {s.title}
              </h2>
              <p className="text-sm text-[#605A52] leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 text-center text-sm text-[#605A52]">
          Questions? <Link to="/contact" className="underline underline-offset-2" style={{color:GM}}>Contact us</Link> or{" "}
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
  const [tab, setTab] = useState<"list"|"add"|"stats">("list");
  const [editId, setEditId] = useState<number|null>(null); const [delConf, setDelConf] = useState<number|null>(null); const [saved, setSaved] = useState(false);
  const blank = (): Omit<Resource,"id"> => ({title:"",category:"Undergraduate Entry Test",subject:"",degree:"",format:"PDF",type:"free",driveUrl:"",thumbnail:"",rating:4.5,reviews:0,downloads:0,description:"",highlights:[],iconKey:"FileText",featured:false,isNew:true});
  const [form, setForm] = useState<Omit<Resource,"id">>(blank());
  const sf = (k:string,v:any) => setForm(f=>({...f,[k]:v}));
  const login = ()=>{ if(pass===ADMIN_PASS){setUnlocked(true);setErrPw(false);}else setErrPw(true); };
  const save = ()=>{ if(editId!==null) store.updateRes({...form,id:editId}); else store.addRes({...form,id:Date.now()}); setForm(blank());setEditId(null);setTab("list");setSaved(true);setTimeout(()=>setSaved(false),3000); };

  if (!unlocked) return (
    <div className="min-h-[70vh] flex items-center justify-center p-4" style={{backgroundColor:BG}}>
      <div className="bg-white rounded-2xl border border-[#DDD9D0] shadow-xl p-8 w-full max-w-sm">
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden p-1.5 mx-auto mb-3" style={{backgroundColor:G}}>
            <ImageWithFallback src={uafLogo} alt="UAF" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-xl font-normal text-[#151A16]" style={serif}>Developer Portal</h2>
          <p className="text-xs text-[#605A52] mt-1">Authorized personnel only</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#151A16] mb-1.5">Admin Passcode</label>
            <div className="relative">
              <input type={showPw?"text":"password"} placeholder="Enter passcode" value={pass}
                onChange={e=>{setPass(e.target.value);setErrPw(false);}} onKeyDown={e=>e.key==="Enter"&&login()}
                className={`w-full border rounded-xl px-3 py-3 pr-10 text-sm focus:outline-none focus:ring-2 transition-all ${errPw?"border-red-300 bg-red-50":"border-[#DDD9D0] focus:border-[#0A2318] focus:ring-[#0A2318]/8"}`} />
              <button type="button" onClick={()=>setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#605A52]">
                {showPw?<EyeOff className="w-4 h-4"/>:<Eye className="w-4 h-4"/>}
              </button>
            </div>
            {errPw && <p className="text-xs text-red-400 mt-1.5">Incorrect passcode.</p>}
          </div>
          <button onClick={login} className="w-full text-white font-semibold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-opacity hover:opacity-90" style={{backgroundColor:G}}>
            <Key className="w-4 h-4" /> Unlock Portal
          </button>
        </div>
        <div className="mt-4 text-center"><Link to="/" className="text-xs text-[#605A52] hover:text-[#151A16]">← Back to Store</Link></div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-7 min-h-screen" style={{backgroundColor:BG}}>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden p-1" style={{backgroundColor:G}}>
            <ImageWithFallback src={uafLogo} alt="UAF" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-xl font-normal text-[#151A16]" style={serif}>Admin Dashboard</h1>
            <p className="text-xs text-[#605A52]">UAF Digital Bank — Resource Management</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {saved && <div className="flex items-center gap-1.5 text-xs text-[#0A2318] bg-[#E6EFE9] border border-[#0A2318]/20 rounded-xl px-3 py-1.5"><CheckCircle className="w-3.5 h-3.5" /> Saved</div>}
          <button onClick={()=>setUnlocked(false)} className="flex items-center gap-1.5 text-xs text-[#605A52] border border-[#DDD9D0] px-3 py-2 rounded-lg hover:bg-white transition-colors"><LogOut className="w-3.5 h-3.5" /> Logout</button>
          <Link to="/" className="flex items-center gap-1.5 text-xs text-white px-3 py-2 rounded-lg transition-opacity hover:opacity-90" style={{backgroundColor:G}}><Globe className="w-3.5 h-3.5" /> View Store</Link>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[{l:"Total Resources",v:store.resources.length,c:G},{l:"Free Resources",v:store.resources.filter(r=>r.type==="free").length,c:GM},{l:"Premium Packs",v:store.resources.filter(r=>r.type==="paid").length,c:GOLD},{l:"Total Downloads",v:fmt(store.resources.reduce((s,r)=>s+r.downloads,0)),c:"#1A2B5A"}].map(({l,v,c})=>(
          <div key={l} className="bg-white border border-[#DDD9D0] rounded-xl p-4">
            <div className="text-2xl font-normal" style={{...serif,color:c}}>{v}</div>
            <div className="text-xs text-[#605A52] mt-1">{l}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-1 bg-[#E5E2DC] rounded-xl p-1 w-fit mb-5">
        {([["list","Resources",Package],["add",editId!==null?"Edit":"Add",Plus],["stats","Analytics",BarChart3]] as const).map(([id,label,Ic])=>(
          <button key={id} onClick={()=>setTab(id as any)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab===id?"text-white shadow-sm":"text-[#605A52] hover:text-[#151A16]"}`}
            style={tab===id?{backgroundColor:G}:{}}>
            <Ic className="w-3.5 h-3.5" />{label}
          </button>
        ))}
      </div>

      {tab==="list" && (
        <div className="bg-white border border-[#DDD9D0] rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#F0EDE7]">
            <h3 className="font-semibold text-[#151A16] text-sm">All Resources ({store.resources.length})</h3>
            <button onClick={()=>{setEditId(null);setForm(blank());setTab("add");}} className="flex items-center gap-1.5 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-opacity hover:opacity-90" style={{backgroundColor:G}}>
              <Plus className="w-3.5 h-3.5" /> Add New
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#F0EDE7] text-[10px] uppercase tracking-widest text-[#605A52] border-b border-[#E8E5DE]">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold">Resource</th>
                  <th className="px-4 py-3 text-left font-semibold hidden md:table-cell">Category</th>
                  <th className="px-4 py-3 text-left font-semibold hidden sm:table-cell">Type</th>
                  <th className="px-4 py-3 text-left font-semibold hidden lg:table-cell">Downloads</th>
                  <th className="px-4 py-3 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0EDE7]">
                {store.resources.map(r=>{
                  const cfg=CAT_CONFIG[r.category];
                  return (
                    <tr key={r.id} className="hover:bg-[#F7F5F0] transition-colors">
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg flex-shrink-0 overflow-hidden" style={{backgroundColor:cfg.bg}}>
                            {r.thumbnail?<ImageWithFallback src={r.thumbnail} alt="" className="w-full h-full object-cover"/>:<cfg.Icon className="w-4 h-4 m-auto mt-2.5" style={{color:cfg.color}}/>}
                          </div>
                          <div className="min-w-0">
                            <div className="font-medium text-[#151A16] text-sm truncate max-w-[180px]">{r.title}</div>
                            <div className="text-xs text-[#605A52]" style={mono}>{r.format} · {r.subject}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs text-[#605A52] hidden md:table-cell">{cfg.short}</td>
                      <td className="px-4 py-3 hidden sm:table-cell">
                        {r.type==="free"?<span className="text-[10px] font-bold bg-[#E6EFE9] text-[#0A2318] px-2 py-1 rounded">FREE</span>:<span className="text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-2 py-1 rounded">PAID</span>}
                      </td>
                      <td className="px-4 py-3 text-xs text-[#605A52] hidden lg:table-cell" style={mono}>{fmt(r.downloads)}</td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center gap-1.5 justify-end">
                          <Link to={`/resource/${r.id}`} className="p-1.5 text-[#605A52] hover:text-[#0A2318] hover:bg-[#E6EFE9] rounded-lg transition-colors"><ExternalLink className="w-3.5 h-3.5"/></Link>
                          <button onClick={()=>{setForm({...r});setEditId(r.id);setTab("add");}} className="p-1.5 text-[#605A52] hover:text-[#0A2318] hover:bg-[#E6EFE9] rounded-lg transition-colors"><Edit3 className="w-3.5 h-3.5"/></button>
                          {delConf===r.id
                            ?<div className="flex gap-1"><button onClick={()=>{store.deleteRes(r.id);setDelConf(null);}} className="text-[10px] font-bold bg-red-500 text-white px-2 py-1 rounded-lg">Delete</button><button onClick={()=>setDelConf(null)} className="text-[10px] text-[#605A52] px-2 py-1 rounded-lg hover:bg-[#F0EDE7]">Cancel</button></div>
                            :<button onClick={()=>setDelConf(r.id)} className="p-1.5 text-[#605A52] hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-3.5 h-3.5"/></button>
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

      {tab==="add" && (
        <div className="bg-white border border-[#DDD9D0] rounded-2xl overflow-hidden">
          <div className="border-b border-[#F0EDE7] px-6 py-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{backgroundColor:G}}><Plus className="w-4 h-4 text-white"/></div>
            <span className="font-normal text-[#151A16] text-base" style={serif}>{editId!==null?"Edit Resource":"Add New Resource"}</span>
          </div>
          <div className="p-6 grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-[#151A16] mb-1.5">Resource Title <span className="text-red-400">*</span></label>
              <input type="text" placeholder="e.g. UAF Entry Test Complete Pack 2025" value={form.title} onChange={e=>sf("title",e.target.value)}
                className="w-full border border-[#DDD9D0] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0A2318] focus:ring-2 focus:ring-[#0A2318]/8" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#151A16] mb-1.5">Category</label>
              <select value={form.category} onChange={e=>sf("category",e.target.value)} className="w-full border border-[#DDD9D0] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0A2318] bg-white text-[#151A16] cursor-pointer">
                {CATEGORIES.map(c=><option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#151A16] mb-1.5">File Format</label>
              <select value={form.format} onChange={e=>sf("format",e.target.value)} className="w-full border border-[#DDD9D0] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0A2318] bg-white text-[#151A16] cursor-pointer" style={mono}>
                {(["PDF","PPT","ZIP","PDF+PPT","DOCX"] as FileFormat[]).map(f=><option key={f}>{f}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#151A16] mb-1.5">Type</label>
              <div className="flex gap-2">
                {(["free","paid"] as ResourceType[]).map(t=>(
                  <button key={t} onClick={()=>sf("type",t)} className={`flex-1 py-3 rounded-xl text-sm font-semibold border transition-colors ${form.type===t?(t==="free"?"text-white border-transparent":"text-white border-transparent"):"border-[#DDD9D0] text-[#605A52] hover:bg-[#F0EDE7]"}`}
                    style={form.type===t?{backgroundColor:t==="free"?GM:GOLD}:{}}>
                    {t==="free"?"Free":"Paid"}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#151A16] mb-1.5">Price (Rs.)</label>
              <input type="number" placeholder="e.g. 499" disabled={form.type==="free"} value={form.price||""} onChange={e=>sf("price",Number(e.target.value))}
                className={`w-full border border-[#DDD9D0] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0A2318] ${form.type==="free"?"bg-[#F0EDE7] text-[#605A52] cursor-not-allowed":"bg-white"}`} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#151A16] mb-1.5">Subject(s)</label>
              <input type="text" placeholder="e.g. Biology + Chemistry" value={form.subject} onChange={e=>sf("subject",e.target.value)} className="w-full border border-[#DDD9D0] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0A2318]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#151A16] mb-1.5">Degree Program</label>
              <input type="text" placeholder="e.g. BS Agriculture / DVM" value={form.degree} onChange={e=>sf("degree",e.target.value)} className="w-full border border-[#DDD9D0] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0A2318]" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-[#151A16] mb-1.5">Google Drive / Reference URL</label>
              <input type="url" placeholder="https://drive.google.com/…" value={form.driveUrl||""} onChange={e=>sf("driveUrl",e.target.value)} className="w-full border border-[#DDD9D0] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0A2318]" style={mono} />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-[#151A16] mb-1.5">Thumbnail URL</label>
              <input type="url" placeholder="https://example.com/cover.jpg" value={form.thumbnail||""} onChange={e=>sf("thumbnail",e.target.value)} className="w-full border border-[#DDD9D0] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0A2318]" style={mono} />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-[#151A16] mb-1.5">Description</label>
              <textarea rows={2} value={form.description} onChange={e=>sf("description",e.target.value)} className="w-full border border-[#DDD9D0] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0A2318] resize-none" />
            </div>
            <div className="sm:col-span-2 flex items-center gap-6">
              {[["featured","Featured"],["isNew","Mark as New"]].map(([k,l])=>(
                <label key={k} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={!!(form as any)[k]} onChange={e=>sf(k,e.target.checked)} className="w-4 h-4" style={{accentColor:G}} />
                  <span className="text-sm font-medium text-[#151A16]">{l}</span>
                </label>
              ))}
            </div>
            <div className="sm:col-span-2 flex gap-2 pt-4 border-t border-[#F0EDE7]">
              {editId!==null && <button onClick={()=>{setEditId(null);setForm(blank());}} className="px-5 py-3 border border-[#DDD9D0] rounded-xl text-sm text-[#605A52] hover:bg-[#F0EDE7]">Cancel</button>}
              <button onClick={save} disabled={!form.title} className="flex-1 text-white font-semibold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-40" style={{backgroundColor:G}}>
                <Upload className="w-4 h-4" />{editId!==null?"Update Resource":"Publish Resource"}
              </button>
            </div>
          </div>
        </div>
      )}

      {tab==="stats" && (
        <div className="bg-white border border-[#DDD9D0] rounded-2xl p-5">
          <h3 className="font-normal text-[#151A16] mb-5 text-lg flex items-center gap-2" style={serif}><BarChart3 className="w-4 h-4" style={{color:GM}} /> Downloads by Category</h3>
          <div className="space-y-4">
            {CATEGORIES.map(cat=>{
              const total=store.resources.filter(r=>r.category===cat).reduce((s,r)=>s+r.downloads,0);
              const max=Math.max(...CATEGORIES.map(c=>store.resources.filter(r=>r.category===c).reduce((s,r)=>s+r.downloads,0)));
              const cfg=CAT_CONFIG[cat];
              return (
                <div key={cat}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-[#151A16]">{cat}</span>
                    <span className="text-[#605A52]" style={mono}>{fmt(total)}</span>
                  </div>
                  <div className="w-full h-2 rounded-full overflow-hidden" style={{backgroundColor:BD}}>
                    <div className="h-full rounded-full transition-all" style={{width:`${max>0?(total/max)*100:0}%`,backgroundColor:cfg.color}} />
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
  const [form, setForm] = useState({name:"",agNo:"",email:"",subject:"",degree:"",category:"Past Papers",testType:"Mid-Term",agreed:false});
  const [file, setFile] = useState<string|null>(null);
  const [dragging, setDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sf = (k:string,v:string|boolean) => setForm(f=>({...f,[k]:v}));

  return (
    <div style={{backgroundColor:BG}} className="min-h-screen py-10">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center gap-2 text-xs text-[#605A52] mb-5">
          <Link to="/" className="hover:text-[#0A2318]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="font-semibold text-[#151A16]">Submit Material</span>
        </div>

        {/* Hero banner for submit */}
        <div className="rounded-2xl overflow-hidden mb-6 relative" style={{backgroundColor:G}}>
          <div className="absolute right-0 top-0 bottom-0 w-48 opacity-10">
            <Upload className="w-40 h-40 absolute -right-8 top-4 text-white" />
          </div>
          <div className="px-6 py-5 relative">
            <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{...mono,color:GOLD}}>Student Contribution</div>
            <h1 className="text-2xl font-normal text-white mb-1" style={serif}>Submit Notes or Past Papers</h1>
            <p className="text-white/50 text-sm">Help fellow UAF students. All submissions are reviewed before publishing.</p>
          </div>
        </div>

        {submitted ? (
          <div className="bg-white border border-[#DDD9D0] rounded-2xl p-10 text-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor:GL}}>
              <CheckCircle className="w-7 h-7" style={{color:GM}} />
            </div>
            <h3 className="text-xl font-normal text-[#151A16] mb-2" style={serif}>Submission Received</h3>
            <p className="text-sm text-[#605A52] mb-5">Thank you, <strong>{form.name||"Student"}</strong>. Reviewed within 3–5 days.</p>
            <div className="flex gap-2 justify-center">
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-[#1da851] transition-colors"><MessageCircle className="w-4 h-4"/> WhatsApp</a>
              <Link to="/" className="inline-flex items-center gap-2 border border-[#DDD9D0] text-[#605A52] text-sm px-5 py-3 rounded-xl hover:bg-[#F0EDE7]">← Back</Link>
            </div>
          </div>
        ) : (
          <form onSubmit={e=>{e.preventDefault();if(form.agreed&&file)setSubmitted(true);}} className="bg-white border border-[#DDD9D0] rounded-2xl overflow-hidden shadow-sm">
            <div className="border-b border-[#F0EDE7] px-6 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden p-1" style={{backgroundColor:G}}>
                <ImageWithFallback src={uafLogo} alt="UAF" className="w-full h-full object-contain"/>
              </div>
              <span className="font-normal text-[#151A16] text-base" style={serif}>Student Material Submission</span>
            </div>
            <div className="p-6 grid sm:grid-cols-2 gap-4">
              {[{k:"name",l:"Full Name",p:"Muhammad Ali Khan",t:"text",req:true},{k:"agNo",l:"AG No. / Roll No.",p:"2021-ag-1234",t:"text",req:true},{k:"email",l:"Email Address",p:"yourname@gmail.com",t:"email",req:false},{k:"subject",l:"Subject",p:"e.g. Biochemistry",t:"text",req:true},{k:"degree",l:"Degree / Program",p:"e.g. BS Agriculture",t:"text",req:false}].map(({k,l,p,t,req})=>(
                <div key={k}>
                  <label className="block text-sm font-semibold text-[#151A16] mb-1.5">{l}{req&&<span className="text-red-400"> *</span>}</label>
                  <input required={req} type={t} placeholder={p} value={(form as any)[k]} onChange={e=>sf(k,e.target.value)}
                    className="w-full border border-[#DDD9D0] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0A2318] focus:ring-2 focus:ring-[#0A2318]/8" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold text-[#151A16] mb-1.5">Category</label>
                <select value={form.category} onChange={e=>sf("category",e.target.value)} className="w-full border border-[#DDD9D0] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0A2318] bg-white text-[#151A16] cursor-pointer">
                  {CATEGORIES.map(c=><option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#151A16] mb-1.5">Exam Type</label>
                <select value={form.testType} onChange={e=>sf("testType",e.target.value)} className="w-full border border-[#DDD9D0] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#0A2318] bg-white text-[#151A16] cursor-pointer">
                  {["Entry Test","Mid-Term","Final-Term","Notes","Other"].map(t=><option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-[#151A16] mb-1.5">File Upload (PDF only) <span className="text-red-400">*</span></label>
                <div onDragEnter={()=>setDragging(true)} onDragLeave={()=>setDragging(false)} onDragOver={e=>e.preventDefault()}
                  onDrop={e=>{e.preventDefault();setDragging(false);const f=e.dataTransfer.files[0];if(f)setFile(f.name);}}
                  onClick={()=>document.getElementById("fu-inp")?.click()}
                  className={`border-2 border-dashed rounded-2xl p-7 text-center cursor-pointer transition-all ${dragging?"bg-[#E6EFE9]":file?"bg-[#E6EFE9]/50":"bg-[#F0EDE7] hover:bg-white"}`}
                  style={{borderColor:dragging||file?GM:BD}}>
                  <input id="fu-inp" type="file" accept=".pdf" className="sr-only" onChange={e=>setFile(e.target.files?.[0]?.name||null)} />
                  {file ? (
                    <div className="flex items-center justify-center gap-3" style={{color:GM}}>
                      <CheckCircle className="w-5 h-5"/>
                      <div className="text-left"><div className="font-semibold text-sm">{file}</div><div className="text-xs text-[#605A52] mt-0.5">Click to change</div></div>
                    </div>
                  ) : (<><Upload className="w-7 h-7 mx-auto mb-2 text-[#605A52]"/><div className="text-sm font-medium text-[#605A52] mb-0.5">Drag &amp; drop PDF, or click to browse</div><div className="text-xs text-[#605A52]/60">Maximum 20 MB</div></>)}
                </div>
              </div>
              <div className="sm:col-span-2 bg-[#F0EDE7] border border-[#DDD9D0] rounded-xl p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input required type="checkbox" checked={form.agreed} onChange={e=>sf("agreed",e.target.checked)} className="w-4 h-4 mt-0.5 flex-shrink-0" style={{accentColor:G}} />
                  <span className="text-sm text-[#605A52] leading-relaxed">I confirm this material is from a university examination and shared for educational purposes only.</span>
                </label>
              </div>
              <div className="sm:col-span-2">
                <button type="submit" disabled={!form.agreed||!file} className="w-full text-white font-semibold py-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed" style={{backgroundColor:G}}>
                  <Upload className="w-4 h-4"/> Submit for Review
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
    <footer style={{backgroundColor:"#060D1E"}} className="text-[#7A7A8A]">
      {/* Gold top rule */}
      <div className="h-[2px]" style={{background:`linear-gradient(90deg, transparent, ${GOLD}, transparent)`}} />

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center overflow-hidden p-1">
              <ImageWithFallback src={image_cropped_circle_image__15__2} alt="UAF" className="w-full h-full object-contain opacity-65"/>
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center overflow-hidden p-1">
              <ImageWithFallback src={image_cropped_circle_image__12__2} alt="UAF Seal" className="w-full h-full object-contain opacity-65"/>
            </div>
          </div>
          <div className="text-white text-base font-normal mb-1" style={serif}>UAF Digital Bank</div>
          <div className="text-[10px] uppercase tracking-[0.25em] mb-3" style={{...mono,color:GOLD+"60"}}>University of Agriculture, Faisalabad</div>
          <p className="text-xs leading-relaxed mb-4 max-w-[220px]">Pakistan's trusted academic resource bank for UAF students — free past papers, entry test packs and study utilities.</p>
          <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg border transition-colors"
            style={{backgroundColor:"transparent", borderColor:`${GOLD}55`, color:GOLD}}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.backgroundColor=`${GOLD}18`;}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.backgroundColor="transparent";}}>
            <MessageCircle className="w-3.5 h-3.5"/> WhatsApp Support
          </a>
        </div>

        {/* Repository links */}
        <div>
          <h4 className="text-white text-[10px] uppercase tracking-widest mb-4 font-semibold" style={mono}>Repository</h4>
          <ul className="space-y-2.5 text-sm">
            {[["All Resources","/"],["Undergrad Entry Tests","/?c=Undergraduate+Entry+Test"],["Postgrad Tests","/?c=Postgraduate+Entry+Test"],["Past Papers","/?c=Past+Papers"],["Student Utilities","/?c=Student+Utilities"],["Free Resources Only","/?f=free"]].map(([l,t])=>(
              <li key={l}><Link to={t} className="hover:text-white transition-colors flex items-center gap-1.5 group"><ChevronRight className="w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity flex-shrink-0"/>{l}</Link></li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white text-[10px] uppercase tracking-widest mb-4 font-semibold" style={mono}>Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[["Submit Your Notes","/upload"],["Contact Us","/contact"],["Privacy Policy","/privacy"],["Developer Portal","/admin"]].map(([l,t])=>(
              <li key={l}><Link to={t} className="hover:text-white transition-colors flex items-center gap-1.5 group"><ChevronRight className="w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity flex-shrink-0"/>{l}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-[10px] uppercase tracking-widest mb-4 font-semibold" style={mono}>Contact</h4>
          <div className="space-y-3 text-sm">
            {[{Icon:MessageCircle,v:"WhatsApp: +92 300 1234567",href:"https://wa.me/923001234567"},{Icon:Mail,v:"uafdigitalbank@gmail.com",href:"mailto:uafdigitalbank@gmail.com"},{Icon:Phone,v:"041-9200161",href:"tel:0419200161"},{Icon:MapPin,v:"UAF, Faisalabad, Punjab, Pakistan",href:"#"}].map(({Icon,v,href})=>(
              <a key={v} href={href} target={href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors group">
                <Icon className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 opacity-40 group-hover:opacity-100 transition-opacity" style={{color:GOLD}}/>
                <span className="text-xs">{v}</span>
              </a>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-xl border border-white/8 bg-white/4">
            <p className="text-[10px] text-white/40 leading-relaxed">Support hours: Mon–Fri 9am–10pm, Sat–Sun 10am–8pm PKT</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6 px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[11px]" style={{color:"#7A7A8A"}}>© {new Date().getFullYear()} UAF Digital Bank. Not affiliated with UAF administration.</span>
          <div className="flex items-center gap-4 text-[11px]" style={{color:"#7A7A8A"}}>
            <span className="flex items-center gap-1"><Shield className="w-3 h-3"/> Secure &amp; Private</span>
            <span style={mono} className="opacity-30">v3.3</span>
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
    addRes:    (r: Resource) => setResources(x=>[r,...x]),
    deleteRes: (id: number)  => setResources(x=>x.filter(r=>r.id!==id)),
    updateRes: (r: Resource) => setResources(x=>x.map(e=>e.id===r.id?r:e)),
  };
}
type Store = ReturnType<typeof useStore>;

function RootLayout() {
  const store = useStore();
  return (
    <div className="min-h-screen flex flex-col" style={{fontFamily:"'Inter',sans-serif"}}>
      <ScrollToTop />
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

function StoreWrapper()  { const s=useOutletContext<Store>(); return <StorePage resources={s.resources} />; }
function AdminWrapper()  { const s=useOutletContext<Store>(); return <AdminPage store={s} />; }
function DetailWrapper() { const s=useOutletContext<Store>(); return <ResourceDetailPage resources={s.resources} />; }

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
